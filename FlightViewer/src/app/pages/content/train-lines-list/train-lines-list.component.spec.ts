import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainLinesListComponent } from './train-lines-list.component';

describe('TrainLinesListComponent', () => {
  let component: TrainLinesListComponent;
  let fixture: ComponentFixture<TrainLinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainLinesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainLinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
