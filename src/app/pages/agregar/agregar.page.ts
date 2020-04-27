import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: string;
  itemsLista = this.lista.items;

  constructor(private deseosService: DeseosService, private route:ActivatedRoute) {
    const listaId= this.route.snapshot.paramMap.get('listaId');

    this.lista = this.deseosService.obtenerLista(listaId);

   }

  ngOnInit() {
  }

  agregarItem(){
    if (this.nombreItem.length == 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);

    this.itemsLista.push(nuevoItem);

    this.nombreItem = '';

    this.deseosService.guardarStorage();

  }

  borrar(i){
    this.lista.items.splice(i, 1);
    this.deseosService.guardarStorage();
  }
}
