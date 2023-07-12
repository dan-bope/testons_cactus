import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product/product-service.service';
import {UserServiceService} from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loadPage: number = 0;
  constructor(private route : ActivatedRoute, private productService: ProductServiceService, private userService: UserServiceService, private router: Router){
  }

  loginPage(){
    this.loadPage = 1;
    this.router.navigateByUrl('/login');
  }
}
