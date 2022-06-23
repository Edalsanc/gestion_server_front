

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegistroVacanteService } from 'src/app/services/registro-vacante.service';
import { v4 as uuidv4 } from 'uuid';
import { ModeloServer } from 'src/app/models/form-server.model';
import { Observable, Subscriber } from 'rxjs';





@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})


export class ApplyFormComponent implements OnInit {



  uuid: any;
  myimage: Observable<any> | undefined;
  isLoading: boolean = false;




  listaServers: any = [];

  swe: boolean = false;
  indiceE: any = "";
  uuidG: string = "";


  formE: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private serviceRegistro: RegistroVacanteService,

  ) { }

  ngOnInit(): void {

    this.crearFormServer();

  }




  /**
    * Se crea form group para realizar validaciones de formulario 
    */
  crearFormServer() {

    this.formE = this.fb.group({
      server: ["", [Validators.required]],
      ip: ["", [Validators.required]],

    });
  }




  /**
   * Se ejecuta al presionar el boton guardar cambios
   * @param datos Es el valor de los datos enviado desde el formulario
   */
  enviarE(datos: any) {


    let modelE = new ModeloServer();


    modelE.server = datos.server;
    modelE.ip = datos.ip;


    if (!this.swe) {

      this.listaServers.push(modelE);
      console.log('nuevo ', modelE)

    } else {

      this.listaServers[this.indiceE] = modelE;
      console.log('editado ', modelE)
    }

    this.formE.reset();


  }


  /**
   * Elimina un registro de la tabla obteniendo una posición
   * @param indice Es la pocicion en el arreglo que se envia para eliminar en la tabla
   */
  eliminarServer(indice: any) {

    Swal.fire({
      title: 'Desea Eliminar este registro?',
      text: "No se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Este registro se ha eliminado.',
          'success'
        )
        this.listaServers.splice(indice, 1);
      }
    });
  }


  /**
   * Inicia la propiedad global sw en false para para indicar que se va a ingresar un registro nuevo
   */
  agregarServer() {

    this.formE.reset();
    this.swe = false;

  }


  /**
    * Agrega el registro seleccionado al arreglo para ser editado
    * @param item Es el registro seleccionado desde el html
    * @param indice Es la posicion en el arreglo
    */
  editarServer(item: any, indice: any) {
    this.swe = true;
    this.formE.setValue(item);
    this.indiceE = indice;

  }






}