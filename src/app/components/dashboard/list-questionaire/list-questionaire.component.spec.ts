import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuestionaireComponent } from './list-questionaire.component';

describe('ListQuestionaireComponent', () => {
  let component: ListQuestionaireComponent;
  let fixture: ComponentFixture<ListQuestionaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuestionaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
