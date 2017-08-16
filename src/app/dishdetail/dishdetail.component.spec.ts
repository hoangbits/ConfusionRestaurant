import { HomeComponent } from "./../home/home.component";
import { AppComponent } from "./../app.component";
import { AppModule } from "./../app.module";
import { AppRoutingModule } from "./../app-routing/app-routing.module";
import { ProcessHTTPMsgService } from "./../services/process-httpmsg.service";
import { HttpModule } from "@angular/http";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { DishService } from "./../services/dish.service";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DishdetailComponent } from "./dishdetail.component";
import { MaterialModule } from "@angular/material";
describe("DishdetailComponent", () => {
  let component: DishdetailComponent;
  let fixture: ComponentFixture<DishdetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DishdetailComponent],
        imports: [
          HomeComponent,
          MaterialModule,
          RouterModule,
          MaterialModule,
          HttpModule,
          ReactiveFormsModule,
          AppRoutingModule
        ],
        providers: [DishService, ProcessHTTPMsgService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DishdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should be created", () => {
  //   expect(component).toBeTruthy();
  // });
});
