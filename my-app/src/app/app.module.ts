import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 

import { WordCompConent} from './word/word.component';

@NgModule({
  declarations: [ 
    AppComponent,
    WordCompConent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
