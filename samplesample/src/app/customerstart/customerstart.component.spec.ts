import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerstartComponent } from './customerstart.component';

describe('CustomerstartComponent', () => {
  let component: CustomerstartComponent;
  let fixture: ComponentFixture<CustomerstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerstartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
