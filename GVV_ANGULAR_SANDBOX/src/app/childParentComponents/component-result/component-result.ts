import { Component, computed, input, signal } from '@angular/core';
import { Contact } from '../../_objectClasses/contact';

@Component({
  selector: 'app-component-result',
  imports: [],
  template: `
    <h1>Contacts List</h1>
    <ul>
    @for(contact of filteredContacts(); track $index){
      
        <li>{{contact.name}} - {{contact.phone}} - {{contact.email}}</li>
    
    }
    </ul>
  `
})
export class ComponentResult {
  searchTerm = input('');


  contacts = signal<Contact[]>([
    new Contact("John Doe", "11-55-66-77","jd@gmail.com"),
    new Contact("Jane Doe","669-55-55","jane@skype.be"),
    new Contact("Jesus Christ","77-77-77","jebus@heaven.com"),
    new Contact("Beelzebub Devil","66-66-66","info@hell.com")
  ]);

  filteredContacts = computed(() => {
    if(!this.searchTerm()){
      //If no searchTerm: return whole list
      return this.contacts();
    }

    //Filter list
    return this.contacts().filter(c => c.name.toLowerCase().includes(this.searchTerm().toLowerCase()));
    
  })

}
