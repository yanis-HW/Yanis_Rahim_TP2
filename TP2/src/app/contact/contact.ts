import { Component, OnInit, ChangeDetectionStrategy, DestroyRef, inject } from '@angular/core';
import {
  FormGroup,
  Validators,
  ReactiveFormsModule,
  NonNullableFormBuilder,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactDataService, ContactData } from '../services/contact-data.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact implements OnInit {
  contactForm: FormGroup<ContactFormModel>;

  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private contactDataService: ContactDataService
  ) {
    this.contactForm = this.fb.group({
      prenom: this.fb.control('', { validators: [Validators.required] }),
      nom: this.fb.control('', { validators: [Validators.required] }),
      age: new FormControl<number | null>(null),
      hide: this.fb.control(false),
      email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
      commentaire: this.fb.control('', { validators: [Validators.required] }),
    });
  }

  ngOnInit() {
    // Observer les changements de la checkbox 'hide'
    this.contactForm
      .get('hide')
      ?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((hideValue) => {
        const emailControl = this.contactForm.controls.email;
        if (hideValue) {
          emailControl.disable({ emitEvent: false });
          emailControl.reset('');
        } else {
          emailControl.enable({ emitEvent: false });
        }
      });
  }

  get isEmailHidden(): boolean {
    return this.contactForm.controls.hide.value;
  }

  // Convenience getters to simplify template access and keep strong typing
  get prenomCtrl() {
    return this.contactForm.controls.prenom;
  }
  get nomCtrl() {
    return this.contactForm.controls.nom;
  }
  get ageCtrl() {
    return this.contactForm.controls.age;
  }
  get emailCtrl() {
    return this.contactForm.controls.email;
  }
  get commentaireCtrl() {
    return this.contactForm.controls.commentaire;
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();
    if (!this.contactForm.valid) return;

    const formValue = this.contactForm.getRawValue();
    const contactData: ContactData = {
      prenom: formValue.prenom,
      nom: formValue.nom,
      age: formValue.age == null ? undefined : String(formValue.age),
      email: formValue.hide ? undefined : formValue.email,
      commentaire: formValue.commentaire,
      dateSoumission: new Date(),
    };

    this.contactDataService.saveContactData(contactData);
    alert('Le formulaire est valide');
    this.router.navigate(['/accueil']);
  }
}

// Typed form model
interface ContactFormModel {
  prenom: FormControl<string>;
  nom: FormControl<string>;
  age: FormControl<number | null>;
  hide: FormControl<boolean>;
  email: FormControl<string>;
  commentaire: FormControl<string>;
}
