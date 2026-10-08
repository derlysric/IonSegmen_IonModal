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
  IonModal
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
    IonModal
  ],
})
export class HomePage {
  segmentoSeleccionado: string = 'todos';

  isModalOpen: boolean = false;

  cambiarSegmento(event: any) {
    this.segmentoSeleccionado = event.detail.value;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen
  }
}