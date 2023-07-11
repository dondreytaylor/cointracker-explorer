import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer-default',
  templateUrl: './footer-default.component.html',
  styleUrls: ['./footer-default.component.scss']
})
export class FooterDefaultComponent implements OnInit {

  copyright:string = ""
  baseURL:string = environment.site.endpoint
  isVisible:boolean = false

  constructor(private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
  }

}
