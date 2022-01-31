import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-poc-tree-struture',
  templateUrl: './poc-tree-struture.component.html',
  styleUrls: ['./poc-tree-struture.component.css']
})
export class PocTreeStrutureComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  addRandom() {
    var newNodes: FoodNode =
    {
      name: 'New Fruit',
      children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    };

    var temp = TREE_DATA;
    temp.push(newNodes);
    this.dataSource.data = temp;

    // this.treeControl.expandAll();
  }
}
