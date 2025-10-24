import { Contact } from "./contact";

export class ContactFysiek extends Contact{
  geslacht: string;
  haarkleur: string;
  geboorteDatum: Date;

  constructor(name: string, phone: string, email: string,geslacht: string, haarkleur: string, geboorteDatum: Date){
    super(name,phone,email);
    this.geslacht = geslacht;
    this.haarkleur = haarkleur;
    this.geboorteDatum = geboorteDatum;
  }

}


