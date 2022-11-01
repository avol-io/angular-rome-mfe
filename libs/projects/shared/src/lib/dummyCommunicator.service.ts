import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyCommunicatorService {
  superChannel:any;
  id=Math.round(Math.random()*1000)
  constructor() { 
    console.log("DummyCommunicatorService id istanza: "+this.id)
  }

  push(obj:any){
    console.log("push su service con id istanza: "+this.id)
    this.superChannel=obj
  }

  pop(){
    console.log("pop su service con id istanza: "+this.id)
    let pop=this.superChannel;
    this.superChannel=undefined;
    return pop;
  }
}
