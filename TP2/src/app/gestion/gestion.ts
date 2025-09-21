import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDataService, ContactData } from '../services/contact-data.service';

@Component({
  selector: 'app-gestion',
  imports: [CommonModule],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss',
})
export class Gestion implements OnInit {
  contactData: ContactData | null = null;

  constructor(private contactDataService: ContactDataService) {}

  ngOnInit() {
    this.contactData = this.contactDataService.getLastContactData();
  }
}
