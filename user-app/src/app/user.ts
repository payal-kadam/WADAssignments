import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  register(user: any) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  login(email: string, password: string) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find((u: any) => u.email === email && u.password === password);
  }
}