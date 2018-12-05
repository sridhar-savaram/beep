import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel/channel';

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: Observable<Channel[]>;
  constructor(private alert: AlertController, private chatService: ChatServiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad(){
    this.chatService.getChannelsReferenceTest();
    this.getChannels();
    //this.channelList.subscribe( (data: Channel[]) => console.log(data))
  }

  getChannels(){
    this.channelList = this.chatService.getChannelsReference();
  }

  showAddChannelDialog(){
    this.alert.create({
      title: 'Channel Name',
      inputs: [{
        name: "channelName"
      }],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: 'Add',
          handler: data => this.chatService.addChannel(data.channelName)
        }
      ]
    }).present();
  }

  showChatChannel(channel: Channel){
    this.navCtrl.push("ChannelChatPage", {channel})
  }


}
