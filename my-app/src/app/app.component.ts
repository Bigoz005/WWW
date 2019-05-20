import { Component } from '@angular/core';
import { $$ } from 'protractor';
import { build$$ } from 'protractor/built/element';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Układanka';
  clickCounter = 0;
  number = 0;
  allMarked = true;
  el;

  startFunction() {
    this.number = Math.floor(Math.random() * 4) + 1;

    document.getElementById('class1').style.visibility = "hidden";
    document.getElementById('number-of-clicks').style.visibility = "visible";

    switch (this.number) {
      case 1: {
        document.getElementById('level-one').style.visibility = "visible";
        break;
      }
      case 2: {
        document.getElementById('level-two').style.visibility = "visible";
        break;
      }
      case 3: {
        document.getElementById('level-three').style.visibility = "visible";
        break;
      }
      case 4: {
        document.getElementById('level-four').style.visibility = "visible";
        break;
      }
    }
  }

  clickFunction() {
    this.clickCounter++;
    /*
        $(this).toggleClass("marked"); //zamien na class "marked"
        
        if (!$(this).next().hasClass("empty")) $(this).next().toggleClass("marked"); // jezli nastepne nie ma klasy "empty" to zmien na "marked"
        if (!$(this).prev().hasClass("empty")) $(this).prev().toggleClass("marked"); // jezli poprzednie nie ma klasy "empty" to zmien na "marked"

        let fieldAbove = $(this).parent().prev().children().eq($(this).index());     // dziecko o tym samym indexie poprzedniego tr
        if (!fieldAbove.hasClass("empty")) fieldAbove.toggleClass("marked");         // jezli gora nie ma klasy "empty" to zmien na "marked"

        let fieldBelow = $(this).parent().next().children().eq($(this).index());    // dziecko o tym samym indexie nastepnego tr
        if (!fieldBelow.hasClass("empty")) fieldBelow.toggleClass("marked");        // jezli dol nie ma klasy "empty" to zmien na "marked"
    */

    //dla testu 
    if (this.clickCounter > 5) {
      if (this.clickCounter % 2) this.allMarked = false; 
      else this.allMarked = true;
    }

    /*
    if(document.getElementsByTagName("td")){                             // sprawdz dla kazdego td
      if ($(this).hasClass("marked") || $(this).hasClass("empty")) { }   // jesli jest marked lub empty nic nie rob
    else this.allMarked = false;)                                        // inaczej ustaw allMarked na false
    }
    */

    /*
    this.el = document.getElementById("td");

    if () {
      if (element(el).hasClass("marked") || element(el).hasCLass("empty")) { }
      else this.allMarked = false;
    }
    */


    if (this.allMarked) {
      document.getElementById("default-title").style.visibility = "hidden";
      document.getElementById("win-title").style.visibility = "visible";
      // click().block                                                   // wylacz mozliwosc klikania na calej stronie/na kazdy tr
    }
  }
}



