import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { count, Observable } from 'rxjs';
import { add, subtract, reset } from './ngrx/couter.actions';
import { App } from './ngrx/couter.reducer';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.css']
})
export class CouterComponent implements OnInit {
  count$:Observable<number>
  
  constructor(private store: Store<any>) { 
    
    // this.count$ = store.select();
    // console.log(this.count$)
  }

  ngOnInit(): void {
    this.count$ = this.store.select('countReduce', 'count')
    console.log(this.count$)
  }
  add(){
    this.store.dispatch(add())
  }
  subtract(){
    this.store.dispatch(subtract())
  }
  reset(){
    this.store.dispatch(reset())
  }

}
