import { Injectable } from '@angular/core';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
  productList: Product[] = [{
    id: '1',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/24-home_default/hummingbird-printed-t-shirt.jpg',
    title: 'Hummingbird printed t-shirt',
    price: '550'
  },
  {
    id: '2',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/28-home_default/brown-bear-printed-sweater.jpg',
    title: 'Hummingbird printed sweater',
    price: '550'
  },
  {
    id: '3',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/65-home_default/brown-bear-notebook.jpg',
    title: 'Brown bear notebook',
    price: '550'
  },
    // {
    //   id: '4',
    //   imageURL: 'https://t4.ftcdn.net/jpg/02/64/14/99/240_F_264149966_ojQ02eh9yncBHNJyzCJqEVCpPJl3QcA5.jpg',
    //   title: 'Denim Shirts',
    //   price: '550'
    // },
    // {
    //   id: '5',
    //   imageURL: 'https://t3.ftcdn.net/jpg/01/59/40/22/240_F_159402200_fmTadJyhLn27WxmMfj007ebnj7DIDP1j.jpg',
    //   title: 'Denim Jeans',
    //   price: '550'
    // },
    // {
    //   id: '6',
    //   imageURL: 'https://t3.ftcdn.net/jpg/05/30/00/32/240_F_530003271_qJMpDpxzhtLzid5I9FCoS8ft0fSNH1ZE.jpg',
    //   title: 'Kids Shirt',
    //   price: '350'
    // },
    // {
    //   id: '7',
    //   imageURL: 'https://t3.ftcdn.net/jpg/05/45/86/88/240_F_545868807_cmisPzBfr2ucjjJvxlDafdw9XrOGNQhr.jpg',
    //   title: 'Printed Shirt',
    //   price: '350'
    // },
    // {
    //   id: '8',
    //   imageURL: 'https://t4.ftcdn.net/jpg/06/53/78/29/240_F_653782978_GcrBhV8cBHRG4e6VkZ2RGoFi5aZl2ohz.jpg',
    //   title: 'Combo',
    //   price: '650'
    // }
  ]

  getProducts() {
    return this.productList
  }
}
