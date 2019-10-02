import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: string;
  password: string;
  loading: any;

  constructor(
    private apiJai: ApiJaiService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  doLogin() {
    this.presentLoading();
    this.apiJai.doLogin(this.login, this.password).then((response: any) => {
      if (this.loading) {
        this.loading.dismiss();
      }
      if (response.success) {
        console.log('success');
        this.router.navigate(['/tabs']);
      } else {
        this.presentAlert(response.message);
      }
    }).catch(error => {
      console.log(error);
      if (this.loading) {
        this.loading.dismiss();
      }
    });
  }

  async presentAlert(text: string) {
    const alert = await this.alertController.create({
      header: 'Erro ao entrar',
      message: text,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Entrando...'
    });
    await this.loading.present();
  }

}
