/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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

import Button from '../../../ui/Button';
import {$isTabsSelectorNode, TabsSelectorNode} from './TabsSelectorNode';

// function PollOptionComponent({
//   option,
//   index,
//   options,
//   totalVotes,
//   withTabsSelectorNode,
// }: {
//   index: number;
//   option: Option;
//   options: Options;
//   totalVotes: number;
//   withTabsSelectorNode: (
//     cb: (pollNode: PollNode) => void,
//     onSelect?: () => void,
//   ) => void;
// }): JSX.Element {
//   const {clientID} = useCollaborationContext();
//   const checkboxRef = useRef(null);
//   const votesArray = option.votes;
//   const checkedIndex = votesArray.indexOf(clientID);
//   const checked = checkedIndex !== -1;
//   const votes = votesArray.length;
//   const text = option.text;

//   return (
//     <div className="PollNode__optionContainer">
//       <div
//         className={joinClasses(
//           'PollNode__optionCheckboxWrapper',
//           checked && 'PollNode__optionCheckboxChecked',
//         )}>
//         <input
//           ref={checkboxRef}
//           className="PollNode__optionCheckbox"
//           type="checkbox"
//           onChange={(e) => {
//             withTabsSelectorNode((node) => {
//               node.toggleVote(option, clientID);
//             });
//           }}
//           checked={checked}
//         />
//       </div>
//       <div className="PollNode__optionInputWrapper">
//         <div
//           className="PollNode__optionInputVotes"
//           style={{width: `${votes === 0 ? 0 : (votes / totalVotes) * 100}%`}}
//         />
//         <span className="PollNode__optionInputVotesCount">
//           {votes > 0 && (votes === 1 ? '1 vote' : `${votes} votes`)}
//         </span>
//         <input
//           className="PollNode__optionInput"
//           type="text"
//           value={text}
//           onChange={(e) => {
//             const target = e.target;
//             const value = target.value;
//             const selectionStart = target.selectionStart;
//             const selectionEnd = target.selectionEnd;
//             withTabsSelectorNode(
//               (node) => {
//                 node.setOptionText(option, value);
//               },
//               () => {
//                 target.selectionStart = selectionStart;
//                 target.selectionEnd = selectionEnd;
//               },
//             );
//           }}
//           placeholder={`Option ${index + 1}`}
//         />
//       </div>
//       <button
//         disabled={options.length < 3}
//         className={joinClasses(
//           'PollNode__optionDelete',
//           options.length < 3 && 'PollNode__optionDeleteDisabled',
//         )}
//         aria-label="Remove"
//         onClick={() => {
//           withTabsSelectorNode((node) => {
//             node.deleteOption(option);
//           });
//         }}
//       />
//     </div>
//   );
// }

export default function TabsSelectorComponent({
  tabsList,
  nodeKey,
}: {
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

  const changeTab = (tabName) => {
    // get TabsPanelName by name or key?
    // setVisibility() for the current key and the next key
  };
  const isFocused = $isNodeSelection(selection) && isSelected;

  return (
    <div className={`${isFocused ? 'focused' : ''}`} ref={ref}>
      <div className="tabs">
        {(tabsList || []).map((tabName) => {
          return (
            <Button key={tabName} onClick={() => changeTab(tabName)}>
              {tabName}
            </Button>
          );
        })}
        <Button onClick={addTab}>+</Button>
      </div>
    </div>
  );
}
