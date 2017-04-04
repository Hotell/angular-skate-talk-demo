import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular & Skate! Life is once again Great!';
  showCounter = true;

  user = {
    name: 'Rodney Mullen',
    age: 40,
    tricks: []
  };

  private learnTrick(trickName: string ): void {
    this.user.tricks = [...this.user.tricks, trickName];
  }
}
