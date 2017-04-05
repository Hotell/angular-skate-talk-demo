import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular & Skate! Life is once again Great!';
  showCounter = true;

  counter = 0;

  myObservable = Observable.create((observer) => {
    observer.next(this.counter++);
    window.setInterval(() => observer.next(this.counter++), 1000);
  });

  user = {
    name: 'Rodney Mullen',
    age: 40,
    tricks: []
  };

  ngAfterViewInit() {
    console.log(this.myObservable);
  }

  private learnTrick(trickName: string ): void {
    this.user.tricks = [...this.user.tricks, trickName];
  }
}
