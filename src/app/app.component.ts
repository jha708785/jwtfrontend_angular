import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { AuthserviceService } from './services/Auth/authservice.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        FooterComponent,
        NavbarComponent,
        HomeComponent,
        AuthComponent
    ]
})
export class AppComponent {
  title = 'My_Project';
user:any=null;

  constructor(private auth:AuthserviceService){}
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
}
