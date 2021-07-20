import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DiningOutComponent } from './dining-out/dining-out.component';
import { NightlifeComponent } from './nightlife/nightlife.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: "Delivery", component: DeliveryComponent },
  { path: "DiningOut", component: DiningOutComponent },
  { path: "Nightlife", component: NightlifeComponent },
  { path: "Nutrition", component: NutritionComponent },
  { path: "Signup", component: SignupComponent },
  { path: "Login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
