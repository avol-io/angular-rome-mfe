import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyCommunicatorService, Persona } from 'shared';
import { PersoneService } from '../../services/persone.service';

@Component({
  selector: 'app-persone-search',
  templateUrl: './persone-search.component.html',
  styleUrls: ['./persone-search.component.scss'],
})
export class PersoneSearchComponent implements OnInit {
  personeGet;
  constructor(
    private personeService: PersoneService,
    private dummyChannel: DummyCommunicatorService,
    private router: Router
  ) {
    this.personeGet = personeService.get();
  }

  ngOnInit(): void {}

  inviaDettaglio(persona: Persona) {
    let callback = this.dummyChannel.pop();
    this.dummyChannel.push(persona);
    if (callback) {
      this.router.navigate(callback);
    }
  }
}
