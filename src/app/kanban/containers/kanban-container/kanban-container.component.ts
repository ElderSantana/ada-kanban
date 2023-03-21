import { AddCardModalComponent } from './../../components/add-card-modal/add-card-modal.component';
import { UserService } from './../../services/user.service';
import { CardsService } from './../../services/cards.service';
import { Component, OnInit } from '@angular/core';
import { Card, Lista } from '../../models/Card';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-kanban-container',
  templateUrl: './kanban-container.component.html',
  styleUrls: ['./kanban-container.component.scss']
})
export class KanbanContainerComponent implements OnInit {
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

  public ngOnInit(): void {
    this.loadCards();
  }

  public login(): void {
    this.userService.login().subscribe((token:string) => {
      this.userService.setUserToken(token);
      this.authenticated = true;
      this.loadCards();
    });
  }

  public loadCards(): void {
    this.cardsService.getCards().subscribe(
      (cards: Card[]) => {
        this.authenticated = true;
        this.cards = cards;
        this.loadBoard();
      }, (error) => {
        if(error.status === 401 ) {
          this.authenticated = false;
        }
      }
    );
  }

  public openAddCardModal(): void {
    const initialState: ModalOptions = {
      initialState: {
        keyboard: false,
        backdrop : false,
        ignoreBackdropClick: true,
      }
    };
    this.bsModalRef = this.modalService.show(AddCardModalComponent);
    this.bsModalRef.onHidden?.subscribe(()=> {
      this.loadCards();
    });
  }

  private loadBoard(): void {
    this.resetBoard();

    this.cards.map((card: Card) => {
      switch (card.lista) {
        case Lista.Todo:
          this.todo.push(card);
        break;

        case Lista.Doing:
          this.doing.push(card);
        break;

        case Lista.Done:
          this.done.push(card);
        break;
        default:
          break;
      };
    });
  }

  private resetBoard(): void {
    this.todo = []
    this.doing = []
    this.done = [];
  }

}



