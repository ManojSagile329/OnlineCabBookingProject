import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarncustloginComponent } from './warncustlogin.component';

describe('WarncustloginComponent', () => {
  let component: WarncustloginComponent;
  let fixture: ComponentFixture<WarncustloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarncustloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarncustloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
