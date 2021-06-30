import { Component } from '@angular/core';
import { ITodos } from './itodos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular1';

  todos:ITodos[] = [
    {
      id: 1,
      title: 'my Todo 1',
      isCompleted: false
    },
    {
      id: 2,
      title: 'my Todo 2',
      isCompleted: false
    },
    {
      id: 3,
      title: 'my Todo 3',
      isCompleted: true
    }
  ]
}
