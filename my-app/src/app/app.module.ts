import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//dịch vụ cần trong project
import { AppComponent } from './app.component'; 
import{ FormsModule } from '@angular/forms';  
import { HttpModule } from '@angular/http';




import { WordCompConent} from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import  {ParentComponent } from './parent.component';
import {ChildComponent }from './child.component';
import {CardComponent} from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import {RoundPipe} from './round.pipe';
import {IpComponent} from './ip.component';
@NgModule({
  declarations: [ 
    AppComponent,
    WordCompConent,
    BookComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipeComponent,
    IpComponent,
    RoundPipe
  

    
  ],
  //two way binding
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
