import { Component,OnInit } from '@angular/core';
import {IpService} from './ip.service'


//import 'rxjs/add/operator/toPromise' ;
 // để sử dụng topromise


@Component({
  selector: 'app-ip',
  template: `<h3>{{ip}}</h3>`


  
})
export class IpComponent implements OnInit {
    ip:string;
    ngOnInit(): void {
        
        this.ipService.getIp()
        .then(ip=>this.ip=ip)
        .catch(err=>console.log(err));
    }
  
    //viets constructor
    constructor(private ipService:IpService)

    { 
        


    }

}
