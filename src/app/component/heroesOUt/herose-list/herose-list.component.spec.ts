import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroseListComponent } from './herose-list.component';

describe('HeroseListComponent', () => {
  let component: HeroseListComponent;
  let fixture: ComponentFixture<HeroseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
