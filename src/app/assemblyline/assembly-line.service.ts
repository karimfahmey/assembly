import { Injectable } from '@angular/core';
import { AssemblyItem } from './types';

@Injectable({
  providedIn: 'root'
})
export class AssemblyLineService {
  generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  createItem(content: string): AssemblyItem {
    return {
      id: this.generateId(),
      content: content.trim()
    };
  }

  removeItem(items: AssemblyItem[], itemToRemove: AssemblyItem): AssemblyItem[] {
    return items.filter(item => item.id !== itemToRemove.id);
  }

  addItemToStart(items: AssemblyItem[], item: AssemblyItem): AssemblyItem[] {
    return [item, ...items];
  }

  addItemToEnd(items: AssemblyItem[], item: AssemblyItem): AssemblyItem[] {
    return [...items, item];
  }
}