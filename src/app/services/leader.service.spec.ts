import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { baseURL } from "./../shared/baseurl";
import { TestBed, inject } from "@angular/core/testing";
import "rxjs/add/operator/delay";
import "rxjs/add/observable/of";
import { Observable } from "rxjs/Observable";
import { LeaderService } from "./leader.service";

describe("LeaderService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LeaderService,
        { provide: "BaseURL", useValue: baseURL },
        ProcessHTTPMsgService
      ]
    });
  });

  it(
    "should be created",
    inject([LeaderService], (service: LeaderService) => {
      expect(service).toBeTruthy();
    })
  );
});
