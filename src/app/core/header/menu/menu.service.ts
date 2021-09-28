import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: 'inicio', path: './inicio', children: [] },
      {
        name: 'estamos-fazendo',
        path: './estamos-fazendo',
        children: [
          {
            name: 'books',
            path: './books',
            children: [
              {
                name: 'THE FELLOWSHIP OF THE RING Details',
                path: './book1'
              },

            ]
          }
        ]
      },
    ];

    return menu;
  }

}
