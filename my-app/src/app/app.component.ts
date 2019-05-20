import { Component, OnInit } from '@angular/core';
import { $$ } from 'protractor';
import { build$$ } from 'protractor/built/element';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Układanka';
  clickCounter = 0;
  allMarked = false;
  startClicked = false;
  values = [[1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,0,0,1],
    [1,0,0,1,1],
    [1,0,0,0,1]];


  generateValues() {
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5 ; j++){
        const generatedNumber = Math.floor((Math.random() * 2));
        this.values[i][j] = generatedNumber;
      }
    }
  }

  onStartClicked() {
    this.startClicked = true;
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.generateValues();
  }

  tileDetection(event, j: number, i: number) {
    console.log('i = ' + i );
    console.log('j = ' + j );
    if (event.toElement.innerHTML == 1) {
      event.target.classList.add('marked');
      this.clickCounter ++;
    }
  }
}



