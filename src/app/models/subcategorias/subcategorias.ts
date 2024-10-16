export class SubCategorias {
  idSubcategoria: number | null;
  idCategoria: number | null;
  ativo: boolean;
  nome: string;
  nomeCategoria: string;
  dataCriacao: string;
  dataEdicao: string;
  corFundo: string;
  corTexto: string;

  constructor(
    idSubcategoria: number | null = null,
    idCategoria: number | null = null,
    ativo: boolean = true, 
    nome: string = '', 
    nomeCategoria: string = '',
    dataCriacao: string = '', 
    dataEdicao: string = '',
    corFundo: string = '',
    corTexto: string = ''
  ){
    this.idSubcategoria = idSubcategoria;
    this.idCategoria = idCategoria;
    this.ativo = ativo;
    this.nome = nome;
    this.nomeCategoria = nomeCategoria;
    this.dataCriacao = dataCriacao;
    this.dataEdicao = dataEdicao;
    this.corFundo = corFundo;
    this.corTexto = corTexto;
  }
}