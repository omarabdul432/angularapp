import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from './_models/product';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { AuthenticationService } from './_service/authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularapp';

  user: string | null = ''
  constructor(private auth: AuthenticationService) {
    this.auth.user$.subscribe((res: any) => {
      this.user = res?.displayName
      console.log(this.user)
    })
  }

  logout() {
    this.auth.logout()
    localStorage.removeItem('user')
    this.user = null
  }

}
