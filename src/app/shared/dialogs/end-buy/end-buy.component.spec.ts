import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndBuyComponent } from './end-buy.component';

describe('EndBuyComponent', () => {
  let component: EndBuyComponent;
  let fixture: ComponentFixture<EndBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
