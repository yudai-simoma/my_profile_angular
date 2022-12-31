import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';//ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BackgroundInformationComponent } from './background-information/background-information.component';
import { ContactComponent } from './contact/contact.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SkillComponent,
    PortfolioComponent,
    BackgroundInformationComponent,
    ContactComponent,
    DynamicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynamicTableComponent]
})
export class AppModule { }
