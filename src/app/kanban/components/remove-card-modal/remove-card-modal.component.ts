import { CardsService } from '../../services/cards.service';
import { Card } from '../../models/Card';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CardForm } from '../../models/CardForm';


@Component({
  selector: 'edit-card-modal',
  templateUrl: './remove-card-modal.component.html',
  styleUrls: ['./remove-card-modal.component.scss']
})
export class RemoveCardModalComponent implements OnInit {
  public card!: Card;
  public registerForm!: FormGroup;
  public list: string = '';

  constructor(
    public bsModalRef: BsModalRef,
    private cardsService: CardsService
    ) {}

  public ngOnInit(): void {
  }

  public confirm(): void {
    this.deleteCard();
  };

  public decline(): void {
    this.bsModalRef.hide();
  }

  public deleteCard(): void {
    this.cardsService.deleteCard(this.card.id).subscribe(
      () => {
        this.bsModalRef.hide();
    });
  }

}


