import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodsCardComponent } from './cods-card.component';

describe('CodsCardComponent', () => {
  let component: CodsCardComponent;
  let fixture: ComponentFixture<CodsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
