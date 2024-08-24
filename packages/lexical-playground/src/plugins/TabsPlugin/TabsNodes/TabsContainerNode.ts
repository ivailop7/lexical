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
  const node = $createTabsContainerNode();
  return {node};
}

export class TabsContainerNode extends ElementNode {
  __mainTabsList: string[];

  constructor(mainTabsList: string[], key?: NodeKey) {
    super(key);
    this.__mainTabsList = mainTabsList;
  }

  static getType(): string {
    return 'tabs-container';
  }

  static clone(node: TabsContainerNode): TabsContainerNode {
    return new TabsContainerNode(node.__mainTabsList, node.__key);
  }

  createDOM(): HTMLElement {
    const element = document.createElement('div');
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

  static importJSON(json: SerializedElementNode): TabsContainerNode {
    return $createTabsContainerNode();
  }

  // isShadowRoot(): boolean {
  //   return true;
  // }

  // canBeEmpty(): boolean {
  //   return false;
  // }

  // isInline(): boolean {
  //   return false;
  // }

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
