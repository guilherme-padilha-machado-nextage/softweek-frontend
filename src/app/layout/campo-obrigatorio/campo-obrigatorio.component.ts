import { Component, Input } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-campo-obrigatorio',
  templateUrl: './campo-obrigatorio.component.html',
  styleUrls: ['./campo-obrigatorio.component.scss']
})
export class CampoObrigatorioComponent {
  @Input() control: AbstractControl | null = null;

  obrigatorio(): boolean {
    return (this.control?.hasValidator(Validators.required) && !this.control?.value) ?? false;
  }
}
