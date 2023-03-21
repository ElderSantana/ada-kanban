import { CardsService } from './../../services/cards.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CardForm } from '../../models/CardForm';


@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.scss']
})
export class AddCardModalComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder : FormBuilder,
    private cardsService: CardsService
    ) {}

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group<CardForm>({
      id: new FormControl('', {
        nonNullable: true,
      }),
      titulo: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(5)]
      }),
      conteudo: new FormControl('', {
        nonNullable: true,
        validators:  [Validators.required, Validators.minLength(10)]
      }),
      lista: new FormControl('ToDo', {
        nonNullable: true,
        validators:  [Validators.required,]
      }),
    });
  }

  public saveCard(): void {
    this.cardsService.postCard(this.registerForm.value).subscribe(
      result => {
        this.bsModalRef.hide();
    });
  }

}


