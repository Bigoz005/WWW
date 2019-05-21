import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Układanka';
  clickCounter = 0;
  allMarked = false;
  numberOfOnes = 0;
  numberOfMarked = 0;
  startClicked = false;
  values = [[{ value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }],
  [{ value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }],
  [{ value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }],
  [{ value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }],
  [{ value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }, { value: 0, marked: false }]];

  generateValues() {
    const elements = document.getElementsByClassName('item');
    console.log(elements)
    for (let c = 0; c < elements.length; c++) {
      elements[c].classList.remove('marked');
    }
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const generatedNumber = Math.floor((Math.random() * 2));
        this.values[i][j].value = generatedNumber;
        this.values[i][j].marked = false;
      }
    }
  }

  checkMarked() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (this.values[i][j].value == 1) {
          this.numberOfOnes++;
          if (this.values[i][j].marked) {
            this.numberOfMarked++;
          }
        }
      }
    }
    if (this.numberOfOnes == this.numberOfMarked) {
      this.allMarked = true;
      console.log("all Marked");
    } else {
      this.numberOfOnes = 0;
      this.numberOfMarked = 0;
      this.allMarked = false;
    }
  }

  onGenerateNewClicked() {
    this.generateValues();
    this.clickCounter = 0;
    this.allMarked = false;
  }

  onStartClicked() {
    this.startClicked = true;
    document.getElementById("startButton").style.visibility = 'hidden';
    document.getElementById("generateButton").style.visibility = 'visible';
  }

  checkTileNeighbour(i: number, j: number) {
    if (i < 4 && i > 0) {
      if (this.values[i + 1][j].value == 1) {
        this.values[i + 1][j].marked ? this.values[i + 1][j].marked = false : this.values[i + 1][j].marked = true;
      }
      if (this.values[i - 1][j].value == 1) {
        this.values[i - 1][j].marked ? this.values[i - 1][j].marked = false : this.values[i - 1][j].marked = true;
      }
    } else if (i == 0) {
      if (this.values[i + 1][j].value == 1) {
        this.values[i + 1][j].marked ? this.values[i + 1][j].marked = false : this.values[i + 1][j].marked = true;
      }
    } else if (i == 4) {
      if (this.values[i - 1][j].value == 1) {
        this.values[i - 1][j].marked ? this.values[i - 1][j].marked = false : this.values[i - 1][j].marked = true;
      }
    }
    if (j < 4 && j > 0) {
      if (this.values[i][j - 1].value == 1) {
        this.values[i][j - 1].marked ? this.values[i][j - 1].marked = false : this.values[i][j - 1].marked = true;
      }
      if (this.values[i][j + 1].value == 1) {
        this.values[i][j + 1].marked ? this.values[i][j + 1].marked = false : this.values[i][j + 1].marked = true;
      }
    } else if (j == 0) {
      if (this.values[i][j + 1].value == 1) {
        this.values[i][j + 1].marked ? this.values[i][j + 1].marked = false : this.values[i][j + 1].marked = true;
      }
    } else if (j == 4) {
      if (this.values[i][j - 1].value == 1) {
        this.values[i][j - 1].marked ? this.values[i][j - 1].marked = false : this.values[i][j - 1].marked = true;
      }
    }
  }

  onTileClicked(event, i: number, j: number) {
    this.values[i][j].marked = !this.values[i][j].marked;
    if (this.values[i][j].value == 1) {
      if (this.values[i][j].marked) {
        event.target.classList.remove('unmarked');
        event.target.classList.add('marked');
      } else {
        event.target.classList.remove('marked');
        event.target.classList.add('unmarked');
      }
      this.clickCounter++;
      this.checkTileNeighbour(i, j);
      this.checkMarked();
    }
  }
}




