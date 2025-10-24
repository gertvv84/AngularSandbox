import { Component, signal } from '@angular/core';
import { ComponentSearch } from "../component-search/component-search";
import { ComponentResult } from "../component-result/component-result";

@Component({
  selector: 'app-master-component',
  imports: [ComponentSearch, ComponentResult],
  template:`
    <app-component-search (searchTermChanged)="searchTerm.set($event)"/>
    <app-component-result [searchTerm] = "searchTerm()"/>
  `
})
export class MasterComponent {

  /*
  * VIDEO: https://www.youtube.com/watch?v=MtTAfjiZxtk
  */

  searchTerm = signal('');

}
