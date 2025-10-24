import { Injectable, signal } from '@angular/core';

@Injectable()
export class SearchService {

  searchTerm = signal('');

  updateSearchTerm(term: string) {
    this.searchTerm.set(term);
  }
  
}
