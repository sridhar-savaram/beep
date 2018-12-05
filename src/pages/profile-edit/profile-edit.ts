import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.model';

/**
 * Generated class for the ProfileEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {
  profile: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
    this.profile = this.navParams.data['existingUserProfile'];
  }

  saveProfile(event){
    let messageToast = this.toast.create({
      message: 'Error in saving profile! Please try again',
      duration: 3000
    })
    event? this.navCtrl.setRoot("TabsPage") : messageToast.present();
  }

  ionViewWillLoad(){
    console.log(this.navParams.data['existingUserProfile']);
    
  }

}
