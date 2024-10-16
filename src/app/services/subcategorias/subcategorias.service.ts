import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategorias } from '../../models/subcategorias/subcategorias';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriasService {

  constructor(private http: HttpClient) { }

  listarTodasSubCategorias() {
    return this.http.get<SubCategorias[]>(`${environment.apiUrl}listar-subcategorias`);
  }

  buscarSubCategoria() {
    return this.http.get<SubCategorias>(`${environment.apiUrl}buscar-subcategoria`);
  }

  editarSubCategoria(subCategoria: SubCategorias) {
    return this.http.put<SubCategorias>(`${environment.apiUrl}atualizar-subcategoria`, subCategoria);
  }

  salvarSubCategoria(subCategoria: SubCategorias) {
    return this.http.post<SubCategorias[]>(`${environment.apiUrl}salvar-subcategoria`, subCategoria);
  }

  listarSubcategoriasPorProduto(idCategoria: number) {
    return this.http.get<SubCategorias[]>(`${environment.apiUrl}listar-subcategorias-categoria/${idCategoria}`);
  }
}
