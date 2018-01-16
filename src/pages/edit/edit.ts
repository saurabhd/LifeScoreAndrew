import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  RangeData:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage : Storage,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    // store dat for the edit
    this.storage.get('rangeData').then((val) => {
      if(val){
        this.RangeData = val;
      }
    });
  }
  updateResults(){
    // edit data when change range-bar
    this.storage.set('rangeData',this.RangeData);
  }
  add(){
    //code for the add new range bar
  }
  openPage(){
    this.navCtrl.setRoot(HomePage);
  }

}
