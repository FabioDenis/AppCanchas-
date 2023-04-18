import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  
  userLogged = this.authService.getUserlogged();

  constructor (private authService: AuthService){}
  
  
  
  ngOnInit(): void {
    
  }

}
