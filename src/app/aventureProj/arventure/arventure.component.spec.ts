import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArventureComponent } from './arventure.component';

describe('ArventureComponent', () => {
  let component: ArventureComponent;
  let fixture: ComponentFixture<ArventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArventureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
