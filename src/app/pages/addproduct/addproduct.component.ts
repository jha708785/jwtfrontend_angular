import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})

export class AddproductComponent {


  recipe:any={
    title: '',
    description: '',
    foodtype: '',
    image: ''
  }

  onSubmit(){
console.log(this.recipe);
  }
}
