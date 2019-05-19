import { Component } from '@angular/core';
import { $$ } from 'protractor';

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

  startFunction() {
    this.clickCounter++;
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

  /*
    $("td").click(function (e) {
      if (!(this.hasClass("empty")) {
        $(this).toggleClass("marked");
        if (!$(this).next().hasClass("empty")) $(this).next().toggleClass("marked");
        if (!$(this).prev().hasClass("empty")) $(this).prev().toggleClass("marked");

        let fieldAbove = $(this).parent().prev().children().eq($(this).index());
        if (!fieldAbove.hasClass("empty")) fieldAbove.toggleClass("marked");

        let fieldBelow = $(this).parent().next().children().eq($(this).index());
        if (!fieldBelow.hasClass("empty")) fieldBelow.toggleClass("marked");

        clicks++;
        $("#clicks").text(clicks);

        $(level.name + " td").each(function () {
          if ($(this).hasClass("marked") || $(this).hasClass("empty")) { }
          else this.allMarked = false;
        });

        if (this.allMarked) {
          document.getElementById('default-title').style.visibility = "hidden";
          document.getElementById('win-title').style.visibility = "visible";
          $("td").each(function () {
            $(this).off("click");
          });
        }
      }
    });*/
}



