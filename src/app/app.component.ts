import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formData: any = {}; // Object to store form data
  isSubmitted: boolean = false;
  submitForm() {
    this.isSubmitted = true;
  }

  quotesFromApi: any[] = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.quoteService.getQuotes().subscribe((data) => {
      this.quotesFromApi = data;
    });
  }
}
