import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDiamogComponent } from './confirm-diamog.component';

describe('ConfirmDiamogComponent', () => {
  let component: ConfirmDiamogComponent;
  let fixture: ComponentFixture<ConfirmDiamogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDiamogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDiamogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
