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
  DOMExportOutput,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedElementNode,
  Spread,
} from 'lexical';

import './Tabs.css';

import {addClassNamesToElement} from '@lexical/utils';
import {ElementNode} from 'lexical';

export type SerializedTabsContainerNode = Spread<
  {
    templateColumns: string;
  },
  SerializedElementNode
>;

function $convertTabsContainerElement(
  domNode: HTMLElement,
): DOMConversionOutput | null {
  const styleAttributes = window.getComputedStyle(domNode);
  const templateColumns = styleAttributes.getPropertyValue(
    'grid-template-columns',
  );
  if (templateColumns) {
    const node = $createTabsContainerNode(templateColumns);
    return {node};
  }
  return null;
}

export class TabsContainerNode extends ElementNode {
  __templateColumns: string;

  constructor(templateColumns: string, key?: NodeKey) {
    super(key);
    this.__templateColumns = templateColumns;
  }

  static getType(): string {
    return 'tabs-container';
  }

  static clone(node: TabsContainerNode): TabsContainerNode {
    return new TabsContainerNode(node.__templateColumns, node.__key);
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement('div');
    dom.style.gridTemplateColumns = this.__templateColumns;
    // replace styles after
    if (typeof config.theme.layoutContainer === 'string') {
      addClassNamesToElement(dom, config.theme.layoutContainer);
    }
    const itemCount = getItemsCountFromTemplate(this.__templateColumns);

    for (let i = 0; i < itemCount; i++) {
      const button = document.createElement('button');
      button.className = 'addButton1';
      button.textContent = `add_${i}`;
      dom.appendChild(button);
    }
    return dom;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('div');
    element.style.gridTemplateColumns = this.__templateColumns;
    element.setAttribute('data-lexical-tabs-container', 'true');
    return {element};
  }

  updateDOM(prevNode: TabsContainerNode, dom: HTMLElement): boolean {
    if (prevNode.__templateColumns !== this.__templateColumns) {
      dom.style.gridTemplateColumns = this.__templateColumns;
    }
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

  static importJSON(json: SerializedTabsContainerNode): TabsContainerNode {
    return $createTabsContainerNode(json.templateColumns);
  }

  isShadowRoot(): boolean {
    return true;
  }

  canBeEmpty(): boolean {
    return false;
  }

  exportJSON(): SerializedTabsContainerNode {
    return {
      ...super.exportJSON(),
      templateColumns: this.__templateColumns,
      type: 'tabs-container',
      version: 1,
    };
  }

  getTemplateColumns(): string {
    return this.getLatest().__templateColumns;
  }

  setTemplateColumns(templateColumns: string) {
    this.getWritable().__templateColumns = templateColumns;
  }
}

export function $createTabsContainerNode(
  templateColumns: string,
): TabsContainerNode {
  return new TabsContainerNode(templateColumns);
}

export function $isTabsContainerNode(
  node: LexicalNode | null | undefined,
): node is TabsContainerNode {
  return node instanceof TabsContainerNode;
}

function getItemsCountFromTemplate(template: string): number {
  return template.trim().split(/\s+/).length;
}
