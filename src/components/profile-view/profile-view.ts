import { Component, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile/profile.model';
import { UserCredential } from 'firebase/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent {
  @Output() existingUserProfile: EventEmitter<Profile>;

  profile: Profile;

  ngOnInit(): void {
       this.dataServiceProvider.getAuthenticatedUserProfile().subscribe((data: Profile[]) => 
      {this.profile = data[0];
        this.existingUserProfile.emit(this.profile);
      });
      
   
  }

  constructor(private authProvider: AuthProvider, private dataServiceProvider: DataServiceProvider) {
    this.existingUserProfile = new EventEmitter<Profile>();
  }

}
