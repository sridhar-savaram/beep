import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login-response.model';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { UserCredential } from 'firebase/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams, private toast: ToastController,
    private dataServiceProvider: DataServiceProvider) {
  }

  login(event:LoginResponse){
    console.log(event);
    if(!event.error){
      let profile = this.dataServiceProvider.getProfile(<UserCredential>event.result);
      profile.subscribe((data) => {
        data.length > 0? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('ProfileEditPage');
      });
      
    } else{ 
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }

    
    //this.navCtrl.setRoot("TabsPage");
  }

}
