import { Component, signal } from "@angular/core";
import { TestComWithServiceResult } from "./test-com-with-service-result";
import { TestComWithServiceSearch } from "./test-com-with-service-search";
import { SearchService } from "./search-service";

@Component({
  selector: 'app-test-model-input-master',
  imports: [TestComWithServiceResult, TestComWithServiceResult, TestComWithServiceSearch],
  providers: [SearchService],
  template:`
    <app-test-com-with-service-search/>
    <app-test-com-with-service-result/>
  `
})
export class TestComWithServiceMaster {

  /*
  * VIDEO: https://www.youtube.com/watch?v=MtTAfjiZxtk
  (vanaf minuut 11)

  Dit is eigenlijk hetzelfde als childParentComponents.
  Maar dan met gebruik van servic om data door te geven.
  */

}
