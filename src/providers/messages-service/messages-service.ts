import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../models/message/message.model';

/*
  Generated class for the MessagesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessagesServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MessagesServiceProvider Provider');
  }

  getMockMessages():Observable<Message[]>{
    return this.http.get<Message[]>('assets/mocks/messages.mock.json');
  }

}
