/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  DecoratorNode,
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical';
import * as React from 'react';
import {Suspense} from 'react';

export type Options = ReadonlyArray<Option>;

export type Option = Readonly<{
  text: string;
  uid: string;
  votes: Array<number>;
}>;

const TabsSelectorComponent = React.lazy(
  () => import('./TabsSelectorComponent'),
);

export type SerializedTabsSelectorNode = Spread<
  {
    tabsList: string[];
  },
  SerializedLexicalNode
>;

function $convertTabsSelectorElement(
  domNode: HTMLElement,
): DOMConversionOutput | null {
  const hasTabsSelectorAttribute = domNode.hasAttribute(
    'data-lexical-tabs-selector',
  );
  if (hasTabsSelectorAttribute) {
    const node = $createTabsSelectorNode([]); //parse list from dom value
    return {node};
  }
  return null;
}

export class TabsSelectorNode extends DecoratorNode<JSX.Element> {
  __tabsList: string[];

  static getType(): string {
    return 'tabs-selector';
  }

  static clone(node: TabsSelectorNode): TabsSelectorNode {
    return new TabsSelectorNode(node.__tabsList, node.__key);
  }

  static importJSON(
    serializedNode: SerializedTabsSelectorNode,
  ): TabsSelectorNode {
    // serializedNode.options.forEach(node.addOption);
    const node = $createTabsSelectorNode(serializedNode.tabsList);
    return node;
  }

  constructor(tabsList: string[], key?: NodeKey) {
    super(key);
    this.__tabsList =
      tabsList.length > 0 ? tabsList : ['London', 'Paris', 'New York'];
  }

  exportJSON(): SerializedTabsSelectorNode {
    return {
      tabsList: this.__tabsList,
      type: 'tabs-selector',
      version: 1,
    };
  }

  static importDOM(): DOMConversionMap | null {
    return {
      span: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute('data-lexical-tabs-selector')) {
          return null;
        }
        return {
          conversion: $convertTabsSelectorElement,
          priority: 2,
        };
      },
    };
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('span');
    element.setAttribute('data-lexical-tabs-selector', this.__question);
    element.setAttribute(
      'data-lexical-poll-options',
      JSON.stringify(this.__options),
    );
    return {element};
  }

  createDOM(): HTMLElement {
    const elem = document.createElement('span');
    elem.style.display = 'inline-block';
    return elem;
  }

  updateDOM(): false {
    return false;
  }

  getTabsList(): string[] {
    return this.getLatest().__tabsList;
  }

  addTab(name: string): void {
    const self = this.getWritable();
    const tabsList = Array.from(self.__tabsList);
    tabsList.push(name);
    self.__tabsList = tabsList;
  }

  deleteTab(name: string): void {
    const self = this.getWritable();
    const tabsList = Array.from(self.__tabsList);
    const index = tabsList.indexOf(name);
    tabsList.splice(index, 1);
    self.__tabsList = tabsList;
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <TabsSelectorComponent
          tabsList={this.__tabsList}
          nodeKey={this.__key}
        />
      </Suspense>
    );
  }
}

export function $createTabsSelectorNode(tabsList: string[]): TabsSelectorNode {
  return new TabsSelectorNode(tabsList);
}

export function $isTabsSelectorNode(
  node: LexicalNode | null | undefined,
): node is TabsSelectorNode {
  return node instanceof TabsSelectorNode;
}
