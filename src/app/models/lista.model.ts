import { ListaItem } from './lista-item.model';

export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: boolean;
    items:ListaItem[];

    constructor( titulo:string ){
        this.titulo = titulo;

        this.creadaEn = new Date();
        this.terminadaEn = false;
        this.items = [];

        this.id = new Date().getTime();
    }
}