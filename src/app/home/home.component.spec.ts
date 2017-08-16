import { baseURL } from "./../shared/baseurl";
import { LeaderService } from "./../services/leader.service";
import { PromotionService } from "./../services/promotion.service";
import { ProcessHTTPMsgService } from "./../services/process-httpmsg.service";
import { HttpModule } from "@angular/http";
import { DishService } from "./../services/dish.service";
import { MaterialModule } from "@angular/material";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
        imports: [MaterialModule, HttpModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          DishService,
          ProcessHTTPMsgService,
          PromotionService,
          LeaderService,
          { provide: "BaseURL", useValue: baseURL }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
