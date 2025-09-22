import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDataService, ContactData } from '../services/contact-data.service';
import { NotFound } from '../not-found/not-found';

@Component({
  selector: 'app-gestion',
  imports: [CommonModule, NotFound],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gestion implements OnInit {
  public contactData: ContactData | null = null;
  private readonly contactDataService = inject(ContactDataService);

  public ngOnInit() {
    this.contactData = this.contactDataService.getLastContactData();
  }
}
