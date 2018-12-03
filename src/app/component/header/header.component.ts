import { Component, OnInit } from '@angular/core';
import { VidyoClientService } from '../../service/vidyo-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private vidyoClientService: VidyoClientService) { }

  ngOnInit() {
  }

  logout() {
    this.vidyoClientService.logout();
  }

}
