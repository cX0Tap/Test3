import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRequsetGetComponent } from './test-requset-get.component';

describe('TestRequsetGetComponent', () => {
  let component: TestRequsetGetComponent;
  let fixture: ComponentFixture<TestRequsetGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRequsetGetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRequsetGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
