import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BuscaService } from '../busca.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent implements OnInit {
  resultadosBusca: any[] = [];
  termoBuscado: string = '';

  constructor(
    private route: ActivatedRoute,
    private buscaService: BuscaService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query: string = params['termo'] || '';
      this.termoBuscado = query;
      this.realizarBusca(query);
    });
  }

  realizarBusca(query: string): void {
    if (!query || query.trim() === '') {
      this.buscaService.getAllItems().subscribe({
        next: (results: any[]) => {
          this.resultadosBusca = results;
        },
        error: (err) => {
          console.error('Erro ao buscar: ', err);
        }
      });
    } else {
      this.buscaService.buscar(query).subscribe({
        next: (results: any[]) => {
          this.resultadosBusca = results;
        },
        error: (err) => {
          console.error('Erro ao buscar: ', err);
        }
      });
    }
  }
}

