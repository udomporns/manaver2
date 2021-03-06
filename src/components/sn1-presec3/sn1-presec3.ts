import { Component,Input, OnInit } from '@angular/core';
import { Events,AlertController } from 'ionic-angular';
import { sn1 } from '../../models/SN1/sn1';
import { sn1_sub } from '../../models/SN1/sn1_sub';
import { NavController, ModalController } from 'ionic-angular';
/**
 * Generated class for the Sn1Presec3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sn1-presec3',
  templateUrl: 'sn1-presec3.html'
})
export class Sn1Presec3Component  {
  @Input() sn1:sn1;
  text: string;
  buildingHead: string
  buildingDetail: string
  constructor(private events: Events,private alertCtrl: AlertController,  private popup:ModalController) {
    
    this.text = 'Hello World';
    this.buildingHead = 'ครัวเรือนที่ 1';
    this.buildingDetail ='บ้านเลขที่ 1/1';
  }
  ngOnInit(){
    if(this.sn1.N!=0 && this.sn1.H3 == null){
      this.sn1.H3 = [];
      for(let i=0;i<this.sn1.N;i++){
        //this.sn1.H3.push(this.sn1_sub)
        this.addFamily();
        
      }
      
    }
  }

  openPopup(){
    const popup = this.popup.create('PopupPage')
    popup.present();
  }

  

  addFamily(){
    const SN1_sub = new sn1_sub();
    this.sn1.H3.push(SN1_sub);
  }

  editBuilding(i:number){
    let index = i;
    this.events.publish("editBuildingSummit",index);
  }
}
