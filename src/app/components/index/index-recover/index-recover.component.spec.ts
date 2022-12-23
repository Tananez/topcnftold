import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRecoverComponent } from './index-recover.component';

describe('IndexRecoverComponent', () => {
  let component: IndexRecoverComponent;
  let fixture: ComponentFixture<IndexRecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexRecoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
