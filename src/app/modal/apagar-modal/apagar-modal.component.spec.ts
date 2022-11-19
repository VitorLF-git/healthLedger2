import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApagarModalComponent } from './apagar-modal.component';

describe('ApagarModalComponent', () => {
  let component: ApagarModalComponent;
  let fixture: ComponentFixture<ApagarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApagarModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApagarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
