import { Component, OnInit, Input } from "@angular/core";
import { Dish } from "./../shared/dist";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"]
})
export class DishdetailComponent implements OnInit {
  @Input() dish: Dish;

  constructor() {}

  ngOnInit() {}
}
