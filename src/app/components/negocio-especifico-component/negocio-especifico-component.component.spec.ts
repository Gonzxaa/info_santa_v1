import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioEspecificoComponentComponent } from './negocio-especifico-component.component';

describe('NegocioEspecificoComponentComponent', () => {
  let component: NegocioEspecificoComponentComponent;
  let fixture: ComponentFixture<NegocioEspecificoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegocioEspecificoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegocioEspecificoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
