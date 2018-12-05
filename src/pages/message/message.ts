import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.model';
import { Message } from '../../models/message/message.model';
import { MESSAGES_LIST } from '../../mocks/messages/messages';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  selectedProfile: Profile;
  messageList: Message[] = MESSAGES_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get("profile");
  }

}
