import { FormControl } from "@angular/forms";

export interface CardForm {
  id: FormControl<string>;
  titulo: FormControl<string>;
  conteudo?: FormControl<string>;
  lista?: FormControl<string>;
}
