import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemodulesComponent } from './homemodules.component';

describe('HomemodulesComponent', () => {
  let component: HomemodulesComponent;
  let fixture: ComponentFixture<HomemodulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomemodulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomemodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
