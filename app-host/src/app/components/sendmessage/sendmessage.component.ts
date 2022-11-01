import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.scss']
})
export class SendmessageComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { 
    this.form=this.fb.group({
      nome:[,Validators.required],
      cognome:[,Validators.required],
      email:[,Validators.required]
    })
  }

  ngOnInit(): void {
  }

  apriRubrica(){
    this.router.navigate(["rubrica", "search"])
  }
}
