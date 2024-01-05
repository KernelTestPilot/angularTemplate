import { GreenModule } from "../../shared/green.module";
import { Component } from "@angular/core";

//We import the entire greenmodule to use the green components we imported via modules.
@Component({
    standalone: true,
    selector: 'badge',
    imports: [GreenModule],
    templateUrl: './badge.component.html',
  })
  export class Badge {
    // component logic
  }