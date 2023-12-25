import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AuthserviceService } from '../../services/Auth/authservice.service';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,
    MatButtonModule, 
    MatIconModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user:any=null;
   b=false;

  constructor(private auth:AuthserviceService,private router:Router){}
  ngOnInit(){

    this.auth.getUserProfile().subscribe({

      
    next:data=>console.log("req user",data),
    error:error=>console.log("error",error)
    });
    this.auth.authSubject.subscribe(
      (auth)=>{
        console.log("auth seubject",auth)
        this.user=auth.user
      }
    )

  }

handlelogout(){
  if(this.b==false){
    confirm("sure you want to log out")
  this.auth.logout()
  }
  else{
alert("you are safe...")
  }
  
  //this.router.navigate("/")
}

}
