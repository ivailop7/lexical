/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import './index.css';

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {useLexicalNodeSelection} from '@lexical/react/useLexicalNodeSelection';
import {mergeRegister} from '@lexical/utils';
import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  BaseSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
  NodeKey,
} from 'lexical';
import {useCallback, useEffect, useRef, useState} from 'react';

import {$isTabsSelectorNode, TabsSelectorNode} from './TabsSelectorNode';

export default function TabsSelectorComponent({
  selectedTab,
  tabsList,
  nodeKey,
}: {
  selectedTab: string;
  tabsList: string[];
  nodeKey: NodeKey;
}): JSX.Element {
  const [editor] = useLexicalComposerContext();
  // const totalVotes = useMemo(() => getTotalVotes(options), [options]);
  const [isSelected, setSelected, clearSelection] =
    useLexicalNodeSelection(nodeKey);
  const [selection, setSelection] = useState<BaseSelection | null>(null);
  const ref = useRef(null);

  const $onDelete = useCallback(
    (payload: KeyboardEvent) => {
      const deleteSelection = $getSelection();
      if (isSelected && $isNodeSelection(deleteSelection)) {
        const event: KeyboardEvent = payload;
        event.preventDefault();
        editor.update(() => {
          deleteSelection.getNodes().forEach((node) => {
            if ($isTabsSelectorNode(node)) {
              node.remove();
            }
          });
        });
      }
      return false;
    },
    [editor, isSelected],
  );

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({editorState}) => {
        setSelection(editorState.read(() => $getSelection()));
      }),
      editor.registerCommand<MouseEvent>(
        CLICK_COMMAND,
        (payload) => {
          const event = payload;

          if (event.target === ref.current) {
            if (!event.shiftKey) {
              clearSelection();
            }
            setSelected(!isSelected);
            return true;
          }

          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_DELETE_COMMAND,
        $onDelete,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_BACKSPACE_COMMAND,
        $onDelete,
        COMMAND_PRIORITY_LOW,
      ),
    );
  }, [clearSelection, editor, isSelected, nodeKey, $onDelete, setSelected]);

  const withTabsSelectorNode = (
    cb: (node: TabsSelectorNode) => void,
    onUpdate?: () => void,
  ): void => {
    editor.update(
      () => {
        const node = $getNodeByKey(nodeKey);
        if ($isTabsSelectorNode(node)) {
          cb(node);
        }
      },
      {onUpdate},
    );
  };

  const addTab = () => {
    withTabsSelectorNode((node) => {
      node.addTab('Syndey_' + Math.floor(Math.random() * 100));
    });
  };

  const deleteTab = (name: string) => {
    withTabsSelectorNode((node) => {
      node.deleteTab(name);
    });
  };

  const selectTab = (tabName: string) => {
    withTabsSelectorNode((node) => {
      node.selectTab(tabName);
    });
  };

  const isFocused = $isNodeSelection(selection) && isSelected;
  return (
    <div className={`${isFocused ? 'focused' : ''}`} ref={ref}>
      <div className="tabs">
        {(tabsList || []).map((tabName) => {
          return (
            <div
              className={`tab ${selectedTab === tabName && 'active'}`}
              key={tabName}
              onClick={() => selectTab(tabName)}>
              <div className={'label'}>{tabName}</div>
            </div>
          );
        })}
        <div className={'tab'} onClick={addTab}>
          <div className={'label'}>+</div>
        </div>
        <div className={'tab'} onClick={() => deleteTab(tabsList[1])}>
          <div className={'label'}>Del 2nd tab</div>
        </div>
      </div>
    </div>
  );
}
