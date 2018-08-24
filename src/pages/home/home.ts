import { AppModule } from './../../app/app.module';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyAKXoSkoJ0uCG8TMRsJHY-pdCotJ1GvbDM",
    authDomain: "galleryapp-ff27b.firebaseapp.com",
    databaseURL: "https://galleryapp-ff27b.firebaseio.com",
    projectId: "galleryapp-ff27b",
    storageBucket: "galleryapp-ff27b.appspot.com",
    messagingSenderId: "185296863362"
  };


  @IonicPage()
  @Component({
    selector: 'page-home',
    templateUrl: 'home.html',
  })
  export class HomePage {
    imageSource1;
    imageSource2;
    imageSource3;
    imageEmp;
    imageEmp2;
    imageEmp3;

    vidoeSource;
    vidoeSource1;
    vidoeSource2;
    vidEmp;
    vidEmp1;
    vidEmp2;

    audSource;
    audSource1;
    audSource2;
    audEmp;
    audEmp1;
    audEmp2;

  
    upload;
  
    fire={
      downloadUrl:''
    };
    
    firebaseUploads;
    constructor(public navCtrl: NavController, public navParams: NavParams,private mediaCapture: MediaCapture, private platform : Platform, private f : File) {
      firebase.initializeApp(config);
      
      this.upload = firebase.database().ref('/upload/');
      this.firebaseUploads = firebase.database().ref('/fireuploads/');

        this.imageSource1 = '1534839252456'
        this.imageSource2 = '1534839375400'
        //this.imageSource3 = '1534248203683'

        this.vidoeSource = '1534839411109'
        this.vidoeSource1 = '1534839458482'
        //this.vidoeSource = '1534250814615'

        this.audSource = '1534839469657'
        this.audSource1 = '1534839487071'
        //this.audSource = '1534255598807'

        this.getUploads();
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage');
    }
   

    getUploads(){

      firebase.storage().ref().child('files/' + this.imageSource1 + '.jpg').getDownloadURL()
      .then((url)=>{
        this.imageEmp = url
      });

      firebase.storage().ref().child('files/' + this.imageSource2 + '.jpg').getDownloadURL()
      .then((url)=>{
        this.imageEmp2 = url
      });

    



      firebase.storage().ref().child('files/' + this.vidoeSource + '.mp4').getDownloadURL()
      .then((url)=>{
        this.vidEmp = url
      });

      firebase.storage().ref().child('files/' + this.vidoeSource1 + '.mp4').getDownloadURL()
      .then((url)=>{
        this.vidEmp1 = url
      });
    



      firebase.storage().ref().child('files/' + this.audSource + '.m4a').getDownloadURL()
      .then((url)=>{
        this.audEmp = url
      });
      firebase.storage().ref().child('files/' + this.audSource1 + '.m4a').getDownloadURL()
      .then((url)=>{
        this.audEmp1 = url
      });

     
    }


   
  }
