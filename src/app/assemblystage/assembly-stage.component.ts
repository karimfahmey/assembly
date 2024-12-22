import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AssemblyItem } from "../assemblyline/types";

@Component({
  selector: "app-assembly-stage",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./assembly-stage.component.html",
  styleUrls: ["./assembly-stage.component.css"],
})
export class AssemblyStageComponent {
  @Input() name: string = "";
  @Input() items: AssemblyItem[] = [];
  @Output() moveForward = new EventEmitter<AssemblyItem>();
  @Output() moveBackward = new EventEmitter<[Event, AssemblyItem]>();
}
