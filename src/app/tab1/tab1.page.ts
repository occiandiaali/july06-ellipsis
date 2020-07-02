import { Component, NgZone, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';

declare var google;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {

  @ViewChild('map') mapElement: ElementRef;
  map:any;
  latLng:any;
  markers:any;
  mapOptions:any;  
  isKM:any=500;
  isType:any='';

  constructor(private zone: NgZone, private geo: Geolocation) {}

  loadMap() {
    this.geo.getCurrentPosition().then((pos) => {
      this.latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      console.log('latLng',this.latLng);
     
      this.mapOptions = {
        center: this.latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    }, (error) => { console.log(`Error: ${error}`); });
  } // load map

  ngAfterViewInit() {
    this.loadMap();
  } // after view init

  createMarker(place){
    var placeLoc = place;
    console.log('placeLoc',placeLoc);
    this.markers = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location
    });

    let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(this.markers, 'click', () => {
      this.zone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, this.markers);
      });
    });
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  nearbyPlace(){
    this.loadMap();
    this.markers = [];
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
              location: this.latLng,
              radius: this.isKM,
              types: [this.isType]
            }, (results, status) => {
                this.callback(results, status);
            });
  } // near by




} // class
