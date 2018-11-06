import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
 
export class IpService{
    constructor(private http:Http){}
    //viết phương thức lấy dữ liệu
    getIp()
    {
       return  this.http.get('http://ip.jsontest.com/')
        .toPromise()
        .then(res=>res.json())
        .then (resJson=> resJson.ip);
    }
}