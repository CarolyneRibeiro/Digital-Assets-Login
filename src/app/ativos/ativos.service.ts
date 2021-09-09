import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtivosService {
  getAtivos() {
    return[
      {nomeAtivo: 'imob', descricao: 'Tokenização imobiliária' },
      {nomeAtivo: 'ris', descricao: 'Risco sacado'}
      
    ];


  }

  constructor() { }
}
