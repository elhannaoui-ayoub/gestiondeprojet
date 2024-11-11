import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  doing = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  openNav() {
   // document.getElementById("mySidenav")!.style.width = "25%";
    document.getElementById("mySidenav")!.classList.add("sidenavopened");
  }
  
  closeNav() {
   // document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("mySidenav")!.classList.remove("sidenavopened");
  }
}
