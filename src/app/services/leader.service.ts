import { DISHES } from "./../shared/dishes";
import { LEADERS } from "./../shared/leaders";
import { Leader } from "./../shared/leader";
import { Injectable } from "@angular/core";

@Injectable()
export class LeaderService {
  constructor() {}
  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }
  getLeader(id: number): Promise<Leader> {
    return Promise.resolve(LEADERS.filter(leader => leader.id === id)[0]);
  }
  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter(leader => leader.featured)[0]);
  }
}
