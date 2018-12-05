import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.model';

/**
 * Generated class for the SearchUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-users',
  templateUrl: 'search-users.html',
})
export class SearchUsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openChat(profile:Profile){
    console.log(profile);
    this.navCtrl.push("MessagePage", {profile})
  }
}
