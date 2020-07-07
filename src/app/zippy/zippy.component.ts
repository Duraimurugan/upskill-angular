import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'zippy',
  template: `
  <div class="zippy">
    <div (click)="toggle()">Toggle</div>
    <div [hidden]="!visible">
      <ng-content></ng-content>
    </div>
  </div>`
})

export class ZippyComponent implements OnInit {
  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(this.visible);
    } else {
      this.close.emit(this.visible);
    }
  }

}
