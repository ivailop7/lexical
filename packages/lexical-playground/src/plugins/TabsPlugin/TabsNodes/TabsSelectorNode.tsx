/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  $createParagraphNode,
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

import {TabsContainerNode} from './TabsContainerNode';
import {$createTabsPanelNode, $isTabsPanelNode} from './TabsPanelNode';

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
    selectedTab: string;
  },
  SerializedLexicalNode
>;

function $convertTabsSelectorElement(
  domNode: HTMLElement,
): DOMConversionOutput | null {
  const tabsListString = domNode.getAttribute('data-lexical-tabs-list') || '';
  const tabsList = tabsListString?.length > 0 ? tabsListString.split(';') : [];
  const selectedTab = domNode.getAttribute('data-lexical-tabs-selected') || '';

  return {node: $createTabsSelectorNode(tabsList, selectedTab)};
}

export class TabsSelectorNode extends DecoratorNode<JSX.Element> {
  __tabsList: string[];
  __selectedTab: string;

  static getType(): string {
    return 'tabs-selector';
  }

  static clone(node: TabsSelectorNode): TabsSelectorNode {
    return new TabsSelectorNode(
      node.__tabsList,
      node.__selectedTab,
      node.__key,
    );
  }

  constructor(tabsList: string[], selectedTab?: string, key?: NodeKey) {
    super(key);
    this.__tabsList = tabsList.length > 0 ? tabsList : ['Tab 1', 'Tab 2'];
    if (selectedTab) {
      const selectedTabIsInList = tabsList.some((r) => r === selectedTab);
      if (selectedTabIsInList) {
        this.__selectedTab = selectedTab;
      } else {
        this.__selectedTab = tabsList[0]; // default to first tab
      }
    } else {
      this.__selectedTab = tabsList[0];
    }
  }

  createDOM(): HTMLElement {
    const element = document.createElement('div');
    element.classList.add('Tabs__selector');
    element.style.display = 'inline-block';
    return element;
  }

  static importJSON(
    serializedNode: SerializedTabsSelectorNode,
  ): TabsSelectorNode {
    return $createTabsSelectorNode(
      serializedNode.tabsList,
      serializedNode.selectedTab,
    );
  }

  exportJSON(): SerializedTabsSelectorNode {
    return {
      selectedTab: this.getSelectedTab(),
      tabsList: this.getTabsList(),
      type: 'tabs-selector',
      version: 1,
    };
  }

  static importDOM(): DOMConversionMap | null {
    return {
      div: (domNode: HTMLElement) => {
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
    const element = document.createElement('div');
    element.classList.add('Tabs__selector');
    element.setAttribute('data-lexical-tabs-selector', 'true');
    element.setAttribute(
      'data-lexical-tabs-list',
      this.getTabsList().join(';'),
    );
    element.setAttribute('data-lexical-tabs-selected', this.getSelectedTab());
    return {element};
  }

  updateDOM(prevNode: TabsSelectorNode): boolean {
    return (
      prevNode.__tabsList !== this.__tabsList ||
      prevNode.__selectedTab !== this.__selectedTab
    );
  }

  getTabsList(): string[] {
    return this.getLatest().__tabsList;
  }

  addTab(name: string): void {
    const self = this.getWritable();
    const tabsList = Array.from(self.__tabsList);
    tabsList.push(name);
    self.__tabsList = tabsList;

    const container = this.getParentOrThrow<TabsContainerNode>();
    container.append(
      $createTabsPanelNode(name, false).append($createParagraphNode()),
    );
  }

  deleteTab(name: string): void {
    const self = this.getWritable();
    if (self.__tabsList.length <= 1) {
      console.error('Cannot remove all tabs from a tabs panel');
      return;
    }
    const tabsList = Array.from(self.__tabsList);
    const index = tabsList.indexOf(name);
    tabsList.splice(index, 1);
    self.__tabsList = tabsList;

    const container = this.getParentOrThrow<TabsContainerNode>();
    const panel = container
      .getChildren()
      .find((node) => $isTabsPanelNode(node) && node.getName() === name);

    if (panel) {
      // Handle the case if the active tab is delete
      if (this.getSelectedTab() === name) {
        const prevPanel = panel.getPreviousSibling();
        if ($isTabsPanelNode(prevPanel)) {
          this.selectTab(prevPanel.getName());
        } else {
          const nextPanel = panel.getNextSibling();
          if ($isTabsPanelNode(nextPanel)) {
            this.selectTab(nextPanel.getName());
          }
        }
      }
      panel?.remove();
    }
  }

  selectTab(name: string): void {
    this.getWritable().__selectedTab = name;
    const container = this.getParentOrThrow<TabsContainerNode>();
    const tabPanelNodes = container
      .getChildren()
      .filter((node) => $isTabsPanelNode(node));
    tabPanelNodes.forEach((node) => {
      node.setVisibility(node.getName() === name);
      if (node.getName() === name) {
        node.selectEnd();
      }
    });
  }

  getSelectedTab(): string {
    return this.getLatest().__selectedTab;
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <TabsSelectorComponent
          selectedTab={this.__selectedTab}
          tabsList={this.__tabsList}
          nodeKey={this.__key}
        />
      </Suspense>
    );
  }
}

export function $createTabsSelectorNode(
  tabsList: string[],
  selectedTab?: string,
): TabsSelectorNode {
  return new TabsSelectorNode(tabsList, selectedTab);
}

export function $isTabsSelectorNode(
  node: LexicalNode | null | undefined,
): node is TabsSelectorNode {
  return node instanceof TabsSelectorNode;
}
