import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Address, Users } from '../interfaces/users.interface';
import { ApiUsersService } from '../services/api-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user!: Users[];
  city!: Address[];

  constructor(private usersvc: ApiUsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersvc.getUsers().subscribe({
      next: (res) => {
        console.table(res);
        this.city = res.map(({ city, zipcode }: Address) => {
          return {
            city: city,
            zipcode: zipcode
          }
        })
        this.user = res.map(({ name, email, address, phone, website, }: Users) => {
          return {
            name: name,
            email: email,
            phone: phone,
            website: website
          }
        });
      }
    });
  };
};