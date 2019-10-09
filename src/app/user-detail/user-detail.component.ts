import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../user.model';
import {UserDataService} from '../user-data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userDataService: UserDataService) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.userDataService.getUser(this.id).subscribe(
        res => {
          this.user = res[0];
        }
      );
    });

    // this.userDataService.userDetails.subscribe(
    //   res => this.user = res
    // );

  }

  navBack() {
    this.router.navigateByUrl('/users');
  }

// let user: User;

}
