import { Injectable } from '@angular/core';
import { Account } from '../../models/account/account.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginResponse } from '../../models/login-response.model';
import { Observable } from 'rxjs';
import { UserCredential } from 'firebase/auth';
import FireAuthProv = firebase.auth.AuthProvider ;
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private fireAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  getAuthenticatedUser():Observable<UserCredential>{
    return this.fireAuth.authState;
  }

  async signInWithEmailAndPassword(account: Account){
    try {
      return <LoginResponse> {
         result: await this.fireAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }catch(e){
      console.error(e);
      return <LoginResponse> {
        error: e
     }
    }
  }

  async registerUserWithEmailAndPassword(account: Account){
    try{
      return <LoginResponse> {
        result: await this.fireAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }catch(e){
      console.error(e);
      return <LoginResponse>{
        error: e
      }
    }
  }

  async singInWithGoogle(){
    console.log('Google signin start');
    return await this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  async signInWithFacebook(){
    console.log('Facebook signin start');
    return await this.oauthSignIn(new firebase.auth.FacebookAuthProvider());
  }

  private async oauthSignIn(provider: FireAuthProv) {
    try{
    if(!(<any>window).cordova){
      return <LoginResponse> {
        result: await this.fireAuth.auth.signInWithPopup(provider)
      }
    }else {
      return await this.fireAuth.auth.signInWithRedirect(provider)
		.then(async () => {
			return <LoginResponse> {
        result: this.fireAuth.auth.getRedirectResult()
        }
		  });
    }
  }catch(e){
    console.error(e);
    return <LoginResponse>{
      error: e
    }
  }
}

signout(){
  this.fireAuth.auth.signOut();
}
 
}
