import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user/user';
import { UserServiceService } from 'src/app/service/user/user-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService){
    this.user = new User();
  }

  onSubmit(){
    this.userService.register(this.user).subscribe(result => {
      this.gotoUserList();
    }

      );
  }

  gotoUserList(){
    this.router.navigate(['/products']);
  }
}
