import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login-component';
import { IonicModule } from 'ionic-angular';
import { RegistrationComponent } from './registration/registration-component';
import { AuthProvider } from '../providers/auth/auth';
import { ProfileEditComponent } from './profile-edit/profile-edit';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { ProfileViewComponent } from './profile-view/profile-view';
import { SearchUserComponent } from './search-user/search-user';
import { SendMessageBoxComponent } from './send-message-box/send-message-box';
import { ChatMessageComponent } from './chat-message/chat-message';

@NgModule({
	declarations: [LoginComponent,
    RegistrationComponent,
    ProfileEditComponent,
    ProfileViewComponent,
    SearchUserComponent,
    SendMessageBoxComponent,
    ChatMessageComponent],
	imports: [IonicModule],
	exports: [LoginComponent,
	RegistrationComponent,
    ProfileEditComponent,
    ProfileViewComponent,
    SearchUserComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
],
providers: [
	AuthProvider,
	DataServiceProvider
]
})
export class ComponentsModule {}
