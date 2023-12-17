import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrootComponent } from './addroot.component';

describe('AddrootComponent', () => {
  let component: AddrootComponent;
  let fixture: ComponentFixture<AddrootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddrootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
