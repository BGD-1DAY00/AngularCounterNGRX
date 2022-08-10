import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {
  @Output() addEmitter = new EventEmitter()
  @Output() subtractEmitter = new EventEmitter()
  @Output() resetEmitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  addEmit(){
    this.addEmitter.emit()
  }
  subtractEmit(){
    this.subtractEmitter.emit()
  }
  resetEmit(){
    this.resetEmitter.emit()
  }

}
