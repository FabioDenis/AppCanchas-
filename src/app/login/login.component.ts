import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../servicios/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = {

    email:"",
    password:""

  }
  
  
  constructor(private authservice: AuthService, private router: Router){

  }
  
  Ingresar(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authservice.register(email, password).then(res =>{
      if (res) {
        console.log("Se registro: ",res)
        this.router.navigate(['/home']);
      } else {        
        console.log(res);
        alert("Datos incorrectos");
        this.router.navigate(['/login']);
      }
    })
  }
  IngresarConGoogle(){
    const {email, password} = this.usuario;
    this.authservice.loginWhitGoogle(email, password).then(res =>{
      console.log("Se registro: ",res)
      
    })
    this.router.navigate(['/home']);
}

//obtenerUsuarioLogeado(){
 //   this.authservice.getUserlogged().subscribe(res =>{
//      console.log(res?.email);
 //   });

//}
  logaut(){
    this.authservice.logaut();
  }

}
