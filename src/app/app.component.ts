import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngular';
  subtitle = 'mySubtitle';


  hello(){  
    this.title="user has clicked!"
}
}
