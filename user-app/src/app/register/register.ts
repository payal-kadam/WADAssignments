import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.html',
})
export class RegisterComponent {
  user: any = {};

  constructor(private userService: UserService) {}

  register() {
    this.userService.register(this.user);
    alert("Registered Successfully");
  }
}