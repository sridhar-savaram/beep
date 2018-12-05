import { Component, Output, EventEmitter } from '@angular/core';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Profile } from '../../models/profile/profile.model';

/**
 * Generated class for the SearchUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-user',
  templateUrl: 'search-user.html'
})
export class SearchUserComponent {

  profilesList: Profile[];

  @Output() selectedProfile: EventEmitter<Profile>;

  constructor(private dataService: DataServiceProvider) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  searchUsers($query){
    this.dataService.searchProfile($query.target.value).subscribe((data:Profile[]) => {
      this.profilesList = data;
      console.log(this.profilesList);
    })
  }

  selectProfile(profile: Profile){

    this.selectedProfile.emit(profile);
  }
}
