import { Injectable } from "@angular/core";
import { Dish } from "./../shared/dist";
import { DISHES } from "./../shared/dishes";
@Injectable()
export class DishService {
  constructor() {}
  getDishes(): Dish[] {
    return DISHES;
  }
}
