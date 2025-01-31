import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FeaturedComponent } from './components/featured/featured.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent,FeaturedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pixar';
}
