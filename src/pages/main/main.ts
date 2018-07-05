import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sn1Page } from '../sn1/sn1';
import { AlertController } from 'ionic-angular';
import { MapPage } from '../map/map';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',

})
export class MainPage {
  items;
  item1

  constructor(public alerCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      '111/1',
      '112/1'
    ];

  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  generateSN1() {
    this.navCtrl.push(Sn1Page);
  }
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'ปัญหาการเข้าพบ',
      message: 'การเข้าพบครั้งที่ 1 <br> <b>ไม่พบผู้อยู่อาศัย</b> <br> การเข้าพบครั้งที่ 2 <br> <b>ไม่พบผู้อยู่อาศัย</b> <br> การเข้าพบครั้งที่ 3 <br> <b>พบผู้อยู่อาศัย<b>',
      
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'บันทึก',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

  openmap(){
    this.navCtrl.push(MapPage);
  }

}
