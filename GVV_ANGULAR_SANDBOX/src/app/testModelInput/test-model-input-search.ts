
import { Component, model, signal } from '@angular/core';

@Component({
  selector: 'app-test-model-input-search',
  imports: [],
  template:`
    @if(!searchSignal()){
      <button type="button" class="btn btn-primary" (click)="searchSignal.set(true)">
          Search
      </button>
    } @else {
        <input #searchField (input)="searchTermModel.set(searchField.value)"/>
        <button type="button" class="btn btn-primary" (click)="searchSignal.set(false)">
            Search
        </button>
    }
  `
})
export class TestModelInputSearch {

  /*
  * VIDEO: https://www.youtube.com/watch?v=MtTAfjiZxtk
  (vanaf minuut 9)
  */

  searchSignal = signal(false);

  searchTermModel = model<string>();

}
