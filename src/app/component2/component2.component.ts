import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
public message="";
  constructor() { }
  @Output() parentEvent=new EventEmitter();
  sendMessage(value)
  {
    this.message=value.toString();
    this.parentEvent.emit(this.message)
  }

  ngOnInit() {
  }

}
