import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  template: `
  <h3>  
    Change detection is trigggered at: 
      <span [textContent]="time | date: 'hh:mm:ss:SSS'"></span>
  </h3>
  <button (click)="0">Trigger Change detection</button> 
  `
})

export class ChangeDetectionComponent {
  // get time() {
  //   const now = Date.now();
  //   console.log('now: ', now);
  //   return now;
  // }

  _time;
  get time() {
    console.log('time in fn: ' + this._time);
    return this._time;
  }

  constructor(zone: NgZone) {
    this._time = Date.now();
    console.log('time in constructor: ' + this._time);
    zone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = Date.now();
      }, 1);
    });
  }
}
