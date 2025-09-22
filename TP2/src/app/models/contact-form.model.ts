import { FormControl } from '@angular/forms';

export interface ContactFormModel {
  prenom: FormControl<string>;
  nom: FormControl<string>;
  age: FormControl<number | null>;
  hide: FormControl<boolean>;
  email: FormControl<string>;
  commentaire: FormControl<string>;
}
