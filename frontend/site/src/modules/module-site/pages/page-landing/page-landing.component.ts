import { Component, OnInit } from '@angular/core';
import * as services from '../../../module-shared/services/services.barrel'
import * as models from '../../../module-shared/models/models.barrel'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.scss']
})
export class PageLandingComponent implements OnInit {

  content:any[] = []; 

  constructor(private titleMeta:services.TitleMetaService, private http:HttpClient, private router: Router,private sanitizer:DomSanitizer, public validator:services.ValidationService) { }

  ngOnInit():void {
    this.titleMeta.setTags()
  }

  sanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
