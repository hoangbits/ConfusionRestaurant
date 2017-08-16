import { baseURL } from "./../shared/baseurl";
import { ProcessHTTPMsgService } from "./../services/process-httpmsg.service";
import { HttpModule } from "@angular/http";
import { DishService } from "./../services/dish.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuComponent } from "./menu.component";

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MaterialModule } from "@angular/material";
describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MenuComponent],
        imports: [MaterialModule, HttpModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          DishService,
          ProcessHTTPMsgService,
          { provide: "BaseURL", useValue: baseURL }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
