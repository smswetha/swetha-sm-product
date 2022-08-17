import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { appConstant } from '../app.constant';
import { environment } from '../environments/environment';
import { Product } from '../products/product';

@Component({
  selector: 'app.prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css'],
})
export class prodComponent implements OnInit {
  product: Product | any = '';
  id: number | string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getprod((data as any).id);
    });
  }
  getprod(id: number) {
    this.http
      .get(`${environment.url}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        console.log(data);
      });
  }



}