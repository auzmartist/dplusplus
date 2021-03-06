'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var repCtx_comp_1 = require('./rep/repCtx.comp');
var rep_svc_1 = require('./rep/rep.svc');
var DppAppComp = (function () {
    function DppAppComp() {
        this.title = "Democracy++";
    }
    DppAppComp = __decorate([
        core_1.Component({
            selector: 'dpp-app',
            templateUrl: 'app/app.comp.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, rep_svc_1.RepSvc],
        }),
        router_1.RouteConfig([
            {
                path: '/reps',
                name: 'Reps',
                component: repCtx_comp_1.RepCtx,
                useAsDefault: true
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], DppAppComp);
    return DppAppComp;
}());
exports.DppAppComp = DppAppComp;
//# sourceMappingURL=app.comp.js.map