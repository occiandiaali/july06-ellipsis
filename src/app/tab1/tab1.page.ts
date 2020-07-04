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
  infoWindows: any;
  latLng:any;
  marker:any;
  mapOptions:any;  
  isKM:any=500;
  isType:any='';

  

  constructor(private zone: NgZone, private geo: Geolocation) {
    this.infoWindows = [];
  }

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

      let user = new google.maps.Marker({ // user position marker
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
        });
        let content = "<p><strong>You are here!</strong></p>";          
        let userInfo = new google.maps.InfoWindow({
        content: content
      });
      google.maps.event.addListener(user, 'click', () => {
        userInfo.open(this.map, user);
        }); // end of user position marker

    }, (error) => { console.log(`Error: ${error}`); });
  } // load map

  ngAfterViewInit() {
    this.loadMap();
  } // after view init

  // to close open info windows
  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  createMarker(place){
    const placeLoc = place;
    console.log('placeLoc',placeLoc);
    let image = {
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

    let infowindow = new google.maps.InfoWindow({
      pixelOffset: new google.maps.Size(-24, -0) // to align centre of marker
    });

    google.maps.event.addListener(marker, 'click', () => { // marker is local
      this.closeAllInfoWindows();
      this.zone.run(() => {
       let contentStr = '<div><strong>' + placeLoc.name + '</strong><br>' + placeLoc.vicinity + '</div>';
       
       
        infowindow.setContent(contentStr);
        infowindow.open(this.map, marker); // marker is local
        
      });
      this.infoWindows.push(infowindow);
    }); // event listener

  } // create marker

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  } // callback

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
