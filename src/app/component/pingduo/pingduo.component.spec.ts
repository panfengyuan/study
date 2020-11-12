import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingduoComponent } from './pingduo.component';

describe('PingduoComponent', () => {
  let component: PingduoComponent;
  let fixture: ComponentFixture<PingduoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PingduoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PingduoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
