import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wiki-search';
  pages: object[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((data) => {
      this.pages = data;
    });
  }
}

//typescript class 寫法
// class Car {
//   color: string;  //如果沒有初始化 color 的話，就要在 constructor 賦值

//   constructor(receivedColor: string) {
//     this.color = receivedColor;
//   }
// }

// const myCar = new Car('red')
// console.log(myCar.color)
