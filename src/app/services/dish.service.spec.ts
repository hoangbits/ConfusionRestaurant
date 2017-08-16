import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { HttpModule } from "@angular/http";
import { TestBed, inject } from "@angular/core/testing";

import { DishService } from "./dish.service";

describe("DishService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [DishService, ProcessHTTPMsgService]
    });
  });

  it(
    "should be created",
    inject([DishService], (service: DishService) => {
      expect(service).toBeTruthy();
    })
  );
});
