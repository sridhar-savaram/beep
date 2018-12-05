import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Channel } from '../../models/channel/channel';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';
import { Observable } from 'rxjs';
import { ChannelMessage } from '../../models/channel/channel-message';

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {
  channel: Channel;
  channelMessages: Observable<ChannelMessage[]>;
  constructor(private chatService: ChatServiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get("channel");
    this.channelMessages = this.chatService.getChannelChatReference(this.channel.$key);
  }

  sendMessage(message){
    console.log(event);
    this.chatService.addChannelChatMessage(this.channel.$key, message);
  }
}
