import { Subject } from 'rxjs';

const subject = new Subject<number>();
subject.subscribe((val: number) => console.log(val));
subject.next(10);
subject.next(20);

// class App {
//   static start(): void {
//     console.log('Application Start');
//   }
// }
// App.start();
