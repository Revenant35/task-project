import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  // Observables for different breakpoints
  isHandset$: Observable<boolean>;


  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .pipe(
        map(result => result.matches)
      );
  }
}
