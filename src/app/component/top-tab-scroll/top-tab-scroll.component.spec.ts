import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTabScrollComponent } from './top-tab-scroll.component';

describe('TopTabScrollComponent', () => {
  let component: TopTabScrollComponent;
  let fixture: ComponentFixture<TopTabScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTabScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTabScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
