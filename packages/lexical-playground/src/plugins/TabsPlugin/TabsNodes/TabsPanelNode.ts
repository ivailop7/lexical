/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  DOMConversionMap,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedElementNode,
  Spread,
} from 'lexical';

import {addClassNamesToElement} from '@lexical/utils';
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

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement('div');
    if (typeof config.theme.layoutItem === 'string') {
      addClassNamesToElement(dom, config.theme.layoutItem); //change later
    }
    if (!this.__visible) {
      dom.setAttribute('style', 'display:none');
    } else {
      dom.setAttribute('style', '');
    }
    return dom;
  }

  updateDOM(): boolean {
    return false;
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
