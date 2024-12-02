import { Variante } from "./variante";

//export class Produto {
//  public codigo: number = 0;
//  public nome: string = "";
//  public preco: number = 0;
//  public genero: string = "";
//  public marca: string = "";
//  public keywords: string = "";
//  public categoria: string = "";
//  public cores: string[] = [];
//  public tamanhos: number[] = [];
//  public descricao: string = ""
//  public tamanhoSelecionado?: number = 0;
//}

export class Produto {
  public id: number = 0;
  public nome: string = "";
  public categoria: string = "";
  public marca: string = "";
  public keywords: string = "";
  public descricao: string = ""
  public preco: number = 0;
  public tamanhos: number[] = [];
  public genero: string = "";
  public variantes: Variante[] = [];
  public tamanhoSelecionado?: number = 0;
}


//export const listaProdutos: Produto[] = [
// { codigo: 1, nome: "Jordan Luka 3", preco: 1149.90, genero: "Masculino", marca: "Jordan", keywords: "Tênis masculino basquete Luka 3", categoria: "Basquete", descricao: "", cores: ["Branco, verde", "Branco, preto, vermelho"], tamanhos: [34, 50] },
// { codigo: 2, nome: "Air Jordan Legacy 312 Low", preco: 1249.90, genero: "Feminino", marca: "Jodan", keywords: "Tênis feminino basquete Air Jordan Legacy 312 Low", categoria: "Basquete", descricao: "", cores: ["Preto, cinza, vermelho", "Branco, vermelho"], tamanhos: [34, 43] },
// { codigo: 3, nome: "Anthony Edwards 1 The Future", preco: 1399.90, genero: "Unissex", marca: "Adidas", keywords: "Tênis unissex masculino feminino Adidas Anthony Edwards 1 The Future basquete", categoria: "Basquete", descricao: "", cores: ["Preto, carbono", "Salmão"], tamanhos: [34, 50] },
// { codigo: 4, nome: "Harden Volume 8", preco: 1099.90, genero: "Unissex", marca: "Adidas", keywords: "Tênis unissex masculino feminino Adidas Harden basquete Volume 8", categoria: "Basquete", descricao: "", cores: ["Branco, preto, vermelho", "Rosa, laranja"], tamanhos: [34, 50] },
// { codigo: 5, nome: "Nike SB Force 58", preco: 699.90, genero: "Unissex", marca: "Nike", keywords: "Tênis unissex masculino feminino NikeSB Force 58 skate", categoria: "Skate", descricao: "", cores: ["Preto, azul"], tamanhos: [34, 48] },
// { codigo: 6, nome: "Nike SB Chron 2", preco: 799.90, genero: "Unissex", marca: "Nike", keywords: "Tênis unissex masculino feminino NikeSB Chron 2 skate", categoria: "Skate", descricao: "", cores: ["Azul, branco"], tamanhos: [34, 48] },
// { codigo: 7, nome: "Nike Air Max Dn", preco: 899.90, genero: "Unissex", marca: "Nike", keywords: "Tênis unissex masculino feminino Nike Air Max Dn casual", categoria: "Casual", descricao: "", cores: ["Azul, branco"], tamanhos: [34, 49] },
// { codigo: 8, nome: "Nike SB PS8", preco: 999.90, genero: "Unissex", marca: "Nike", keywords: "Tênis unissex masculino feminino NikeSB PS8 skate", categoria: "Skate", descricao: "", cores: ["Cinza, azul"], tamanhos: [34, 48] },
// { codigo: 9, nome: "Nike Zoom Vomero 5", preco: 1199.90, genero: "Masculino", marca: "Nike", keywords: "Tênis masculino Nike Zoom Vomero 5 casual", categoria: "Casual", descricao: "", cores: ["Branco, cinza"], tamanhos: [34, 49] },
// { codigo: 10, nome: "Nike Cortez Leather", preco: 699.90, genero: "Feminino", marca: "Nike", keywords: "Tênis Nike feminino Cortez Leather casual", categoria: "Casual", descricao: "", cores: ["Branco, preto"], tamanhos: [34, 46] },
// { codigo: 11, nome: "Nike Pegasus Plus", preco: 1399.90, genero: "Feminino", marca: "Nike", keywords: "Tênis Nike feminino Pegasus Plus corrida", categoria: "Corrida", descricao: "", cores: ["Rosa, branco"], tamanhos: [34, 46] },
// { codigo: 12, nome: "Nike Motiva", preco: 1299.90, genero: "Feminino", marca: "Nike", keywords: "Tênis Nike feminino Motiva corrida", categoria: "Corrida", descricao: "", cores: ["Cinza"], tamanhos: [34, 46] },
// { codigo: 13, nome: "Nike Vaporfly 3", preco: 1299.90, genero: "Masculino", marca: "Nike", keywords: "Tênis Nike Masculino Vaporfly 3 corrida", categoria: "Corrida", descricao: "", cores: ["Branco, azul, rosa"], tamanhos: [34, 46] },
//]//
