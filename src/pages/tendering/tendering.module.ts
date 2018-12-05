import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TenderingPage } from './tendering';

@NgModule({
  declarations: [
    TenderingPage,
  ],
  imports: [
    IonicPageModule.forChild(TenderingPage),
  ],
})
export class TenderingPageModule {}
