// Define types for the assembly line
export interface AssemblyItem {
  id: string;
  content: string;
}

export interface StageItems {
  name: string;
  items: AssemblyItem[];
}
