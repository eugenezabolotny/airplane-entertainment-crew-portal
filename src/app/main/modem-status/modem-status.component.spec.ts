import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModemStatusComponent } from './modem-status.component';

describe('ModemStatusComponent', () => {
  let component: ModemStatusComponent;
  let fixture: ComponentFixture<ModemStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModemStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
