import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user/user';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User;
  objectUserConnected: any;
  role: any;
  roleName: string = "";
  userId!: number;
  userIdTmp!: number;
  // loadPage: number = 0;
  @Input('loadPage') loadPageInLogin =  0;
  isAdmin: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService){
    this.user = new User();
  }

  onSubmit(){
    this.userService.login(this.user).subscribe({

      next:(result) => {
          this.loadPageInLogin = 1,
          this.objectUserConnected = result;
          for(let userInfo of this.objectUserConnected){
            this.role = userInfo.roles;
            this.userIdTmp = userInfo.id;
          }
          this.roleName = this.role[0].name;
          this.userId = this.userIdTmp;
          localStorage.setItem('userId', this.userId.toString());

          if(this.roleName == "ROLE_USER"){
            this.router.navigate(['/products']);
          }else {
            this.router.navigate(['/users']);
          }
        },
      error: (error: HttpErrorResponse)=>{
            console.log(error.error);
        }
    })
  }
}
