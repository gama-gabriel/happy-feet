import { Produto } from "./produto";

export class Item {
  public codigo: number = 0;
  public produto: Produto = new Produto();
  public quantidade: number = 0;
  public tamanhos: number[] = [];
  public valor: number = 0;
}