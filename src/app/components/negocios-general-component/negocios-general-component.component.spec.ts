import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociosGeneralComponentComponent } from './negocios-general-component.component';

describe('NegociosGeneralComponentComponent', () => {
  let component: NegociosGeneralComponentComponent;
  let fixture: ComponentFixture<NegociosGeneralComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegociosGeneralComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegociosGeneralComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
