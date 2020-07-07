import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  showMessage(value) {
    console.log(value); 
  }

  onOpen(value) {
    console.log(value);
  }

  onClose(value) {
    console.log(value);
  }
}
