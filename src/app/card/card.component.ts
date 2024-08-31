import { Component, Input } from '@angular/core';
import { Product } from '../_models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  productList: Product[] = [
    {
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiT7LZcq1hTDdUF1JcknRHm2WuNSFhxUYlkA&s',
      title: 'Formal Shirts',
      price: '550'
    },
    {
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7NXTdelqui3GCVO59a36IlpgJ5S1i5498g&s',
      title: 'Sleeves',
      price: '150'
    }
  ]
}
