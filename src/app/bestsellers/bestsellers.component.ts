import { Component, inject } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { BestsellersService } from '../_service/bestsellers.service';
import { Product } from '../_models/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../_service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bestsellers',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.scss'
})
export class BestsellersComponent {

  cart = inject(CartService)
  router = inject(Router)
  productList: Product[] = []

  constructor(private seller: BestsellersService) {
    this.productList = this.seller.getBestsellers()
  }

  addtocart(item: any) {
    this.cart.addtoCart(item)
    this.router.navigateByUrl('cart')
  }
}
