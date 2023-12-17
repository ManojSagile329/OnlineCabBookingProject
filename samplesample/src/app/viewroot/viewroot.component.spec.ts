import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrootComponent } from './viewroot.component';

describe('ViewrootComponent', () => {
  let component: ViewrootComponent;
  let fixture: ComponentFixture<ViewrootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewrootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
