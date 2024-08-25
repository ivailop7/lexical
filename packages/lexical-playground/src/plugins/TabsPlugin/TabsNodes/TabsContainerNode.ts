/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  DOMConversionMap,
  DOMConversionOutput,
  LexicalNode,
  NodeKey,
  SerializedElementNode,
} from 'lexical';

import {ElementNode} from 'lexical';

function $convertTabsContainerElement(
  domNode: HTMLElement,
): DOMConversionOutput | null {
  return {node: $createTabsContainerNode()};
}

export class TabsContainerNode extends ElementNode {
  static getType(): string {
    return 'tabs-container';
  }

  constructor(key?: NodeKey) {
    super(key);
  }

  static clone(node: TabsContainerNode): TabsContainerNode {
    return new TabsContainerNode(node.__key);
  }

  createDOM(): HTMLElement {
    const element = document.createElement('div');
    element.classList.add('Tabs__container');
    element.setAttribute('data-lexical-tabs-container', 'true');
    return element;
  }

  updateDOM(): boolean {
    return false;
  }

  static importDOM(): DOMConversionMap | null {
    return {
      div: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute('data-lexical-tabs-container')) {
          return null;
        }
        return {
          conversion: $convertTabsContainerElement,
          priority: 2,
        };
      },
    };
  }

  static importJSON(serializedNode: SerializedElementNode): TabsContainerNode {
    return $createTabsContainerNode();
  }

  exportJSON(): SerializedElementNode {
    return {
      ...super.exportJSON(),
      type: 'tabs-container',
      version: 1,
    };
  }
}

export function $createTabsContainerNode(): TabsContainerNode {
  return new TabsContainerNode();
}

export function $isTabsContainerNode(
  node: LexicalNode | null | undefined,
): node is TabsContainerNode {
  return node instanceof TabsContainerNode;
}
