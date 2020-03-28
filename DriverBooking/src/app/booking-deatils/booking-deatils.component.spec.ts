import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDeatilsComponent } from './booking-deatils.component';

describe('BookingDeatilsComponent', () => {
  let component: BookingDeatilsComponent;
  let fixture: ComponentFixture<BookingDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
