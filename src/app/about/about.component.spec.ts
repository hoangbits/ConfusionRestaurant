import { LeaderService } from "./../services/leader.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AboutComponent } from "./about.component";
import { MaterialModule } from "@angular/material";
describe("AboutComponent", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AboutComponent],
        imports: [MaterialModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [LeaderService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
