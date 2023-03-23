import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionReactiveFormComponent } from './pension-reactive-form.component';

describe('PensionReactiveFormComponent', () => {
  let component: PensionReactiveFormComponent;
  let fixture: ComponentFixture<PensionReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
