import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  //khởi tạo name 
  name ='';
  is2lai =true;
  constructor() { }

  ngOnInit() {
  }
  //hàm 
  /*showEvent(event)
  {
    this.name=event.target.value;
  }*/

}
