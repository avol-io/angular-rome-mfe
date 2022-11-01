import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from 'shared';

@Injectable({
  providedIn: 'root',
})
export class PersoneService {
  fakeData: Persona[] = [
    { nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@gmail.com' },
    {
      nome: 'Federico',
      cognome: 'Bianchi',
      email: 'federico.bianchi@gmail.com',
    },
    {
      nome: 'Anna',
      cognome: 'Verdi',
      email: 'anna.verdi@gmail.com',
    },
  ];
  constructor() {}

  get():Observable<Persona[]>{
    return of(this.fakeData);
  }
}
