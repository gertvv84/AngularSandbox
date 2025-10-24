import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-component-search',
  imports: [],
  template: `
    @if(!search()){
      <button type="button" class="btn btn-primary" (click)="search.set(true)">
          Search
      </button>
    } @else {
        <input #searchField (input)="searchTermChanged.emit(searchField.value)"/>
        <button type="button" class="btn btn-primary" (click)="search.set(false)">
            Search
        </button>
    }
`
})
export class ComponentSearch {

  search = signal(false);

  searchTermChanged = output<string>();

}
