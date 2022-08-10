import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouterComponent } from './couter/couter.component';
import { counterReducer } from './couter/ngrx/couter.reducer';
import { StoreModule } from '@ngrx/store';
import { HelperComponent } from './helper/helper.component';
@NgModule({
  declarations: [
    AppComponent,
    CouterComponent,
    HelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({countReduce: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
