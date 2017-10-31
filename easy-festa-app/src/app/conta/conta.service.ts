//Módulos do Angular
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//Módulos da Aplicação
import { Consumidor } from './consumidor.class';
import { Fornecedor } from './fornecedor.class';


@Injectable()
export class ContaService {

  constructor (private http: Http) {}

  addConsumidor(consumidor: Consumidor) {
      let body = JSON.stringify(consumidor);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:3000/api/consumidor`, body, options).map((res: Response) => res.json());
  }

  addFornecedor(fornecedor: Fornecedor) {
    let body = JSON.stringify(fornecedor);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:3000/api/fornecedor`, body, options).map((res: Response) => res.json());
}

  /* updateAnuncio(anuncio: Anuncio) {
    let body = JSON.stringify(anuncio);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`http://localhost:3000/api/anuncio/editar`, body, options).map((res: Response) => res.json());
}

  removeAnuncio(id: String) {
    let body = id;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(`http://localhost:3000/api/anuncio/`+body, options).map((res: Response) => res.json());
    
  }

  getAnuncio(id: Number) {
    let body = id.toString();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`http://localhost:3000/api/anuncio/`+body, options).map((res: Response) => res.json());
    
  }*/

  getEndereco(cep) {
    return this.http.get(`http://viacep.com.br/ws/`+cep+`/json/`).map((res: Response) => res.json());
  }

  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  }

  
  getFornecedor(id) {
    id = "59f8001f4fa3f02c0cc61b9a";
    let body = id.toString();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`http://localhost:3000/api/consumidor/`+body, options).map((res: Response) => res.json());
    
  }

}