import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { environment } from '../environments/environment';
import { Character, characterAttributesMapping } from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  characters$!: Observable<Character[]>;
  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  randomNumber: any;
  qtdeRegistros: any;
  arrayInscritos: any;
  nomeSelecionado: any;
  show:boolean = false;

  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.getActive<Character>(
      environment.characters.spreadsheetId,
      environment.characters.worksheetName,
      characterAttributesMapping,
      'Active'
    );

    this.qtdeRegistros = this.characters$.forEach(obj => { this.qtdeRegistros = obj.length});
    this.arrayInscritos = this.characters$.forEach(obj => { this.arrayInscritos = obj});
  }

  sortear(): void {
    this.randomNumber = Math.floor(Math.random() * this.qtdeRegistros);
    let algo = this.buscaIdArray(this.randomNumber);
    //alert("Nome selecionado: " + this.nomeSelecionado);
    this.show = !this.show;
  }

  buscaIdArray(id:any){
    return this.arrayInscritos.filter((obj : any) => {
        if(obj.id === id.toString()){
          this.nomeSelecionado = obj;
        }
      }
    );
  }
}
