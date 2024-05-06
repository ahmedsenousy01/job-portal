import { SeekerJobListingComponent } from './components/seeker-job-listing/seeker-job-listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SeekerRegistrationComponent } from './components/seeker-registration/seeker-registration.component';
import { RecruiterRegistrationComponent } from './components/recruiter-registration/recruiter-registration.component';
import { SeekerPageComponent } from './components/seeker-page/seeker-page.component';
import { RecruiterPageComponent } from './components/recruiter-page/recruiter-page.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { JobListComponent } from './components/job-list/job-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "seeker", component: SeekerJobListingComponent },
  { path:"profile",component:CompanyProfileComponent},
  { path: "recruiter", component: RecruiterPageComponent },
  { path: "login", component: LoginComponent },
  {path:"jobs",component:JobListComponent},
  { path: "register/seeker", component: SeekerRegistrationComponent },
  { path: "register/recruiter", component: RecruiterRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
