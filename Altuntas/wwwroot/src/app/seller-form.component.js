"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Seller_1 = require("./Seller");
var http_1 = require("@angular/common/http");
var SellerFormComponent = /** @class */ (function () {
    function SellerFormComponent(http) {
        this.http = http;
        this.model = new Seller_1.Seller();
        this.submitted = false;
    }
    SellerFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var req = this.http.post('https://localhost:44351/api/sellers', this.model)
            .subscribe(function (res) {
            _this.submitted = true;
        }, function (err) {
            console.log("Error occured");
        });
    };
    Object.defineProperty(SellerFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    SellerFormComponent = __decorate([
        core_1.Component({
            selector: 'seller-form',
            templateUrl: './seller-form.component.html',
            styleUrls: ['./seller-form.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SellerFormComponent);
    return SellerFormComponent;
}());
exports.SellerFormComponent = SellerFormComponent;
//# sourceMappingURL=seller-form.component.js.map