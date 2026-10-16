import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSegmentView,
  IonSegmentContent,
  IonButton,
  IonModal,
  IonButtons,
  IonItem,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonSegmentView,
    IonSegmentContent,
    IonButton,
    IonModal,
    IonButtons,
    IonItem,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class HomePage {

  @ViewChild(IonModal) modal!: IonModal;

  usuario = {
    nombre: '',
    email: ''
  };

  guardarUsuario() {
    console.log('Datos guardados:', this.usuario);
    this.modal.dismiss();
  }

  cerrarModal() {
    this.modal.dismiss();
  }
}

