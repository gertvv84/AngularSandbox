import { Component, inject, model, signal } from '@angular/core';
import { SearchService } from './search-service';

@Component({
  selector: 'app-test-com-with-service-search',
  imports: [],
  template:`
    @if(!search()){
      <button type="button" class="btn btn-primary" (click)="search.set(true)">
          Search via service
      </button>
    } @else {
        <input #searchField (input)="searchService.updateSearchTerm(searchField.value)"/>
        <button type="button" class="btn btn-primary" (click)="search.set(false)">
            Search
        </button>
    }
  `
})
export class TestComWithServiceSearch {

  /*
  * VIDEO: https://www.youtube.com/watch?v=MtTAfjiZxtk
  (vanaf minuut 11)
  */

  searchService = inject(SearchService);

  search = signal(false);

}
