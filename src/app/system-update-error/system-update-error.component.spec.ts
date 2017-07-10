import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUpdateErrorComponent } from './system-update-error.component';

describe('SystemUpdateErrorComponent', () => {
  let component: SystemUpdateErrorComponent;
  let fixture: ComponentFixture<SystemUpdateErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemUpdateErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemUpdateErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
