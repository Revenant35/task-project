import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './authentication/authentication.service';
import { GuardsService } from './guards/guards.service';
import { HttpInterceptor } from "./http/http.interceptor";


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    GuardsService,
    HttpInterceptor
  ]
})
export class CoreModule { }
