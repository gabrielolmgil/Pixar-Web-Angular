import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    copyright: string = `© 1986-${new Date().getFullYear()} Disney-Pixars`;
}
