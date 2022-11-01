import { Component, OnInit } from '@angular/core';
import { PersoneService } from '../../services/persone.service';

@Component({
  selector: 'app-persone-search',
  templateUrl: './persone-search.component.html',
  styleUrls: ['./persone-search.component.scss']
})
export class PersoneSearchComponent implements OnInit {
  personeGet;
  constructor(private personeService:PersoneService) { 
    this.personeGet=personeService.get();
  }

  ngOnInit(): void {
  }

}
