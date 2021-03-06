import { Component, OnInit } from '@angular/core';
import { Game, User, Quote } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    Model = new Game();
    Me = new User();

  constructor() {
    this.Me.Name = "Moshe Plotkin"
  }

  ngOnInit() {
  }

  submitQuote(e: MouseEvent, text: string){
    e.preventDefault();

    if(this.MyPlayedQuote()) return;

    this.Model.PlayedQuotes.push({ Text: text, PlayerName: this.Me.Name, Chosen: false });
    this.Model.MyQuotes.splice( this.Model.MyQuotes.indexOf(text), 1 );
  }

  MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerName == this.Me.Name );
  ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );
  IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1;
  IAmTheDealer = () => this.Me.Name == this.Model.Dealer;
}
