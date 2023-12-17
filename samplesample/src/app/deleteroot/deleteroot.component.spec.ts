import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterootComponent } from './deleteroot.component';

describe('DeleterootComponent', () => {
  let component: DeleterootComponent;
  let fixture: ComponentFixture<DeleterootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleterootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleterootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
