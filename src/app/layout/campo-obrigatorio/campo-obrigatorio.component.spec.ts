import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoObrigatorioComponent } from './campo-obrigatorio.component';

describe('CampoObrigatorioComponent', () => {
  let component: CampoObrigatorioComponent;
  let fixture: ComponentFixture<CampoObrigatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampoObrigatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoObrigatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
