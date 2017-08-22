import { Comment } from "./../shared/comment";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit, Input, Inject } from "@angular/core";
import { Dish } from "./../shared/dish";
import { DishService } from "./../services/dish.service";
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";
import { visibility } from "../animations/app.animation";
@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"],
  animations: [visibility()]
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  dishcopy = null;
  dishIds: number[];
  prev: number;
  next: number;
  addcommentForm: FormGroup;
  comment: Comment;
  errMess: string;
  visibility = "shown";

  formErrors = {
    author: "",
    rating: "",
    comment: ""
  };

  validationMessages = {
    author: {
      required: "Author Name is required",
      minlength: "Author Name must be at least 2 characters long.",
      maxlength: "Author Name cannot be more than 25 characters long."
    },
    rating: {},
    comment: {
      required: "Comment is required."
    }
  };

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    @Inject("BaseURL") private BaseURL
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.dishService.getDishIds().subscribe(
      dishIds => {
        this.dishIds = dishIds;
      },
      errmess => {
        this.errMess = <any>errmess;
      }
    );
    this.route.params
      .switchMap((params: Params) => {
        this.visibility = "hidden";
        return this.dishService.getDish(+params["id"]);
      })
      .subscribe(
        dish => {
          this.dish = dish;
          this.dishcopy = dish;
          this.setPrevNext(dish.id);
          this.visibility = "shown";
        },
        errmess => {
          this.dish = null;
          this.errMess = <any>errmess;
        }
      );
  }

  setPrevNext(dishId: number): void {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[
      (this.dishIds.length + index - 1) % this.dishIds.length
    ];
    this.next = this.dishIds[
      (this.dishIds.length + index + 1) % this.dishIds.length
    ];
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.addcommentForm = this.formBuilder.group({
      author: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(25)]
      ],
      rating: "",
      comment: ["", Validators.required]
    });
    this.addcommentForm.valueChanges.subscribe(data => {
      this.onValueChanged(data);
    });
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.addcommentForm) {
      return;
    }
    const form = this.addcommentForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = ""; // clear the previous message (if any)
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + " ";
        }
      }
    }
    if (this.addcommentForm.valid) {
      this.comment = this.addcommentForm.value;
      //display as preview
    }
  }

  onSubmit() {
    this.comment = this.addcommentForm.value;
    this.comment.date = new Date().toISOString();
    this.dishcopy.comments.push(this.comment);
    this.dishcopy.save().subscribe(dish => {
      this.dish = dish;
      console.log(this.dish);
    });
    this.addcommentForm.reset({
      author: "",
      rating: "5",
      comment: ""
    });
  }
}
