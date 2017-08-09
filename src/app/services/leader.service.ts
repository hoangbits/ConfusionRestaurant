import { DISHES } from "./../shared/dishes";
import { LEADERS } from "./../shared/leaders";
import { Leader } from "./../shared/leader";
import { Injectable } from "@angular/core";

@Injectable()
export class LeaderService {
  constructor() {}
  getLeaders(): Leader[] {
    return LEADERS;
  }
  getLeader(id: number): Leader {
    return LEADERS.filter(leader => leader.id === id)[0];
  }
  getFeaturedLeader(): Leader {
    return LEADERS.filter(leader => leader.featured)[0];
  }
}
