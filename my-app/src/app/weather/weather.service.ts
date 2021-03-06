

//bắt buộc
import {Injectable} from '@angular/core';

import { Http } from '@angular/http';

@Injectable()

export class WeatherService {
    constructor(private http:Http) {}

    //hàm trả về temp của  thành phố truyefn vào 
    getTemp(cityName :string)
    {
        const url ='https://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q='+cityName;
        return this.http.get(url)
        .toPromise()
        .then(res=>res.json())
        .then(resJson=>resJson.main.temp);


    }
}