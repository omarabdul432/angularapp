import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'card', component: CardComponent }
];
