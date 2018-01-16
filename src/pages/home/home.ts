import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  RangeData:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
  }

  ionViewDidLoad() {
    // storage checking for data
    this.storage.get('rangeData').then((val) => {
      if(val){
        // if data are strored
        this.RangeData = val;
      }else{
        // data not store in local-storage
        // statica data
        this.RangeData=[{min:0,max:10,data:5,name:'Health'},{min:0,max:10,data:7,name:'Family'},{min:0,max:10,data:3,name:'Work'}];
        this.storage.set('rangeData',this.RangeData);
      }
   });
  }
  openPage(){
   this.navCtrl.setRoot('EditPage');
 }

}
