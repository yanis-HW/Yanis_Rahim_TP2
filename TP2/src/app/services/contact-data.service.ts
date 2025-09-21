import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ContactData {
  prenom: string;
  nom: string;
  age?: string;
  email?: string;
  commentaire: string;
  dateSoumission: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ContactDataService {
  private contactDataSubject = new BehaviorSubject<ContactData | null>(null);
  public contactData$ = this.contactDataSubject.asObservable();

  constructor() {}

  saveContactData(data: ContactData) {
    this.contactDataSubject.next(data);
  }

  getLastContactData(): ContactData | null {
    return this.contactDataSubject.value;
  }
}
