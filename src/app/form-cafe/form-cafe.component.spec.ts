import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCafeComponent } from './form-cafe.component';

describe('FormCafeComponent', () => {
  let component: FormCafeComponent;
  let fixture: ComponentFixture<FormCafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
