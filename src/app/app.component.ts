import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wiki-search';
  pages = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    // console.log('term from app.component :>> ', term);
    // const results = this.wikipedia.search(term);
    // console.log(results);
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
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
