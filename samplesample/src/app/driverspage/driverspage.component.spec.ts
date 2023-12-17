import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverspageComponent } from './driverspage.component';

describe('DriverspageComponent', () => {
  let component: DriverspageComponent;
  let fixture: ComponentFixture<DriverspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
