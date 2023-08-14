import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private auth: AuthService) {

  }

  isLoggedIn() {
    return this.auth.isAuthenticated;
  }

  login() {
    this.auth.login()
  }
}
