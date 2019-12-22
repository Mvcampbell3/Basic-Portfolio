import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectItemComponent } from './porject-item.component';

describe('PorjectItemComponent', () => {
  let component: PorjectItemComponent;
  let fixture: ComponentFixture<PorjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
