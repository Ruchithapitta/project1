import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuchithaComponent } from './ruchitha.component';

describe('RuchithaComponent', () => {
  let component: RuchithaComponent;
  let fixture: ComponentFixture<RuchithaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuchithaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuchithaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
