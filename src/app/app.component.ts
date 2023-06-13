import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private static readonly OPTION = 'None';
  private static readonly OPTION_TEXT = Symbol(AppComponent.OPTION);

  title = 'aot-bug';

  constructor() {
    console.log(AppComponent.OPTION_TEXT);
  }
}
