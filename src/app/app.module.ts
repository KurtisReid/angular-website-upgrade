import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuAndContactComponent } from './menu-and-contact/menu-and-contact.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSliderModule, MatSidenavModule, BrowserAnimationsModule, MatMenuModule, MatToolbarModule ],
  declarations: [ AppComponent, HelloComponent, IntroductionComponent, EducationComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, TopBarComponent, MenuAndContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
