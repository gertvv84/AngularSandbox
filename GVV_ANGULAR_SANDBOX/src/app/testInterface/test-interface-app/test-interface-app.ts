import { Component } from '@angular/core';
import { HousinglocationInfo } from '../interfaces/housinglocation';

@Component({
  selector: 'app-test-interface-app',
  imports: [],
  template: `
    <h2>Test Interfaces</h2>
  `
})
export class TestInterfaceApp {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocation: HousinglocationInfo = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };


}
