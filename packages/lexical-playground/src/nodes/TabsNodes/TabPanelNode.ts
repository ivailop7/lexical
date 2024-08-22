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
} from 'lexical';

import {addClassNamesToElement} from '@lexical/utils';
import {ElementNode} from 'lexical';

export type SerializedTabPanelNode = SerializedElementNode;

export class TabPanelNode extends ElementNode {
  __name: string;

  static getType(): string {
    return 'tab-panel';
  }

  static clone(node: TabPanelNode): TabPanelNode {
    return new TabPanelNode(node.__name, node.__key);
  }

  constructor(name: string, key?: NodeKey) {
    super(key);
    this.__name = name;
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement('div');
    if (typeof config.theme.layoutItem === 'string') {
      addClassNamesToElement(dom, config.theme.layoutItem);
    }
    return dom;
  }

  updateDOM(): boolean {
    return false;
  }

  static importDOM(): DOMConversionMap | null {
    return {};
  }

  static importJSON(): TabPanelNode {
    return $createTabPanelNode();
  }

  isShadowRoot(): boolean {
    return true;
  }

  exportJSON(): SerializedTabPanelNode {
    return {
      ...super.exportJSON(),
      type: 'tab-panel',
      version: 1,
    };
  }
}

export function $createTabPanelNode(name: string): TabPanelNode {
  return new TabPanelNode(name);
}

export function $isTabPanelNode(
  node: LexicalNode | null | undefined,
): node is TabPanelNode {
  return node instanceof TabPanelNode;
}
