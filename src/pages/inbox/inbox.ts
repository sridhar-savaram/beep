import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagesServiceProvider } from '../../providers/messages-service/messages-service';
import { Message } from '../../models/message/message.model';
import { MESSAGES_LIST } from '../../mocks/messages/messages';


/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  messages: Message[] = MESSAGES_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams, private messagesServiceProvider: MessagesServiceProvider) {
  }

  navegateToSearchUserPage(){
    this.navCtrl.push('SearchUsersPage');
  }

}
