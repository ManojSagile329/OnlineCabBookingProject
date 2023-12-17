import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidepageComponent } from './ridepage.component';

describe('RidepageComponent', () => {
  let component: RidepageComponent;
  let fixture: ComponentFixture<RidepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RidepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RidepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
