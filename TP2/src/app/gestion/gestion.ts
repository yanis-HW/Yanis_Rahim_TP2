import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDataService, ContactData } from '../services/contact-data.service';

@Component({
  selector: 'app-gestion',
  imports: [CommonModule],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gestion implements OnInit {
  contactData: ContactData | null = null;
  private readonly contactDataService = inject(ContactDataService);

  ngOnInit() {
    this.contactData = this.contactDataService.getLastContactData();
  }
}
