import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  //Recibir Categoria por Input

  @Input() category: string = 'Todos los productos';
  
  constructor() { }

  getRealName(category: string) {
    const realNames: {[key: string]: string} = {
      'Bater%C3%ADas%20Electr%C3%B3nicas': 'Baterías Electrónicas',
      'Bater%C3%ADas%20Ac%C3%BAstica': 'Baterías Acústicas',
      'Aud%C3%ADfonos': 'Audífonos',
      'Micr%C3%B3fonos': 'Micrófonos',
    };

    //Retornar el valor de la categoria si existe en el objeto realNames o retornar la categoria con capitalize
    return realNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
  }
}
