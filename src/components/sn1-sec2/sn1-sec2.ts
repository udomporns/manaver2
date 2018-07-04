import { Component,Input } from '@angular/core';
import { Events } from 'ionic-angular';
import { sn1 } from '../../models/SN1/sn1';
/**
 * Generated class for the Sn1Sec2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sn1-sec2',
  templateUrl: 'sn1-sec2.html'
})
export class Sn1Sec2Component {
  @Input() sn1:any;
  text: string;

  constructor(private events:Events) {
    console.log('Hello Sn1Sec2Component Component');
    this.text = 'Hello World';

 
  }
  submit(){
    this.events.publish("sec2Submitted",this.sn1);

  }
}
