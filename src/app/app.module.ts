import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { OnboardingLeftContainerComponent } from './components/onboarding-left-container/onboarding-left-container.component';
import { OnboardingRightContainerComponent } from './components/onboarding-right-container/onboarding-right-container.component';
import { ButtonComponent } from './components/button/button.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRightContainerComponent } from './components/login-right-container/login-right-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    OnboardingLeftContainerComponent,
    OnboardingRightContainerComponent,
    ButtonComponent,
    InputFieldComponent,
    LoginRightContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
