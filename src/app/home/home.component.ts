import { Leader } from './../shared/leader';
import { LeaderService } from './../services/leader.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from './../shared/promotion';
import { PromotionService } from './../services/promotion.service';
import { flyInOut } from './../animations/app.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block',
  },
  animations: [flyInOut()],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL,
  ) {}

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(
      featuredDish => (this.dish = featuredDish),
      errmess => {
        this.dishErrMess = <any>errmess;
      },
    );
    this.promotionservice
      .getFeaturedPromotion()
      .subscribe(featuredPromotion => (this.promotion = featuredPromotion));
    this.leaderService
      .getFeaturedLeader()
      .subscribe(featuredLeader => (this.leader = featuredLeader));
  }
}
