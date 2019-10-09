import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {UserDataService} from '../user-data.service';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  user: User;

  constructor(private userDataService: UserDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  fetchUsers() {
    this.userDataService.getUsers()
      .subscribe(res => {
        this.users = res;
        console.log(this.users);
      });
  }

  showDetails(i: number) {
    const id = this.users[i].id.value;
    this.router.navigate( [id], {relativeTo: this.route});

  }

}
