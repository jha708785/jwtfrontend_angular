import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../../services/Auth/authservice.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule,
     CommonModule,
     MatFormFieldModule,
      MatInputModule,MatButtonModule, 
      MatDividerModule, MatIconModule
      ,
      ReactiveFormsModule
    ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  constructor(private Auth:AuthserviceService){}

  isRegester=true;
  
toggle(){
  this.isRegester=!this.isRegester
}

  regesterfrom=new FormGroup({
    firstname:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ])

  })

  loginfrom=new FormGroup({
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ])

  })
  

  handleReg(){

    console.log(this.handleReg);
    this.Auth.rigester(this.regesterfrom.value).subscribe({
      next:(response)=>{
        localStorage.setItem("jwt",response.jwt);
        this.Auth.getUserProfile().subscribe();
        console.log("login success",response);
        alert("Regester success.....")
      },
      error:(error)=>{
       alert("Some thing wrong...!!")
       
      }
    })

    
  }
  handleLogin(){
    this.Auth.login(this.loginfrom.value).subscribe({
      next:(response)=>{
        localStorage.setItem("jwt",response.jwt);
        this.Auth.getUserProfile().subscribe();
        console.log("login success",response);
      }
    })

    
  }

  
}
