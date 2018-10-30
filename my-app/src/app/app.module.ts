import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import{ FormsModule } from '@angular/forms';  

import { WordCompConent} from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';

@NgModule({
  declarations: [ 
    AppComponent,
    WordCompConent,
    BookComponent,
    UserFormComponent,
    StructComponent
    
  ],
  //two way binding
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
