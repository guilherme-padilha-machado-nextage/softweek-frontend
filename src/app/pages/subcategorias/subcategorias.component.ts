import { Component, OnInit } from '@angular/core';
import { SubCategorias } from '../../models/subcategorias/subcategorias';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubCategoriasService } from '../../services/subcategorias/subcategorias.service';
import { ColorUtil } from '../../utils/colorUtil';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.component.html',
  styleUrls: ['./subcategorias.component.scss'] 
})
export class SubCategoriasComponent implements OnInit {
  dialogCadastroSubcategoria: boolean = false;
  desabilitarBotaoSalvar: boolean = false;
  formularioCadastroSubcategoria!: FormGroup;
  subCategorias: SubCategorias[] = [];
  cores: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private subCategoriasSvc: SubCategoriasService,
    private toastr: ToastrService 
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario(new SubCategorias());
    this.carregarSubcategorias();
  }

  get formularioCadastro(): any { return this.formularioCadastroSubcategoria.controls; }

  inicializarFormulario(subCategorias: SubCategorias){
    this.formularioCadastroSubcategoria = this.formBuilder.group({
      idSubcategoria: [subCategorias.idSubcategoria],
      idCategoria: [subCategorias.idCategoria],
      ativo: [subCategorias.ativo],
      nome: [subCategorias.nome, Validators.required],
      dataCriacao: [subCategorias.dataCriacao],
      dataEdicao: [subCategorias.dataEdicao],
      corFundo: [subCategorias.corFundo],
      corTexto: [subCategorias.corTexto]
    });
  }

  carregarSubcategorias(){
    this.subCategoriasSvc.listarTodasSubCategorias().subscribe((subCategorias: SubCategorias[]) => {
      this.subCategorias = subCategorias;

      this.subCategorias.forEach((subCategorias) => {
        const cores = ColorUtil.obterCor();

        subCategorias.corFundo = cores.fundo;
        subCategorias.corTexto = cores.texto;     
      });
    });
  }

  editarSubcategoria(subCategorias: SubCategorias){
    this.formularioCadastroSubcategoria.patchValue(subCategorias);
    this.dialogCadastroSubcategoria = true;
  }
  
  criarSubcategoria(){
    this.inicializarFormulario(new SubCategorias());
    this.dialogCadastroSubcategoria = true;
  }

  salvarSubcategoria() {
    if (!this.formularioCadastroSubcategoria.valid) 
      return;
    
    this.desabilitarBotaoSalvar = true;
  
    const subcategoria = this.formularioCadastroSubcategoria.value;
    const idSubcategoria = subcategoria.idSubcategoria;
  
    if (!idSubcategoria) 
      this.salvarNovaSubcategoria(subcategoria);
    else 
      this.atualizarSubategoria(subcategoria);
  }

  salvarNovaSubcategoria(subcategoria: SubCategorias){
    this.subCategoriasSvc.salvarSubCategoria(subcategoria).subscribe(() => {
      this.toastr.success('Subcategoria salva com sucesso!', 'Sucesso');
      this.finalizarAcao();
    });
  }

  atualizarSubategoria(subcategoria: SubCategorias){
    this.subCategoriasSvc.editarSubCategoria(subcategoria).subscribe(() => {
      this.toastr.success('Subcategoria atualizada com sucesso!', 'Sucesso');
      this.finalizarAcao();
    });
  }

  finalizarAcao() {
    this.dialogCadastroSubcategoria = false;
    this.desabilitarBotaoSalvar = false;
    this.carregarSubcategorias();
  }
}
