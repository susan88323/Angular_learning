import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUpdateComponent } from './system-update.component';

describe('SystemUpdateComponent', () => {
  let component: SystemUpdateComponent;
  let fixture: ComponentFixture<SystemUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
