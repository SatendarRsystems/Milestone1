import { Component, OnInit } from '@angular/core';
import { VidyoClientService } from '../../service/vidyo-client.service';

@Component({
  selector: 'app-user-list-header',
  templateUrl: './user-list-header.component.html',
  styleUrls: ['./user-list-header.component.css']
})
export class UserListHeaderComponent implements OnInit {

  constructor(private vidyoClientService: VidyoClientService) { }

  ngOnInit() {
  }

}
