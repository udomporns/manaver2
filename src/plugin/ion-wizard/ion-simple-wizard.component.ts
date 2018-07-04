import { Component, Input, Output, EventEmitter } from '@angular/core';
/*import { Keyboard } from '@ionic-native/keyboard';*/
import { Events, Content, AlertController } from 'ionic-angular';
import { WizardAnimations } from './ion-simple-wizard-animations';


@Component({
  selector: 'ion-simple-wizard',
  templateUrl: 'ion-simple-wizard.component.html',
  animations: WizardAnimations.btnZoom
})
export class IonSimpleWizard {
  @Input() finishIcon = 'send';//Default
  @Input() showSteps: boolean=true;//Default
  @Input() step = 1;//Default
  @Output() finish = new EventEmitter();
  @Output() stepChange = new EventEmitter();
  public steps = 0;//Innitial
  public hideWizard = false;//Default
  searchModel : any
  @Input() stepCondition = true;//Default

  constructor(public evts: Events,public content : Content,private alert: AlertController) {
    this.searchModel = ''
  }

  ngOnInit() {
    /**
     * Hide the wizard buttons when the keyboard is open
     */
    /*this.keyboard.onKeyboardShow().subscribe(() => {
      this.hideWizard = true;
    });
    this.keyboard.onKeyboardHide().subscribe(() => {
      this.hideWizard = false;
    })*/
  }
  /**
   * @return {number} New Steps
   */
  public addStep() {
    const newSteps = this.steps + 1;
    this.steps = newSteps;
    return newSteps;
  }
  /**
   * @return {boolean} true if is the final step
   */
  isOnFinalStep() {
    return this.step === this.steps;
  }
  /**
   * @return {boolean} the current step condition
   */
  getCondition() {
    return this.stepCondition;
  }
  /**
   * @return {boolean} true if the the step is the first 
   */
  isOnFirstStep() {
    return this.step === 1;
  }
  /**
   * @method back button event and emit Event Called 'step:back'
   */
  back() {
    this.stepChange.emit(this.step - 1);
    this.evts.publish('step:back');
    this.scrollToTop();

  }
  /**
   * @method next button event and emit  Event Called 'step:next'
   */
  next() {
    this.stepChange.emit(this.step + 1);
    this.evts.publish('step:next');
    this.scrollToTop();
  }

  scrollToTop(){
    this.content.scrollToTop();
  }

  presentAlert() {
    let alert = this.alert.create({
      title: 'คุณกรอกข้อมูลไม่ถูกต้อง',
      subTitle: 'กรุณาระบุตัวเลขของครัวเรือนให้ถูกต้อง',
      buttons: ['ปิด']
    });
    alert.present();
  }

  searchValidate(ev: any){
    const val = parseInt(ev.target.value);
    if(isNaN(val)){
      return null;
    }

    if(val < 1 || val > this.steps){
      this.searchModel='';
      this.presentAlert();
      return null;
    }else{
    this.stepChange.emit(val);
    this.evts.publish('step:next');
    this.scrollToTop();
    }
    //return val;
  }

  
}
