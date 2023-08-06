import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  username = '';
  allowButton = true;
  constructor() {}

  onChangeUsername() {
    this.username = 'UserName was changed!';
  }
  onButtonActive() {
    if (this.allowButton) this.allowButton = false;
    else this.allowButton = true;
  }
  onClearUsername() {
    this.username = '';
  }
}
