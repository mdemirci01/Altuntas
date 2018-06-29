import { Component, OnDestroy, OnInit } from '@angular/core'; //
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'; //
import { Seller } from './Seller';
@Component({
  selector: 'seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnDestroy, OnInit { //
  dtOptions: DataTables.Settings = {}; //
  dtTrigger: Subject<Seller> = new Subject(); //
  constructor(private http: HttpClient) { }
  title = 'Altuntaş';
  sellers:Seller[] = [];
  ngOnInit(): void {
    this.dtOptions = { //
      pagingType: 'full_numbers',
      pageLength: 2,
      language: {
        "url": "//cdn.datatables.net/plug-ins/1.10.13/i18n/Turkish.json"
      }
    };
    this.http.get("https://localhost:44351/api/sellers").subscribe(data => {
      this.sellers = data as Seller[];
      this.dtTrigger.next(); //
    });
  }
  ngOnDestroy(): void { //
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
