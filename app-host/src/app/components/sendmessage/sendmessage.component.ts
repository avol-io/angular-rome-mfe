import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DummyCommunicatorService } from 'shared';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.scss']
})
export class SendmessageComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private dummyCommunicator:DummyCommunicatorService) { 
    this.form=this.fb.group({
      nome:[,Validators.required],
      cognome:[,Validators.required],
      email:[,Validators.required]
    })
  }

  ngOnInit(): void {
    let model=this.dummyCommunicator.pop();
    if(model){
      this.form.patchValue(model);
    }
  }

  apriRubrica(){
    this.dummyCommunicator.push(["send"])
    this.router.navigate(["rubrica", "search"])
  }
}
