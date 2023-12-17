import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyrootComponent } from './modifyroot.component';

describe('ModifyrootComponent', () => {
  let component: ModifyrootComponent;
  let fixture: ComponentFixture<ModifyrootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyrootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
