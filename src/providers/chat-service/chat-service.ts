import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel/channel';
import { ChannelMessage } from '../../models/channel/channel-message';
import { map } from 'rxjs/operators';

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {

  constructor(private database: AngularFireDatabase) {
  }

  addChannel(channelName: string){
    this.database.list(`channel-names`).push({name: channelName});
  }

  getChannelsReference(): Observable<Channel[]>{
    return this.database.list(`channel-names`).snapshotChanges().pipe(
      map(changes => changes.map(c => ({$key: c.payload.key, name: c.payload.val()["name"]})))
    );
  }

  getChannelsReferenceTest(){
    return this.database.list(`channel-names`).snapshotChanges().pipe(
      map(changes => changes.map(c => ({$key: c.payload.key, name: c.payload.val()["name"]})))
    ).subscribe(data => console.log(data))
    
    //valueChanges().subscribe((data) => console.log(data));
  }

  getChannelChatReference(channelKey: string): Observable<ChannelMessage[]>{
    return this.database.list<ChannelMessage>(`channel-names/${channelKey}`).valueChanges();
  }

  addChannelChatMessage(channelKey: string, message: string){
    this.database.list(`channel-names/${channelKey}`).push({content: message});
  }
}
