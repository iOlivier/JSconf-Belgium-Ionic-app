import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConferenceProvider } from '../../providers/conferenceProvider';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;

  constructor(public navCtrl: NavController, private confProvider: ConferenceProvider) {

  }

  ionViewDidLoad() {

    let mapData = this.confProvider.getMapData();

    let mapEle = this.mapElement.nativeElement;

    let map = new google.maps.Map(mapEle, {
      center: mapData.find((d: any) => d.center),
      zoom: 16
    });

    mapData.forEach((markerData: any) => {
      let infoWindow = new google.maps.InfoWindow({
        content: `<h5>${markerData.name}</h5>`
      });

      let marker = new google.maps.Marker({
        position: markerData,
        map: map,
        title: markerData.name
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });

    google.maps.event.addListenerOnce(map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }
}
