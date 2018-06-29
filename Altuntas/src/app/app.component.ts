import { Component, OnDestroy, OnInit } from '@angular/core'; //
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'; //
import { Sale } from './Sale';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit { //
  dtOptions: DataTables.Settings = {}; //
  dtTrigger: Subject<Sale> = new Subject(); //
  constructor(private http: HttpClient) { }
  title = 'Altuntaş';
  sales:Sale[] = [];
  ngOnInit(): void {
    this.dtOptions = { //
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get("https://localhost:44351/api/sales").subscribe(data => {
      this.sales = data as Sale[];
      this.dtTrigger.next(); //
    });
  }
  ngOnDestroy(): void { //
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
