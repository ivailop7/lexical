/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  DOMConversionMap,
  LexicalNode,
  NodeKey,
  SerializedElementNode,
  Spread,
} from 'lexical';

import './index.css';

import {ElementNode} from 'lexical';

export type SerializedTabsPanelNode = Spread<
  {
    name: string;
    visible: boolean;
  },
  SerializedElementNode
>;

export class TabsPanelNode extends ElementNode {
  __name: string;
  __visible: boolean;

  static getType(): string {
    return 'tabs-panel';
  }

  static clone(node: TabsPanelNode): TabsPanelNode {
    return new TabsPanelNode(node.__name, node.__visible, node.__key);
  }

  constructor(name: string, visible: boolean, key?: NodeKey) {
    super(key);
    this.__name = name;
    this.__visible = visible;
  }

  createDOM(): HTMLElement {
    const element = document.createElement('div');
    element.classList.add('Tabs__panel');
    if (!this.__visible) {
      element.setAttribute('style', 'display:none');
    } else {
      element.removeAttribute('style');
    }
    return element;
  }

  updateDOM(prevNode: TabsPanelNode): boolean {
    return prevNode.__visible !== this.__visible;
  }

  static importDOM(): DOMConversionMap | null {
    return {}; // Populate later
  }

  static importJSON(serializedNode: SerializedTabsPanelNode): TabsPanelNode {
    return $createTabsPanelNode(serializedNode.name, serializedNode.visible);
  }

  isShadowRoot(): boolean {
    return true;
  }

  exportJSON(): SerializedTabsPanelNode {
    return {
      ...super.exportJSON(),
      name: this.__name,
      type: 'tab-panel',
      version: 1,
      visible: this.__visible,
    };
  }

  getName(): string {
    return this.getLatest().__name;
  }

  setName(name: string): void {
    this.getWritable().__name = name;
  }

  getVisibility(): boolean {
    return this.getLatest().__visible;
  }

  setVisibility(visible: boolean): void {
    this.getWritable().__visible = visible;
  }
}

export function $createTabsPanelNode(
  name: string,
  visible: boolean,
): TabsPanelNode {
  return new TabsPanelNode(name, visible);
}

export function $isTabsPanelNode(
  node: LexicalNode | null | undefined,
): node is TabsPanelNode {
  return node instanceof TabsPanelNode;
}
