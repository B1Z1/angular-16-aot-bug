import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private static readonly STATIC_FIELD = 'None';
  private static readonly STATIC_FIELD_BUG = AppComponent.STATIC_FIELD;

  title = 'aot-bug';

  constructor() {
    console.log(AppComponent.STATIC_FIELD_BUG);
  }
}
