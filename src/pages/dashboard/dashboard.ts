import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Navbar, AlertController } from 'ionic-angular';
import { SitesPage } from '../sites/sites';
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  @ViewChild(Navbar) navBar: Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Logout');

    this.navBar.backButtonClick = () => {
      let alert = this.alertCtrl.create({
        title: 'Logout',
        message: 'Are you sure you want to log out?',
        buttons: [
          {
            text: 'No',
            //role: 'cancel',
            handler: () => {
              console.log('No clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              console.log('Clear the sessions or do something...');
              this.navCtrl.pop();
            }
          }
        ]
      });
      alert.present();
    }
  }

  sites() {
    this.navCtrl.push(SitesPage);
  }

}
