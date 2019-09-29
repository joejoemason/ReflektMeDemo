import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any = [];

  constructor(private http: HttpClient) {

    this.products = [
      {
        id : 1,
        name : 'Fitted Crew-Neck T-Shirt Dress ',
        brand: 'Old Navy',
        price: 24,
        url : '',
        description : 'Crewneck. Short sleeves. Soft jersey, with comfortable stretch. Straight, simple & fitted. The shift tee dress effortlessly "shifts" from desk to dinner.',
        image: 'assets/png/oldNavyDress11.jpg'
      },
      {
        id : 2,
        name: 'Polo',
        brand: 'Old Navy',
        price : 25,
        url : '',
        description : 'Spread collar. Short sleeves. Three-button placket. Drop-tail hem with vented sides. Soft-washed, lightweight jersey for the ultimate in softness. We put it through the wringer so you dont have to. Tag-free label and pieced trim inside neck for added comfort & durability.',
        image : '/assets/png/oldNavyMensPolo1.jpg'
      },
      {
        id : 3,
        name: 'Polo',
        brand: 'Polo',
        price : 49,
        url : '',
        description : 'Men basic Polo',
        image : 'assets/png/polo101.jpg'
      },
      {
        id : 4,
        name: 'Purple Stunna Lipstick',
        brand: 'Fenty',
        price : 24,
        url : '',
        description : 'Stunna Lip Paint has no immediate feathering, staying kissably smooth. In other words, it behaves so you don’t have to.',
        image : 'assets/png/orangeBrown1.jpg'
      },
      {
        id : 5,
        name: 'Brown Lipstick',
        brand: 'Fenty',
        price : 24,
        url : '',
        description : 'Stunna Lip Paint has no immediate feathering, staying kissably smooth. In other words, it behaves so you don’t have to.',
        image : 'assets/png/purplelipstick1101.jpg'
      },
      {
        id : 6,
        name: 'Butter London',
        brand: 'Fenty',
        price : 29,
        url : '',
        description : 'Lightweight, crease free, long lasting. A buildable formula that allows you to go from sheer shimmer to intense metallic',
        image : 'assets/png/lipGlaze103.jpg'
      }
    ];

  }

  getAllProducts(): Observable<any> {
    /*return this.http.get<Product[]>('/.netlify/functions/getProducts', {
      headers: {
        'Content-Type': 'application/json'
      },
    });*/

    return new Observable((observer) => { observer.next(this.products); });
  }
}
