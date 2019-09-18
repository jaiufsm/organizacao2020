import { Component, OnInit, Input } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-avaliador-modal',
  templateUrl: './avaliador-modal.page.html',
  styleUrls: ['./avaliador-modal.page.scss'],
})
export class AvaliadorModalPage implements OnInit {

  @Input() id: string;
  @Input() nome: string;
  @Input() trabalhos: Array<Array<string>>;

  constructor(private apiJai: ApiJaiService, public modalController: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  doCheck(type: string) {
    const currentDate = new Date();
    this.apiJai.setCheck(this.id, this.nome, currentDate.toLocaleDateString(), currentDate.toLocaleTimeString(), type).then(response => {
      this.presentAlert(type);
    });
  }

  async presentAlert(type: string) {
    const alert = await this.alertController.create({
      header: 'Check-' + type,
      message: 'Check-' + type + ' efetuado',
      buttons: ['OK']
    });
    await alert.present();
  }

}
