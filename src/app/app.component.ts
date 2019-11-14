import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Week5App';
  title = false;
  count = 0;
  
  toggle() {
    this.title = !this.title;
    this.count++;
  }

  // increment() {
  //   this.title++;
  // }
}
