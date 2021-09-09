import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ativo-detalhe',
  templateUrl: './ativo-detalhe.component.html',
  styleUrls: ['./ativo-detalhe.component.css']
})
export class AtivoDetalheComponent implements OnInit {

  nomeAtivo: string | undefined;

  constructor(private route: ActivatedRoute) { 
    // this.nomeAtivo = this.route.snapshot.params ['nome'];
    
  }

  ngOnInit(): void {
    this.route.params.subscribe( 
    (params: any) => {
      this.nomeAtivo = params ['nome'];

    });
  }

}
