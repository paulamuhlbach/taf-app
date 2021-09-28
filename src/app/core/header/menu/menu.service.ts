import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: '', path: './inicio', children: [] },
      {
        name: 'estamos-fazendo',
        path: './estamos-fazendo',
        children: [
          {
            name: 'acoes-programas',
            path: './acoes-programas',

          },
          {
            name: 'carta-servicos',
            path: './carta-servicos',

          },
        ]
      },
    ];

    return menu;
  }

}
