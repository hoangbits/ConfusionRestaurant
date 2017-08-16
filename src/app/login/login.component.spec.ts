import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MdDialog, MdDialogRef } from "@angular/material";
import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [
          MaterialModule,
          BrowserAnimationsModule,
          FormsModule,
          ReactiveFormsModule,
          MdDialogRef
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should be created", () => {
  //   expect(component).toBeTruthy();
  // });
});
