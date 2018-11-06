import { Component, OnInit } from '@angular/core';

//import cái service vô nè
import { WeatherService} from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {


  //khởi tạo rỗng 
  txtCityName ='';
  cityName='';
  temp =null;
  isLoading =false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    
  }

  //ấn vô nút gửi 
  getWeather()
  {
    this.isLoading=true;
    this.weatherService.getTemp(this.txtCityName)
    .then(temp=>
      {
        this.cityName=this.txtCityName;
        this.temp=temp;
        //lấy xong thì reset lại
        this.isLoading= false;

      })
    .catch(err=>{
      alert('cannot find your city! ');
      this.isLoading =false;
      this.cityName='';
    });
  }
  getMessage()
  {
    if(this.isLoading)
    {
      return 'Loading...';
    }
    return this.cityName===''?'Nhập thành phố ': (this.cityName + ' is now :'+ this.temp )
  }

}
