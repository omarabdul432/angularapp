import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from './_models/product';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularapp';
}
