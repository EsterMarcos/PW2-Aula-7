import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world ';
  foto = 'favicon.ico';
  peso =0;
  altura =0;

  exibir(){
    alert(this.title);
  }
  imc(){
    let imc =this.peso/(this.altura*this.altura);
    alert (imc);
  }
}
