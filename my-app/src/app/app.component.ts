import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Układanka';
  clickCounter = 0;
  allMarked = false;
  startClicked = false;
  values = [[{value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}],
    [{value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}],
    [{value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}],
    [{value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}],
    [{value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}, {value: 0, marked: false}]];


  generateValues() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5 ; j++) {
        const generatedNumber = Math.floor((Math.random() * 2));
        this.values[i][j].value = generatedNumber;
        this.values[i][j].marked = false;
      }
    }
  }

  onGenerateNewClicked() {
    this.generateValues();
  }

  onStartClicked() {
    this.startClicked = true;
    this.generateValues();
  }

  checkTileNeighbour(i: number, j: number) {
    if (i < 4 && i > 0 ) {
      this.values[i + 1][j].value == 1 ? this.values[i + 1][j].marked = true : this.values[i + 1][j].marked = false;
      this.values[i - 1][j].value == 1 ? this.values[i - 1][j].marked = true : this.values[i - 1][j].marked = false;
    } else if (i == 0 ){
      this.values[i + 1][j].value == 1 ? this.values[i + 1][j].marked = true : this.values[i + 1][j].marked = false;
    } else if ( i == 4 ) {
      this.values[i - 1][j].value == 1 ? this.values[i - 1][j].marked = true : this.values[i - 1][j].marked = false;
    }
    if (j < 4 && j > 0) {
      this.values[i][j - 1].value == 1 ? this.values[i][j - 1].marked = true : this.values[i][j - 1].marked = false;
      this.values[i][j + 1].value == 1 ? this.values[i][j + 1].marked = true : this.values[i][j + 1].marked = false;
    } else if (j == 0) {
      this.values[i][j + 1].value == 1 ? this.values[i][j + 1].marked = true : this.values[i][j + 1].marked = false;
    } else if ( j == 4) {
      this.values[i][j - 1].value == 1 ? this.values[i][j - 1].marked = true : this.values[i][j - 1].marked = false;
    }
  }

  onTileClicked(event, i: number, j: number) {
    if (this.values[i][j].value == 1) {
      event.target.classList.add('marked');
      this.clickCounter ++;
      this.checkTileNeighbour(i, j);
      }
    }


}



