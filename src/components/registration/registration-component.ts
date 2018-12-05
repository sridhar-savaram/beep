import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Account } from '../../models/account/account.model';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginResponse } from '../../models/login-response.model';
/**
 * Generated class for the RegistrationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'registration',
  templateUrl: 'registration-component.html'
})
export class RegistrationComponent {
  account = {} as Account;
  @Output() registerStatus: EventEmitter<LoginResponse>;

  
  constructor(private navCtrl:NavController, private authProvider: AuthProvider, private toast:ToastController) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register(){
      const result = await this.authProvider.registerUserWithEmailAndPassword(this.account);
      this.registerStatus.emit(result);
  }

}
