export class ColorUtil {
  public static obterCor(): { fundo: string, texto: string } {
    const corFundo = this.gerarCorAleatoria();
    const corTexto = this.gerarCorEscuraTexto(corFundo, 100);
  
    return {
      fundo: this.converterRgb(corFundo),
      texto: this.converterRgb(corTexto)
    };
  }

  static gerarCorAleatoria(): { r: number, g: number, b: number } {
    const r = Math.floor((Math.random() * 128) + 127);
    const g = Math.floor((Math.random() * 128) + 127);
    const b = Math.floor((Math.random() * 128) + 127);
    return { r, g, b };
  }

  static gerarCorEscuraTexto(cor: { r: number, g: number, b: number }, fator: number): { r: number, g: number, b: number } {
    return {
      r: Math.max(0, cor.r - fator),
      g: Math.max(0, cor.g - fator),
      b: Math.max(0, cor.b - fator)
    };
  }

  static converterRgb(cor: { r: number, g: number, b: number }): string {
    return `rgb(${cor.r}, ${cor.g}, ${cor.b})`;
  }
}
