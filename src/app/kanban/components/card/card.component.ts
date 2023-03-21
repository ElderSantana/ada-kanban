import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Card, Lista } from '../../models/Card';
import { CardsService } from '../../services/cards.service';
import { UserService } from '../../services/user.service';
import { EditCardModalComponent } from '../edit-card-modal/edit-card-modal.component';
import { RemoveCardModalComponent } from '../remove-card-modal/remove-card-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public card!: Card;
  @Input() public list: string = '';
  @Input() public prevStatus: Lista = Lista.None;;
  @Input() public nextStatus: Lista = Lista.None;
  @Output() loadCards = new EventEmitter<boolean>();


  public cards: Card[] = [];
  public todo: Card[] = [];
  public doing: Card[] = [];
  public done: Card[] = [];
  private bsModalRef?: BsModalRef;
  public authenticated : boolean = false;
  public newStatusTodo: Lista = Lista.Todo;
  public newStatusDoing: Lista = Lista.Doing;
  public newStatusDone: Lista = Lista.Done;


  constructor(
    private cardsService: CardsService,
    private userService: UserService,
    private modalService: BsModalService
  ) {

  }

  public openEditCardModal(card: Card , list: string): void {
    const initialState: ModalOptions = {
      initialState: {
        card,
        list: list,
      },
    };

    this.bsModalRef = this.modalService.show(EditCardModalComponent, initialState);
    this.bsModalRef.onHidden?.subscribe(()=> {
      this.loadCards.next(true);
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  public openRemoveCardModal(card: Card , list: string): void {
    const initialState: ModalOptions = {
      initialState: {
        card,
        list: list,
      },
    };

    this.bsModalRef = this.modalService.show(RemoveCardModalComponent, initialState);
    this.bsModalRef.onHidden?.subscribe(()=> {
      this.loadCards.next(true);
    });
  }

  public changePrevCardStatus(): void {
    if(this.prevStatus !== Lista.None) {
      this.card.lista = this.prevStatus;
      this.editCard(this.card);
    }
  }

  public changeNextCardStatus(): void {
    if(this.nextStatus !== Lista.None) {
      this.card.lista = this.nextStatus;
      this.editCard(this.card);
    }
  }

  public editCard(card: Card): void {
    this.cardsService.putCard(card).subscribe(
      () => {
        this.loadCards.next(true);
      }
    );
  }

}
