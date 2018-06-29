import { Component } from '@angular/core';
import { Seller } from './Seller';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css']
})
export class SellerFormComponent {
  model = new Seller();
  constructor(private http: HttpClient) {
    
  }
  submitted = false;
  onSubmit() {
    const req = this.http.post('https://localhost:44351/api/sellers', this.model)
      .subscribe(
        res => {
          this.submitted = true;
        },
        err => {
          console.log("Error occured");
        }
      );    
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
