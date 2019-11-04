import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from 'src/app/shared/event-model';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.scss']
})
export class EventcardComponent implements OnInit {

  @Input() event: EventModel;

  constructor() { }

  ngOnInit() {
  }

}
