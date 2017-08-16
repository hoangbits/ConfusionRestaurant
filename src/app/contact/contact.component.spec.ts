import { ReactiveFormsModule } from "@angular/forms";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialModule } from "@angular/material";
import { ContactComponent } from "./contact.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ContactComponent],

        imports: [MaterialModule, BrowserAnimationsModule, ReactiveFormsModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
