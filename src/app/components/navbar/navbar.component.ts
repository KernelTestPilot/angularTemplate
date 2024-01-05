import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GreenModule } from '../../../shared/green.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
