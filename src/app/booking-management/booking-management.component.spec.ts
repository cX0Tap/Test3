import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingManagementComponent } from './booking-management.component';

describe('BookingManagementComponent', () => {
  let component: BookingManagementComponent;
  let fixture: ComponentFixture<BookingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
