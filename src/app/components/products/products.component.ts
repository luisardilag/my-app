import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  title = 'Componente B';
  description = '';
  gameList:any = [];

  constructor( private gameService: GamesService ) {}

  ngOnInit(): void {
    this.showGameList();
  }

  showGameList() {
    return this.gameList = this.gameService.gameList;
  }


}
