import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Login], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'login-app';
}
