import { Injectable } from "@angular/core";
import { Dish } from "./../shared/dish";
import { DISHES } from "./../shared/dishes";

import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/delay";
import "rxjs/add/observable/of";

@Injectable()
export class DishService {
  constructor() {}
  getDishes(): Promise<Dish[]> {
    // return new Promise(resolve => {
    //   //simulate server latency with 2 second delay
    //   setTimeout(() => resolve(DISHES), 2000);
    // });
    // return Observable.of(DISHES).delay(2000).toPromise;
    return Observable.of(DISHES).delay(2000).toPromise();
  }
  getDish(id: number): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter(dish => dish.id === id)[0]), 2000);
    });
  }
  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter(dish => dish.featured)[0]), 2000);
    });
  }
}
