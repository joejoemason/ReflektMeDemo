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
        price : '$24',
        url : '',
        description : 'Description: Crewneck. Short sleeves. Soft jersey, with comfortable stretch. Straight, simple & fitted. The shift tee dress effortlessly "shifts" from desk to dinner.',
        image : 'assets/png/oldNavyDress11.jpg'
      },
      {
        id : 2,
        name : 'product 2',
        price : 5.99,
        url : '',
        description : 'Product description',
        image : '/assets/png/oldNavyMensPolo1.jpg'
      },
      {
        id : 3,
        name : 'product 3',
        price : 5.99,
        url : '',
        description : 'Product description',
        image : 'assets/png/polo101.jpg'
      },
      {
        id : 4,
        name : 'product 4',
        price : 5.99,
        url : '',
        description : 'Product description',
        image : 'assets/png/orangeBrown1.jpg'
      },
      {
        id : 5,
        name : 'product 5',
        price : 5.99,
        url : '',
        description : 'Product description',
        image : 'assets/png/purplelipstick1101.jpg'
      },
      {
        id : 6,
        name : 'product 6',
        price : 5.99,
        url : '',
        description : 'Product description',
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
