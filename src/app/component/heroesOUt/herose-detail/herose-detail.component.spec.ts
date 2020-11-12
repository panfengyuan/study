import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroseDetailComponent } from './herose-detail.component';

describe('HeroseDetailComponent', () => {
  let component: HeroseDetailComponent;
  let fixture: ComponentFixture<HeroseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
