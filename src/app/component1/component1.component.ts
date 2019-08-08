import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <input [(ngModel)]="name" #myName type="text">
  <br>
  <button (click)=onClick(myName.value)>Log</button>
  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  public name="";

  constructor() { }
  onClick(value){
    console.log(value);
  }

  ngOnInit() {
  }

}
