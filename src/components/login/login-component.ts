import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Account } from '../../models/account/account.model';
import { LoginResponse } from '../../models/login-response.model';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login-component.html'
})
export class LoginComponent {

  @Output() loginStatus: EventEmitter<LoginResponse>;

  account = {} as Account;

  constructor(private navCtrl:NavController, private toast:ToastController,
    private authProvider: AuthProvider) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  registerUser(){
    this.navCtrl.push("RegistrationPage");
  }

  async loginUser(){
    const result = await this.authProvider.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
  } 

  async loginWithGoogle(){
    const result = await this.authProvider.singInWithGoogle();
    this.loginStatus.emit(result);
  }

  async loginWithFacebook(){
    const result = await this.authProvider.signInWithFacebook();
    this.loginStatus.emit(result);
  }
}
