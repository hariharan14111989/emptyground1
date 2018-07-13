import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HariComponent } from './hari/hari.component';

@NgModule({
  declarations: [
    AppComponent,
    HariComponent
  ],
  imports: [
    BrowserModule, 
  ReactiveFormsModule,
  FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
