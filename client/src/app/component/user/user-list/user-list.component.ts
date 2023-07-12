import { Component } from '@angular/core';
import { User } from 'src/app/class/user/user';
import { UserServiceService } from 'src/app/service/user/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] | undefined;
  user!: User;

  constructor(private userService: UserServiceService, private router: Router){
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      console.log(data);
    })
  }

  deleteUser (id: number) {
    if (window.confirm("Are you sure you want to delete user?")) {
        this.userService.deleteUser(id).subscribe(res => {
          this.router.navigateByUrl('/users').then(() => window.location.reload())
        })
    }
  }
}
