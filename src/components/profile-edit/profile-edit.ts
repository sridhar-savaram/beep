import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile/profile.model';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { AuthProvider } from '../../providers/auth/auth';
import { Subscription } from 'rxjs';
import { UserCredential } from 'firebase/auth';

/**
 * Generated class for the ProfileEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-edit',
  templateUrl: 'profile-edit.html'
})
export class ProfileEditComponent implements OnDestroy, OnInit{
  ngOnInit(): void {

    console.log('this.profile');
    if(!this.profile)
      this.profile = {} as Profile;
    console.log(this.profile);
    
  }

  @Input() profile: Profile;
  authenticatedUser$: Subscription
  user: UserCredential;
  @Output() saveProfile: EventEmitter<boolean> = new EventEmitter();

  constructor(private dataService: DataServiceProvider, private authService: AuthProvider) {
    this.authenticatedUser$ = this.authService.getAuthenticatedUser().subscribe((data) => this.user = data);
    
  }

  async save(){
    this.profile.email = this.user.email;
    const result = await this.dataService.saveProfile(this.user, this.profile);
    this.saveProfile.emit(result);
  }

  ngOnDestroy(){
    console.log('ProfileEditComponent is destroyed');
    this.authenticatedUser$.unsubscribe();
  }


}
