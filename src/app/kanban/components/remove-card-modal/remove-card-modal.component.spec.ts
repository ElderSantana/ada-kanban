import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCardModalComponent } from './remove-card-modal.component';

describe('AddCardModalComponent', () => {
  let component: RemoveCardModalComponent;
  let fixture: ComponentFixture<RemoveCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCardModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
