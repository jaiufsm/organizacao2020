import { Component, OnInit, Input } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-avaliador-ausente-modal',
  templateUrl: './avaliador-ausente-modal.page.html',
  styleUrls: ['./avaliador-ausente-modal.page.scss'],
})
export class AvaliadorAusenteModalPage implements OnInit {

  @Input() id: string;
  @Input() nome: string;
  @Input() senha: string;
  @Input() trabalhos: Array<Array<string>>;
  private loading;

  constructor(
    private apiJai: ApiJaiService,
    public modalController: ModalController,
    public alertController: AlertController,
    public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await this.loading.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  doCheck(type: string) {
    this.presentLoading();
    const currentDate = new Date();
    this.apiJai.getCheck().then((checks: Array<Array<string>>) => {
      const avaliadorChecks = checks.filter(check => check[0] === this.id);
      if ((type === 'in' || type === 'in-sub') && avaliadorChecks.length > 0) {
        this.presentAlert('Check-in já realizado', 'in');
        if (this.loading) {
          this.loading.dismiss();
        }
      } else if (type === 'out' && avaliadorChecks.findIndex(check => check[4] === 'out') > -1) {
        this.presentAlert('Check-out já realizado', type);
        if (this.loading) {
          this.loading.dismiss();
        }
      } else if (type === 'out' && avaliadorChecks.findIndex(check => check[4] === 'in' || check[4] === 'in-sub') < 0) {
        this.presentAlert('Check-in ainda não realizado', 'in');
        if (this.loading) {
          this.loading.dismiss();
        }
      } else {
        this.apiJai.setCheck(this.id, this.nome, currentDate.toLocaleDateString(), currentDate.toLocaleTimeString(), type)
        .then(response => {
          if (this.loading) {
            this.loading.dismiss();
          }
          this.presentSetAlert(type);
        });
      }
    });
  }

  async presentSetAlert(type: string) {
    if (type === 'in-sub') {
      type = 'in';
    }
    const alert = await this.alertController.create({
      header: 'Check-' + type,
      message: 'Check-' + type + ' realizado',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert(text: string, type: string) {
    if (type === 'in-sub') {
      type = 'in';
    }
    const alert = await this.alertController.create({
      header: 'Check-' + type,
      message: text,
      buttons: ['OK']
    });
    await alert.present();
  }

}
