import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import confetti from 'canvas-confetti';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    NgIf,
    FormsModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  step = 1; // Controla qué pregunta se muestra
  accepted = false;

  // Datos de las respuestas
  anniversaryInput = '';
  correctDate = '2024-10-27'; // Formato estándar para el input date

  noBtnPos = { x: 0, y: 0, position: 'relative' };

  checkFirstStep() {
    if (this.anniversaryInput === this.correctDate) {
      this.step = 2;
    } else {
      alert('Nada, piensa bien');
    }
  }

  nextStep(isCorrect: boolean) {
    if (isCorrect) {
      this.step = 3;
    } else {
      alert('Como te equivocaste, bb tonta');
    }
  }

  moveNoButton() {
    // Restamos márgenes (100px) para que no se pegue a los bordes del móvil
    const newX = Math.random() * (window.innerWidth - 120);
    const newY = Math.random() * (window.innerHeight - 60);

    this.noBtnPos = {
      x: newX,
      y: newY,
      position: 'fixed'
    };
  }

  confirm() {
    this.accepted = true;
    this.celebrate();
  }

  celebrate() {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00d4ff', '#9d50bb', '#ffffff']
    });
  }
}
