import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
