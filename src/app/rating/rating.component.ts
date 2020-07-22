import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number;

  @Output() onRatingEmitter = new EventEmitter<string>();

  starWidth: number;
  constructor() {}

  ratingClicked(val: string) {
    this.onRatingEmitter.emit(val);
  }

  ngOnChanges(): void {
    this.starWidth = (75 / 5) * this.rating;
  }

  ngOnInit(): void {}
}
