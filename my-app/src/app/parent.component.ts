

import {Component, ViewChild} from '@angular/core';
import { ChildComponent  } from "./child.component";


@Component({

    selector: 'app-parent',
    template :`

    <button (click)="onAddForChild();">add for child </button>
    <app-child> </app-child>

    `
})
 export class ParentComponent {
    @ViewChild(ChildComponent)
    myChild : ChildComponent; //kiểu biến đó nha
 
    onAddForChild()    
    {
        this.myChild.value++;
    }
  

 }