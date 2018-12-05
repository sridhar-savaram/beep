import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { UserCredential } from 'firebase/auth';
import { Profile } from '../../models/profile/profile.model';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userProfile: Profile;
  constructor(private navCtrl: NavController, private auth: AuthProvider) {
  }

  navigateToProfileEdit(){
    this.navCtrl.push('ProfileEditPage', {
      existingUserProfile: this.userProfile
    })
  }
  getExistingUSerProfile(event){
    this.userProfile = event; 
  }

  signout(){
    this.auth.signout();
    this.navCtrl.setRoot('LoginPage')
  }

}
