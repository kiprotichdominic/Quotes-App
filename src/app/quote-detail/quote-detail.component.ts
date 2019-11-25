import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote-detail",
  templateUrl: "./quote-detail.component.html",
  styleUrls: ["./quote-detail.component.css"]
})
export class QuoteDetailComponent implements OnInit {
  clickCounter: number = 0;
  dislikeCounter: number = 0;

  @Input() quote: Quote;

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  countClick() {
    this.clickCounter += 1;
  }
  countDislike() {
    this.dislikeCounter += 1;
  }
}
