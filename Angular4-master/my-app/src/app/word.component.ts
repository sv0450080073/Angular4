import {Component} from '@angular/core';


//các thuộc tính khi khởi tạo 1 component nha 
@Component ({
    templateUrl:'./word.component.html',
    selector: 'app-word' , // tag html mà ta sử dụng

    //css
    styleUrls: ['./word.component.css']


})


// xuất class ra bên ngoài để cho các lớp khác sử dụng
 export class WordCompConent {}  
