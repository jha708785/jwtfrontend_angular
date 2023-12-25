import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import {MatIconModule} from '@angular/material/icon';
import {
  MatDialog,

} from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { AuthserviceService } from '../../services/Auth/authservice.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CardComponent,MatIconModule]
})
export class HomeComponent {

  constructor(public dilog: MatDialog,private auth:AuthserviceService){}

  recipe=[1,1,1,1,11,1];


  opencreateproductfrom(){
    this.dilog.open(AddproductComponent)
  }

  ngOnInit(){

    this.auth.getUserProfile();
  }
}
