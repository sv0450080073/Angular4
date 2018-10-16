import {Component} from '@angular/core';



@Component ({
    template:'<h3> This is my component <h3>',
    selector: 'app-word'  // tag html mà ta sử dụng
})


// xuất class ra bên ngoài để cho các lớp khác sử dụng
 export class WordCompConent {}  
