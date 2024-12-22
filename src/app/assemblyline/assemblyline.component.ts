import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AssemblyStageComponent } from "../assemblystage/assembly-stage.component";
import { AssemblyLineService } from "./assembly-line.service";
import { AssemblyItem } from "./types";

@Component({
  selector: "app-assemblyline",
  standalone: true,
  imports: [CommonModule, FormsModule, AssemblyStageComponent],
  providers: [AssemblyLineService], // Add service to providers
  templateUrl: "./assemblyline.component.html",
  styleUrls: ["./assemblyline.component.css"],
})
export class AssemblyLineComponent implements OnInit {
  @Input() stages: string[] = [];
  newItem: string = "";
  itemsByStage: AssemblyItem[][] = [];

  constructor(private service: AssemblyLineService) {} // Single parameter

  ngOnInit() {
    this.itemsByStage = this.stages.map(() => []);
  }

  addItem() {
    if (this.newItem.trim()) {
      const item = this.service.createItem(this.newItem);
      this.itemsByStage[0] = this.service.addItemToStart(
        this.itemsByStage[0],
        item
      );
      this.newItem = "";
    }
  }

  moveForward(currentStage: number, item: AssemblyItem) {
    this.itemsByStage[currentStage] = this.service.removeItem(
      this.itemsByStage[currentStage],
      item
    );

    if (currentStage < this.stages.length - 1) {
      this.itemsByStage[currentStage + 1] = this.service.addItemToStart(
        this.itemsByStage[currentStage + 1],
        item
      );
    }
  }

  moveBackward(event: Event, currentStage: number, item: AssemblyItem) {
    event.preventDefault();

    this.itemsByStage[currentStage] = this.service.removeItem(
      this.itemsByStage[currentStage],
      item
    );

    if (currentStage > 0) {
      this.itemsByStage[currentStage - 1] = this.service.addItemToEnd(
        this.itemsByStage[currentStage - 1],
        item
      );
    }
  }
}
