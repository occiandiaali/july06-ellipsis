import { Component, NgZone, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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
  marker:any;
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
    const placeLoc = place;
    console.log('placeLoc',placeLoc);
    var image = {
      url: placeLoc.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    let marker = new google.maps.Marker({ // initialise marker so that it would be unique to each
        map: this.map,
        position: placeLoc.geometry.location,
        icon: image
    });

    let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(marker, 'click', () => { // marker is local
      this.zone.run(() => {
       let contentStr = '<div><strong>' + placeLoc.name + '</strong><br>' + placeLoc.vicinity + '</div>';
       
        infowindow.setContent(contentStr);
        infowindow.open(this.map, marker); // marker is local
      });
    }); // event listener

  } // create marker

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  nearbyPlace(){
    this.loadMap();
    this.marker = [];
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
