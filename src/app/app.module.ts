import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ParticlesModule } from "angular-particle";
import { TimeAgoPipe } from "time-ago-pipe";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuoteComponent } from "./quote/quote.component";
import { QuoteDetailComponent } from "./quote-detail/quote-detail.component";
import { StrikethroughDirective } from "./strikethrough.directive";
import { DateCountPipe } from "./date-count.pipe";
import { QuoteFormComponent } from "./quote-form/quote-form.component";

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    QuoteFormComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
