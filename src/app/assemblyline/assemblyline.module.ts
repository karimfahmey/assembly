import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AssemblyLineComponent } from "./assemblyline.component";
import { AssemblyStageComponent } from "../assemblystage/assembly-stage.component";
import { AssemblyLineService } from "./assembly-line.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AssemblyLineComponent,
    AssemblyStageComponent,
  ],
  exports: [AssemblyLineComponent],
  providers: [AssemblyLineService],
})
export class AssemblyLineModule {}
