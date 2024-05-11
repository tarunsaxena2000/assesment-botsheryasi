import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsmodulesComponent } from './settingsmodules.component';

describe('SettingsmodulesComponent', () => {
  let component: SettingsmodulesComponent;
  let fixture: ComponentFixture<SettingsmodulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsmodulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
