import { Component, OnInit } from '@angular/core';
import { AtivosService } from './ativos.service';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent implements OnInit {

  ativos: any[] | undefined;

  constructor(private ativosService: AtivosService) { }

  ngOnInit(): void {
    this.ativos = this.ativosService.getAtivos();
  }

}
