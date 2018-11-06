import {Pipe,PipeTransform }from '@angular/core';


@Pipe({name:'roundNum'}) // làm pipe riêng cho mình nha 

export class RoundPipe implements PipeTransform
{
    transform(value: number,isUpper :boolean):number {
        if (isUpper)
        {
            return Math.ceil(value);
        }
        return Math.floor(value);   
    }
    
     
}