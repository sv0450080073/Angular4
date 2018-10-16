import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 

import { WordCompConent} from './word/word.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [ 
    AppComponent,
    WordCompConent,
    BookComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
