import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactDataService, ContactData } from '../services/contact-data.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private contactDataService: ContactDataService
  ) {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      hide: [false],
      email: ['', [Validators.required, Validators.email]],
      commentaire: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Observer les changements de la checkbox 'hide'
    this.contactForm.get('hide')?.valueChanges.subscribe((hideValue) => {
      const emailControl = this.contactForm.get('email');

      if (hideValue) {
        // Si hide est coché, on retire les validateurs et on vide le champ
        emailControl?.clearValidators();
        emailControl?.setValue('');
      } else {
        // Si hide n'est pas coché, on remet les validateurs
        emailControl?.setValidators([Validators.required, Validators.email]);
      }

      emailControl?.updateValueAndValidity();
    });
  }

  get isEmailHidden(): boolean {
    return this.contactForm.get('hide')?.value;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      const contactData: ContactData = {
        prenom: formValue.prenom,
        nom: formValue.nom,
        age: formValue.age,
        email: formValue.hide ? undefined : formValue.email,
        commentaire: formValue.commentaire,
        dateSoumission: new Date(),
      };

      this.contactDataService.saveContactData(contactData);
      alert('Le formulaire est valide');
      this.router.navigate(['/accueil']);
    }
  }
}
