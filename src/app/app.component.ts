import {Component, OnDestroy} from '@angular/core';
import { BreakpointService } from "@core/services/breakpoint.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  isHandset$ = this.breakpointService.isHandset$;

  constructor(private breakpointService: BreakpointService) {

  }

  ngOnDestroy() {

  }
}
