import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SendmessageComponent } from './components/sendmessage/sendmessage.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'send', component: SendmessageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },

  // non usiamo questo approccio ma..
  //{path:'rubrica', loadChildren: () => import('AppRemote/Rubrica').then(m => m.RubricaModule)}
  
  //non usiamo neanche questo https://www.angulararchitects.io/en/aktuelles/dynamic-module-federation-with-angular/

  //ma usiamo un approccio più "manuale" ma più adattabile a diverse situazioni che potreste avere
  {path:'rubrica', loadChildren: () => loadRemoteModule({
    type: 'module',
    remoteEntry: 'http:/localhost:4300/remoteEntry.js', //questo lo posso leggere in diversi modi :)
    exposedModule: './AppRemote'
  })
  .then(m => m.RubricaModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
