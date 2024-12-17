import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatIconModule } from '@angular/material/icon';
import { HeaderWebComponent } from './components/header-web/header-web.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TabelaJaneiroComponent } from './components/tabela-janeiro/tabela-janeiro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderWebComponent,
    DashboardComponent,
    TabelaJaneiroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
