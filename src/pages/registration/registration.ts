import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login-response.model';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  register(event:LoginResponse){
    if(!event.error){
      this.toast.create({
        message: `Successfully register user with ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('ProfileEditPage');
    }else{
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }
}
