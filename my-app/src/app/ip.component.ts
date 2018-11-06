import { Component } from '@angular/core';
import {IpService} from './ip.service'


//import 'rxjs/add/operator/toPromise' ;
 // để sử dụng topromise


@Component({
  selector: 'app-ip',
  template: `<h3>{{ip}}</h3>`,
  providers:[IpService]

  
})
export class IpComponent {
    ip:string;
    //viets constructor
    constructor(private ipService:IpService)

    { 
        this.ipService.getIp()
        .then(ip=>this.ip=ip)
        .catch(err=>console.log(err));
        


    }

}
