import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';


@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  constructor(private dataService: DataService) { }
  public listaApi: any = [];

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.dataService.getData()
      .subscribe(
        data => {
          this.listaApi = data;
          console.log(this.listaApi);
        },
      )
  }
}
