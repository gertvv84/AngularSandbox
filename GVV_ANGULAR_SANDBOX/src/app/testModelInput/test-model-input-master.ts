
import { Component, signal } from '@angular/core';
import { TestModelInputResult } from "./test-model-input-result";
import { TestModelInputSearch } from "./test-model-input-search";

@Component({
  selector: 'app-test-model-input-master',
  imports: [TestModelInputResult, TestModelInputSearch],
  template:`
    <app-test-model-input-search [(searchTermModel)]="searchTermSignal"/>
    <app-test-model-input-result [searchTermInput] = "searchTermSignal()"/>
  `
})
export class TestModelInputMaster {

  /*
  * VIDEO: https://www.youtube.com/watch?v=MtTAfjiZxtk
  (vanaf minuut 9)

  Dit is eigenlijk hetzelfde als childParentComponents.
  Maar dan met gebruik van model() ipv output()
  */

  searchTermSignal = signal('');

}
