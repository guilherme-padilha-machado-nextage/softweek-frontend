import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent implements OnInit {
  title = 'softweek-nextage-front';

  constructor(private primengConfig: PrimeNGConfig, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  showSuccess() {
    this.toastr.success('Operação realizada com sucesso!', 'Sucesso');
  }

  showError() {
    this.toastr.error('Ocorreu um erro ao realizar a operação.', 'Erro');
  }
}
