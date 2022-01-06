import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenererHistoireComponent } from './generer-histoire.component';

describe('GenererHistoireComponent', () => {
  let component: GenererHistoireComponent;
  let fixture: ComponentFixture<GenererHistoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenererHistoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenererHistoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
