import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersoneSearchComponent } from './components/persone-search/persone-search.component';


const routes:Routes=[
  {path:"search", component:PersoneSearchComponent},
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    PersoneSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RubricaModule { }
