import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1,nombre: 'Víctor', apellido: 'Gómez', email: 'victormanuelgomu@gmail.com', createAt: '2019-03-27'},
    {id: 2,nombre: 'Víctor', apellido: 'Gómez', email: 'victormanuelgomu@gmail.com', createAt: '2019-03-27'},
    {id: 3,nombre: 'Víctor', apellido: 'Gómez', email: 'victormanuelgomu@gmail.com', createAt: '2019-03-27'},
    {id: 4,nombre: 'Víctor', apellido: 'Gómez', email: 'victormanuelgomu@gmail.com', createAt: '2019-03-27'},
    {id: 5,nombre: 'Víctor', apellido: 'Gómez', email: 'victormanuelgomu@gmail.com', createAt: '2019-03-27'},
    {id: 6,nombre: 'Víctor', apellido: 'Gómez', email: 'victormanuelgomu@gmail.com', createAt: '2019-03-27'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
