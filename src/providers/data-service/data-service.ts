import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList} from 'angularfire2/database'
import { UserCredential } from 'firebase/auth'
import { Profile } from '../../models/profile/profile.model';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  profileObject: AngularFireObject<Profile>;
  constructor(private fireDataBase: AngularFireDatabase, private auth: AuthProvider) {
    
  }

  searchProfile(firstName: string){
    return this.fireDataBase.list(`/profiles`, ref =>
      ref.orderByChild('firstName').equalTo(firstName)).valueChanges();
  }

  getAuthenticatedUserProfile(){
    return this.auth.getAuthenticatedUser().
    map( user => user.uid ).
    mergeMap(id => this.fireDataBase.list(`/profiles`, ref =>
    ref.orderByKey().equalTo(id)).valueChanges())
  }

  getProfile(user: UserCredential){
    return this.fireDataBase.list(`/profiles`, ref =>
      ref.orderByKey().equalTo(user.user.uid)).valueChanges();
  }

  async saveProfile(user:UserCredential, profile: Profile){
    this.profileObject = this.fireDataBase.object(`/profiles/${user.uid}`);

    try{
      await this.profileObject.set(profile);
      return true;
    }catch(error){
      console.error(error);
      return false;
    }
  }

}
