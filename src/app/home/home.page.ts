import { Component } from '@angular/core';
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
  IonList,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonButtons,
  IonModal,
  IonIcon,

} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
    IonList,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonButtons,
    IonModal,
    IonIcon
  ],
})
export class HomePage {
  segmentoSeleccionado: string = 'segment';

  isModalOpen: boolean = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen
  }

  isModalOpen2: boolean = false;

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen
  }
  cambiarSegmento(event: any) {
    this.segmentoSeleccionado = event.detail.value;
  }
}