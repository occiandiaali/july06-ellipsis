import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CryptosPage } from './cryptos.page';

describe('CryptosPage', () => {
  let component: CryptosPage;
  let fixture: ComponentFixture<CryptosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CryptosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CryptosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
