import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PensionPlanCalculator } from './pension-plan-calculator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PensionReactiveFormComponent } from './pension-reactive-form/pension-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PensionReactiveFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PensionPlanCalculator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
