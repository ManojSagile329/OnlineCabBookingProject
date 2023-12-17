import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdriversComponent } from './viewdrivers.component';

describe('ViewdriversComponent', () => {
  let component: ViewdriversComponent;
  let fixture: ComponentFixture<ViewdriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewdriversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewdriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
