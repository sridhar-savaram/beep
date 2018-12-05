import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { InboxPage } from '../inbox/inbox';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabs1: any;
  tabs2: string;
  tabs3: string;
  tabs4: string;

  constructor() {
    this.tabs1 = InboxPage;
    this.tabs3 = "ProfilePage";
    this.tabs2 = "ChannelsPage";
    this.tabs4 = "TenderingPage";
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
