import { CardsService } from '../../services/cards.service';
import { Card } from '../../models/Card';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CardForm } from '../../models/CardForm';


@Component({
  selector: 'edit-card-modal',
  templateUrl: './edit-card-modal.component.html',
  styleUrls: ['./edit-card-modal.component.scss']
})
export class EditCardModalComponent implements OnInit {
  public card!: Card;
  public registerForm!: FormGroup;
  public list: string = '';

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

    this.registerForm.patchValue(this.card);
  }

  public saveCard(): void {
    this.cardsService.putCard(this.registerForm.value).subscribe(
      result => {
        this.bsModalRef.hide();
    });
  }

}


