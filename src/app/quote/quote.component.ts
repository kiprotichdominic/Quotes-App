import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"],
  animations: [""]
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      "Posted by Anthony",
      "Find an online version and watch merlin find his son",
      new Date(2020, 3, 14)
    ),
    new Quote(
      2,
      "Posted by Rose",
      "I have to buy cookies for the parrot",
      new Date(2019, 6, 9)
    ),
    new Quote(
      3,
      "Posted by Justus",
      "Diana has her birthday coming up soon",
      new Date(2022, 1, 12)
    ),
    new Quote(
      4,
      "Posted By Evans",
      "Pupper likes expensive snacks",
      new Date(2019, 0, 18)
    ),
    new Quote(5, "Posted By Philiph", "Damn Math", new Date(2019, 2, 14)),
    new Quote(
      6,
      "Posted by Kolum",
      "Cause I am an evil overlord",
      new Date(2030, 3, 14)
    )
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() {}

  ngOnInit() {}
}
