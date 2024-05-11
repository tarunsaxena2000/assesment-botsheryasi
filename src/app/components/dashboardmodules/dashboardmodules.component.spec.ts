import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmodulesComponent } from './dashboardmodules.component';

describe('DashboardmodulesComponent', () => {
  let component: DashboardmodulesComponent;
  let fixture: ComponentFixture<DashboardmodulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardmodulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
