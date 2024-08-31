import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ProductserviceService } from '../_service/productservice.service';
import { Product } from '../_models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
