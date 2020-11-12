import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroseHomeComponent } from './herose-home.component';

describe('HeroseHomeComponent', () => {
  let component: HeroseHomeComponent;
  let fixture: ComponentFixture<HeroseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroseHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
