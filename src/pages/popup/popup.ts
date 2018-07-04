import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html',
})
export class PopupPage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }
  
  closePopup(){
    this.view.dismiss();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupPage');
  }


}
