import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from 'src/app/class/user/user';
import { ProductServiceService } from 'src/app/service/product/product-service.service';
import {UserServiceService} from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myEshop';
  user!: User;
  loadPage: number = 0;
  constructor(private route : ActivatedRoute, private productService: ProductServiceService, private userService: UserServiceService, private router: Router){
  }

  logOut() {
    localStorage.removeItem('userId')
    this.router.navigateByUrl('').then(() => window.location.reload())
  }
}
