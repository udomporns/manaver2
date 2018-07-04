import { Component,Input } from '@angular/core';
import { Events } from 'ionic-angular';
import { sn1 } from '../../models/SN1/sn1';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexValidators } from '../../pages/validators/validator';
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
  sn1first2: FormGroup;
  isenabled: boolean = false;
  notValid: boolean = false;
  @Input() sn1:any;
  text: string;

  constructor(private events:Events,public formBuilder: FormBuilder) {
    console.log('Hello Sn1Sec2Component Component');
    this.text = 'Hello World';

    this.sn1first2 = this.formBuilder.group({
      checkH: [
        '', Validators.compose([
          Validators.pattern(regexValidators.checkH),
          Validators.required
        ])
      ],
    });
 
  }
  submit(){
    if(this.sn1first2.valid){
      this.events.publish("sec2Submitted",this.sn1);
    }
    else {
      this.notValid = true;
    }
    

  }
}
