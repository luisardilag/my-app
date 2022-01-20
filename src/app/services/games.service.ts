import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gameList = [
    {
      name: 'exmaple 001',
      year: 2010,
      multiplayer: false
    },
    {
      name: 'exmaple 002',
      year: 2015,
      multiplayer: true
    },
    {
      name: 'exmaple 003',
      year: 2020,
      multiplayer: false
    },
  ];

  constructor() { }

  getGameList() {
    return this.gameList;
  }

}
