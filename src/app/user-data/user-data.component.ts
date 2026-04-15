import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-data',
  standalone: true,
  templateUrl: './user-data.component.html'
})
export class UserDataComponent implements OnInit, OnDestroy {
  data: any;
  subscription!: Subscription;

  ngOnInit() {
    this.subscription = new Promise(resolve =>
      setTimeout(() => resolve({ title: 'Angular Data Loaded' }), 3000)
    ).then((res: any) => {
      this.data = res.title;
    }) as any;
  }

  ngOnDestroy() {
    console.log('Component destroyed, cleaning up...');
    if (this.subscription) {
      // simulate cleanup
      this.subscription = null as any;
    }
  }
}