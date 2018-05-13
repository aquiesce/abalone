import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackbeardCardComponent } from './blackbeard-card.component';

describe('BlackbeardCardComponent', () => {
  let component: BlackbeardCardComponent;
  let fixture: ComponentFixture<BlackbeardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackbeardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackbeardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
