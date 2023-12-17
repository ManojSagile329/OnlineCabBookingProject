import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootdetailsComponent } from './rootdetails.component';

describe('RootdetailsComponent', () => {
  let component: RootdetailsComponent;
  let fixture: ComponentFixture<RootdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RootdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
