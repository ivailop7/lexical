## v0.33.1 (2025-07-10)

- Add a setter for the format property on RangeSelection (#5829) Omar A.
- lexical-link Chore Fix test names (#7666) Noam Zaks
- v0.33.0 (#7672) Bob Ippolito
- v0.33.0 Lexical GitHub Actions Bot

## v0.33.0 (2025-07-03)

- lexical-playground fix close link popup when user clicks out of it (#7670) Achal Jhawar
- lexical-playground Chore Fix AutocompleteNode importDOM warning (#7667) Bob Ippolito
- lexical-react Bug Fix LexicalMenu position menu immediately regression (#7669) Bob Ippolito
- lexical-table Bug Fix Fix table selection for touch devices (#7656) Rickert Mulder
- lexical-clipboard Inherit style when typing after pasting rich text (#7657) Achal Jhawar
- lexical-list Bug Fix Make tap target for checklists bigger so touch inputs register (#7655) Rickert Mulder
- lexical-website Chore Fix typo in transforms (#7664) Noam Zaks
- lexical Bug Fix Workarounds for import json  (#7661) Yuncheng Lu
- lexical-website Documentation Update Update some doc links (#7660) Yuncheng Lu
- lexical-react Bug Fix aria-prohibited-attr violation on LexicalContentEditableElement (#7647) so99ynoodles
- lexical Bug Fix Workarounds in config protocol for loose inheritance (#7659) Bob Ippolito
- lexical-playground lexical-list add ability to change ordered list start number (#7638) Achal Jhawar
- lexical Bug Fix allow same mutation listener fn to be registered to multiple nodes (#7654) James Fitzsimmons
- lexical-playground Bug Fix Allow deleting empty column layouts via backspace  (#7636) Lakshmanshankar C
- lexical-react Bug Fix handle DraggableBlockPlugin in scrollable editors  (#7644) Randal
- lexical-devtools-core Chore add NodeState to TreeView (#7642) Randal
- lexical Bug Fix copy NodeState when splitting text nodes (#7641) Randal
- lexical-table Bug Fix Ignore SELECTIONINSERTCLIPBOARDNODESCOMMAND dispatched from child editors (#7637) Bob Ippolito
- LexicalRefactor Change UnionToIntersection flow type (#7643) Yuncheng Lu
- Feature config protocol  NodeState registrationflattening (#7258) Bob Ippolito
- lexical-headless-test Enhance navigator environment check with object type and structure validation (#7626) 0xobedient
- lexical-react Chore make ref types mutable (#7633) Finlay Smith
- Add in favor for to deprecated tag (#7634) sofiane-dj
- lexical-playground Bug Fix Update alignment state for image selection (#7627) Kiran Dash
- lexical-devtools-core Bug Fix Allow CustomPrintNodeFn to return undefined (#7619) Achal Jhawar
- lexical-codelexical-markdownlexical-playground Feature Add code diff highlighting (#7613) jeromew
- lexical-react Chore Remove confusing return value (#7607) Eliott Vincent
- lexicalBreaking Change Bug Fix Change copyNode to use afterCloneFrom (#7609) Bob Ippolito
- v0.32.1 (#7605) Bob Ippolito
- v0.32.1 Lexical GitHub Actions Bot

## v0.32.1 (2025-06-05)

- tests Chore Update table test to use locator API instead of page.evaluate (#7603) Bob Ippolito
- scripts update next version in lexical-esm-nextjs (#7604) Yuncheng Lu
- lexicallexical-selection Bug Fix Treat all TabNode as if they are in token mode (#7602) Bob Ippolito
- Monthly Release v0.32.0 (#7599) Yuncheng Lu
- v0.32.0 Lexical GitHub Actions Bot

## v0.32.0 (2025-06-02)

- lexical-playgroundlexical-rich-textlexical-websitetestsexamples Chore source command priority from package (#7596) Eliott Vincent
- Lexical Type Add flow export type for LexicalUpdateTags  (#7593) Rabbit
- lexical-code Feature Improve TabIndentOutdent to match VSCode (#7573) jeromew
- lexical-reactlexical-playground Feature allow whitespaces in search keyword in useBasicTypeaheadTriggerMatch  (#7584) Harshkumar Metkel
- lexical-react Bug Fix page freezes when typing a link in an overflow area (#7589) Kamil Pitua
- lexical-playground Refactor simplify ExcalidrawModal (#7590) Georgii Dolzhykov
- lexical-reactlexical-playground FloatingUI Context Menu (#7509) Ivaylo Pavlov
- lexical-link Feature Move URL formatting from #7499 to LinkNode sanitizeUrl (#7585) Bob Ippolito
- lexical-table Bug Fix error when deleting multiple rows with merged row cells (#7582) Kamil Pitua
- lexical-playgroundlexical-list Bug Fix Made checklist icon fully scalable, clickable, and properly spaced at large font sizes (#7558) Shubham Saini
- lexical-selectionlexical-playground Bug Fix unbulleting an image doesnt work #5698 (#7568) Kamil Pitua
- Update Fix docusaurus build by adding removeLegacyPostBuildHeadAttribute flag (#7574) Yuncheng Lu
- lexical-playground Bug Fix Preserve row striping in frozen table columns (#7572) Kiran Dash
- lexical-playground Chore source command priority from package (#7567) Eliott Vincent
- lexical-website Chore fix documentation typos (#7569) Noritaka Kobayashi
- lexical-markdown Bug fix Prevent transform from removing nodes if the replace function returns false (#7564) Rodrigo
- lexicallexical-playground Bug Fix Support Apple Pencil (#7545) Rickert Mulder
- lexical-list Bug Fix Removed the hardcoded checkbox width in checklist onclick helper (#7559) Jash Vithlani
- lexical-code Bug Fix 2 Tabs on single line selection should indent (#7544) jeromew
- lexical-playground Bug Fix Change list, strikethrough and quoteblock shortcuts to match Google Docs for Windows compatibility (#7556) Harshkumar Metkel
- Revert lexical-markdown Bug Fix Link Transformer URL Protocol Han (#7560) Gerard Rovira
- v0.31.2 (#7550) Bob Ippolito
- v0.31.2 Lexical GitHub Actions Bot

## v0.31.2 (2025-05-20)

- lexical-markdown Bug fix Do not export auto-link nodes (#7539) Baptiste Jamin
- lexical Bug Fix  Prevent from adding element.style.textAlign when formatType is unset (#7536) Baptiste Jamin
- lexical-code Bug Fix Allow Code Highlighter to be working in headless mode (#7538) Baptiste Jamin
- lexical-website Chore Update docusaurus-plugin-internaldocs-fb and reorg serialization docs (#7533) Bob Ippolito
- lexical-playground Bug Fix Use babel MatchPatterns that work correctly on windows (#7534) Bob Ippolito
- v0.31.1 (#7525) Bob Ippolito
- v0.31.1 Lexical GitHub Actions Bot

## v0.31.1 (2025-05-11)

- lexical-reactlexical-playground Bug Fix Make typeahead punctuation configurable allow underscores and dashes in emoji queries  (#7520) Kiran Dash
- lexical-playground Bug Fix capitalize shortcut not working in macos fix (#7508) Harshkumar Metkel
- lexical-rich-text Bug Fix Backspace should only dedent at first descendant of indented block (#7516) Bob Ippolito
- lexicallexical-website Documentation Start on NodeState docs and examples (#7294) Bob Ippolito
- lexical-playground Bug Fix LexicalTypeaheadMenuPlugin Positioning When Scrolled (#7506) AashishRichhariya
- lexical-list Bug Fix Inherit marker styles when indenting list items (#7504) Kiran Dash
- lexical-markdown Bug Fix Link Transformer URL Protocol Handling (#7499) AashishRichhariya
- lexical-table Bug Fix Add missing DOM import for TableNode frozen rows and columns (#7498) Vadim Isakov
- Monthly Release v0.31.0 (#7502) Yuncheng Lu
- v0.31.0 Lexical GitHub Actions Bot

## v0.31.0 (2025-04-24)

- lexical-reactlexical-table Bug Fix Re-render tables when the hasHorizontalScroll setting is changed (#7488) Bob Ippolito
- lexical-website Documentation Update Add detailed guides for key and clone concepts (#7448) Kiran Dash
- lexical-react Feature make check for entity boundary configurable in LexicalTypeaheadMenuPlugin (#7477) Andrey Tarasevich
- lexical-playground Chore Refactor autolink tests for reliability (#7482) Bob Ippolito
- lexical Chore Update KEYENTERCOMMAND API docs (#7481) Bob Ippolito
- lexical Chore Revert Enter command to use inexact matching (#7479) Daniel Teo
- lexical-playground Chore Disable flaky Can expand table to fit content when pasting table into table in collab (#7478) Bob Ippolito
- lexical-markdown Bug Fix Add import support for backslash escape sequences (#7476) Bob Ippolito
- lexicallexical-playground Chore Deprecate KEYMODIFIERCOMMAND and use KEYDOWNCOMMAND for playground shortcuts (#7472) Bob Ippolito
- lexical Bug Fix exact modifier matching for built-in keyboard shortcuts (#7443) 10tacion
- Chore Update sveltejs dependency (#7471) Garvit Bansal
- lexical-yjslexical Refactor Simplify removeFromParent internal operations (#7453) Kiran Dash
- lexical-playground Bug Fix Stabilize text format dropdown width in toolbar (#7462) Kiran Dash
- lexical-playground Feature Add keyboard shortcut for comments (#7464) Kiran Dash
- lexical Chore Update internalMarkNodeAsDirty TODO comment (#7457) Kiran Dash
- lexical-playground fix clarify EquationComponent inputRef type (#7460) Navid Mafi
- Chore migrate string literals to update tag constants (#7450) Kiran Dash
- lexical-tablelexical-playground Bug Fix Handle backspace deletion of tables with merged cells (#7447) Kiran Dash
- lexical-selection Bug Fix Correct caret movement in vertical-rl writing mode (#7439) Kiran Dash
- lexicallexical-website Feature Document and export common update tags (#7441) Kiran Dash
- lexicallexical-website Feature Improve createCommand developer experience (#7442) Kiran Dash
- v0.30.0 (#7440) Bob Ippolito
- v0.30.0 Lexical GitHub Actions Bot

## v0.30.0 (2025-04-07)

- lexical Feature Add text-transform styles to exported HTML (#7438) Kiran Dash
- Breaking Change Chore Improve spelling consistency across codebase (#7437) Kiran Dash
- lexical-playground Bug Fix Immediate broken image display on load failure (#7431) Kiran Dash
- lexical-list Feature Enforce strict list indentation (#7420) SeungHwan-Lee
- lexical-playground Bug clear formatting should also clear any indentoutdent if applied (#7417) Harshkumar Metkel
- lexical-table Refactor Rename and deprecate some table utils (#7415) Daniel Teo
- lexical-table Feature Improve logic for pasting table into table (#7408) Daniel Teo
- lexical-rich-text Bug Fix Prevent indentation from becoming negative (#7411) Daniel Teo
- lexical Bug Fix Fix forward line deletion when using controlK (#7412) Daniel Teo
- lexical-playground Bug Fix Floating toolbar position for end-aligned text (#7405) Kiran Dash
- lexical Chore Change getTextNodeOffset invariant to warn in prod (error in DEV) (#7397) Bob Ippolito
- lexical-react Feature Add option to disable first item auto-selection in menus (#7404) Kiran Dash
- lexical-devtools-core Bug Fix Update debug view to show KEYESCAPECOMMAND immediately (#7403) Kiran Dash
- Bug Fix Clone a node and use  setSelection instead of assigning dirty to true directly.  (#7401) Yuncheng Lu
- RFClexical-markdown Replace whitespace with code point when the string has leading and trailing whitespaces (#7400) Yuncheng Lu
- lexical-yjs Bug Fix Fix scroll position getting changed when someone else makes a change in collab (#7398) Aman Harwara
- lexical-markdown Bug Fix Prevent Markdown shortcuts from applying to code-formatted text (#7395) Daniel Teo
- lexical-rich-text Bug Fix Fix right and up arrow key navigation with decorator nodes (#7393) Kiran Dash
- lexical-yjs Bug Fix dont sync ElementNode dir property (#7330) James Fitzsimmons
- lexical-linklexical-playground Feature Add support for image links via NodeSelection (#7366) Kiran Dash
- Breaking Changelexical-markdown Bug Fix Preserve paragraph separation after block elements (#7386) Kiran Dash
- lexical-playground Bug Fix Use natural dimensions for inherited image size (#7388) Kiran Dash
- lexical-playground Feature clear blockelement formatting along with textNode (#7384) Harshkumar Metkel
- update codeowners (#7389) Sherry
- Update dependencies vite,babelruntime,prismjs,babelhelpers (#7381) Yuncheng Lu
- Breaking Changelexical Bug Fix Ensure updateEditorSync is always synchronous and use it when triggering listeners (#7378) Bob Ippolito
- lexical-list Bug Fix empty list item type change (#7380) Maksim Horbachevsky
- lexical-playground Chore Remove shared imports from playground (#7368) Bob Ippolito
- tests Update next version (#7374) Yuncheng Lu
- v0.29.0 (#7375) Yuncheng Lu
- v0.29.0 Lexical GitHub Actions Bot

## v0.29.0 (2025-03-24)

- Breaking Changelexical-tablelexical-playground Bug Fix Set tableFrozenColumn and tableFrozenRow classes only on the scrollable table wrapper (#7372) Bob Ippolito
- lexical Bug Fix Ignore input event from inside decorators (#7354) Bob Ippolito
- Breaking Changelexical-react Refactor LexicalNestedComposer add skipEditableListener prop and deprecate initialNodes prop and implicit namespace setting (#7357) Bob Ippolito
- lexical-playground Bug Fix Fix equation rendering in Safari (#7362) Kiran Dash
- Update react.md, fix typo (#7365) Bohdan Ptyts
- lexical-table Bug Fix Add fallback selection to InsertTableCommand (#7316) Patrick Moody
- Breaking Changelexical-markdown Feature Support escaping markdown characters (#7353) Alessio Gravili
- lexical-playground Bug Fix Table action menu visibility with cell overflow (#7334) Kiran Dash
- Breaking Changelexical Bug Fix Only select RootNode on removal of last child if there was an existing selection (#7351) Bob Ippolito
- lexical-playground Chore Improve accessibility of DraggableBlockPlugin add block button (#7352) Bob Ippolito
- v0.28.0 (#7348) Bob Ippolito
- v0.28.0 Lexical GitHub Actions Bot

## v0.28.0 (2025-03-18)

- lexical-website Docs Fix broken links to React Rich Collab Example (#7347) Bob Ippolito
- lexical-playgroundlexical-react Feature Push Draggable Element to Parent (#7338) Stphane
- Breaking Changelexicallexical-utils Bug Fix Handle canBeEmpty in splitNodes (#7342) Bob Ippolito
- Breaking Changelexical-table Bug Fix Table cell line breaks behave differently from the intended HTML behavior. (#7318) SeungHwan-Lee
- Breaking Changelexical Bug Fix Fix bug in transformer loop that would cause nodes not to get reconciled (#7341) Bob Ippolito
- lexical-utils Feature Add type predicate to objectKlassEquals (#7340) wnhlee
- lexical-playground Table actions should clear selection instead of moving it to the beginning (#7337) Bob Ippolito
- Breaking Changelexicallexical-playground Feature Add a default delete handler for NodeSelection (#7323) Bob Ippolito
- Breaking Changelexical-list Bug Fix Move ListItemNode text style inheritance to custom properties and CSS (#7325) Bob Ippolito
- lexical Feature Add mutatedNodes to UpdateListener payload (#7321) Bob Ippolito
- Breaking Changelexicallexical-table Bug Fix Scrollable TableNode updateDOM fixes and getDOMSlot type refactoring (#7336) Bob Ippolito
- lexical-editorBug fix Add LexicalEditor.hasNode to flow typing to match typescript (#7320) Alex Zhang
- lexical-react Chore remove unused dependencies from lexicalreact (#7315) Alessio Gravili
- v0.27.2 (#7314) Bob Ippolito
- v0.27.2 Lexical GitHub Actions Bot

## v0.27.2 (2025-03-11)

- lexical-table Bug Fix Fix unintended touch table cell selection when scrolling (#7309) Ibrahim El-bastawisi
- lexical-playground Bug Fix row height resizing for merged cells (#7305) Kiran Dash
- lexical-table Add table cell selection handler for touch devices (#7297) Ibrahim El-bastawisi
- lexical-playground Feature Add touch support for TableCellResizer (#7299) Ibrahim El-bastawisi
- lexical-yjs Bug Fix prevent collab element nodes from removing other nodes from node map (#7295) James Fitzsimmons
- lexical-website Bug Fix Fix vite.config.ts for gallery examples (#7290) Bob Ippolito
- v0.27.1 (#7288) Bob Ippolito
- v0.27.1 Lexical GitHub Actions Bot

## v0.27.1 (2025-03-04)

- CI Feature Add a fixer for the no-imports-from-self lint (#7284) Bob Ippolito
- lexical-table Bug Fix Click and drag table selection in Firefox (#7283) Bob Ippolito
- lexical-listlexical Bug Fix Add RTL direction support for list items in output HTML (#7282) Kiran Dash
- v0.27.0 (#7281) Bob Ippolito
- v0.27.0 Lexical GitHub Actions Bot

## v0.27.0 (2025-03-03)

- lexical-playgroundlexical-react Feature add HR theme config for selected state (#7279) Rob Hannay
- lexical-utils Bug Fix dont include parents siblings when starting dfs at last child (#7275) James Fitzsimmons
- chore add no-imports-from-self eslint rule to monorepo (#7272) Alessio Gravili
- ci Chore Remove unused GITHUBTOKEN secrets from workflows (#7209) Bob Ippolito
- lexical-playground Bug Fix apply correct column headers when column contains vertically merged cells (#7273) Riley Langbein
-  Chore Refactor sharedinvariant for easier dev debugging (#7269) Bob Ippolito
- Breaking Changeslexical Bug Fix Address deleteLine regression in #7248 (#7270) Bob Ippolito
- lexical Bug Fix invalid import from self (#7271) Alessio Gravili
- v0.26.0 (#7265) Bob Ippolito
- v0.26.0 Lexical GitHub Actions Bot

## v0.26.0 (2025-03-01)

- Fix selection shifting when deleting paragraphs on android (#7239) Wayne
- lexicalreact  Bug Fix anchor element not cleanup when component unmount (#7264) Y2
- lexical Bug Fix Point.isBefore could return incorrect result due to normalization (#7256) Bob Ippolito
- lexical Feature add a generic state property to all nodes (#7117) Germn Jabloski
- lexicallexical-mark Bug Fix Identify mark as inline element (#7255) Peter Dekkers
- lexical-playgroundexamples Refactor Unify vite devprodexample configurations (#7208) Bob Ippolito
- lexicallexical-utils Chore Add some missing flow types for NodeCaret and table related functionality (#7253) Bob Ippolito
- lexical-playground Bug Fix Table Action Menu dropdown positioning (#7229) Syed Umar Anis
- fix Add missing flow types for node event plugin (#7252) Maksim Horbachevsky
- lexical fix typo in Caret error msg (#7249) Sherry
- Breaking Changeslexicallexical-listlexical-playground Bug Fix deleteCharacter through ListNode-ListItemNode (#7248) Bob Ippolito
- Update Upgrade docusaurus version (#7244) Yuncheng Lu
- lexical-react fix ensure attributes are set immediately on menu (#7237) Dennis Soehnen
- lexical-table Bug Fix Prevent adjacent cell selection on triple-click (#7213) Kiran Dash
- lexical-list Bullet item color matches text color (#7024) Ivaylo Pavlov
- lexicallexical-code Refactor Use NodeCaret to implement RangeSelection.getNodes() (#7135) Bob Ippolito
- lexical-playground Refactor Image component rerenders on every editor update (#7233) Jash Vithlani
-  Feature Add linter to check that flow types are consistent with typescript types (#7230) Bob Ippolito
- lexical-playground fix hard coded theme classes for table hover actions (#7182) Syed Umar Anis
- lexical-list Bug Fix retain selection styling when exiting nested list (#7225) Divyansh Kumar
- lexicallist Feature export ListNodeTagType (#7228) Dani Guardiola
- lexical-table Docs Fix lexicaltable README.md (#7224) Bob Ippolito
- lexical-yjs Bug Fix Normalize multiple adjacent merge conflicts in one block (#7217) James Fitzsimmons
- Breaking Changelexicalreact Chore Remove deprecated default exports (#7219) Kiran Dash
- v0.25.0 (#7221) Bob Ippolito
- 2024 recap shortcut (#7223) Gerard Rovira
- v0.25.0 Lexical GitHub Actions Bot

## v0.25.0 (2025-02-20)

- lexical-playground Refactor Remove redundant Suspense from node decorators (#7215) Kiran Dash
- lexical-playground Bug Fix Optimize table cell resizer event listeners (#7194) Kiran Dash
- lexical-playground Chore Remove insertNodes workaround in ToolbarPlugin (#7206) Bob Ippolito
- Breaking Changelexical-playground Refactor Remove special case for collapsible forward deletion (#7204) Bob Ippolito
- ci Chore Upgrade astro to fix mysterious integration test failure (#7196) Bob Ippolito
- lexical-table Feature Support TableNode.style in createDOM and updateDOM (#7205) Bob Ippolito
- Breaking Changelexicallexical-playground Bug Fix Improve character deletion around shadow roots and decorators (#7155) Bob Ippolito
- lexical Bug Fix Workaround for delete character with emoji grapheme customers that do not include non-BMP code points (#7175) Bob Ippolito
- lexical Bug Fix catch setTimeout wrapped setBaseAndExtent call (#7202) Storm
- Replace substr with substring (#7188) Ivaylo Pavlov
- Breaking Changelexical-table Bug Fix Prevent nested tables (#7192) Kiran Dash
- lexical-table Freeze top row using pure CSS (#7190) Ivaylo Pavlov
- Documentation Update move placeholder examples to ContentEditable  (#7193) Rob Hannay
- Position menu immediately (#7181) Gerard Rovira
- lexical-codelexical-playground Bug Fix Fix selection boundaries in code block (#7187) Kiran Dash
- lexical-react Bug Fix Make typeahead menu respect read-only mode (#7185) Kiran Dash
- lexicallexical-devtools-corelexical-playground Bug Fix fix TextNode importDom highlight formatting (#7186) Kiran Dash
- lexical Bug Fix add missing flow type for getNearestEditorFromDOMNode (#7183) Kiran Dash
- Breaking Changelexicallexical-link Bug Fix Collapse through inline elements in deleteCharacter (#7180) Bob Ippolito
- fix DFS depths when starting from inline node (#7179) Maksim Horbachevsky
- No forward slash in template (#7178) Gerard Rovira
- lexical-react positionMenu on rendering typeahead mentions menu (#7164) Sherry
- lexical-table Bug Fix Ensure rectangular table cell merge behavior (#7161) (#7170) Kiran Dash
- fix dfs traversal from the middle of the tree leaves (#7174) Maksim Horbachevsky
- lexical-table Support first column freeze (#7134) Ivaylo Pavlov
- Update WWW build flag (#7169) Gerard Rovira
- scripts add noEnforceES3 to build script (#7162) Sherry
- lexical Chore Add more tests for RangeSelection.getNodes() (#7152) Bob Ippolito
- fix Replace Twitter with X (#7118) Aaron Dewes
- lexical-website Documentation Update CaretType has sibling and child. (#7159) Benjamin Gudehus
- lexical Bug fix Fixes infinite loop in sibling traversal (#7157) Ivan Suslov
- lexical-table Feature TableCellNode add verticalAlign attribute (#7077) liuwei
- lexicallexical-utilslexical-selectionlexical-table Feature NodeCaret abstraction for traversals and ranges (#7046) Bob Ippolito
- v0.24.0 (#7147) Bob Ippolito
- v0.24.0 Lexical GitHub Actions Bot

## v0.24.0 (2025-02-06)

- ci Chore Remove SSHKEY secret (#7143) Bob Ippolito
- bugfix Fix flow typedef for links plugin to include attributes (#7145) Maksim Horbachevsky
- lexical Bug Fix Fix Chrome on android deletion bugs (#7122) Wayne
- lexical-markdown Bug Fix support link and inline code text formats (#7004) Alessio Gravili
- lexical-react Refactor Replace ReactContext with React.Context (#7137) Sam Zhou
- lexicallexical-mark Bug Fix wrapSelectionInMarkNode with element points (#7132) Bob Ippolito
- lexical-playground Fix Replace icon with Twitter with X (#7127) AW
- cleanup size-limit (#7129) Sherry
- workflow Delete size limit report (#7128) Sherry
- workflow disable size-limit job (#7125) Sherry
- Fix ListItemNode serialization throws (#7116) Gerard Rovira
- lexical-mark Feature include inline decorator nodes in marks (#7086) James Fitzsimmons
- lexical-utils Fix Modify reverseDfs to be a right-to-left variant of dfs (#7112) Bob Ippolito
- lexical-utils Feature add reverse dfs iterator (#7107) Nigel Gutzmann
- lexical-playground Bug Fix Ensure Delete Node handles all node types (#7096) mohammed shaheer kp
- Listeners Lexical 3 updates to spelling and grammar - Update listeners.md  (#7100) Adam Pugh
- Lexical Docs 2 updates to spelling README.md (#7102) Adam Pugh
- Selection  Lexical 1 Spelling Update Update selection.md (#7103) Adam Pugh
- Creating a React Plugin 1 Grammar Update - Update createplugin.md (#7104) Adam Pugh
- Working with DOM Events 2 Spelling and Grammar Updates Update dom-ev (#7105) Adam Pugh
- lexical-yjs Bug Fix handle text node being split by Yjs redo (#7098) James Fitzsimmons
- lexical-react Bug Fix Import JSX type from React to prevent Cannot find namespace JSX-error when type-checking with React 19 (#7080) Torleif Berger
- lexical Chore Rename variable and add comments for Safari compositing workaround (#7092) Tetsuya
- Fix Use already defined RegisteredNodes type (#7085) Mateo Vukovi
- playground Bug fix prevent growing whitespaces in markdown table toggle (#7041) Sherry
- Unrevert Breaking Changelexical Bug Fix Commit updates on editor.setRootElement(null) #7023 (#7068) Sherry
- lexical-playground plugins TableOfContent Scroll smooth behaviour A (#7069) mohammed shaheer kp
- lexical-playground Fix Columns Layout Item Overflow (#7066) Ivaylo Pavlov
- Change fork modules to use production only when NODEENV explicitly set to production (#7065) Bob Ippolito
- lexical Bug Fix In the Safari browser, during the compositing event process, the delete key exhibits unexpected behavior. (#7061) CityHunter
- docs Change here link to more descriptive text (#7058) Violet Rosenzweig
- lexical-table Bug Fix Prevent error if pasted table has empty row (#7057) Aman Harwara
- lexical-list Bug Fix Prevent error when calling formatList when selection is at root (#6994) Aman Harwara
- fix iOS Autocorrect strips formatting by reporting wrong dataType (#5789) Brayden
- lexical-yjs Feature Allow passing in custom syncCursorPositions function to collab hook (#7053) Aman Harwara
- fix triple click around inline elements (links) (#7055) Maksim Horbachevsky
- lexical-table Support table alignment (#7044) Ivaylo Pavlov
- Revert Breaking Changelexical Bug Fix Commit updates on editorSetRootElement(null) (#7023) (#7052) Sherry
- lexical Bug Fix Normalize selection after applyDOMRange to account for Firefox differences (#7050) Bob Ippolito
-  Bug Fix Use GITHUBOUTPUT instead of GITHUBENV for size-limit action (#7051) Bob Ippolito
- Breaking Change Chore Use terser for optimizing cjs prod build (#7047) Bob Ippolito
- lexical Bug Fix Handle MutationObserverinput event re-ordering when using contentEditable inside of an iframe (#7045) Bob Ippolito
- Clean up nested editor update (#7039) Ivaylo Pavlov
- Breaking Changelexicallexical-selectionlexical-list Bug Fix Fix infinite loop when splitting invalid ListItemNode (#7037) Bob Ippolito
- v0.23.1 (#7035) Bob Ippolito
- v0.23.1 Lexical GitHub Actions Bot

## v0.23.1 (2025-01-09)

- lexical Fix TabNode deserialization regression  (#7031) Bob Ippolito
- lexical-react Feature Merge TabIndentionPlugin and ListMaxIndentLevelPlugin plugins (#7018) Maksim Horbachevsky
- lexical-mark Bug Fix reverse ternary in MarkNode.addID (#7020) James Fitzsimmons
- v0.23.0 (#7017) Bob Ippolito
- v0.23.0 Lexical GitHub Actions Bot

## v0.23.0 (2025-01-04)

- lexical-playground Fix table hover actions button position (#7011) Ivaylo Pavlov
- lexical Bug Fix Fix registerNodeTransform regression introduced in #6894 (#7016) Bob Ippolito
- lexical-playground Refactor switch headings test file names (#7008) Christian Grngaard
- Breaking Changelexical Feature Add updateFromJSON and move more textFormattextStyle to ElementNode (#6970) Bob Ippolito
- lexical Bug Fix Fix getNodes over-selection (#7006) Bob Ippolito
- test npm upgrade astro (#7001) Sherry
- Documentation Fix typo nest nest-nest in README.md (#7000) Christian Grngaard
- tests npm upgrade next (#6996) Sherry
- lexical Bug Fix Flow is missing some variables and functions (#6977) Simon
- v0.22.0 (#6993) Sherry
- v0.22.0 Lexical GitHub Actions Bot

## v0.22.0 (2024-12-23)

- lexical Fix flow error change this to any (#6992) Sherry
- Refactor exportJSON (#6983) Germn Jabloski
- feature expose forEachSelectedTextNode (#6981) Germn Jabloski
- lexicallexical-table Bug fix TablePlugin  - check is current selection in target table node (#6979) Alex
- Documentationlexical-website Documentation for useLexical node selection hook (#6976) Ajaezo Kingsley
- lexical-table Feature Support google docs colgroup import (via deprecated col width attribute) (#6971) Bob Ippolito
- lexical-markdown Bug Fix preserve the order of markdown tags for markdown combinations, and close the tags when the outmost tag is closed (#5758) yhw5
- lexical-utils Bug Fix Refactor markSelection for getDOMSlot and not using updateDOM (#6961) Bob Ippolito
- lexicallexical-table Bug Fix Allow TableSelection to be preserved during contextmenu events (#6964) Bob Ippolito
- lexical-website Add Discord to the community section of the footer (#6967) Bob Ippolito
- lexicallexical-rich-textlexical-playground Feature Support capitalization format (#6897) Bedru Umer
- lexical-playground Bug Fix Allow scrolling if the table cell content overflows (#6966) Parasaran
- lexical-tablelexical-playground Fix Insertion of multiple rows (#6963) Vinay Kushwaha
- Breaking Changelexical Feature New update tag skip-dom-selection, onUpdate now always called (#6894) Bob Ippolito
- Test234 (#6958) Tranquiliz00
- Revert Test comment for pr testing (#6953) (#6957) bailey-meta
- Revert lexical-onboarding testing sev mitigation (#6952) (#6956) Niels Y.
- Create a test PR (#6955) Tranquiliz00
- Test comment for pr testing (#6953) bailey-meta
- lexical-onboarding testing sev mitigation (#6952) Niels Y.
- lexical-list Revert PR 6912 (#6944) Sherry
- scripts-integration-fixtures Address GitHub detected a vulnerability in the sveltejskit dependency (#6943) Luis Silva
- lexical-table Fix Delete table row in merge cells (#6922) Vinay Kushwaha
- lexical-list Bug Fix Ensure new paragraph node retains selection styling when exiting list (#6917) Aleksandr Lapukin
- lexical-reactBug Fix the location of draggable-block-menu cannot be calculated #6818 (#6915) lin-mt
- lexical-playground Refactor editor styles should in PlaygroundEditorTheme.css (#6934) Syed Umar Anis
- lexical-playground Fix tabs do not show strikethroughunderline (#6811) Oluwasanya Olaoluwa
- Breaking Changelexical-list Fix Preserve original format after indenting list item  (#6912) C.
-  Bug Fix add mergegroup to the tests workflow (#6932) Bob Ippolito
- Update core-tests workflow triggers (#6928) Gerard Rovira
- Doc nits (#6927) Gerard Rovira
- lexical-playground Chore Update Prettier to v3 (#6920) daichan132
- lexical-playground Fix empty layout item causes 100 CPU usage (#6906) Basile Savouret
- lexicallexicalselection Feature Unify selectAll Implementations (#6902) Hadi Elghoul
- lexical-tablelexical-utilslexical-react Bug Fix Enforce table integrity with transforms and move non-React plugin code to lexicaltable (#6914) Bob Ippolito
- lexical-website Fix docsreact next button links to itself (#6911) Oluwasanya Olaoluwa
- Warn about display flex container for the editor (#6901) Maksim Horbachevsky
- lexical-websitelexical-react Documentation Update documentation for LexicalTreeView plugin (#6898) Ajaezo Kingsley
- lexical-link Bug Fix Preserve the startend of the selection for non-text points when creating a LinkNode (#6883) Bob Ippolito
- v0.21.0 (#6896) Sherry
- Documentation Update Add release protocol to maintainers-guide.md (#6895) Sherry
- v0.21.0 Lexical GitHub Actions Bot

## v0.21.0 (2024-12-01)

- Fix selected table colors (#6892) Gerard Rovira
- v0.20.2 (#6891) Sherry
- v0.20.2 Lexical GitHub Actions Bot

## v0.20.2 (2024-11-30)

- lexicallexical-playground Bug Fix Allow setEditorState to work correctly inside of an update (#6876) Bob Ippolito
- lexical-playground Fix CSS property (#6886) Ivaylo Pavlov
- v0.20.1 (#6887) Sherry
- lexical-table Bug Fix Fix scrollable table exportDOM (#6884) Bob Ippolito
- lexical-table Bug Fix Fix table tab navigation (#6880) Bob Ippolito
- lexical-playground Feature Highlight special strings with format (#6860) C.
- lexical-playground Fix Hidden comment button on narrow screens or vertical monitors (#6871) Oluwasanya Olaoluwa
- lexical-table Bug Fix Fix left arrow key handling for table selection (#6875) Bob Ippolito
- positionNodeOnRange fixes (#6873) Gerard Rovira
- Add SelectionAlwaysOnDisplay plugin (#6872) Gerard Rovira
- Allow passing params to run-all (#6874) Gerard Rovira
- lexical-playground Bug Fix Preserve the selection using the link editor from a table (#6865) Bob Ippolito
- lexical-playground Bug Fix autocomplete format before and after insertion (#6845) Bedru Umer
- lexical-utils Bug Fix Add feature detection to calculateZoomLevel (#6864) Bob Ippolito
- Add Documentation for  RootNodes semantic and use case (#6869) C.
- lexical-selection Bug Fix Wrong selection type in setBlocksType (#6867) Simon
- lexical-table Bug Fix get table-cell background selection color from a class (#6658) Hamza
- lexical-table Bug Fix Resolve table selection issue when the mouse crosses over a portal (#6834) Bob Ippolito
- Lexical Chore Update default skipInitialization to false for registerMutationListener (#6857) Fadekemi Adebayo
- tests npm upgrade cross-spawn (#6856) Sherry
- Feature Deprecate nodesOfType function (#6855) Sachin Mahato
- Lexical Bug Fix backspace bug when deleting nodes with canInsertTextAfter set to false (#6268) Dani Lauzurica
- lexical-link Test Appending inline element nodes to ListNode  (#6826) Fadekemi Adebayo
-  Chore npm upgrade cross-spawn (#6848) Sherry
- Table Action Menu - fix UI issue with Merge Cells item (#6830) Syed Umar Anis
- lexical-utils Bug Fix Add missing Flow type declarations (#6841) Hadi Hamid
- lexical-react Fix(lexical-react) ContentEditable props type rename (#6837) (Ivan)
- lexical-link Test  Removing link from node(children) (#6817) Oluwasanya Olaoluwa
- lexical-table Bug Fix Fix down arrow key handling in TableObserver (#6839) Bob Ippolito
- Prevent initial value fn to be called on rerender (#6835) Maksim Horbachevsky
- Link flow types (#6833) Gerard Rovira
- lexical-examples Chore Add DOMExportOutputMap type to the exportMap (#6827) Ajaezo Kingsley
- lexicallexical-table Feature Scrollable tables with experimental getDOMSlot API (#6759) Bob Ippolito
- lexical-rich-textlexical-plain-text workaround for Korean IME issue on iOS (#6819) wnhlee
- Fix Aria attributes for ContentEditable are ignored (#6814) Oluwasanya Olaoluwa
- Mention nodes shouldnt be spellcheckd ) (#6788) Sevki
- lexical-list Bug Fix Handle appending inline element nodes in ListNode.append (#6791) Aman Harwara
- lexical-mark Bug Fix Stop MarkNode ids array deep copy in clone (#6810) Ebad
- v0.20.0 (#6809) Bob Ippolito
- v0.20.0 Lexical GitHub Actions Bot

## v0.20.1 (2024-11-29)

- lexical-table Bug Fix Fix table tab navigation (#6880) Bob Ippolito
- lexical-playground Feature Highlight special strings with format (#6860) C.
- lexical-playground Fix Hidden comment button on narrow screens or vertical monitors (#6871) Oluwasanya Olaoluwa
- lexical-table Bug Fix Fix left arrow key handling for table selection (#6875) Bob Ippolito
- positionNodeOnRange fixes (#6873) Gerard Rovira
- Add SelectionAlwaysOnDisplay plugin (#6872) Gerard Rovira
- Allow passing params to run-all (#6874) Gerard Rovira
- lexical-playground Bug Fix Preserve the selection using the link editor from a table (#6865) Bob Ippolito
- lexical-playground Bug Fix autocomplete format before and after insertion (#6845) Bedru Umer
- lexical-utils Bug Fix Add feature detection to calculateZoomLevel (#6864) Bob Ippolito
- Add Documentation for  RootNodes semantic and use case (#6869) C.
- lexical-selection Bug Fix Wrong selection type in setBlocksType (#6867) Simon
- lexical-table Bug Fix get table-cell background selection color from a class (#6658) Hamza
- lexical-table Bug Fix Resolve table selection issue when the mouse crosses over a portal (#6834) Bob Ippolito
- Lexical Chore Update default skipInitialization to false for registerMutationListener (#6857) Fadekemi Adebayo
- tests npm upgrade cross-spawn (#6856) Sherry
- Feature Deprecate nodesOfType function (#6855) Sachin Mahato
- Lexical Bug Fix backspace bug when deleting nodes with canInsertTextAfter set to false (#6268) Dani Lauzurica
- lexical-link Test Appending inline element nodes to ListNode  (#6826) Fadekemi Adebayo
-  Chore npm upgrade cross-spawn (#6848) Sherry
- Table Action Menu - fix UI issue with Merge Cells item (#6830) Syed Umar Anis
- lexical-utils Bug Fix Add missing Flow type declarations (#6841) Hadi Hamid
- lexical-react Fix(lexical-react) ContentEditable props type rename (#6837) (Ivan)
- lexical-link Test  Removing link from node(children) (#6817) Oluwasanya Olaoluwa
- lexical-table Bug Fix Fix down arrow key handling in TableObserver (#6839) Bob Ippolito
- Prevent initial value fn to be called on rerender (#6835) Maksim Horbachevsky
- Link flow types (#6833) Gerard Rovira
- lexical-examples Chore Add DOMExportOutputMap type to the exportMap (#6827) Ajaezo Kingsley
- lexicallexical-table Feature Scrollable tables with experimental getDOMSlot API (#6759) Bob Ippolito
- lexical-rich-textlexical-plain-text workaround for Korean IME issue on iOS (#6819) wnhlee
- Fix Aria attributes for ContentEditable are ignored (#6814) Oluwasanya Olaoluwa
- Mention nodes shouldnt be spellcheckd ) (#6788) Sevki
- lexical-list Bug Fix Handle appending inline element nodes in ListNode.append (#6791) Aman Harwara
- lexical-mark Bug Fix Stop MarkNode ids array deep copy in clone (#6810) Ebad
- v0.20.0 (#6809) Bob Ippolito
- v0.20.0 Lexical GitHub Actions Bot

## v0.20.0 (2024-11-07)

- Add optional selection argument to getHtmlContent flow type (#6803) Rajiv Anisetti
- Fix importDOM for Layout plugin (#6799) Ivaylo Pavlov
- lexical-playground Feature Add more keyboard shortcuts (#6754) Bedru Umer
- lexical-website Documentation Update Add Documentation for html Property in Lexical Editor Configuration (#6770) Ajaezo Kingsley
- lexical-yjs Bug Fix clean up dangling text after undo in collaboration (#6670) Michael Shafer
- Lexical-website BugFix Change button text colour to improve visibility (#6796) Fadekemi Adebayo
- lexical-markdown Feature add ability to control finding the end of a node matched by TextMatchTransformer (#6681) Alessio Gravili
- lexical-react Bug Fix LexicalTypeaheadMenuPlugin SSR error ReferenceError document is not defined (#6794) Bedru Umer
- lexical-website Chore upgrade to Docusaurus v3.6 - Docusaurus Faster (#6761) Sbastien Lorber
- Bug Fix  ContextMenu Paste option not preserving style  (#6780) C.
- lexical-playground Fix the placement of the fontSize button in the ToolbarPlugin  and hide the vertical scroll (Bug Fix) (#6786) Oluwasanya Olaoluwa
- #6768 fix to avoid infinite markdown shortcut matchers run (#6778) Maksim Horbachevsky
- lexical Feature Add onUpdate function during update with onUpdate (correct baselline) (#6773) Michael Landis
- v0.19.0 (#6774) Sherry
- v0.19.0 Lexical GitHub Actions Bot

## v0.19.0 (2024-10-28)

- lexical Add missing commands to Lexical.js.flow (#6769) Sherry
- lexical-react Feature add attributes in LinkPlugin (#6760) Taro Shono
- lexical-react replace abstract component (#6752) Sherry
- Trust HTML for rich text clipboard (#6755) Gerard Rovira
- lexical-playground Bug Fix Disable editing of Excalidraw Component in Read-Only Mode (#6704) Neysan Foo
- lexical-playground Bug Fix Disable table hover actions in read-only mode (#6706) Neysan Foo
- lexical-table lexical-selection Try to fix calling split on undefined (#6746) Ivaylo Pavlov
- Add ariaErrorMessage and ariaInvalid to Flow type (#6751) EJ Hammond
- lexical-react Feature Add aria-errormessage and aria-invalid support to LexicalContentEditable (#6745) EJ Hammond
- lexical-table Return inserted node from insertTableRowEXPERIMENTAL and insertTableColumnEXPERIMENTAL (#6741) Aman Harwara
- Bug Fix Shiftdown selects an extra subsequent element  for Table selection (#6679) Katsia
- lexical-playground Bug Fix Disable equation editing in read-only mode (#6707) Neysan Foo
- lexical-markdown Feature add ability to hook into the import process for multiline element transformers (#6682) Alessio Gravili
- lexical-playground Bug Fix Disable image and inline focusing, adding caption and editing in read-only mode (#6705) Neysan Foo
- lexical-code Bug Fix Add global type declarations for Prism (#6736) Bob Ippolito
-  Chore Disable react-beta test job for now (#6738) Bob Ippolito
- lexical-playground Table Hover Actions Layout Fixes (#6725) Ivaylo Pavlov
- lexical Bug Fix lines were being deleted with deleteLine (#6719) Taro Shono
- lexical-table Bug Fix colWidths not imported from DOM for TableNode (#6731) cwstra
- Chore add workflow to auto close stale pr based on label (#6732) Sherry
- lexical-playground Bug Fix match toolbar font size input with the rest of toolbar items in Read-Only mode (#6698) Bedru Umer
- lexical-playground Remove unused command (#6726) Ivaylo Pavlov
- fix preserve custom fields in Lexical-Yjs sync (#6724) Vadim Nicolaev
- lexicallexical-listlexical-rich-text Fix Preserve indentation when serializing to and from HTML (#6693) Germn Jabloski
- lexicallexical-list Bug Fix Retain indentation when list format is removed and reapplied (#6684) Sebastian Arrazola
- lexical Bug Fix Insertion into inline ElementNode should not crash (#6703) Bob Ippolito
- lexical-playground Bug Fix Track Resizing Actions for Excalidraw in History Stack (#6696) Neysan Foo
- lexical-playground Bug Fix toolbar font size input keyboard accessibility (#6695) Riley Pearce
- lexical-playground 3 Bug Fixes, 1 UX Improvement All Regarding Excalidraw Node (#6666) Neysan Foo
- lexical Bug Fix TextNode in token mode should not be split by removeText (#6690) Bob Ippolito
- lexical-yjs Bug Fix Add missing setLocalStateField method to ProviderAwareness type (#6683) Vadim Nicolaev
- lexical Bug Fix Fix Table formatting when no TextNodes present (#6675) Katsia
- lexical-tablelexical-playground Bug Fix Make style buttons in toolbar respect table selection (#6678) Katsia
- Support backward selection in rows deletion (#6680) Maksim Horbachevsky
- v0.18.0 (#6676) Sherry
- v0.18.0 Lexical GitHub Actions Bot

## v0.18.0 (2024-09-26)

- lexical-markdown set shouldMergeAdjacentLines default to be false  (#6660) Sherry
- lexical-link Bug Fix Removing a link from descendants (#6656) Sergey Gorbachev
- lexical-playground Bug Fix Correct ExcalidrawNode DOM handling for proper resizing (#6657) neysanfoo
- lexical-markdown Refactor allows omitting certain properties from TextMatchTransformers, adds jsdocs (#6651) Alessio Gravili
- lexical-table Bug Fix Fix crash in deleteCellHandler (#6650) Bob Ippolito
- lexical-playground Bug Fix empty code block not focused (#6649) Sherry
- lexical-markdown shouldMergeAdjacentLines as an option (#6642) Sherry
- lexical-code Bug Fix Annotate lexicalcode as having side-effects for Prism (#6652) Bob Ippolito
- lexical-reactlexical-playground Bug Fix Workaround for yjs disconnect race in React StrictMode (#6644) Bob Ippolito
- Allow exporting a document fragment from the exportDOM function (#6641) Tom Kubt
- Grammar Issue - Repeated Word (#6643) Adam Pugh
- lexical-tablelexical-playground Feature Add column widths to TableNode (#6625) Patrick Moody
- lexical-playgroundExcalidrawNode Bug Fix Preserve Excalidraw image dimensions after resizing (#6634) neysanfoo
- lexical-table  Bug Table formatting and styling not persisting for empty cells (#6626) Katsia
- lexical-markdown Fix normalize markdown in convertFromMarkdownString to comply with CommonMark spec (2nd try) (#6629) Germn Jabloski
- lexical-playground Bug Fix Fix table rowcolumn index when resizing merged cells (#6630) Patrick Moody
- Revert lexical-markdown Fix normalize markdown in convertFromMarkdownString to comply with CommonMark spec (#6608) (#6627) Sherry
- lexical-react Refactor Ensure disconnect is called after connection is established in useYjsCollaboration (#6619) smworld01
- CI tag flaky test (#6620) Sherry
- address micromatch vulnerability (#6616) Sherry
- Bug Fix Fix issue where selecting a cell then dragging outside of table would not select entire table (#6579) Mo
- lexical-markdown Breaking Change rename multilineElement to multiline-element (#6617) Sherry
- lexical Chore Add more helpful invariants to applyNodeReplacement (#6567) Bob Ippolito
- lexical-markdown Fix normalize markdown in convertFromMarkdownString to comply with CommonMark spec (#6608) Germn Jabloski
- Expose getStyleObjectFromCss in lexicalselection (#6612) Melissa Freiser
- lexical-markdown update markdown flow api (#6615) Sherry
- lexical-playground Fix Poll Option not clickable at some place after checked state (#6609) Vinay Kushwaha
- Multiple update tags (#6507) Gerard Rovira
- lexical-codebreaking change Bug Fix explicitly import instead of window. to support code nodes in nodejs (#6562) Nadine Nguyen
- lexical-tablelexical-playground Bug Fix Fix merged cell related edge cases (#6607) Bob Ippolito
- Fix issue where cmdctrl  left arrow after a tab character would cause exception (#6588) Mo
- Address svelte vulnerability (#6603) Sherry
- lexical-markdownbreaking change Feature multiline markdown transformers  mdx support (#6530) Alessio Gravili
- lexical-table Fix Table Cut Event Handling (#6596) Ivaylo Pavlov
- lexicallexical-overflow Refactor simplified removeText and insertText rewrite (part 1) (#6456) Germn Jabloski
- Fix test results CI path on Windows (#6585) Mo
- lexical-listlexical-react Refactor Create registerList Function Separate from React Shared Utils (#6560) River
- lexical-react Fix incorrect addition of empty cells on table paste (#6578) Shubhanker Srivastava
- lexical-table feat Add row striping (#6547) Ivaylo Pavlov
-  Feature Check undeclared dependencies in build (#6574) Bob Ippolito
- lexical-react menu positioning Unrevert PR6510 but with gating (#6566) Sherry
- lexical-table Bug Fix Add lexicalclipboard as a direct dependency of lexicaltable (#6571) Bob Ippolito
- v0.17.1 (#6559) Ivaylo Pavlov
- v0.17.1 Lexical GitHub Actions Bot

## v0.17.1 (2024-08-26)

- lexical-playground Bug Fix fix comment timestamps (#6555) Ira Hopkinson
- lexical Add tests for HTMLConfig (#5507) wnhlee
- lexical-table Bug Fix Append a ParagraphNode to each cell when unmerging (#6556) Minseo Kang
- lexical-table Fix table selection paste as plain text (#6548) Ivaylo Pavlov
- lexical-tablelexical-clipboard Bug Fix Race condition in table CUTCOMMAND (#6550) Bob Ippolito
- lexical-playground Bug Fix Fix firefox e2e test regression in Selection.spec.mjs (#6546) Bob Ippolito
- Bug Fix Fix issue where triple-clicking a cell would dangerously select entire document (#6542) Mo
- lexical-playground Fix in playground show component-menu when scroll (#6510) keiseiTi
- lexical-react Fix multiple node selection deletion (#6538) Ivaylo Pavlov
- lexical-yjs Bug Fix Properly sync when emptying document via undo (#6523) Mo
- lexical-table Stop selecting the whole table after pasting cells (#6539) Ivaylo Pavlov
- lexical-table Fix a number of table Cut command scenarios (#6528) Ivaylo Pavlov
- Chore change className props in TreeView component to optional (#6531) Mingxuan Wang
- lexical-list Bug Fix handle non-integer numbers in setIndent (#6522) jrfitzsimmons
-  Chore Mark additional tests as flaky from #6535 test runs (#6536) Bob Ippolito
- lexical-table Bug Fix Selection in tables with merged cells (#6529) Botho
- Revert Fix OverflowNode configuration (#6535) Bob Ippolito
- lexical-react Fix Fix React.startTransition on Webpack  React 17 (#6517) Turner
- Fix OverflowNode configuration (#6027) Gerard Rovira
- lexical-react remove editorDEPRECATED that has been deprecated for two years (#6494) Bob Ippolito
- lexical Refactor RFC LexicalNode.afterCloneFrom to simplify clone implementation (#6505) Bob Ippolito
- lexicalselection Feature yield target to style patch fn (#6472) Divyansh Kumar
- lexical surface more error details in reconciler (#6511) Sherry
- lexical Bug Fix Fix decorator selection regression with short-circuiting (#6508) Bob Ippolito
- Fix splitText when detached (#6501) Gerard Rovira
- Flow add more HTMLDivElementDOMProps (#6500) Gerard Rovira
- lexical-playground Bug Fix Update tooltip for redo button with correct macOS shortcut (#6497) Bob Ippolito
- lexical Feature Add version identifier to LexicalEditor constructor (#6488) Bob Ippolito
- docs prevent automatic p tag wrapping (#6491) Devy
- Revert lexicalplayground fix block cursor show horizontal (#6490) Bob Ippolito
- When creating a new check list, set the checked value of the list item to false instead of undefined (#5978) Aman Harwara
- lexicalplayground fix block cursor show horizontal (#6486) keiseiTi
- lexical Bug Fix Merge pasted paragraph into empty quote (#6367) wnhlee
- lexical-table Bug Fix Enable observer updates on table elements attributes change (#6479) Evgeny Vorobyev
- v0.17.0 (#6487) Sherry
- v0.17.0 Lexical GitHub Actions Bot

## v0.17.0 (2024-07-31)

- LexicaCI run extended tests for safari in mac-os and chromefirefox in linuxwindows (#6466) Sahejkm
- lexical-table Bug Fix cannot delete content when a table inside selection (#6412) placeba
- LexicalCI Update canary e2e test os (#6465) Sahejkm
- CI tag flaky tests (#6462) Sherry
- lexical Bug Fix Allow getTopLevelElement to return a DecoratorNode (#6458) Bob Ippolito
- CI dont cancel other test runs if e2e flaky job fails (#6460) Sherry
- Flow add tags type to OnChange plugin (#6457) Gerard Rovira
- lexical-rich-text Bug Fix HeadingNode.insertNewAfter (#6435) Germn Jabloski
- lexical-react sync format in flow file (#6448) Sherry
- lexical Bug Fix getCachedTypeToNodeMap should handle a empty and writable EditorState (#6444) Bob Ippolito
- lexical lexical-selection Preserve paragraph styles between lines (#6437) Ivaylo Pavlov
- LexicalGallery Add tableplugin example to gallery (#6447) Sahejkm
- LexicalCI ignore running unitintegeritye2e tests on examples folder code (#6446) Sahejkm
- LexicalGallery Create Simple Tableplugin example (#6445) Sahejkm
- lexicalauto-link Fix auto link crash editor (#6433) Maksym Plavinskyi
- lexicallexical-selection Bug Fix Respect mode when patching text style (#6428) Adrian Busse
- lexical-historylexical-selectionlexical-react Fix #6409 TextNode change detection (#6420) Bob Ippolito
- lexical-playground Refactor run prettier to fix CI (#6436) Germn Jabloski
- fix(LexicalNode) fix inline decorator isSelected (#5948) Xuan
- lexical-playgroundTableCellResizer Bug Fix Register event handlers on root element (#6416) JBWereRuss
- lexical-react update flow typing for draggable block plugin (#6426) Sherry
- docs fix typo in editor.registerCommand() usage (#6429) Yangshun Tay
- fix(docs) correct typo in Lexical collaboration guide (#6421) Francois Polo
- Fix discrete nested updates (#6419) Gerard Rovira
- CI fix build failure on astro integration tests (#6414) wnhlee
- CI run flaky tests on firefox browsers (#6411) Sherry
- CI tag flaky tests (#6405) Sherry
- lexical-reactlexical-playground sync draggable block plugin to www (#6397) Sherry
- Fix transpile nodesOfType (#6408) Gerard Rovira
- Restore registerRootListener null call (#6403) Gerard Rovira
- Add ref to contenteditable (#6381) Gerard Rovira
- lexical Feature registerMutationListener should initialize its existing nodes (#6357) Bob Ippolito
- lexical Feature Implement Editor.read and EditorState.read with editor argument (#6347) Bob Ippolito
- lexical Bug Fix more accurate line break pasting (#6395) Sherry
- lexical-html Feature support pasting empty block nodes (#6392) Sherry
- lexical-playgroundlexical-table Bug Fix Fix Shift Down Arrow regression for table sequence. (#6393) Serey Roth
- Gallery Add option to filter plugins based on tags  (#6391) Sahejkm
- Fix clear rootElement on React (#6389) Gerard Rovira
- CI tag flaky tests (#6388) Sherry
- Prettier sort test attributes (#6384) Gerard Rovira
- Fix integrity test (#6385) Gerard Rovira
- LexicalGallery Convert files to follow typescript (#6383) Sahejkm
- lexicallexical-playground Bug Fix Create line break on paste of content type texthtml (#6376) Janna Wieneke
- examples Chore Use named export of LexicalErrorBoundary in the examples (#6378) Bob Ippolito
- LexicalGallery Add option to search examples in the gallery (#6379) Sahejkm
- lexical-playground Fix Table Hover Actions Noclick Bug (#6375) Ivaylo Pavlov
- Lexical Fix flow errors on syncing build to meta intern (#6373) Sahejkm
- rexical-react Bug Fix Headings inside collapsible sections are lost when Table of Contents is re-initialized (#6371) Katsia
- LexicalGallery Add description in the card, option to render preview card at run time if no image (#6372) Sahejkm
- Lexical Create initial Gallery View with Emoji Plugin Example (#6369) Sahejkm
- CI run e2e flaky tests in a separate job (#6365) Sherry
- Make placeholder accessible (#6171) Gerard Rovira
- lexical-playground Table Hover Action Buttons (#6355) Ivaylo Pavlov
- lexicallexical-table Chore Replace references to old GridSelection with TableSelection (#6366) Bob Ippolito
- lexical-markdown Feature Change Dont trim whitespaces on convertFromMarkdownString (#6360) Sherry
- v0.16.1 (#6363) Ivaylo Pavlov
- v0.16.1 Lexical GitHub Actions Bot

## v0.16.1 (2024-07-01)

- lexical-playgroundlexical-poll Bug Fix Fixes undefined context inside Poll add option (#6361) Roman Lyubimov
- (docs) Add existing history page to navigation (#6359) Oliver Lassen
- Lexical Fix broken sync due to deprecation of ReactDOMComet to ReactDOM (#6358) Sahejkm
- lexical-html Bug Fix Preserve text alignment of nested block elements, when converting HTML to Lexical Nodes (#6340) Zigopis Nikolaos
- Replace await with async in lexical-headlessREADME.md (#6343) Kibaek Kim
- Bug Fix Fix selection when hitting shiftarrowdown into a table. (#6274) Serey Roth
- Update feature request template (#6316) Sherry
- Add impact description to bug report issue template (#6317) Sherry
- lexical-reactlexical-dev-tools-core Bug Fix TreeView selection indicator (#6336) Ira Hopkinson
- lexical Bug Fix Export type EditorUpdateOptions (#6332) Bob Ippolito
- lexical-link Fix bug when cant remove link formatting from autolink (#6306) Maksym Plavinskyi
- lexical Bug Fix Make reconcileParagraphFormat respect editor readonly state (#6295) Aleksandr Lapukin
- LexicalGallery add option to add gallery content in Meta Intern only (#6321) Sahejkm
- Few missing exports that are useful (#6318) Piechota
- LexicalCI Fix issues in afterapproval workflow (#6307) Sahejkm
- LexicalMeta Add meta intern static docs config (#6302) Sahejkm
- lexical-playground Fix bug Insert an image inside another images caption (#6109) (#6230) Maksym Plavinskyi
- CI Only send flaky test notice once (#6298) Sherry
- LexicalUI Gallery Fix meta lexical website intern build errors (#6300) Sahejkm
- CI Comment to look up Flaky test tracker on e2e test failure (#6292) Sherry
- fix yjs collaboration plugin in react strict mode (#6271) Meron Ogbai
- lexicaldevtools Bug Fix Fixed issue when extension devtools panel gets out of sync with background script in Chrome  Edge (#6297) Vlad Fedosov
- lexicalauto-link Fix auto link node escapes on second . (#6146) Maksym Plavinskyi
- lexical-markdown Add test to keep code language (#6259) Vladimir Ivakin
- lexical-playgroundlexical-devtools Fix Add missing explicit devDependencies for vite config (#6291) Bob Ippolito
- LexicalMeta Add dependencies needed to setup lexical-website in m (#6293) Sahejkm
- Upgrade vite version to address vulnerabilities detected by the Open  (#6284) Sahejkm
- LexicalTables Follow up on #6267 handle multi column delete crash on forward selection at end of the table (#6279) Sahejkm
-  Feature Automated nightly releases (#6204) Bob Ippolito
- lexical-selection Fix lost autolink styling (#6275) Maksym Plavinskyi
- Lexical Fix #6221  delete multiple column table crash  (#6267) Sahejkm
- lexical-markdown Bug Fix standardise selection to move to start after markdown toggle  (#6220) Sherry
- lexical-playground CI fix flaky MaxLength emoji e2e test (#6257) Sherry
- LexicalCI Skip extended tests workflow run on multiple approvals (#6265) Sahejkm
- Revert lexical-react Bug Fix checklist cannot be toggled in sub-e (#6264) Gerard Rovira
- lexical-utils Fix mergeRegister should call cleanup functions in reverse order (#6260) Bob Ippolito
- Lexical Fix missing meta copyright headers in files  (#6258) Sahejkm
- docsexamples Update plain text and rich text examples (#6187) Maksym Plavinskyi
- lexical-eslint-plugin Fix Use cjs compatible export from built version (#6252) Bob Ippolito
- Lexical Skip newly added flaky Resize merged cells heightwidth tests for linuxcollabfirefox mode (#6250) Sahejkm
- lexical-playground CI standardise key press delay (#6246) Sherry
- v0.16.0 (#6248) Ivaylo Pavlov
- v0.16.0 Lexical GitHub Actions Bot

## v0.16.0 (2024-06-04)

- lexical-table Bug Fix Change exported table column width (#6243) Alex Reznik
- lexical-table CI Remerge PR 6200 Resizing table with merged cells (#6235) Sherry
- lexical-react Bug Fix checklist cannot be toggled in sub-editors (#6216) Alessio Gravili
- lexical-selection Bug Fix Selection is removed when changing style of 2 different nodes (#6223) Zigopis Nikolaos
- refactor refactored InlineImageNode - spans for correct HTML (#6214) Anthony Bouch
- lexical-playground CI fix flaky collab test (#6240) Sherry
- LexicalCI Fix approval workflow to ignore e2e tests run on labelled PRs again (#6239) Sahejkm
- LexicalCI Add more ism in e2e tests to decrease overall run time (#6237) Sahejkm
-  Fix size-limit report for esm modules (#6234) Bob Ippolito
- Lexical  run tests on approval if there is no extended-tests label manually added (#6198) Sahejkm
- Fix programmatic clipboard copy on non-editable (#6232) Gerard Rovira
- Revert PR 1st causing some new added tests fail in collab mode and webkit mode (#6224) Sahejkm
-  Fix Resolve Windows regression caused by upgrading glob (#6227) Bob Ippolito
- LexicalSize-Checks Measure both cjsesm builds for regression checks (#6219) Sahejkm
- Refactor import paths in LexicalEditorState (#6178) vuki365
- lexical-website Documentation Update Validate stackblitz URLs in documentation (#6215) Bob Ippolito
- lexical-playgroundlexical-table Bug Fix Resizing table with merged cells (#6200) Alex Reznik
- lexical-devtools Documentation Update Added link to the Mac App Store (#6218) Vlad Fedosov
- lexical-devtools Chore Safari App Store review fixes (#6213) Vlad Fedosov
- LexicalCI Add more packages for size limit regressions check (#6209) Sahejkm
- lexical-list Refactor remove unnecessary type casting (#6203) Sherry
- lexical-reactlexical-dev-tools-core Feature Allow TreeView custom print output (#6180) Ira Hopkinson
- lexical-list Bug fix support pasting github checklist  (#6195) Sherry
- lexical-code Refactor remove unnecessary type casting (#6202) Sherry
- Remove noisy running time signal mentioned in #6137 (#6208) Sahejkm
- lexical-listlexical-playground Bug fix support pasting google doc checklist (#6191) Sherry
- LexicalTextNode Refactor remove unnecessary type casting (#6201) Sherry
- lexical-devtools Feature Improved usage and maintenance documentation (#6186) Vlad Fedosov
- lexical Bug Fix mutation listener set for original node should work with the replaced node (#6189) Vlad Fedosov
- Collapsible as div (#6179) Gerard Rovira
- Update CODEOWNERS (#6192) Sahejkm
- lexical-playground Chore add test for pasting over mentions (#6024) Sherry
- Remove emojis from emoticons plugins (#6188) Gerard Rovira
- Revert lexical-plaintext Feature add escape key handler (#6185) Vlad Fedosov
- lexical Bug Fix delete line for selections ending with elements (#6160) Vitali Kozlov
- lexical-dev-tools-core Feature Index tree view cmds (#6182) Sherry
- Lexical use lexical bot for adding label (#6183) Sahejkm
- Lexical Move more tests related to Copy Paste from e2e to unit (#6181) Sahejkm
- Fixed Uncommented Code in Getting Started with React Docs (#6172) Sangram Bahadur
- docs explain installing browsers for e2e tests (#6163) Georgii Dolzhykov
- CI fix status badge (#6170) Sherry
- lexicaldevtools Feature Added full Safari support (#6105) Vlad Fedosov
- lexical-react Bug Fix Use automatic jsx runtime with reactjsx-runtime - react alias in www (#6143) Bob Ippolito
- Lexical Feature Merging PR closes auto-linked issue (#6124) wnhlee
- Lexical Attempt to fix after approval workflow (#6153) Sahejkm
- lexical-markdown Bug Fix add missing shouldPreserveNewLines to markdown flow (#6165) Sherry
- lexical-selection Bug Fix    Fixes text formatting with segmented and token nodes #6059 (#6062) David Lacroix
- lexical-react Feature React 19 unit tests (#6048) Bob Ippolito
- Add tbody and thead tags to TableObserver (#6139) Piechota
- Bug Fix Insert paragraph at tables edge inside a collapsible (#6159) Serey Roth
- Deprecate unused methods on ElementNode (#5782) Georgii Dolzhykov
- Lexical add null check for key undefined before calling toLowerCase function (#6154) Sahejkm
- lexical-playgroundimage-node Bug Fix Load image error UI (#6111) Maksym Plavinskyi
- Lexical Fix meta sync build failing due to recent changes in LexicalErrorBoundary.tsx (#6140) Sahejkm
- Remove legacy-events from mac  linux e2e matrix (#6135) Nicolas Gallagher
- Bug Fix Add check for DecoratorNode for horizontal table navigation. (#6129) Serey Roth
- Fix the label-on-approval workflow (#6136) Nicolas Gallagher
- Lexical Use classic mode for jsx runtime for meta build (#6134) Sahejkm
- Lexical Fix size limit workflow git hub action bot not able to create comment for PRs from fork (#6130) Sahejkm
- fix(lexical) #6132 react build size regression from #6088 (#6133) Vlad Fedosov
- Lexical Add flow for eslint (#6127) Sahejkm
- Lexical Replace code with key to check KeyboardEvents (#6110) Sahejkm
- lexical-markdownlexical-playground Feature Option to include blanklines in markdown render (#6020) Sherry
- lexical-playgroundlexical-reactlexical Feature Theme class added to horizontal rule node (#6090) Dalton
- lexical-react Breaking change Deprecate public default exports (#6088) Bob Ippolito
- Fix Bug - 6000 Changing the font size when inputting does not take  (#6102) pixelbyaj
- Lexical Add label to run e2e tests on approve (#6120) Sahejkm
- lexical-devtools Feature Reflect picker state on inspector button ui (#6077) wnhlee
- Lexical Move some codeblock tests from e2e to unit (#6094) Sahejkm
- Lexical #6097 run extended tests on mergegroup event (#6100) Sahejkm
- fix(lexicaldevtools) Reduce requested permissions as we dont use them atm (#6099) Vlad Fedosov
- fix(lexicalplayground) Emoji menu item not getting targeted styles (#6055) Dalton
- Only run CI e2e tests on approved PRs (#6080) Nicolas Gallagher
- LexicalTable Formatting Copy Paste Move test from e2e to unit as followup on #5855  (#6093) Sahejkm
- lexicalTextNode Feature Add test for #6087 (#6091) wnhlee
- lexical-playground Feature Center TableCellReizer drag zones over the edge of the cell (#6071) apella
- lexical Feature error checking for node key re-use with type mismatch in DEV (#6014) Bob Ippolito
- lexical-playgroundfile Feature Playground link sharing (#6028) Bob Ippolito
- lexicalTextNode Feature improve supporting multiple format on importDOM of TextNode (#6087) wnhlee
- v0.15.0 (#6084) Ivaylo Pavlov
- v0.15.0 Lexical GitHub Actions Bot

## v0.15.0 (2024-05-11)

- feat(examplesreact-rich-collab) Added collaboration focused example (#6043) Vlad Fedosov
- build Refactor move error-codes generation to existing babel plugin (#6005) Bob Ippolito
-  Chore Fix all new lint warnings, plus manual exports clean-up (#5979) Bob Ippolito
- lexical-yjs Bug fix Fix cursor position after undo in collab mode (#6070) Katsiaryna
- lexical-text Bug Fix for handling multiple matches on hashtags (#6056) wnhlee
- Fix #6051 Deprecate keycode to code (#6054) Sahejkm
- Revert importDOM changes from #5951 (#6060) Shubhanker Srivastava
- LeixcalHashtag  Fix prevSibling not getting updated after replacement of match as followup #6053 (#6067) Sahejkm
- lexical-react Fix autolink styles on creation (#6069) Shubhanker Srivastava
- Lexical Update outdated flow file for LexicalMarkdown (#6057) Sahejkm
- Revert #6053 first till proper fix is shipped in #6056 (#6058) Sahejkm
- lexical-tablelexical-playground Bug Fix Table selection stuck  (#6049) Alex Reznik
- fix(lexicaltext) for handling hashtag following multiple invalid matches (#6053) wnhlee
- fix(lexicaldevtools) Fixed NPM buildzip command for Chrome and added builddev steps for Safari (#6052) Vlad Fedosov
- Fix #5703 Infinite loop on hashtag transform (#6045) Sahejkm
- tables Fix font size update in table selection (#6046) Shubhanker Srivastava
- feat(lexicalplaintext) Add escape key handler (#5991) Jeffrey Lu
- Add flow declarations in LexicalDevtoolsCore.js.flow (#6037) Sahejkm
- build Bug Fix ensure unique artifact name for e2e tests (#6035) Bob Ippolito
- Dev warning for failed DOM selection (#6033) Gerard Rovira
- CharacterLimit prefer replace over insertBefore (#6032) Gerard Rovira
- feat(lexicaleslint-plugin) new package with eslint rules for lexical (#5908) Bob Ippolito
- CI Refactor clean up github workflows for cache correctness (#6029) Bob Ippolito
- playground Bug Fix change default dev port to 3000 (#6026) Bob Ippolito
- build Chore Upgrade rollup and vite to latest versions (#6018) Bob Ippolito
- lexical-utils ci fix typing to fix integrity test (#6019) Sherry
- lexical-html Feature Support copy pasting block and inline nodes properly (#5857) Sherry
- chore allow tsc to typecheck tests, fix type issues in those tests (#5982) Bob Ippolito
- lexical-website Bug Fix add allow-popups-to-escape-sandbox to iframe sandbox flags (#5988) Bob Ippolito
- lexicalwebsite Documentation Added FAQ page around Lexical collaborative mode (#5993) Vlad Fedosov
- Fix #5976 Passing an empty ParagraphNode to dfs incorrectly returns content from subsequent paragraphs (#5977) matsuyama-k1
- fix(build) clean up of build-www rewriteImports (follow-up to #5995) (#5999) Bob Ippolito
- Root element count invariant  test (#6003) Gerard Rovira
- Fix add root element count (#6002) Gerard Rovira
- Fix table of contents for headings in tables and collapsible sections (#5946) Katsiaryna
- add flow for devtools (#5998) Acy Watson
- add flow annotations (#5997) Acy Watson
- fix(build) fix build-www rewriteImports to always rewrite flow modules (#5995) Bob Ippolito
- TreeView Minor enhancement Add option to obfuscate text in the TreeView plugin (#5990) Sahejkm
- fix(lexicalplayground) We now skip auto-scrolling on table resize (#5986) Katsiaryna
- Fix #5738 wrong selection on mouse click (#5969) Sahejkm
- refactor cleanup unused react imports in tests files (#5983) Sherry
- Documentation add PR template (#5851) Sherry
- fix(lexicaldevtools) Fixed publish pipeline (#5973) Vlad Fedosov
- fix(lexicaldevtools) Fixed permissions for Edge and improved devtools tab layout (#5972) Vlad Fedosov
- fix(lexicalreactLexicalMenu) Fix check for menu cannot fit on top (#5743) Jingkang Zhang
- feat(lexicalwebsite) Packages documentation automatic generation (#5965) Bob Ippolito
- Fixed the issue of playground crashing when the selected node contain (#5960) Tengfei
- fix use runner.arch in cache keys for github workflows (#5971) Bob Ippolito
- Refactor build scripts and npm package process (#5876) Bob Ippolito
- Refactor table resizer rendering logic (#5957) Alex Reznik
- Fix TableCell child nodes on paste (#5951) Shubhanker Srivastava
- Fix insertText with element selection (#5959) Gerard Rovira
- Revert Revert Fix #5720 update the resolvedOffset correctly on imag   e selection and drag (#5952) (#5955) Gerard Rovira
- Fix failing insertNodes when selection is null (#5956) Gerard Rovira
- Fix insertText outdated selection after node replacement (#5954) Gerard Rovira
- Revert Fix #5720 update the resolvedOffset correctly on image selection and drag (#5952) John Flockton
- Autocomplete Move styling to theme (#5944) Ajay Prakash PP
- fix(lexicaldevtools) Fix of the edge cases with restricted pages in EdgeFF (#5945) Vlad Fedosov
- playground Collapsible Section Fixes (#5935) Ivaylo Pavlov
- fix(lexicalmarkdown) markdown import code block with prefix (#5780) Samuel Richard Magny
- add flow types for LexicalEditorRefPlugin (#5939) Acy Watson
- chore(lexicalhistory) Remove redundant register call (#5932) wnhlee
- fix(lexicaldevtools) Misc fixes before first public release (#5942) Vlad Fedosov
- feat(lexicaldevtools) Added interactive editor picker (#5926) Vlad Fedosov
- Preserve selection in tables with open typeahead menu (#5820) Serey Roth
- Fix selecting table selects an image after (#5917) Katsiaryna
- Add support for PowerShell Syntax Highlighting (#5909) Hansel
- fix build-release regression introduced in #5920 (#5936) Bob Ippolito
- Maintain text decoration styles on paste (#5938) Shubhanker Srivastava
- Fix bug with block decorator nodes erroring on indent (#5923) John Flockton
- feat(lexicaldevtools) Added styling to devtools panel (#5925) (#5929) Vlad Fedosov
-  docs generate packages sidebar from filesystem  group lexicalreact (#5931) Bob Ippolito
- fix(lexicalutils) fix #5918 by re-exporting shared constants with explicit types (#5920) Bob Ippolito
- feat(lexicaldevtools) Publish pipeline added (#5924) Vlad Fedosov
- Add setTimeout for mousemove handler (#5919) Alex Reznik
- feat(lexicaldevtools) Added Edge support (#5915) Vlad Fedosov
- fix(lexical) Fix inserting text from Grammarly when full node is selected with forward selection (#5856) Ruslan Piliuta
- Minor refactor on ListMaxIndentLevelPlugin (#5886) wnhlee
- Add  prefix to updateToolbar on react-rich example (#5887) wnhlee
- Fix copying html table with unequal number of cells in a row (#5824) Katsiaryna
- v0.14.5 (#5907) Acy Watson
- v0.14.5 Lexical GitHub Actions Bot

## v0.14.5 (2024-04-16)

- update lock file (#5904) Acy Watson
- fix(lexicalreact) lexicalreact 0.14.4 brings in lexicaldevtools-core dependency without declaring it (#5902) Vlad Fedosov
- v0.14.4 (#5900) Acy Watson
- v0.14.4 Lexical GitHub Actions Bot

## v0.14.4 (2024-04-16)

- chore(lexicalplayground) Remove unnecessary type assertions from useReport.ts (#5884) wnhlee
- fix(lexical) avoid implicit any type by explicitly setting variable type (#5889) Xuan
- fix(lexical-reactLexicalClearEditorPlugin) Fix #3456 stale selection state after clear format (#5896) Sahejkm
- feat(lexicaldevtools) Extracted storemessaging implementation to the separate packages (#5894) Vlad Fedosov
- Remove a special case in table deleteTextHandler (#5891) Alex Reznik
- Bump publish scripts to v4 (#5817) Ivaylo Pavlov
- docs Fix broken style for node overrides example on docs (#5890) wnhlee
- chore Fix nested typo in README (#5892) Zach Heckert
- docs fix typedoc links and add missing packages (#5850) Bob Ippolito
- feat use devprod conditions instead of webpack in exports (#5858) Bob Ippolito
- fix(playground) wrong logic for FloatingLinkEditorPlugin bad node (#5814) Aron Griffis
- fix #4468 Preserv elemement text align format on new paragraph creation (#5878) Sahejkm
- fix test failing after rebase on bug fix for multiple text nodes styles in a cell node (#5872) Sahejkm
- Fix #5663 styling from td not persisted on copy paste (#5855) Sahejkm
- Replace async arrow with function (#5870) Gerard Rovira
- TextNode support font-weight bold (#5852) Gerard Rovira
- Add missing rewrite of utils import (#5866) John Flockton
- Revert Revert feat(lexicaldevtools) Added TreeView rendering instead of a simple textarea (#5864) John Flockton
- Revert feat(lexicaldevtools) Added TreeView rendering instead of a simple textarea (#5861) John Flockton
- Fix bug with typeahead positioning (#5859) John Flockton
- feat(lexicaldevtools) Added TreeView rendering instead of a simple textarea (#5830) Vlad Fedosov
- fix Clear Formatting (#5849) Manuel Ojeda
- Fix issue with removeing selectionchange correctly (#5848) John Flockton
- Fix #5620 Persist format at paragraph level for new line (#5822) Sahejkm
- Use updated docRoot count in removeRootElementEvents (#5847) John Flockton
- chore upgrade to docusaurus 3 (#5838) Bob Ippolito
- Use unnamed ESM imports for Prism modules (#5828) John Flockton
- fix webpack needs its own export condition (#5833) Bob Ippolito
-  Add missing flow type parameters for insertNewAfter (#5832) Sahejkm
- feat export IS and CAN environment constants from lexicalutils (#5831) Bob Ippolito
- Fix failing WWW build (#5826) John Flockton
- v0.14.3 (#5816) Ivaylo Pavlov
- v0.14.3 Lexical GitHub Actions Bot

## v0.14.3 (2024-04-03)

- fix removed overwrite of copyright (#5811) Sven ani
- remove duplicate list merging (#5810) Sherry
- fix Table selection stuck (#5807) Alex Reznik
- #4618 combine list if next sibling is list node (#5803) Sherry
- docs clarify readupdate language in intro, readme  editor state (#5809) Bob Ippolito
- chore Removed invalid GH action config (#5808) Vlad Fedosov
- feat(lexicaldevtools) Added basic extension scaffolding (#5747) Vlad Fedosov
- Improve table selection and navigation (#5767) Serey Roth
- Fix typo in docs (#5805) John Flockton
- fix avoid auto-embed menu overflowing off right side of page (#5804) wangqi
- Fix #5543 insertText() was inserting Text as child of table node instead of root before tablerow resulting in table node not getting deleted (#5799) Sahejkm
- Editable immediately when adding link from Floating toolbar (#5801) Ivaylo Pavlov
- Quick fix for #5754 Numbered list does not increment in ImageNode caption #5754 (#5798) Sherry
- Node fork modules  moduleResolution bundler (#5774) Bob Ippolito
- Node-aware Context Menu Items (#5791) Ivaylo Pavlov
- Fix #5720 update the resolvedOffset correctly on image selection and drag (#5795) Sahejkm
- fix Address more flaky collab tests (#5788) Bob Ippolito
- fix Update iframes to prevent focus stealing (#5784) Bob Ippolito
- fix restore playground esm build (#5781) Bob Ippolito
- fix Double input of text when composing at TextNode boundaries (#5762) matsuyama-k1
- lexicalplayground Moved Vite config to TS and removed code duplication (#5744) Vlad Fedosov
- Fix selection started from inside of the table (#5766) Alex Reznik
- Respect CSS zoom (#5772) Ebad
- Revert fixed #5233 firefox related issue for backspace deletion  wh (#5776) Gerard Rovira
- Fix clear formatting in table (#5765) Alex Reznik
- Generate default entry in package.json exports last  use .mjs for esm modules (#5737) Bob Ippolito
- Update build script to exclude WWW from ESM modules (#5753) John Flockton
- chore(lexicaltext) Split into several files for better readability and to simplify further expansion (#5718) Vlad Fedosov
- fixed #5233 firefox related issue for backspace deletion  where focus offset is of type element instead of text (#5734) Sahejkm
- Update the publish script channel (#5736) Ivaylo Pavlov
- v0.14.2 (#5735) Ivaylo Pavlov
- v0.14.2 Lexical GitHub Actions Bot

## v0.14.2 (2024-03-18)

- Fix order of exports in lexical-react (#5732) Brian Birtles
- Clean up CHANGELOG (#5730) Ivaylo Pavlov
- v0.14.1 (#5729) Ivaylo Pavlov
- v0.14.1 Lexical GitHub Actions Bot

## v0.14.1 (2024-03-18)

- ESM build (#5618) Bob Ippolito
- Fix height and width parsing in ImportDOM for ExcalidrawNode (#5721) Ivaylo Pavlov
- ImportDOM and ExportDOM for LayoutContainerNode (#5722) Ivaylo Pavlov
- Fix dont call importDOM methods more than once (#5726) Georgii Dolzhykov
- Add test for multiple leading # characters in a hashtag (#5723) wnhlee
- Fix to count tabs as list indentation on importing markdown (#5706) wnhlee
- Update CharacterLimitPlugin to support custom renderer (#5715) wnhlee
- docs Added links to API docs for respective packages (#5719) Vlad Fedosov
- docs Creating a Plugin page  example (#5717) Vlad Fedosov
- Add code snippets for ClearEditorPlugin and MarkdownShortcutPlugin (#5711) Nick
- Send click event in read-only editor (#5714) Ivaylo Pavlov
- Fix deletion issues when using Chromium Android (#5644) Aman Harwara
- Export table row height in JSON (#5696) Ivaylo Pavlov
- Fix Bulleting a Node Selection (#5699) Ivaylo Pavlov
- fix  Typo in the collaboration nodes (#5702) Pranav Bakre
- Fix endless renders with editorRef callback (#5701) wnhlee
- style fix broken eslint check of #5625 (#5694) yf-yang
- Fix forward word deletion destructing element nodes (#5625) Ivaylo Pavlov
- fix(tables) Add missing paragraph node when copying empty cells from external resources (#5670) Simon Pasquereau
- chore(docs) Changed stackblitz.com links to point at this repo (#5685) Vlad Fedosov
- docs Added conceptual view of the Lexical Core Design (#5677) Vlad Fedosov
- Add support for grid selection in text alignment. (#5652) Serey Roth
- docs Added reasoning on why State is necessary (#5678) Vlad Fedosov
- docs Improved Getting Started with React guide (#5676) Vlad Fedosov
- docs add a tip about discrete state update (#5664) Micha Dzienisiewicz
- fix Fix E2E tests in Safari (Webkit) (#5672) Vlad Fedosov
- Configure ESLint enable curly rule, fix on save (#5666) Georgii Dolzhykov
- docs Interactive Vanilla JS example (#5668) Vlad Fedosov
- support multiple windows (#5070) Rob Figueiredo
- docs Added visualization of the Lexical modular architecture (#5667) Vlad Fedosov
- Refactor simplify getFirstDescendant and getLastDescendant (#5665) Georgii Dolzhykov
- Unbullet one list item not the whole list (#5621) Ivaylo Pavlov
- Preserve bullet item indent on newline (#5578) Ivaylo Pavlov
- fix unify class name splittingfiltering with normalizeClassNames (#5649) Bob Ippolito
- Move to native UUID (#5622) Ivaylo Pavlov
- Escape Layout Plugin (#5626) Ivaylo Pavlov
- 0.14 Remove unused canExtractContents (#5628) Ivaylo Pavlov
- Revert Fix hashtag regex blocking transform to heading (#5636) Acy Watson
- Fix hashtag regex blocking transform to heading (#5376) wnhlee
- Fix shiftarrow down selection for tables in sequence. (#5617) Serey Roth
- Revert Fixed position for lexical menu (#5602) (#5614) Gerard Rovira
- fix disable markdown shortcuts for collaboration (#5591) junhsss
- fix Improve performance of updateChildrenListItemValue (#5590) Bob Ippolito
- Fixed position for lexical menu (#5602) Ebad
- Bug Right Align in Toolbar for RTL direction shows Left Align Icon (#5561) Muhammad Fahad
- fix hide Firefoxs text size buttons (#5588) Martin
- IME Input via CDP with latest Playwright (#5584) Ivaylo Pavlov
- Fix list selection when first node followed by an element node (#5583) Ivaylo Pavlov
- fix update docs example (#5586) James Pulec
- Fix Double Deletion on Backspace (#5580) Ivaylo Pavlov
- Fix Poll Node (#5579) Ivaylo Pavlov
- Fix computeTableMap flow (#5574) Gerard Rovira
- Update react documentation (#5568) Pavel Shermayster
- Edit Link modal fix (#5551) Harry Sanders
- Add lexicalhtml to docs (#5557) wnhlee
- Prevent file img conversion (#5563) Gerard Rovira
- Fix add class to elements exported from CodeNode (#5558) wnhlee
- v0.13.1 (#5556) Gerard Rovira
- Fix Flow getCharacterOffsets (#5555) Gerard Rovira
- v0.13.1 Lexical GitHub Actions Bot

## v0.13.1 (2024-01-27)

- Update InlineImageNode.tsx (#5552) lvvl
- docs correct react plugin name (#5554) sj
- Check global.window on DOM availability check (#5547) wnhlee
- Update CODEOWNERS (#5550) Gerard Rovira
- feat Expose getActiveEditor and getActiveEditorState (#5409) yf-yang
- Floating link editor for AutoLinkNode and conversion to LinkNode once modified. (#5536) Harry Sanders
- Add rowcolumn with correct header styles (#5546) Shubhanker Srivastava
- v0.13.0 (#5540) Gerard Rovira
- Add missing flow types (#5542) Gerard Rovira
- v0.13.0 Lexical GitHub Actions Bot

## v0.13.0 (2024-01-24)

- Rename LexicalTableSelection to LexicalTableObserver (#5533) Gerard Rovira
- Move Grid to lexicaltable (#5532) Gerard Rovira
- Remove Grid Nodes (#5531) Gerard Rovira
- Move Grid to lexicaltable (#5528) Gerard Rovira
- Fix and extend README.md documentation links (#5526) Leo
- Combined selection format to ignore empty text nodes (#5521) Gerard Rovira
- Clean up the never implemented Table menu in Toolbar (#5523) Ivaylo Pavlov
- Fixed the toolbar style activation state is incorrect in certain cases (#5126) Warren19
- Fix inserting redundant paragraph on enter in MarkNode (#5418) Drago Strinu
- Bump Node in tests to 18.18.0 (#5513) Ivaylo Pavlov
- Fix AutoLinkPlugin triggers endless transforms (#5404) wnhlee
- Allow setting className for checklist in theme (#5445) Aman Harwara
- fix set button typebutton in TableActionMenuPlugin (#5510) Anthony Bouch
- PR-5 Remove references of PointSelection (#5334) Illia Olenchenko
- Fix CI (#5511) Gerard Rovira
- Fix inserting link open editor in edit mode (#5458) wnhlee
- docs(serialization) add node helpers to ExtendedTextNode example (#5442) Can Rau
- Fix exportTextFormat to keep dollar sign (#5379) wnhlee
- Use correct prop type for children in LexicalComposer (#5503) Paul
- Fix DecoratorNodes being treated as block elements (#5371) Steve Larson
- Replace font size dropdown with font size entry component (#5451) Shubhanker Srivastava
- Adding ability to mount LexicalMenus to arbitrary divs (#5481) Ebad
- Fix escape down for collapsible section when collapsed (#5485) Ivaylo Pavlov
- Fix columns layout update command (#5484) Ivaylo Pavlov
- Fix small issue with DecoratorNode type guards (#5478) John Flockton
- Fix multiline conversion to codeblock (#5472) Shubhanker Srivastava
- Remove depecated usage of checks from Flow types (#5477) John Flockton
- Update Flow version (#5471) John Flockton
- Minor refactoring in LexicalLineBreakNode (#5455) Georgii Dolzhykov
- Minor fix for release script (#5464) Acy Watson
- v0.12.6 (#5463) Acy Watson
- v0.12.6 Lexical GitHub Actions Bot

## v0.12.6 (2024-01-08)

- Fix floating link editor on inline image caption (#5460) wnhlee
- Revert Inserting hyperlink through toolbar doesnt open floating editor in edit mode (#5456) Acy Watson
- Fix TextNode#createDOM types allow editor parameter in subclasses (#5425) Georgii Dolzhykov
- docs fix outdated importDOM types in docs (#5431) Georgii Dolzhykov
- Bug Editing a link and changing selection shows wrong link value (#5352) Syed Umar Anis
- fix Reset compositionKey when backspacing a selection on Android where anchor and focus keys are different (#5389) Aman Harwara
- Bug Fix added a fix for discarding multiple color picker entries on drag (#5335) Bhavya Karia
- Remove duplicated test codes (#5429) wnhlee
- Inserting hyperlink through toolbar doesnt open floating editor in edit mode (#5372) Syed Umar Anis
- fix adding missing argument for sliceSelectedTextContent (#5380) Nadine Nguyen
- Fixed a small typo (#5427) frankdiw
- Fix insertNodes when inserting into inline elements (#5394) Brian Birtles
- Add link to state update blog (#5423) Acy Watson
- canInsertTextAfter exception for composition (#5378) Gerard Rovira
- Fix insert image to new inserted table row in playground report error (#5417) frankdiw
-  Refactored findNearestListItemNode using findMatchingParent (#5419) Ajay Prakash PP
- docs correct custom node examples (#5407) Naseem Ali
- Fixed the error when CollapsibleTitleNode type enter key (#5416) frankdiw
- dropdown text visibility problem fixed for medium and smaller screens (#5382) Recep ifti
- Fix convertFromMarkdownString breakdown due to no parent (#5393) wnhlee
- Fix bug on window.event conflict (#5391) Henry Boisgibault
- Fix typo on test title (#5399) wnhlee
- fix typo Contaner - Container (#5410) Philippe de Reynal
- fix logical error in description of insertBefore parameter (#5400) spirobel
- Featureexcalidraw resize (#5383) Recep ifti
- Flow fix RangeSelection extends (#5377) Gerard Rovira
- Fixed for #5162, The beginning of a TextNode with canInsertTextBefore false in  (#5363) matsuyama-k1
- PR 4 remove GridSelection from lexical core (#5293) Illia Olenchenko
- PR 3 Removed edge-cases of GridSelection (#5291) Illia Olenchenko
- Clear link using key shortcut bug (#5354) Syed Umar Anis
- refactor(playground) kill ts-ignore (#5342) Aron Griffis
- Automatic release on merge (#5347) Acy Watson
- Improve TypeScript types by removing k string any from LexicalNode (#5223) Bob Ippolito
- Support other formats in Collapsible Title (#5328) Ivaylo Pavlov
- docs added exportJSON function to the ExtendedTextNode plugin code (#5338) 
- v0.12.5 (#5343) Acy Watson
- Fix path alias typo (#5340) wnhlee
- v0.12.5 Lexical GitHub Actions Bot

## v0.12.5 (2023-12-06)

- Make subscript and superscript text formats mutually exclusive (#5317) Gry Ogam
- PR 2 5276 PointSelection instead of GridRangeSelections (#5281) Illia Olenchenko
- keep selection style when clicking empty editor (#5292) kyoyoung keum
- Fix insertNodes bugs (#5325) GermanJablo
- PR 1 Swap instance selection for BaseSelection in most cases (#5280) Illia Olenchenko
- selectEndstart as a method of LexicalNode instead of ElementNode (#5205) GermanJablo
- Make insertRangeAfter private (#5323) Gerard Rovira
- Improvements in insertNodes (#5201) GermanJablo
- Export CommandListener Flow (#5315) Gerard Rovira
- Add 2 missing flow exports (#5314) Gerard Rovira
- URL sanitization ClickableLinkPlugin (#5302) Yeison Daza
- fix backspace in Android not deleting first character (#5282) Kiran Dash
- docs improve DecoratorNode docs (#5284) Miroslav Petrov
- Fixing nested collapsible section chevron (#5300) Ebad
- Support HTML export overrides from config for nested editors. (#5267) Acy Watson
- Revert Fix Autolink plugin URL recognition failures (#5275) (#5295) Acy Watson
- Fix Autolink plugin URL recognition failures (#5275) Chinmay Disale
- Move to new Excalidraw APIs for 0.17 update (#5277) Ivaylo Pavlov
- Fix Resolve Cannot read properties of undefined (reading trim) issue in getSelectionStyleValueForProperty (#5271) Yeison Daza
- Fix The number in a numbered list gets duplicated (#5253) trinhvinhtruong96
- Fix Apply background color to multiple selected cells (#5258) Joo Hee Paige Kim
- packagelock (#5247) Gerard Rovira
- v0.12.4 (#5246) Gerard Rovira
- v0.12.4 Lexical GitHub Actions Bot

## v0.12.4 (2023-11-17)

- Fix @lexical/utils import (#5245) Gerard Rovira
- v0.12.3 (#5244) Acy Watson

## v0.12.3 (2023-11-17)

- Its a journey (#5242) Acy Watson
- Fixed column header on merged cells (#5230) Illia Olenchenko
- Remove codeowners to prevent unnecessary pings (#5236) John Flockton
- Fixed delete removing link node text when on linebreak (#5146) Steve Larson
- Fix row deletion if previous row is empty (#5231) Illia Olenchenko
- Remove unnecessary link from README.md (#5232) John Flockton
- chore(deps-dev) bump tough-cookie from 4.1.2 to 4.1.3 (#5134) dependabotbot
- chore(deps) bump sidewayformula from 3.0.0 to 3.0.1 (#5132) dependabotbot
- chore(deps-dev) bump semver from 5.7.1 to 5.7.2 (#5131) dependabotbot
- chore(deps) bump postcss from 8.4.27 to 8.4.31 (#5130) dependabotbot
- chore(deps) bump http-cache-semantics from 4.1.0 to 4.1.1 (#5129) dependabotbot
- chore(deps-dev) bump vite from 2.9.13 to 2.9.16 (#5133) dependabotbot
- Fixes grid selection to be aware of nested tables (#5166) Illia Olenchenko
- Bug Align list item do not change the export DOM (#5160) trinhvinhtruong96
- Fix iconRTL for center alignment (#5227) Ivaylo Pavlov
- refactor(playground) clean up settings (#5225) Aron Griffis
- fix Make autolinks working for formatted text (#5214) Konstantin Kovalev
- Fix touple typo to make it correctly tuple (#5229) Julian French
- Fix lexical-link typo srelrel (#5221) Bob Ippolito
- Fix alignment for links in Toolbar (#5209) Tahir Shakir
- Update Modal.tsx (#5203) Bradley Dirheimer
- fix Heading.insertNewAfter (#5198) GermanJablo
- Link title is correctly applied through the command (#5191) Petyo Ivanov
- Improved LexicalMenu positioning relative to text (#5187) Steve Larson
- fixed issue 5181 where link address is not shown if comment is set in (#5188) Tong Xi
- Fix at() transpilation (#5180) Gerard Rovira
- Fix insertNodes when anchor point is blank TextNode (#5179) Gerard Rovira
- Add playwright-report to gitignore (#5173) GermanJablo
- Fix insertNodes after selection swap (#5175) Gerard Rovira
- Range utils (#5153) Gerard Rovira
- Fix insertNodes and insertParagraph (#5002) GermanJablo
- Add Optional Chaining to isNodePre Method (#5157) Nick J Moss
- Table resize handle getting stuck fix (#5169) Alex Reznik
- Updated package-lock.json versions with npm audit fix. (#5125) Matthew Hutter
- Fix formatting selected table cells (#5168) Tahir Shakir
- Update index.tsx (#5165) Bradley Dirheimer
- Add commandPriority option to LexicalMenu and dependent components (#5123) huw
- chore(deps) bump babeltraverse from 7.18.6 to 7.23.2 (#5155) dependabotbot
- Updated insertTableColumn with batching (#5145) Illia Olenchenko
- Add Columns Layout to Typeahead menu (#5136) Ivaylo Pavlov
- TableResizer cell calculation based on cellspans (#5141) Illia Olenchenko
- Update anchor selection if split by patching style (#5087) Ruslan Piliuta
- chore(deps) bump excalidrawexcalidraw from 0.14.2 to 0.15.3 (#5135) dependabotbot
- Consolidate docs across the repo (#5121) Ivaylo Pavlov
- Fix right click select images (#5056) Ben Carleton
- fix fix android backspace bug (#5077) Cristopher Solis
- fix(lexical-rich-text) correct comment typo (#5116) Xuan
- docs fix typo in decorators.md (#5113) Can Rau
- Fix insertNodes insert position at start of inline ElementNode (#5110) Gerard Rovira
- Revert Fix transferStartingElementPointToTextPoint() #4756  (#5094) John Flockton
- chore add typedefs for collab nodes and remove unused members (#5071) VelociRaptor
- Fix tab replacement composition crash (#5066) Gerard Rovira
- Fix getting style via getSelectionStyleValueForProperty when selection is collapsed (#5082) Ruslan Piliuta
- Set up GA4 for website (#5078) Paul OShannessy
- chore fix typo (#5074) Alessio Gravili
- Fix integrity (#5068) Gerard Rovira
- fix(playground-text-format-toolbar) dont hide toolbar if current node is a paragraph (#4850) Mathieu Mtral
- Fix ToolbarPlugin paste error with start, end format (#5019) Hansu Kim
- Fixfloating formatter #5021 (#5041) Shubham Jadhav
- fix  Add column shortcut gets hidden when mouse leave the table #4857 (#5058) Sathish
- Allow LexicalTypeaheadMenuPlugin to work when inside an iframe (#5044) Lester Tay
- MaxLength handle empty ElementNode (#5029) Gerard Rovira
- Playground embed twitter support x.com (#5060) su
- Port List e2e test to unit tests (#5030) Acy Watson
- Playground refactor component picker plugin (#4836) Georgii Dolzhykov
- Transpile optional catch binding (#5048) Gerard Rovira
- Nit Floating toolbar (#5038) Gerard Rovira
- feat LexicalClickableLinkPlugin should support ctrl click mode #4565 (#4839) Sathish
- fix(Playground) CMD K improvements (#5013) Rajat
- chore fix typo in lexical-utils docs (#5022) Bruno Bonamin
- Update setFloatingElemPositionForLinkEditor.ts (#5028) Bradley Dirheimer
- Update setFloatingElemPosition.ts (#5027) Bradley Dirheimer
- Fix pasting text that ends with an empty paragraph is ignored when the MaxLengthPlugin is enabled (#5020) Hansu Kim
- Fix event handler removal in useDynamicPositioning, remove dupe code (#5024) Georgii Dolzhykov
- fix LinkNode.importDOM should support all node content (#5010) Rajat
- Allow overriding HTML serialization behavior from the editor config. (#4254) Acy Watson
- Fix TextNode override in Serialization  Deserialization doc (#5006) Giacomo Randazzo
- Fix getTableSelectionFromTableElement flow (#5005) Gerard Rovira
- Add highlight to format types (#5001) Gerard Rovira
- Add nodes replacement support for nested composer (#4992) Maksim Horbachevsky
- Remove capital letter mentions (#4991) Acy Watson
- Fix comment plugin selection rect top position (#4988) vonsa
- fix(lexicalhtml) missing lexicalutils dependency (#4984) liuwei

## v0.12.2 (2023-09-08)

- Move isHTMLElement into core (#4977) Gerard Rovira
- 0.12.1 (#4978) Acy Watson

## v0.12.1 (2023-09-07)

- Fix: font colors do not apply to text within table cells (#4934) Tahir Shakir
- fix #4526 (#4910) xyyjk
- fix: dispatching undo & redo states for collaboration; fixing up Point.getNode not a function (#4956) Nadine Nguyen
- Retain TextNode whitespace on export (#4969) Gerard Rovira
- Revert "Fix: fixes regex in YouTube AutoEmbedPlugin (#4916)" (#4966) Ivaylo Pavlov
- Fix: fixes regex in YouTube AutoEmbedPlugin (#4916) Rajat
- refactor: moved functions to `@lexical/utils` (#4923) Rajat
- refactor: remove redundant styles from floating text format plugin (#4938) VelociRaptor
- :bug: Fixed range selection splicing text (#4659) Steve Larson
- Added extra Yjs information to collaboration docs (#4951) Steven Fabre
- fix: disable spellcheck for code format (#4927) VelociRaptor
- Add column layout plugin example (#4937) Maksim Horbachevsky
- docs: fix example in getting-started/react (#4935) Mike
- Fix: MaxLengthPlugin crashes when the limit is reached and enter is pressed (#4871) Hansu Kim
- chore: prefer viewBox to width/height on SVG images (#4921) VelociRaptor
- Adds ElementFormatDropdown to the Toolbar plugin (#4904) itaquito
- Add iOS information to the website (#4899) amyworrall
- fix: Only append fragment when element is HTMLElement (#4490) lsbyerley
- Table unmerge (#4877) Peter Cook Bulukin
- Revert "Updated link markdown regex (#4461)" (#4896) Gerard Rovira
- Add missing flow def (#4889) Maksim Horbachevsky
- Handle undefined rows and columns in table utils after cell merge (#4874) Peter Cook Bulukin
- Updated link markdown regex (#4461) Ronald Langeveld
- Fix: Pressing enter now doesnot delete ImageNode from the ListItemNode (#4866) Takumi Uchida

## v0.12.0 (2023-08-09)

### Breaking Changes

#4818 moves "select all" behavior to the SELECT_ALL command, meaning anyone using setRootElement directly (i.e., not using PlainTextPlugin or RichTextPlugin or their underlying functions) would need to wire up command listeners for SELECT_ALL_COMMAND in order to preserve the default "select all" behavior after this version.

- Extract "select all" behavior to new `SELECT_ALL_COMMAND` (#4818) Chris Montrois
- Paste decorators before empty text nodes (#4672) Steve Larson
- Added "Page Break" to Lexical Playground (#4842) Dias Kappassov
- fix editor ref types and use EditorRefPlugin in the playground (#4852) Anton Kostiuchkov
- Expand react docs (#4845) Acy Watson
- Port lexical.dev to Tailwind (#4827) Awjin
- Stop collapsing non-collapsible whitespace on paste (#4770) Brian Birtles
- feat(playground): add support for collapsed margins in draggable block (#4823) Mathieu Métral
- feat(playground): add support for drop block on empty area (#4811) Mathieu Métral
- docs: remove placeholder property from exampleTheme (#4802) Karam Qaoud%

## v0.11.3 (2023-07-18)

- RFC Add prev editor state for mutation listener (#4796) Maksim Horbachevsky
- Fix  Cant convert paragraph into a header if the first child of the paragraph is a LineBreakNode (#4776) Naveen
- Add setStyle to Flow types (#4780) Acy Watson
- Fix width reflow in columns when resizing tables (#4775) Karam Qaoud
- package.lock (#4769) Gerard Rovira
- Remove duplicate declaration (#4772) Roman Gafiatullin
- fix Return LexicalEditorRefPlugin as valid JSX (#4771) Thomas Sauques
- Update TS to 5.1.x (#4695) Georgii Dolzhykov

## v0.11.2 (2023-07-11)

- Update listeners.md (#4768) mohammadreza490
- Reset editor state when setting null root (#4762) Maksim Horbachevsky
- Flow key down command (#4766) Gerard Rovira
- Fixes broken trunk (#4763) Maksim Horbachevsky
- Fix $transferStartingElementPointToTextPoint() (#4756) amyworrall
- Add video links to Getting Started docs (#4752) Acy Watson
- Fix missing token type (#4751) Maksim Horbachevsky
- Add selection adjustments for node removal (#4745) Maksim Horbachevsky
- Allow preventing text drag (#4749) Maksim Horbachevsky
- Add EditorRef plugin (#4747) Acy Watson
- Fix flowtypes for cut/copy commands (#4746) Maksim Horbachevsky
- Add RangeSelection docs (#4742) Acy Watson
- Fix multi-line token parsing (#4741) Maksim Horbachevsky
- Fix code block export (#4702) Maksim Horbachevsky
- Remove instanceof checks in onPasteForPlainText (#4737) Acy Watson
- Context Menu Options Added (#4713) Shubhankerism
- Show excalidraw edit button (#4731) Ibrahim El-bastawisi
- Fixed drop down buttons to prevent sumbit (#4727) Ou7law007
- Improve md error message (#4710) Acy Watson
- Fix: Use $createListItemNode within importJSON to override on deserialization (#4717) Kazu
- Image resizer fix (#4722) Maksim Horbachevsky
- Keeping local comments and sharedCommentsArray orders in sync (#4721) Ebad
- Table selection keyboard controls (#4689) Maksim Horbachevsky
- correction : line 47 - create -> update (#4704) Abhishek Kumar
- Allow table selection when cells are already selected (#4699) Peter Cook Bulukin
- Swap noopener for noreferrer (#4690) Adam Conrad
- Additional fix for editor._window in lexical-clipboard (#4686) Xinzi Zhou
- Preserving language and indentation of code block when serialized/deserialized (#4682) Ebad
- Remove outdated examples (#4684) John Flockton
- Remove delay from flakey E2E test (#4676) John Flockton
- Fix dropdown menu position in playground when scroll (#4496) Xinyuan Wang
- feat: playground inline image plugin (#4423) Anthony Bouch
- Override selectall on RangeSelection (#4671) Gerard Rovira
- Normalize select all on NodeSelection (#4664) Gerard Rovira
- Add columns next to selection (#4663) Peter Cook Bulukin
- Fix clipboard if content editable is in an iframe. (#4649) Xinzi Zhou
- Fix reconciler recovery listeners (#4654) Maksim Horbachevsky
- Check for specific excluded props (#4655) Maksim Horbachevsky
- Fix ContentEditable Flow types (#4652) Gerard Rovira
- Import alignment for Heading and Blockquote (#4625) Ivaylo Pavlov
- Add missing ExportDOM to CodeNode (#4637) Ivaylo Pavlov
- Add error formating params (#4629) Maksim Horbachevsky
- Add clipboard documentation (#4631) Acy Watson
- Add error formating params (#4627) Maksim Horbachevsky
- Fix issue with syncing yjs changes to Lexical (#4621) Ebad
- fix issue with dead keys (i.e. backticks) when converting markdown (#4620) Michel Bongard
- Don't throw error on format element (#4611) John Flockton
- fix: freeze get style object in DEV env to avoid mutations (#4616) Jatin Ranka
- TextNode docs (#4606) Acy Watson
- Fix iOS newline insertion (#4603) Maksim Horbachevsky
- Add vercel analytics script (#4604) Acy Watson
- mouseenter event typo fix (#4588) raghvendra
- Update nodes.md (#4598) navanshu
- Fix MenuTypeahead position (#4597) Aleksandr Kiliushin
- Fix uuid bug in `AutocompleteNode.clone()` (#4592) Scott Driggers
- use selection from state in insertNodeToNearestRoot and insertNodes (#4570) Calvin Leung
- Allow native shift+arrow selection work over decorator nodes (#4584) John Flockton
- Fix a11y for ContentEditable (#4580) Max Shypko
- Another approach to fixing the className cache (#4582) Acy Watson
- Better Error Message for exportJSON type (#4556) Hao Luo

## 0.11.1 (2023-05-26)

- Fire selection change on decorator delete (#4555) Acy Watson
- Fix flow (#4549) Gerard Rovira
- Add key to portal to avoid decorator component remounting (#4554) Maksim Horbachevsky
- Mutations to respect canInsertBeforeAfter (#4553) Gerard Rovira
- Arrow up selection fix #4536 (#4544) Maksim Horbachevsky
- Max length recalculation. Fix #4542 (#4543) Maksim Horbachevsky
- Fix update-changelog not finishing (#4537) Gerard Rovira

## 0.11.0 (2023-05-23)

- Tame wild white spaces (#4467) Gerard Rovira
- Auto embed fix #4530 (#4535) Maksim Horbachevsky
- Basic Context Menu (behind Switch) (#4285) Tyler Bainbridge
- Allow importing width and height from table cell and DOM nodes (#4521) Kristian Ignatov
- Add HTML deserialization recipe to docs (#4432) Ivaylo Pavlov
- Fix clickable link plugin #4514 (#4519) Maksim Horbachevsky
- Allow arbitrary awareness fields in Collaboration plugin (#4507) Attila
- Make tabs flexible in code (#4520) Gerard Rovira
- Fix GC memory leak (2) (#4513) Gerard Rovira
- Adjust selection after triple click (#4512) Maksim Horbachevsky
- Fix GC memory leak (#4510) Gerard Rovira
- TypeAheadMenu and TableActionMenu rendered off screen fixed. (#4301) Shubhankerism
- Fix Flow types (#4485) Gerard Rovira
- Add texturi-list support in clipboard. (#4478) xinyuan0801
- Sanitize url (#4483) Acy Watson
- exportDOM methods for HeadingNode, QuoteNode (#4445) Ivaylo Pavlov
- Tests for inserting text either side of an inline element (#4346) Jamie Birch
- Improve rect deduplication (#4471) Acy Watson
- Sanitize floatingLinkEditor (#4462) Acy Watson
- Generalize Menu Logic (#4284) Tyler Bainbridge
- Event delegation for NoteEventPlugin (#4424) Maksim Horbachevsky
- Tab support (#4436) Gerard Rovira
- Handle empty element deletion (#4380) Maksim Horbachevsky
- Select all adjustments (#4425) Maksim Horbachevsky
- Add documentation for TabIndentationPlugin (#4453) Filip Palmqvist
- Disable flaky test (#4455) Gerard Rovira
- fix attach event listeners to initial nodes (#4454) Ante Sepic
- Revisit touch devices (#4441) Gerard Rovira
- Allow to pass all possible attributes to a content editable div (#4450) Leks Kazimirchuk
- Fix text click selection on touch devices #3098 (#4395) Ibrahim El-bastawisi
- Updated Toolbar Plugin to Add keyboard shortcut for adding hyperlinks (#4413) AnuragBalhra
- simplify logic for the fix Improve responsiveness of the floating text format toolbar buttons (#4431) Alessio Gravili
- Remove unused styles (#4426) Georgii Dolzhykov
- Fix HistoryPlugin selection out of sync (#4390) Gerard Rovira
- Split test files and skip flaky tests in linux  collab (#4394) Acy Watson
- Optional colrowSpan serialization (#4344) Gerard Rovira
- Fix list merging (#4386) Acy Watson
- Fix markdown list merging (#4387) Acy Watson
- Use provided selection when serializing to HTML (#4392) Acy Watson
- Flow table bg color types (#4400) Gerard Rovira
- Add docs for list package (#4393) Acy Watson
- Make DecoratorBlockNode.isInline return false (#4383) EgonBolton
- Setting initial state of isSmallWidthViewport (#4398) Ebad
- Improve responsiveness of the floating text format toolbar buttons (#4298) Brandon
- Collapsible enhancements (#4257) Maksim Horbachevsky
- Inherit format for text entity node (#4382) Maksim Horbachevsky
- Fall back to url if parser fails (#4364) Acy Watson
- Change MarkNodeclone node arg type to this (#4363) Giovanni Cappellotto
- 0.10.0 (#4349) Acy Watson

## 0.10.0 (2023-04-18)

### Breaking Changes

@lexical/link will now sanitize anchor tag hrefs before rendering them to the DOM. This provides a measure of protection against XSS attacks
that rely on inlining javascript in that attribute. However, it means that links using less common protocols will now be sanitized (converted to about:blank),
which will be a breaking change for any existing links.

Like most other node-based logic in Lexical, the sanitization logic can be overriden by overriding LinkNode using the Node Overrides API and replacing it with a node that implements the sanitizeUrl method differently.

**Fixes CVE-2023-30792**

- Table feature: background color (#4345) Gerard Rovira
- Add @react/LexicalClickableLinkPlugin (#4316) Gerard Rovira
- TablePlugin feature: cell merge (#4343) Gerard Rovira
- Ban javascript URLs in @lexical/link (#4342) Acy Watson
- Table Cell Background Color (#4306) Gerard Rovira
- ExportDOM in Debug Tree View (#4307) Ivaylo Pavlov

## 0.9.2 (2023-04-14)

- Update codes.json (#4320) Gerard Rovira
- Missing table types (#4302) Gerard Rovira
- Fix cursor changing to default when resizing image (#4317) (#4318) Mohit Singh Chauhan
- Persist files and scene state in Excalidraw plugin (#4299) Ivaylo Pavlov
- Fix crash on prettier formatting fail (#4310) Syed Umar Anis
- YouTube embed: use more privacy-friendly youtube-nocookie.com instead of youtube.com (#4282) Alessio Gravili
- Fix flowtypes for insertBefore/after (#4245) Maksim Horbachevsky
- Fix excluded property imports (#4287) Acy Watson
- Allow excluding specific properties from collab syncing via plugin (#4275) Acy Watson
- Update tables.md (#4278) Gerard Rovira
- Refactor Check for mention match function (#4277) Aleksandr Kiliushin
- Replace canExtractContents with ShadowRoot check (#4276) Gerard Rovira
- Ignore script nodes in HTML deserialization (#4249) Acy Watson
- Fix Clear Formatting (Fixes #4188) (#4204) Ivaylo Pavlov
- Add try catch around katex renderer (#4260) John Flockton
- last table row delete throwing error (#4270) Aman Bansal
- Upgrade Flow to 0.2 (#4264) Gerard Rovira
- Cell merge backwards compatiblity 2 (#4268) Gerard Rovira
- Cell merge backwards compatiblity (#4267) Gerard Rovira
- fix get text selectRect error (#4263) yjh
- Loosen node and version types (#4143) John Flockton
- Bugfix: Comment popup closes when cursor hovers over table (#4228) Ben Carleton
- isEditable is true on first render even if editor initiated with false (#4251) Aman Bansal
- Fix TableCellNode import/exportJSON (#4259) Gerard Rovira
- Flow: table missing methods (#4261) Gerard Rovira
- Fix insertTableColumn when rowSpan > 1 (#4258) Gerard Rovira
- Bugfix: Floating tool bar not responsive in tables (#4237) Ben Carleton
- pasting text on input was creating a new paragraph node instead of ad… (#4246) Aman Bansal
- Excalidraw Component fixes (#4252) Ivaylo Pavlov
- Preserve content with merging cells (#4242) Gerard Rovira
- Support select all for node selection (#4233) Maksim Horbachevsky
- Fix TypeaheadMenuPlugin scrollIntoView to not rely on external class (#4238) Dragoș Străinu
- Ignore __indent in list deserialization (#4241) Acy Watson
- Revise Excalidraw dependency (#4234) Gerard Rovira
- Table toolbar foundation (#4182) Gerard Rovira
- Restore MD selection (#4232) Gerard Rovira
- Fixed `aria-label` typo (#4229) Hao Luo
- Export $hasUpdateTag (#4216) Alma Madsen
- Fix incorrect placement of Auto Embed (#4192) wangqi
- Fix bad selection shift at boundary (#4219) Gerard Rovira
- Improve Documentation - multiple modules (#4166) Harry Sanders
- Unmerge cell (#4212) Gerard Rovira
- Only allow numbers in TablePlugin row / column number input (#4201) Alessio Gravili
- Create fragment attached to the doc (#4186) Maksim Horbachevsky
- Add a title to the link node to support titles in markdown (#4161) themagickoala
- Fix table insertion (#4180) Gerard Rovira
- added trash button to floatingLinkEditor plugin to toggle the link to… (#4209) Aman Bansal
- Delete unused LinkPreview.css (#4200) Alessio Gravili
- Use 'padding' shorthand CSS rule (#4198) Alessio Gravili
- Add missing flow file (#4193) Maksim Horbachevsky

## v0.9.1 (2023-03-24)

- Explicit E2E_BROWSER on E2E runs (#4179) Gerard Rovira
- Fix tables Webkit e2e (#4175) Gerard Rovira
- Remove unused convertToMarkdown file (#4169) themagickoala
- Improve markdown transformers (#3886) Godefroy
- Iterate through the live NodeList instead of copying to an array in $generateNodesFromDOM (#4164) Acy Watson
- Bump Excalidraw to v0.14.2 (#4153) Ivaylo Pavlov
- Fix table stealing selectionchange (#4162) Gerard Rovira
- Improve Documentation #2845 - lexical/selection (#4140) Harry Sanders
- UX: Floating link editor: better positioning (#4158) Alessio Gravili
- DecoratorNode not disabling placeholder at root (#4147) Harry Sanders
- Color picker - fixes #4127 (#4146) Harry Sanders
- Validate against infinite loop in ListItemNode.setIndent (#4120) Acy Watson
- Paste merged celled table (#4116) Gerard Rovira
- Add md import/export tests, fix numbered lists pasting (#4123) Maksim Horbachevsky
- Bump webpack from 5.75.0 to 5.76.0 (#4128) dependabot[bot]
- fix: drag-over event on windows (#4125) 子瞻 Luci
- Remove link preview (#4122) John Flockton
- Add a function to create a LinkMatcher based on a RegExp (#3972) Karibash
- Revise padding for smaller res (#4112) Gerard Rovira
- Catch failures in parseEditorState (#4109) Acy Watson
- Improve Documentation #2845 - lexical/list (#4107) Harry Sanders
- Fix tables Collab E2E (#4117) Gerard Rovira
- Fix ShadowRoot + X insertNode (#4115) Gerard Rovira
- Overflow of logos of action items in Lexical Playground (#4096) 7gaurab_khanal
- Remove columns w/ span support (#4093) Gerard Rovira
- Remove rows w/ span support (#4078) Gerard Rovira
- Table insert column w/ span support (#4074) Gerard Rovira
- Table insert row w/ span support (#4063) Gerard Rovira
- Use broader return types in `HorizontalRuleNode` (#4097) Chris Montrois
- Add focus tag to editor.focus (#4092) Dragoș Străinu
- Improve Documentation #2845 - lexical/utils (#4047) Harry Sanders
- Fix toolbars that shouldn't appear in certain cases (#4077) Warren19
- Fixed reference to old `addUpdateListener` method in transforms doc (#4094) Kevin Ansfield
- Pass tags to onChange for LexicalOnChangePlugin (#4091) Dragoș Străinu
- Fix tables E2E (#4090) John Flockton
- Change default indent to 40px (#4025) EgonBolton
- Update CODEOWNERS (#4089) John Flockton
- Updated InsertTableDialog UX (#4082) Brandon
- Export getNearestEditorFromDOMNode (#4079) Gerard Rovira
- Fix unresponsive resize handle in Safari (#4081) Brandon
- Sticky toolbar to assist in editing large content (#4076) Brandon
- Fix table RangeSelection test (#4061) Gerard Rovira
- Trim table e2e assert (#4060) Gerard Rovira

## v0.9.0 (2023-03-08)

- deprecate $wrapNodes (#4059) Acy Watson
- [0.9] Remove experimental flag for setBlockTypes (#4045) John Flockton
- [0.9] Remove experimental flag from content plugins (#4036) John Flockton
- Table - cell merging (#4046) Gerard Rovira
- After removing a ListItemNode, merge its siblings. (#4035) Awjin
- [0.9] Remove experimental flag for copyToClipboard (#4037) John Flockton
- Fix inf loop block cursor (#4049) Gerard Rovira
- Fix type import syntax for CodeHighlightNode (#4053) John Flockton
- Fix list deserialization (#4030) Acy Watson
- Fix EquationNode issues on Android  (#4040) John Flockton
- Styling tweaks to better accommodate long urls (#4041) Brandon
- Add docs for LexicalEditor (#4034) Acy Watson
- Add docs for LexicalNode APIs (#4033) Acy Watson
- Remove remaining deprecated hooks (#3782) John Flockton
- Improved link editor UX (#4026) Brandon
- Add command logging into tree view (#4022) John Flockton
- Deprecate experimental DevTools browser extension (#4023) John Flockton
- Fix Chrome beforeinput race condition on large docs (#4016) Gerard Rovira
- Fix insertNode insertion for inline Elements inside empty Elements (#4018) Gerard Rovira
- fix(lexical-playground): link editor flashs (#4013) 子瞻 Luci
- Reposition Node Menu when Node Changes (#4010) Tyler Bainbridge
- Fix small lint error (#4014) John Flockton
- Check if parent node is root in order to remove it in trimTextContentFromAnchor (#3952) Theodore Nastos
- Fix PollNode copy and paste missing options (#4002) John Flockton
- Fix converting nodes with nested lists (#3821) EgonBolton
- Fix selection on color change (#4004) Konrad Ryczko
- Cleanup excessive use of WebsocketProvider for types (#3979) Maksim Horbachevsky
- Nested composers should initialize with parent editor editable state (#4001) John Flockton
- Adjust playground CSS to fix vertical resize being disabled in select scenarios (#3997) Brandon
- Improve serialization types for element node children (#3990) John Flockton
- Listen to Collapsible Section toggle event (#3983) Ivaylo Pavlov
- Doc: initial execution of listener function (#3991) Gerard Delmàs
- Fix getNodes of RangeSelection (#3966) kosei28
- Account for children text content size in 's  (#3930) Giacomo Randazzo
- Update badge URL in README (#3987) Andrew Doan
- Fix: Floating toolbar flashes on hover over empty lines when the selection is backwards. (#3959) Alessio Gravili
- Bump jest and node versions to accommodate structuredClone (#3969) Acy Watson
- Make one previous node be selected when deleting a block (#3970) Karibash
- Beforeinput prevent default on mismatching targetRanges (#3954) Gerard Rovira
- Trigger  as false when  goes down to 0 (#3943) Diego Esclapez

## v0.8.1 (2023-02-22)

- Clone objects from the CSS cache before mutating them (#3945) Brian Birtles
- added docsfeature-button in lexical playground issue#3918 (#3935) Mohan Sai Potla
- fix: change from  to  (#3942) Asim Kattum Thazha
- Added Chinese character support for native webkit (#3846) Annabelle Almås
- Fix autocapitalization (#3881) Gerard Rovira
- Expand the actionable empty playground editor text area via flex (#3883) Brandon
- Fix toggling styles on collapsed selections with  (#3922) Brian Birtles
- Remove condition for history merge on null prev selection (#3914) Acy Watson
- fix: change tablecell return type for TableCellNode (#3925) Sebastien Ahkrin
- Align types for createEditor APIs (#3928) Acy Watson
- Remove instanceof type checks against HTMLElement and subtypes (#3913) Acy Watson
- Fix small lint error breaking main (#3924) John Flockton
- Update plugins.md (#3926) dimitarbikov
- Added support for Java & C++ (#3884) Vignesh gupta
- Add fixme annotation to flaky collab tests (#3916) Acy Watson
- Playground: fix issue with floating link editor plugin not closing (#3904) Rich
- Further tweaks to format/style selection (#3895) Dominic Gannaway
- Add KEY_DOWN_COMMAND (#3878) Dominic Gannaway
- Remove draggable block plugin on mobile devices (#3875) John Flockton
- Close color pickers on select (#3874) John Flockton
- Fix ContentEditable types for internal use (#3868) John Flockton
- Fix v0.8.9 typo in changelog, should be v0.8.0 (#3869) Joel Besada

## v0.8.0 (2023-02-09)

This release includes some breaking changes, including:
    - Remove of `indentList` and `outdentList` from `@lexical/list`.
    - Refactor of the `LexicalContentEditable` types from `@lexical/react` to make them more accurate with `HTMLDivElement` attributes.

This release adds functionality to apply node transforms to node replacements, it allows users to specify tab indentation sizes, and improved support for tracking the origin of YJS updates for collaborative editing.

- Ensure deletions capture existing formatting (#3867) Dominic Gannaway
- Add style properties to RangeSelection (#3863) Dominic Gannaway
- List indentation simplified (#3809) EgonBolton
- Update ContentEditable types (#3580) John Flockton
- Allow the format property to be omitted (#3812) Karibash
- Allow users to customise the indentation of tabs (#3802) John Flockton
- Apply node transform not only to the original node but also to the overriding node (#3639) mizuno
- feat: set the update tag from yjs based on the origin (#3608) El-Hussein Abdelraouf

## v0.7.9 (2023-02-09)

- Fix bad import into core (#3861) Dominic Gannaway
- Add import/export DOM methods to YouTubeNode and improve EquationNode (#3835) Pervez Ali
- Fix backspace regression (#3862) Dominic Gannaway
- Fix restoreEditorState (#3856) Dominic Gannaway
- Add more configuration for heading in INSERT_TABLE_COMMAND (#3843) Sebastien Ahkrin
- perf(playground): load prettier and its parsers on demand in code block (#3637) Shanmughapriyan

## v0.7.8 (2023-02-08)

- Update transforms.md (#3845) Ben
- Fix over selection (#3838) Dominic Gannaway
- Fix $restoreEditorState (#3842) Dominic Gannaway
- Fix select all + delete behaviour (#3840) Dominic Gannaway
- Fix(#3716,#3815): Prevent layout shift while using typeahead menu (#3826) rettoSea
- Add anchor dirty node check for text length less than 2 chars (#3832) John Flockton
- Fix reconciler bug with handling of text content (#3837) Dominic Gannaway
- Add exportDOM and importDOM for Collapsible Container Plugin (#3827) Ivaylo Pavlov
- Fix pasting top level nodes inline (#3238) Petar Smolic
- Add IS_HIGHLIGHT format to combined formats to properly calculate format (#3822) moy2010
- Add highlight markdown text format shortcut (#3823) moy2010
- Add highlight text node theme class (#3824) moy2010
- add importDom and exportDom method to EquationNode (#3813) Najmus Sakib
- fix: Typo (#3816) Cornelius

## v0.7.7 (2023-02-03)

- Add list-style-position:inside (#3814) John Flockton
- Fix is selected noop (#3805) James Abels
- Add `createParentElementNode` method on LexicalNode to fix copy/paste issues with clipboard (#3800) John Flockton
- Remove innerHTML injection from table selection (#3804) John Flockton
- Better tab handling (#3770) James Abels
- Fix line delete bug in history (#3769) James Abels
- List node export dom with css classes (#3801) Maksim Horbachevsky
- Add highlight TextFormatType (#3583) moy2010
- Add check that target is not the root node (#3797) John Flockton
- Fix $generateJSONFromSelectedNodes with a custom selection passed in (#3749) William Wang
- Improve selection docs (#3798) Dominic Gannaway
- Fix copy paste wrong order in TableOfContents (#3786) Daniel Voigt
- fix(lexical-playground): fix bugs related to ComponentPickerPlugin (#3787) Shota Shimizu
- fix: styling information of paragraph are missing while importing dom (#3771) Rajatava Mukherjee
- Stabilize WeakMap in NodeEventPlugin (#3780) James Abels
- Clean up wonky logic (#3768) Dominic Gannaway
- Remove deprecated modules from core code base (#3729) John Flockton
- Edit CSS to fix marker alignment issue in Safari (#3753) John Flockton
- Move horizontal rule plugin to lexical/react (#3751) John Flockton
- Fix equation transformer in Playground (#3758) Leonardo E. Dominguez
- Fix list normalization on HTML paste. (#3757) Acy Watson
- Remove preventDefault from $copyToClipboardEvent (#3742) John Flockton
- fix(lexical-playground): NewTablePlugin is not draggable (#3747) Shota Shimizu
- Attach checkbox click listeners to editor root element instead of document (#3738) John Flockton
- Update listener in toc (#3726) Stepan Bolotnikov
- Close Excalidraw only on Escape key down (#3737) John Flockton
- fix: type-ahead menu scroll problem (#3672) huang yao
- Tweak CodeNode to allow for overrides (#3731) James Abels
- Discard empty TextNode that can creep into appendJSON (#3695) James Abels
- Add config to updateDOM in ParagraphNode  (#3693) James Abels

## v0.7.6 (2023-01-10)

- Fix typo in LexicalAutoLinkPlugin code example (#3685) Lorenzo
- updated typo (#3697) Christopher Tran
- Add width and height to serialized image nodes (#3684) Ebad
- fix: force to set TextNode's content when compositionKey is invalid (#3679) Conatus
- Fix: convert html 's' tag to node for strickethrough format is missing (#3673) hun
- Fix bug with ArrowDown/ArrowUp in RichTextPlugin (#3676) Dominic Gannaway
- Remove ts-ignore for createContext (#3671) yf-yang
- Fix bug in reconciler sub-tree text content cache (#3669) Dominic Gannaway
- Hide commenting controls on mobile screen sizes (#3667) Dominic Gannaway
- Fix theming docs (#3668) Dominic Gannaway
- update: change character_limit to be passed as a props( maxlength) (#3649) 0x harry
- Add TabIndentationPlugin to playground. (#3632) Acy Watson

## v0.7.5 (2022-12-23)

- selectionChange fix (#3623) Dominic Gannaway
- Add docs for root listener (#3625) Acy Watson
- Add docs re: working with DOM Events (#3624) Acy Watson
- background-repeat: no-repeat; (#3621) Aloento
- Add logic in isSelectionCapturedInDecoratorInput for contentEditables (#3622) Dominic Gannaway
- Fix bug in convertTextFormatElement (#3618) Dominic Gannaway
- Add size limit report (#3600) Maksim Horbachevsky
- Allow focus/blur propagation in useYjsFocusTracking (#3617) Dominic Gannaway
- Add missing changelog for 0.7.4 (#3598) John Flockton
- Fix getSelectedNode logic for forward selection (#3609) moy2010
- Fix typo in documentation (#3614) Jeremy Bernier
- Fix bad rebase (#3607) Dominic Gannaway
- Escape plus signs of the tag in MarkdownImport, fixes #3596 (#3599) Teemu Pöntelin
- Add HTML paste support for checklists (#3579) Acy Watson
- Preserve empty parent during replacement (#3595) Maksim Horbachevsky

## v0.7.4 (2022-12-20)

- Add missing usages of `$applyNodeReplacement` (#3592) John Flockton
- Fix import issue with line break nodes (#3593) John Flockton
- Allow LinkNode to be replaced by custom node, fix bug in #3367 (#3588) Nhan Ho

## v0.7.3 (2022-12-18)

- Fix bold italic exportDOM (#3584) Dominic Gannaway
- Fix copy/paste issue with line breaks within paragraphs  (#3581) John Flockton
- Fix various collaboration cursor bugs (#3582) Dominic Gannaway
- Update PlaygroundEditorTheme.css (#3553) pavan-reddy-28
- More extensive fixes for Lexical in iframes (#3578) Dominic Gannaway

## v0.7.2 (2022-12-17)

- Use the actual node count rather than the dirty node count (#3569) Dominic Gannaway
- Utilize getParentElement internally when traversing up the DOM tree (#3576) Dominic Gannaway
- check read only flag during $setSelection (#3572) yf-yang
- Fix iframe selection issues (#3573) Dominic Gannaway
- Fix left arrow selection on list nodes (#3575) Dominic Gannaway
- fix: deleting forward on the last decorate node (#3568) Oleksii Piatetskyi
- Image gets stuck in resizing state fix (#3562) (#3565) Sharat Chandar M
- Fix flow again (#3566) Acy Watson
- Fix placeholder text for custom Paragraph Nodes (#3557) moy2010
- Disable lint rule in composition test (#3552) Acy Watson
- Add $wrapNodes back to flow (#3551) Acy Watson
- [Playground] Support clicking on links with middle mouse button (#3547) zeitstein
- Fix bug 3535 (#3537) lizhu68
- docs: typo fix (#3544) Bryan Ricker
- Don't throw if getPreviousSiblings can't find a parent (#3543) Acy Watson
- Change mousedown event type to fix selection Chromium bug on Android (#3541) John Flockton
- Various fixes in $wrapNodes (#3234) EgonBolton
- Add missing changelog entry to 0.7 (#3533) Dominic Gannaway
- Remove VERSION (#3531) John Flockton

## v0.7.1 (2022-12-11)

Contains several small bug fixes from the Lexical 0.7.0 release.
- Fix paste for LexicalLinkPlugin (#3528) Dominic Gannaway
- RTL fix for checkbox (#3529) shiva-Aluri
- Add demos section to the navbar (#3507) akmarzhan1
- Fix lexical-offset (#3526) Dominic Gannaway
- Add missing Flow type for indentation plugin (#3527) John Flockton
- Docs: fix "node" type in "Node Overrides" example code (#3525) Chris Montrois
- Fix small Flow error (#3523) John Flockton

## v0.7.0 (2022-12-09)

Lexical 0.7 includes some breaking changes, including:
- Removal of `$cloneContents` from `@lexical/selection`
- Changes to `PlainTextPlugin` and `RichTextPlugin` with regards to how placeholders are handled
- Pressing tab with the `RichTextPlugin` no longer indents by default, use the `LexicalTabIndentationPlugin` for this behavior.
- The unstable helper function `unstable_convertLegacyJSONEditorState` has been removed. This was always meant to be a temporary work-around to allow developers to convert their formats to the new JSON format rather than using the actual editor state internals directly.

Lexical 0.7 includes performance and usability improvements. Notably, Lexical has a new internal architecture that allows for
much better performance with large documents of content. Lexical also now provides a way to handle selection between blocks
of content by providing an emulated cursor (make sure you add a `blockCursor` theme to your editor config to use it).

- Revert "Fix exportJSON return types for ParagraphNode and LineBreakNode" (#3521) John Flockton
- Move default language setting to Tokenizer (#3368) mizuno
- Improve LexicalTreeView around large EditorStates (#3515) Dominic Gannaway
- Improve insertBefore, insertAfter, replace selection restoration logic (#3516) Dominic Gannaway
- ⏸ [0.7] Switch the internal architecture to utilize doubly linked lists (#3480) Dominic Gannaway
- Add missing annotation to internal field of Textnode (#3514) John Flockton
- ⏸ [0.7] Remove indentation keyboard shortcuts in RTE set up (#2855) John Flockton
- Fix dom-less reconciliation (#3506) Maksim Horbachevsky
- ⏸ [0.7] Add block emulated cursors (#3434) Dominic Gannaway
- ⏸ [0.7] Customize Placeholder visibility (#3379) Gerard Rovira
- ⏸ [0.7] Remove IntentionallyMarkedAsDirtyElement from public API (#3422) John Flockton
- ⏸ [0.7] Remove $cloneContents (#3483) Dominic Gannaway
- Update Playwright (#3511) Dominic Gannaway
- Improve Auto Embed (#3505) Tyler Bainbridge
- Skip tab e2e test in webkit (#3512) Dominic Gannaway
- Add poll and speech-to-text plugin examples (#3484) akmarzhan1
- Fix typedef for wrapNodes (#3492) Maksim Horbachevsky

## v0.6.5 (2022-12-05)

- Fix mutation listener for when DOM moves occur (#3493) Dominic Gannaway
- Fix decorator input selection (#3491) Dominic Gannaway
- Inform users that they need to install headless (#3487) Phillip Burch
- Revert changes (#3481) Dominic Gannaway
- Improve selection performance on large updates (#3478) Dominic Gannaway
- Support TypeScript language in code nodes (#3469) Jonas Bengtsson
- Improve element splicing and node removal (#3454) Dominic Gannaway
- Add start and end as format types (#3472) John Flockton
- Fix test for collab (#3471) Dominic Gannaway
- Add e2e test for text replacement (#3470) Dominic Gannaway
- Markdown decorators export fallback to text content (#3464) Maksim Horbachevsky
- Update conditional statement in LexicalAutoFocusPlugin to the same logic as in LexicalSelection (#3466) John Flockton
- Add Node Replacement Docs (#3462) Acy Watson
- Inherit headless flag from parent editor (#3459) Maksim Horbachevsky
- Change heading to paragraph when heading is empty (#3455) John Flockton
- Show caret while drag&drop (#3300) Gerard Rovira
- Fix superscript & subscript not being converted from html string (#3453) Rajatava Mukherjee%

## v0.6.4 (2022-11-29)

- Fix issue with readonly image resizing (#3448) John Flockton
- check CAN_USE_DOM before accessing document (#3444) ProvidenceXz
- Add `type="button"` to <button /> components (#3447) Scott Agirs
- Add horizontal rule plugin (#3446) akmarzhan1
- Add isEditable listener to nested composer (#3445) John Flockton
- Exports serialized node types (#3436) tolkienfan2
- Fix bug in selectPointOnNode (#3443) Dominic Gannaway
- $splitNode & $insertNodeToNearestRoot for root selection (#3442) Maksim Horbachevsky
- Updated exportJSON types (#3231) Matt Reid
- Fix deleting empty paragraphs (#3261) Petar Smolic
- Change command priority in typeahead (#3441) John Flockton
- Fix grammary 2 (#3438) Dominic Gannaway
- Don't unnecessarily mark text nodes as dirty (#3437) John Flockton
- fix: playground bug(floating link editor not closing with 'Escape' key (#2941) Joseph Jang
- Fix a couple of bugs with Headings creation (#3425) John Flockton
- Fix text replacement via insertText (#3429) Dominic Gannaway
- Add link list properties to nodes (#3424) Dominic Gannaway
- Fix browser selection with horizontal rule (#3418) Dominic Gannaway
- add excalidraw plugin example (#3412) akmarzhan1
- Fix $splitNode Flow type (#3411) Gerard Rovira
- Fix insertNodes merging logic (#3413) Dominic Gannaway
- refactor: React composer initialConfig to exported type (#3396) Simon Proper

## v0.6.3 (2022-11-23)

- Apply event propagation between all event types (#3401) Dominic Gannaway
- Fix selection bug in code highlighting transform (#3405) Dominic Gannaway
- Exports SerializedNodes from @lexical/table (#3393) tolkienfan2
- Ensure we do not render br after non inline decorators (#3406) Dominic Gannaway
- Fix collapsible bugs (#3404) Maksim Horbachevsky
- Add more invariants around insertion of text nodes into root (#3399) Dominic Gannaway
- Fix bad selection on $wrapNodes (#3400) Dominic Gannaway
- Fix insertNodes bug around isolated decorators (#3403) Dominic Gannaway
- Fix element indent duplication (#3398) Dominic Gannaway
- Fix bug in scrollIntoViewIfNeeded (#3397) Dominic Gannaway
- Fix md links regexp (#3395) Maksim Horbachevsky
- Add LexicalNodeEventPlugin to @lexical/react (#3392) Dominic Gannaway
- Add rel noopener by default (#3386) Acy Watson
- Fix selection bugs with decorators (#3391) Dominic Gannaway
- Fix experimental tables (#3390) Dominic Gannaway

## v0.6.2 (2022-11-21)

- Validate dragon origin (#3385) Dominic Gannaway
- Remove AutoScrollPlugin and properly fix scrollIntoViewIfNeeded (#3378) Dominic Gannaway
- LinkPlugin to support link paste (#3371) Gerard Rovira
- Add node replacement system to core (#3367) Dominic Gannaway
- Fix prettier & lint (#3377) Gerard Rovira
- add collapsible container plugin example (#3369) akmarzhan1
- add embed plugins (#3363) akmarzhan1
- Add markdown plugin example (#3354) akmarzhan1
- add sticky notes plugin example (#3345) akmarzhan1
- Improve $insertNodeToNearestRoot (#3344) Maksim Horbachevsky
- Add $splitNode & $copyNode (#3342) Maksim Horbachevsky
- feat: make icons and popups dynamic & change file structure (#3336) Adithya Vardhan
- Add table plugin example (#3341) akmarzhan1
- Fix content loss when EditorState + update race condition (#3337) Gerard Rovira
- Filter out mixed files + content copy pasting (#3329) Maksim Horbachevsky
- Bump loader-utils from 2.0.2 to 2.0.3 (#3333) dependabot[bot]
- Bump loader-utils from 2.0.2 to 2.0.3 in /packages/lexical-website (#3334) dependabot[bot]
- Update YJS (#3313) Maksim Horbachevsky
- Update nodes.md (#3332) UncleKhab
- Add list plugin example (#3324) akmarzhan1
- Disable table addons on non-editable (#3317) Gerard Rovira
- Nit FlowFixMe hint (#3310) Gerard Rovira
- feat: Extend support for link target and rel to lexical-react’s AutoLinkPlugin (#3209) Andrew Patton
- docs: set ErrorBoundary props to PlainTextPlugin (#3326) unvalley
- Update collab cursor colors to pass a11y contrast ratio (#3315) Maksim Horbachevsky

## v0.6.0 (2022-10-31)

- [0.6] Make RichTextPlugin ErrorBoundary mandatory (#3295) Gerard Rovira
- Optional decorator nodes selection with keyboard navigation (#3292) Ruslan Piliuta
- Keep selection if state was not cloned (#3294) Maksim Horbachevsky
- Preserve selection for pending state (#3293) Maksim Horbachevsky
- Handle quotes in increment-version changelog (#3291) Gerard Rovira
- v0.5.1-next.2 (#3286) Acy Watson
- filter by branch (#3285) Acy Watson
- Release on matching tag push to main (#3284) Acy Watson
- Drag & drop & paste with precision (#3274) Gerard Rovira
- Fix initial content tables initialization (#3281) Maksim Horbachevsky
- selection.modify to respect ShadowRoot (#3279) Gerard Rovira
- Add root theme class (#3277) Maksim Horbachevsky
- Improve Collab cursor, add custom cursorColor (#3248) Dragoș Străinu
- fix nodesOfType return type (#3262) Acy Watson
- Copy styles to new object when patching (#3273) Acy Watson
- Revert "Select end if root has no children (#3254)" (#3276) Acy Watson
- Fix paste CodeNode leak  and and empty links (#3194) Gerard Rovira
- Use set (#3258) John Flockton
- Do not reconcile terminating linebreak for inline elements (#3268) Maksim Horbachevsky
- Revert "v0.5.1-next.2 (#3269)" (#3272) Acy Watson
- v0.5.1-next.2 (#3269) Acy Watson
- Add inline plugin example for images (#3216) akmarzhan1
- Select end if root has no children (#3254) John Flockton
- Remove isHighlighting flag (#3256) John Flockton
- Allow clearing styles with $patchStyleText (#3247) Brian Birtles
- Improve logistics around table/grid selection (#3251) Tyler Bainbridge
- Fix error boundary fallback (#3249) Maksim Horbachevsky
- Allow skipping auto-scroll action on selection change (#3220) Ruslan Piliuta
- pref(lexical-playground): reduce rendering consumption by creating compositing layers (#3069) 子瞻 Luci
- chore: add new `eslint-plugin` with rule `no-optional-chaining` locally (#3233) Shanmughapriyan S
- Handle left part of match (#3245) Clément Bacouelle
- Expose Tokenizer interface to accept custom tokenizer other than Prism at @lexical/code (#3243) mizuno
- fix list paste issue (#3239) Acy Watson
- Fix typos in Markdown documentation (#3236) Mikko Tirronen
- allow overriding mark node create fn (#3229) Acy Watson
- Add SerializedMarkNode flow type (#3228) Acy Watson
- Handle bad list item children gracefully (#3226) Gerard Rovira
- Memoize ErrorBoundary (#3225) Gerard Rovira
- Fix TableSelection Mouse Up Propagation Bug (#3223) Tyler Bainbridge
- Don't apply element based offsets to text nodes in $patchStyleText (#3126) Brian Birtles
- fix: fixed dual text appearance problem and removed outline scrollbar (#3207) Karam Qaoud
- Safely remove parent elements when deleting at anchor offset 0 (#3213) Tyler Bainbridge
- Allow Block change with GridSelection (#3212) Tyler Bainbridge
- v0.5.1-next.1 (#3205) Acy Watson
- Fix frozen selection (#3204) Acy Watson
- fix: draggable block icon is invisible in read-only mode (#3198) Karam Qaoud
- Fix sample code (lexical-react) (#3206) Yuki Shindo
- chore: optimize svg (#3199) Strek
- Fix $patchStyleText when the selection is anchored to the end of a text node (#3116) Brian Birtles
- releases (#3203) Acy Watson
- v0.5.1-next.0 (#3201) Acy Watson
- fix: play `time travel` after reaching maximum range (#3197) Shanmughapriyan S
- Add type to commands for logging  (#2942) John Flockton
- Built-in Error/SuspenseBoundaries for React DecoratorNodes (#3178) Gerard Rovira
- Add flushSync option to update() (#3119) Maksim Horbachevsky
- nightly and dev releases (#3192) Acy Watson
- Make the ComponentPicker independent of the Toolbar (#3142) EgonBolton
- docs: Fixed broken link (#3190) Simon Proper
- Fix insertNodes when replacing content adjacent to an inline element (#3137) Brian Birtles
- Fix nested editor cut (#3177) Maksim Horbachevsky
- Fix copy-paste CodeBlock with BR (#3174) Gerard Rovira
- TreeView editor basics (#3153) Gerard Rovira
- Remove development notice (#3171) Dominic Gannaway
- Fix flow types for root.select() (#3168) Maksim Horbachevsky
- Fix linting error (#3165) John Flockton
- Check if DOM is accessible when calling `getSelection` (#3162) Lee Sanghyeon
- ref(selection): separate @lexical/selection/index into multiple files (#3145) quochuy
- Ignore empty class names in addClassNamesToElement (#3159) Acy Watson
- remove repeated comments (#3154) Zuckjet
- FF Node/Grid copy-paste support (#3147) Gerard Rovira
- feat: add icons to extension and change build (#3140) Adithya Vardhan
- Add Emoji Picker to Playground (#3122) Tyler Bainbridge
- Ignore mutations which do not have target node (#3120) Ruslan Piliuta
- flow types (#3133) Acy Watson
- support multiple classes (#3134) Acy Watson
- Fix regex (#3132) Tyler Bainbridge
- Fix typeahead ref typedef (#3131) Maksim Horbachevsky
- Add className prop to typeahead plugin (#3124) Acy Watson
- Fix table paste (#3129) Gerard Rovira
- Fix GridSelection comparison (#3118) Gerard Rovira
- [0.6] More Typeahead Changes (#3112) Tyler Bainbridge
- Fix typeahead import (#3117) Maksim Horbachevsky
- Fix npm install on M1 macs (#3114) Nils Tijtgat
- Update createHeadlessEditor to match createEditor typedef (#3111) Maksim Horbachevsky
- fix(lexical-playground): draggable blockplugin uses unexposed apis (#3109) 子瞻 Luci
- Typeaheads: Remove hard-coded "bottom" alignment (Breaking change) (#3104) Tyler Bainbridge
- Typeaheads: Add scroll command and increase priority (#3106) Tyler Bainbridge
- Lower key navigation command priority for Tables (#3107) Tyler Bainbridge
- Fix DOM availability check (#3102) Maksim Horbachevsky
- copyToClipboard to return success (#3105) Gerard Rovira
- chore: add e2e test for draggable-block-plugin (#3090) 子瞻 Luci
- Fix flow for $insertGeneratedNodes (#3101) Gerard Rovira
- Make onClose optional on Flow Types. (#3091) Tyler Bainbridge
- Add collapsible container plugin (#3082) Maksim Horbachevsky
- Double-trigger hack for high-fidelity Node/Grid selection (#3080) Gerard Rovira
- Tweet fallback to text on copy (#3088) Gerard Rovira
- Add logic to catch separators (#3084) John Flockton
- Add open/close callbacks to menu plugins (#3087) Tyler Bainbridge
- Merge markdown E2E tests into one file (#3086) John Flockton
- Add some inline documentation (#3076) Acy Watson
- Removed extra 'is' in line 9 (#3083) Samuel Adeboye Folaranmi
- fix(lexical-playground): read-only mode (#3081) 子瞻 Luci
- Fix Resize and Scroll Issues (#3079) Tyler Bainbridge
- Fix oncall annotation issue missing from some files (#3075) John Flockton
- Add oncall annotation (#3071) John Flockton
- chore(lexical-playground): add resizability back to regular tables (#3068) Yaroslav Kiliba
- Update faq.md (#3070) Yun Feng
- fix(lexical-clipboard): pasting from google docs (#3063) 子瞻 Luci
- Update theming.md (#3067) Christian Owusu
- Update intro.md (#3064) Christian Owusu
- package-lock Gerard Rovira
- v0.5.0 (#3059) Gerard Rovira
- feat: add export/import DOM for horizontal rule node (#3057) Samuel Martineau

## v0.5.0 (2022-09-23)

- feat(lexical-playground): draggable block (#2860) 子瞻 Luci
- Dispatch CAN_{REDO,UNDO}_COMMAND after clearing history (#3056) Wilberto Morales
- Fix Table Deletion (#3053) Tyler Bainbridge
- Remove previousText check (#3052) Tyler Bainbridge
- Improve table selection handling when there are no siblings (#3051) Tyler Bainbridge
- Fix initialEditorState flow (#3048) Gerard Rovira
- Add Selection View in DevTools (#2955) Will
- Fix (Known) Table Bugs (#3000) Tyler Bainbridge
- Revise Vite compression (#3036) Gerard Rovira
- Fix composition text boundary for canInsertTextAfter (#3045) Gerard Rovira
- Fix nested mark creation when wrapping forward selection (#3027) Ken Powers
- Add position property to menus & disable floating link toolbar for autolink nodes (#3035) Tyler Bainbridge
- Update collab docs (#3033) Maksim Horbachevsky
- feat(lexical-react): add initialEditorState for LexicalCollaborationPlugin (#3011) Dragoș Străinu
- [0.5] Remove deprecated initialEditorState from OnChangePlugin (#3031) Gerard Rovira
- [0.5] Remove initialEditorState from  Plain/RichTextPlugin (#3032) Gerard Rovira
- Make  -> isEditable mandatory (#3030) Gerard Rovira
- Add optional cursors container prop for a better positioning in scrollable layouts (#3025) Maksim Horbachevsky
- [0.5] Treat undefined selection the same as null in  (#2948) Acy Watson
- [0.5]  ->  (#3020) Gerard Rovira
- getStyleObjectFromCSS to compute when cache miss (#3024) Gerard Rovira
- [0.5] Revise usage of root node vs shadow (#3022) Gerard Rovira
- Fix code highlighter race condition on transform (#3014) Gerard Rovira
- : Selection-agnostic node insertion with Grid/Node selection support (#2638) Gerard Rovira
- add docs (#3019) Acy Watson
- [0.5] Remove INERT mode (#2421) Gerard Rovira
- [0.5] Correct definition of isTopLevel; introduce DecoratorNode->isInline, ElementNode->isShadowRoot (#3009) Gerard Rovira
- Revert md changes from #3001 (#3015) Maksim Horbachevsky
- add install step (#3008) Acy Watson
- Revise RnageSelection dirty toggle (#3007) Dominic Gannaway
- Trim content for newlines only (#3006) Maksim Horbachevsky
- Fix  flow type (#3005) Gerard Rovira
- Fix bad TypeaheadMenuPlugin prod build (#3003) Gerard Rovira
- Capture pendingDecorators after garbage collecting detached decorators (#2999) Adrien Wald
- ElementNode -> isTopLevel() (#3001) Gerard Rovira
- Rm unused helpers from older markdown code (#2998) Maksim Horbachevsky
- Add DEPRECATED prefix to Grid APIs (#2966) Dominic Gannaway
- [Automated Releases] Add logging and dry run to release script (#2986) Acy Watson
- Fix www exports (#2994) Maksim Horbachevsky
- Fix WWW import rewrite for React (#2996) Gerard Rovira
- Fix insert column header bug (#2995) Tyler Bainbridge
- docs: loadContent clarification (#2989) ly3xqhl8g9
- docs: Fix URL of rich-text and plain-text (#2985) kimulaco
- Fixed exportDOM for paragraph node (#2981) Hafiz
- remove ff merge from release (#2984) Acy Watson
- fix versioning for ff merge (#2983) Acy Watson
- merge from main Acy Watson
- merge from main Acy Watson
- add back config Acy Watson
- add ssh key Acy Watson
- push config (#2979) Acy Watson
- Clean up redundant newlines during pasting (#2969) Maksim Horbachevsky
- config (#2977) Acy Watson
- Improve docs around the React plugins page (#2976) Dominic Gannaway
- install (#2972) Acy Watson
- Update collab errors, related cleanup (#2971) Maksim Horbachevsky
- Automated releases (#2949) Acy Watson
- Add empty comment in front of 'export' in a bundled file (#2970) Maksim Horbachevsky
- Fix bugs with isEditable (#2967) Dominic Gannaway
- allow escaped markdown within TextFormatTransformer (#2964) Christian Ratz
- Fix link breaking when formatting on (#2954) Patrick McCullough
- fix typo on read-mode / edit-mode page (#2962) Christian Ratz
- fix (#2957) Acy Watson
- Add table cell menu back (#2958) Tyler Bainbridge
- fix (#2956) Acy Watson

## 0.4.1 (September 5, 2022)

- Fix breaking bug for `isEditable` mode in editor initialization (#2945) Tim Laubert
- Fix Safari selection highlighting bug (#2943) John Flockton
- Fix Android backspace bug (#2940) Dominic Gannaway

## 0.4.0 (September 3, 2022)

### Breaking Changes

#### Renamed isReadOnly API to isEditable

editor.isReadyOnly -> editor.isEditable()
editor.setReadyOnly -> editor.setEditable()
editor.registerReadOnlyListener -> editor.registerEditableListener()
editor config { readOnly: true } -> { editable: boolean }

https://github.com/facebook/lexical/pull/2912

#### Markdown Transformers Require Dependencies

The "dependencies" property is now required for custom markdown Element and TextMatch Transformers. It takes an array of LexicalNode subclasses and
asserts that they're available in the editor when transforms are registered.

https://github.com/facebook/lexical/pull/2910

#### Selection Updates when isEditable is false (previous ReadOnly mode)

Lexical will now track and update selection in response to DOM selectionchange events when editor.isEditable is false. This is necessary for enabling some behavior
such as commenting via marks, but may cause other indirect changes such as update listeners firing when they didn't previously.

- Ensure editor states are cloned if read only (#2936) Dominic Gannaway
- Prevent nested editor event duplication (#2935) Dominic Gannaway
- Avoid preventing default for copy events when there is no selection (#2930) Dominic Gannaway
- Non-Editable Mode Playground Improvements (#2927) Acy Watson
- fix: do not import LexicalTypeaheadMenuPlugin from src folder (#2928) Eric Charles
- Change read only mode API to editable mode (#2912) Dominic Gannaway
- Fix typo (#2925) Tjaart van der Walt
- Remove redundant readonly checks. (#2921) Acy Watson
- allow selection in readonly mode (#2920) Acy Watson
- Remove $getEditor (#2919) Dominic Gannaway
- Use window of current default view (#2918) Dominic Gannaway
- Fix bad CSS on content editable container (#2917) Dominic Gannaway
- Ensure we only mutate a non-readonly editor state (#2915) Dominic Gannaway
- Fix failing build (#2916) John Flockton
- Read only validation server (#2899) Dominic Gannaway
- Add serialized node type exports (#2914) Matthew Lin
- Provide markdown plugin node dependencies (#2910) Dominic Gannaway
- Fixed typo (#2908) Heesung Jang
- Add Flow Types for AutoEmbedPlugin and TypeaheadPlugin (#2904) Tyler Bainbridge
- Fix link pasting (#2903) Maksim Horbachevsky
- Attempt transform of NodeSelection to RangeSelection on mouseDown (#2901) Gerard Rovira
- chore: add e2e tests for maxlength plugin (#2478) Adithya Vardhan
- Added sanitizer to FloatingLinkEditor (#2900) Heesung Jang
- Rename website folder (#2902) John Flockton
- remove unnecessary text append (#2898) John Flockton
- Fix Lexical package main entry points (#2897) Dominic Gannaway
- Fix overriding keyboard controls on internal decorator (#2895) Dominic Gannaway
- Allow code highlighting to run without active selection (#2891) Maksim Horbachevsky
- Fix editor content clipping bug (#2890) Dominic Gannaway
- LexicalTypeaheadMenuPlugin - Increase priority for keyboard commands (#2885) Theo Tillberg
- Remove redundant css property (#2888) Adam Kona
- Playground: Fix collab connect/disconnect toggling (#2887) Maksim Horbachevsky
- Improve heuristics around node selection and keyboard navigation (#2884) Dominic Gannaway
- Don't merge history entries from different editors (#2873) Acy Watson
- Exported DEFAULT_TRANSFORMERS array in react LexicalMarkdownShortcutPlugin (#2878) Kevin Ansfield
- Replaced `addTransform` with `registerNodeTransform` in transforms doc (#2882) Kevin Ansfield
- add example for additional nodes in plugin (#2879) Stefan Huber
- add the corresponding import to react doc (#2881) Stefan Huber
- Fix playground visual styling (#2876) Dominic Gannaway
- chore(deps): bump minimist in /packages/lexical-website-new (#2744) dependabot[bot]
- chore(deps): bump terser from 5.14.1 to 5.14.2 (#2869) dependabot[bot]
- Change linebreak node handling in insertNodes (#2857) Acy Watson
- Add some React Docs (#2858) Acy Watson
- fix delete backward bug (#2870) Dominic Gannaway
- add watch mode for auto-gen doc comments in dev (#2859) Acy Watson
- Update package-lock.json (#2866) ＡＮＤＲＩ Ｈ.Ｕ
- Update package-lock.json (#2865) ＡＮＤＲＩ Ｈ.Ｕ
- Fix issue with emoji (#2853) John Flockton
- Adjust Typeahead Styles (#2846) Tyler Bainbridge
- revert inadvertent change (#2849) Acy Watson
- Fix small type issue (#2847) John Flockton
- Wider (#2848) John Flockton
- Add autogenerated TypeDoc docs (#2837) Acy Watson
- fix: set cursor grab when image can be dragged (#2831) 子瞻 Luci
- fix(lexical-playground): two issues with scrolling-related scenarios (#2724) 子瞻 Luci
- fix: add fallback for code formatting (#2833) Adithya Vardhan
- rename local variables (#2840) Acy Watson
- fix broken links in docs (#2839) Reid Barber
- Fixing grammar on RootNode documentation (#2838) Aaron Freeland
- fix: transfer format and indent info on wrap (#2832) Adithya Vardhan
- fixed getStyleObjectFromRawCSS to handle css values with a colon (#2814) Hayden Warmington
- Add Panel to Display Props for DevTools Nodes (#2803) Will

## 0.3.11 (August 12, 2022)

- fix more code imports (#2828) Acy Watson

## 0.3.10 (August 12, 2022)

- Fix Code imports (#2826) Gerard Rovira
- Fix selection#deleteLine (#2813) Maksim Horbachevsky

## 0.3.9 (August 11, 2022)

Most notably:
- Added playground Figma embed and AutoEmbed plugin
- LinkNode target and rel support
- Many bugfixes

Commits:
- No nullish LinkNode props (#2818) Gerard Rovira
- Fix collapsed selection on links (#2817) Gerard Rovira
- prevent button from submitting forms (#2811) Gerard Delmàs
- Fixed flow return type for TableOfContents plugin (#2802) Karam Qaoud
- Update editor-state.md (#2808) William Cary
- Fix nested editors in collab (#2781) Dominic Gannaway
- chore: add some declare global (#2804) 子瞻 Luci
- Fix selection adjustment after text match transformer (#2795) Maksim Horbachevsky
- Inject DevTools Script in Browser Extension (#2778) Will
- Fix inserting nodes next to top level decorators (#2796) Maksim Horbachevsky
- chore(auto-link-plugin): fix invariant message for node registration check (#2790) Eric Charles
- Fixing comments list scrolling issue (#2789) Ebad
- Fix internal build error (#2787) John Flockton
- fix: dropdown icon css (#2786) Adithya Vardhan
- chore: Move useCollaborationContext to dedicated file (#2777) Thomas Sauques
- chore(lexical-playground): typos, improved build (#2780) Yaroslav Kiliba
- make importJSON static in test node (#2784) Acy Watson
- fix(lexical): ts expect error (#2776) 子瞻 Luci
- Fix documentation typos (#2774) Lyle Denman
- fix: Single anchor element per LexicalTypeaheadMenuPlugin instance (#2768) Thomas Sauques
- Node/GridSelection docs (#2773) Gerard Rovira
- Add Figma Embed to Playground (#2705) Tyler Bainbridge
- Selection#formatText to retain selection and handle all text nodes (#2770) Maksim Horbachevsky
- Fixed scrolling bar view (#2772) Karam Qaoud
- Add LexicalAutoEmbedPlugin and (Playground)AutoEmbedPlugin. (#2704) Tyler Bainbridge
- Bug: Undo command after creating a Quote removes text after Quote element (https://github.com/facebook/lexical/issues/2750) (#2767) Alexandru Pavaloi
- Handle insertTranspose for beforeinput event (#2764) Maksim Horbachevsky
- Fix selection format for empty paragraphs (#2759) Maksim Horbachevsky
- Remove unused keys from evens and utils (#2763) John Flockton
- chore: fix aria-label typo (#2762) 子瞻 Luci
- feat: Replace select with dropdown for code (#2761) 子瞻 Luci
- Fix typo in community page (#2760) Joshua Chen
- Add initial editor state for collab example (#2749) Maksim Horbachevsky
- Table of contents style improvements (#2743) Karam Qaoud
- Highlight DOM Nodes onHover of Lexical DevTools Node (#2728) Will
- Tighten check on top level decorator nodes (#2746) John Flockton
- Remove unused markdown functions (#2747) John Flockton
- feat: Replace select with dropdown for font size and font family (#2441) Adithya Vardhan
- fix: Verify if there are text nodes before continue (#2616) Nahuel Veron
- Convert pasted Google Docs Title text into a Heading (#2729) Acy Watson
- Remove isCollapsed from selection onClick (#2727) John Flockton
- fix: cross button css in poll node (#2742) Adithya Vardhan
- fix: getTopLevelElement for decoratorNode (#2741) Adithya Vardhan
- fix: `timeoutId` type (#2735) Shanmughapriyan S
- fix: some typo (#2737) 子瞻 Luci
- docs: readme improvements (#2734) GJunior
- Bug: typo in Documentation. It should be ReactNode instead of React (https://github.com/facebook/lexical/issues/2731) (#2732) Alexandru Pavaloi
- Added table of contents documentation (#2720) Karam Qaoud
- Fix: Minor Typo on Lexical Playground ActionsPlugin (#2717) Yamil García Hernández
- Excalidraw fixes (#2711) John Flockton
- Resolve selection for orphan selected children (#2677) Gerard Rovira
- feat(lexical-playground): prettier code (#2688) 子瞻 Luci
- Revert "Add E2E test for TableOfContentsPlugin (#2675)" (#2708) Gerard Rovira
- Add E2E test for TableOfContentsPlugin (#2675) Karam Qaoud
- OnChangePlugin ignoreInitialChange -> ignoreHistoryMergeTagChange (#2706) Gerard Rovira
- feat: Link node with target and rel (#2687) Andriy Chemerynskiy
- fix: check if options are empty (#2701) Adithya Vardhan
- Remove coverage reports (#2699) John Flockton
- Make includeHeaders a boolean (#2697) alinamusuroi
- fix(playground): fix rendering Exclidraw (#2694) Bryan
- Collapse and Expand DevTools Tree Nodes (#2679) Will
- fix(lexical-playground): LexicalTypeaheadMenuPlugin import (#2689) Elvin Dzhavadov
- Fix VALID_TWITTER_URL to allow underscores. (#2690) hiraoka
- fix: path to icons (#2683) Adithya Vardhan
- Fixed typo (#2678) SalvadorLekan
- Separate `@lexical/code` into more atomic modules (#2673) John Flockton
- fix(lexical-list): remove list breaks if selection in empty (#2672) 子瞻 Luci
- Conditionally utilize `startTransition` if it's present (#2676) Jack Hanford
- chore(lexical-playground): make directory clear (#2674) 子瞻 Luci

## 0.3.8 (July 20, 2022)

Lots of bug fixes.

Introduces TypeaheadPlugin and associated primitives, which consolidate the implementation of all such functionality (mentions and component picker) and create a base to build similar typeahead functionality from.

Introduces TableOfContents plugin for easier navigation of long-form documents. Available in the playground in the settings menu (bottom-left corner).

Introduces a "clipboard viewer" functionality in the local dev environment. When active, it shows the clipboard content the last time the paste event was fired with the editor focused.

- Remove default styling imports on HTML paste (#2663) Acy Watson
- fix(lexical-playground): code lang display (#2658) 子瞻 Luci
- chore(lexical-playground): remove files that should not be submitted (#2662) 子瞻 Luci
- Selection.extract fix (#2620) Acy Watson
- Specify the return type of getNearestNodeOfType. (#2651) hiraoka
- Autolink default protocol (#2654) Gerard Rovira
- fix(doc): RichTextPlugin placeholder (#2655) unvalley
- fix(lexical): calculate range selection formatting (#2643) 子瞻 Luci
- Add TableOfContentsPlugin (#2634) Karam Qaoud
- Port ASCII State Tree to Browser Extension (#2625) Will
- Fix markdown text matchers during md import (#2644) Maksim Horbachevsky
- fix(lexical): Japanese IME issue (#2623) 子瞻 Luci
- Remove comment box from footer (#2639) John Flockton
- Delete doc from ydocMap on unmount. Fixes init on re-mount (#2637) Maksim Horbachevsky
- feat: new way to delete comments and threads (#2570) Adithya Vardhan
- Lexical Typeaheads (#2534) Tyler Bainbridge
- Add $insertBlockNode (#2633) Gerard Rovira
- Add seperate flag for if script had loaded (#2628) John Flockton
- Fix Chrome types in Lexical DevTools (#2627) John Flockton
- Capture the expected payload type in commands (#2537) Patrik Åkerstrand
- fix unit test warning (#2618) Acy Watson
- fix(lexical-playground): fix toolbar-item button style bug in safari (#2621) 子瞻 Luci
- add docs (#2611) Acy Watson
- Add default value for undefined case in markdown transformers (#2453) Noah Cook
- Add PasteLog Plugin (#2609) Acy Watson
- Fix pasting inline code blocks (#2607) Maksim Horbachevsky

## 0.3.7 (July 6, 2022)

Lots of bug fixes and polish. Notably, the full text of minifed Lexical error codes can now be accessed via the [Lexical website](https://lexical.dev/docs/error?code=2).

- Update Browser Extension's Vite Config (#2540) Will
- fix: import color and vertical align info from html string (#2571) Adithya Vardhan
- Update PollNode.css (#2602) VelociRaptor
- Update package names (#2599) Acy Watson
- Ensure to call existing listeners only (not newly added ones) (#2573) Maksim Horbachevsky
- Added dragend to list of rootElementEvents (#2598) stuartrobinson3007
- Reverse MarkdownExport loop order to take TextMatchTransformers into account first (#2582) Lukas
- Fetch Lexical State Tree in DevTools App (#2510) Will
- chore: use keyboard shortcuts (#2580) Adithya Vardhan
- fix prettier Gerard Rovira
- Replace background images with pseudo classes to display checkboxes in playground (#2567) VelociRaptor
- Customize default focus position (#2591) Gerard Rovira
- Add missing dependencies (#2585) John Flockton
- Website error codes - lexical.dev/error/<code> (#2574) Gerard Rovira
- Use Vite server for E2E tests in CI (Fix windows CI failures) (#2584) Acy Watson
- feat(lexical-playground): copy button for @lexical/code (#2396) 子瞻 Luci
- fix: commenting issue after ts migration (#2558) Adithya Vardhan
- npm run changelog (#2561) Gerard Rovira
- fix: typo edtior to editor (#2560) Florent DUVEAU

## 0.3.6 (June 29, 2022)

lexical & @lexical/ packages:
- fix(lexical): Text with underline format is stripped out on paste (#2555) 子瞻 Luci
- Trigger readonly listener only when value has changed (#2550) Maksim Horbachevsky
- fix(lexical): deselecting a decorator node by clicking (#2554) 子瞻 Luci
- Remove wordwrap for tree view (#2551) John Flockton
- add docs for headless package (#2539) Acy Watson
- Normalize list children (#2509) Acy Watson
- Add ability to set format and detail by string type (#2547) John Flockton
- Pasting multi-line plain text into rich-text mode produces separate paragraphs (#2507) Maksim Horbachevsky
- Revert "Revert "fix: insert text after delete next to inline node (#2530)" (#2544)" (#2549) Gerard Rovira
- Revert "fix: insert text after delete next to inline node (#2530)" (#2544) Gerard Rovira
- fix: insert text after delete next to inline node (#2530) Patrik Åkerstrand
- Fix IME bug in `lexical-history` (#2501) John Flockton
- Export Klass from Lexical root (#2533) John Flockton
- Hide placeholder when readonly (#2511) Gerard Rovira
- remove utility types from all packages (#2529) John Flockton
- Improve markdown newline export/import (#2519) Maksim Horbachevsky
- Revisit formatText node selection (#2524) Gerard Rovira
- Fix $generateHtmlFromNodes to output whole editor contents if selection is null (#2504) yicrotkd
- Remove unnecessary comments (#2505) John Flockton
- fix(lexical): "selection.format" is not set correctly (#2502) 子瞻 Luci
- Fixed getStyleObjectFromRawCSS function to work with unformatted css (#2515) Karam Qaoud
- Fix image copy+paste (#2517) Dominic Gannaway
- Migrate to TS strict mode 6/n  (#2496) John Flockton
- fix(lexical): caret at wrong place when paste (#2465) 子瞻 Luci
- Fix infinite recursion in insertText in RangeSelection (#2490) Patrik Åkerstrand
- Update error message and docs (#2492) John Flockton
- Migrate to TS strict mode 5/n (#2488) John Flockton
- Fix composition bugs affecting intern (#2487) John Flockton
- Fix FF issue with composition (#2486) Dominic Gannaway
- Migrate to TS strict mode 3/n  (#2482) John Flockton
- Fix Flow rewrite imports script (#2477) John Flockton
- Migrate to TS strict mode 2/n (#2469) John Flockton
- Inserting inline elements (#2474) Maksim Horbachevsky
- Fix component/plugin names in get started section (#2472) Aleš Menzel
- Revert "add e2e tests for MaxLength plugin (#2466)" (#2467) Gerard Rovira
- add e2e tests for MaxLength plugin (#2466) Adithya Vardhan
- Fix can format backwards when at first text node boundary (#2445) Gerard Rovira
- Fix button--outline hover color dark mode (#2462) M. Zakiyuddin Munziri
- Migrate to TS strict mode 1/n (#2458) John Flockton
- renamed character styles popup plugin (#2456) Strek

Playground:
- Flower size (#2527) Gerard Rovira
- fix(lexical-playground): Resizing is not consistent on mobile (#2518) 子瞻 Luci
- fix(lexical-playground): Floating toolbar displayed on composition (#2506) 子瞻 Luci
- chore(lexical-playground): remove redundant code (#2497) 子瞻 Luci

Docs:
- add docs for headless package (#2539) Acy Watson
- tiny typo fix (#2514) Hadi El-Yakhni

Infra:
- Update e2e test docs and run-all script (#2522) yicrotkd
- Fix Windows CI Runs (#2513) Acy Watson
- Deploy Lexical prod build to Vercel (#2476) Gerard Rovira
- CI check against prod bundle (#2460) Gerard Rovira
- shared PKG to cleanup (#2463) Gerard Rovira

## 0.3.5 (June 16, 2022)

- Fix bad warnOnlyOnce minification (#2448)
- add missing flow type (#2447)

## 0.3.4 (June 16, 2022)
- Customizable DecoratorBlockNode via theme (#2387)
- initializeEditorState on LexicalComposer (#2425)
- Revert "Prevent dispatching redundant can undo/redo commands (#2394)" (#2440)
- Improve `Spread` type (#2434)
- Improve text mutations around selection format changes (#2433)
- Remove redundant newlines (#2431)
- fix: add styles on copy (#2427)
- Fix exposed private methods (#2429)
- Fix backspace bug with non-RangeSelection (#2416)
- Fix Android backspace bug (#2412)
- Fix orphan list item clipboard bug (#2407)
- Remove default json and node-type from DOM output. (#2404)
- Simplify clickable links checks (#2395)
- Prevent dispatching redundant can undo/redo commands (#2394)
- Editor instance toJSON should call toJSON method on editor state (#2390)

## 0.3.3 (June 9, 2022)

- Add stringified LexicalNodes to clipboard for lossless Lexical <-> Lexical copy and paste. (#2370)
- Fix bad target issue for backspace/delete (#2375)
- Improve nested editor propagation (#2367)
- Fix scrolling issues due to browser rounding bugs (#2350)
- Code cleanup, type definition and docs improvements

Playground
- Autocomplete v2 (#2343)
- Add collaboration support for commenting (#2376)

## 0.3.2 (June 6, 2022)

- added typing for ListItemNode.setChecked, export ListNodeTagType (#2335)
- Fix copy + paste in plain text (#2342)
- Remove process.env (#2338)

## 0.3.1 (June 3, 2022)

- Fix link toggle bug (#2331)
- Enable copy+paste on NodeSelection (#2327)
- Add default exportDOM and importDOM methods (#2324)
- Disable checklist items in readOnly mode (#2321)

## 0.3.0 (June 2, 2022)

> Note: this release contains a number of breaking changes.

### Major Changes
- JSON parsing has changed from previous versions when serializing/parsing EditorState. See https://lexical.dev/docs/concepts/serialization.
- Custom nodes that do not implement `importDOM`/`exportDOM`/`importJSON`/`exportJSON` may trigger a warning in DEV.
- Imports from the Lexical npm packages that were previously default exports are now all named exports.

### All Changes
- Fix various JSON/HTML issues (#2317)
- Add includeHeaders argument to INSERT_TABLE_COMMAND (#2300)
- 02cb62f8 Fix invariant and update codes (#2315)
- 6665c41c Stengthen onClick conditional (#2314)
- 099376fa fix mispositioning of treeview caret (#2309)
- c7191cc7 Remove unstable JSON serialization functions + unify copy+paste to be HTML (#2241)
- 52c3d325 Normalize decorator warnings (#2291)
- 3970b95b Improve DEV warnings for node methods (#2290)
- 048fccab move toggleLink to lexical/link (#2239)
- 6a01a8f3 Revise $hasUpdateTag (#2281)
- 2f78eeb4 Improve scroll plugin (#2282)
- eadd6dba Expose $getUpdateTags and $addUpdateTag (#2279)
- eeccb4dd Improve copy + paste logic (#2276)
- 06cac8e8 Fix bug in $createNodesFromDOM (#2275)
- f6d4fa1a Simplify runtime logic (#2272)
- 62f4052a Fix placeholder race conditions on load (#2270)
- 2ff67df4 Provide legacy editor state JSON conversion (#2269)
- b69f8df5 fix(code-block): move to start/move to end (#2257)
- 65ebc8d9 Rename $rootTextContentCurry -> $rootTextContent (#2018)
- 4e81bd30 Alter sequence for commitPendingUpdates (#2262)
- a0f7c0d2 Fix bug in trimTextContentFromAnchor (#2265)
- 018083f8 Check for frozen selection only on dev env (#2264)
- 82f4365a Move HTML<->Lexical functions to new package, @lexical/html. (#2246)
- e0ad392f Expose $parseSerializedNode (#2253)
- 584b8460 feat: drop down keyboard navigation (#1985)
- 90aad493 Add MaxLengthPlugin (#2254)
- 94673423 Trim surrounding whitespace before applying text formatting during markdown export (#2251)
- 77f1d594 Expose RootNode to be used in node transform (#2243)
- eb411fd7 Rename insert text command (#2242)
- 3b7e6846 Skip underscores for links (non-intraword format) (#2191)
- d411cce8 Add missing types (#2225)
- 8d549259 Support Strikethrough and italic paste from Google Docs (#2220)
- 71824d1b Fix text replacement event handling (#2203)
- 97acadd3 Ensure selection is not prematurely nulled out on blur (#2158)
- 4229de03 Improve useDecorators sequencing (#2200)
- 21a9d456 Adjust selection to be after decorator node when moving selection to the end of decorator/linebreak (#2162)
- 92237d6f add runtime check for list node and list item node (#2196)
- 91ba4725 Remove default exports from synced packages (#2193)
- bf4ed74a Fix Safari IME issues (#2185)
- cfc1cf62 Ensure window.event is valid (#2184)
- ebbedbbc Delete unused variable dfsAncestor (#2173)
- 29bcd493 Add utility types as dep (#2177)
- d83515c4 Update LexicalMarkdownShortcutPlugin.d.ts (#2160)
- bccd5402 Replace element node with list item instead of appending. Fix #2142 (#2146)

## 0.2.9 (May 11, 2022)

- Fix a breaking change to the NPM release (#2144)

## 0.2.8 (May 11, 2022)

- Migrate more packages to TypeScript (#2135)
- Fix several TypeScript type bugs (#2116)
- Fix several Markdown export bugs (#2136m #2137, #2139)

## 0.2.7 (May 9, 2022)

- Fix Firefox composition bug with emojis (#2109)
- Add a cache for selection.getNodes() (#2088)
- remove root style from theme (#2084)
- Fix character styles position + caret color (#2080)
- Remove TextNode __marks (#2022)
- Move isComposing to TextNode (#2032)
- Markdown import/export/shortcuts (#1998)
- Improve Lexical -> HTML and Lexical -> Lexical Copy and Paste Data Model Conversion (#1996)
- Headless editor mode (#2046)
- Checklist support (#2050)
- Type definitions fixes (#2076, #2030, #2023, #2028)
- Adding support for parsed JSON in addition to stringified JSON (#2055)
- Remove root style from theme (#2084)
- Fix character styles position + caret color (#2080)
- Multiple fixes for node insertion and selection
- Documentation updates

## 0.2.5 (April 28, 2022)

- Add TextMarks to TextNode (#1912)
- Fix various collab bugs with lists (#1984)
- Fix cached getTextContent() to reflect new lines (#1993)
- Fix equation node handling on Android (#1968)
- Fix formatting on embeds (#1963)
- Improve multi element indentation - added ElementNode.canIndent (#1982)
- Fix bugs around pressing the enter key in Safari (#1943)
- Fix delete empty lines on tables (#1905)
- Fix copy-paste format loss (#1913)
- Fix memory leak with EditorContext (#1767)
- Fix various selection issues on node boundaries (#1917)
- Fix some .js.flow and d.ts types

## 0.2.4 (April 21, 2022)

- Add subscript/superscript elements to TextNode (#1903)
- Do not reconcile selection during readOnly (#1900)
- Add embed block to playground (#1895)
- Fix list outdent & indent bug (#1883)
- Excalidraw fixes (#1871)
- Updates to type definitions for Flow and TS
- Updates to documentation

## 0.2.3 (April 19, 2022)

- Fix bug in lists causing extra list items to be appended in some cases. (#1802)
- Fix double selection issue in collab (#1856)
- Add KEY_MODIFIER_COMMAND (#1859)
- Fix bug with alignment for root level decorator nodes v2 (#1867)
- Fix issue with inserting paragraphs between text nodes. (#1864)

## 0.2.2 (April 18, 2022)

- Command priorities are now constants exposed by lexical
- More fixes to Android GBoard
- Fixed some any d.ts types

## 0.2.1 (April 14, 2022)

- Fix selection issue with insertNodes
- Fix rich text align for multiple nodes
- Improve CodeBlock selection escaping
- Fix detection of iOS browser
- Fix Ctrl+H Delete backward
- Fix type of children in TypeScript declarations
- Fix android GBoard issues
- Various other fixes and improvements

## 0.2.0 (April 13, 2022)

- Remove DecoratorNode state
- Redefine TS React.Node type
- Add markdown indented list support
- Fix IME issue when applying text format

## 0.1.21 (April 12, 2022)

- Add line numbers in Code Highlight plugin.
- Remove top-level document reference to fix SSR.
- Show highlight language over code block
- Fix bug in RangeSelection.is that was causing incorrect formatting.
- Improve copy/paste for Tables and Lists
- Handle RangeSelection Containing Partial Table Selection

## 0.1.20 (April 7, 2022)

- Fix build issue with @lexical/code
- Add $getNearestBlockElementAncestorOrThrow helper
- Fix issues related to getting the wrong element ancestor in certain rich text features
- Improve table resizing

## 0.1.19 (April 7, 2022)

- Fix import issue in @lexical/list
- Fix incorrect types in @lexical/dragon

## 0.1.18 (April 6, 2022)

- Fix bad build

## 0.1.17 (April 6, 2022)

- Fix some outstanding issues with the textcontent listener and the removal of linebreaks.
- Add useLexicaTextEntity hook for using TextEntity in React.
- Add a warning when cloned nodes might unexpectedly refer to the pending editor state
- Add support for keyboard selection in Tables.
- Rename add* APIs to register* (e.g., addUpdateListener -> registerUpdateListener)
- Deprecate editor prop in Lexical Composer
- Reorganize code, creating several new packages: @lexical/code, rich-text, plain-text, dragon, history, link, overflow, markdown
- Move withSubscription to @lexical/utils
- Move command types out of listener callbacks and makes them an argument to registerCommand
- Add createCommand for better command payload typing
- Rename execCommand to dispatchCommand
- Add id prop to LexicalContentEditable
- Add basic support for copying and pasting tables.
- Various bug fixes and performance improvements

## 0.1.16 (March 17, 2022)

- Fix scrolling regression.
- Add missing dependency in lexical-react.

## 0.1.15 (March 16, 2022)

- Improve composition on Firefox
- Splits helper code into several smaller packages.
- Fixes clipboard behavior on Firefox.
- Fix hashtag with adjacent non-simple text node
- Rename addTransform to addNodeTransform
- Fix copy & paste issue

## 0.1.14 (March 04, 2022)

- Added TableCellHeaderStates to enable table header customization.
- Fixes to composition for WebKit.
- Fixes to HashtagPlugin destroy behavior.
- SSR fixes.

## 0.1.13 (March 02, 2022)

- Moved appropriate NPM peer dependencies to dependencies. I.e. @lexical/clipboard will now be fetched automatically when using @lexical/react.
- Simplified LexicalNestedComposer props to inherit parent when possible.
- SSR fixes.

## 0.1.12 (February 28, 2022)

- Added TypeScript definitions for lexical and @lexical/react
- LexicalComposer and createEditor now take a mandatory onError prop.
- createEditor can now take an optional readOnly prop.
- Moved LexicalEventHelpers to @lexical/clipboard.
- Minor selection fixes.

## 0.1.11 (February 24, 2022)

- Added GridSelection to support table selection. Selection is now `null | RangeSelection | GridSelection | NodeSelection`.
- The editor now natively supports read only mode. Use `editor.setReadOnly(boolean)` and `editor.isReadOnly()` to find the read only mode.
- An additional listener has been added to support listening to readonly changes. Use `editor.registerListener('readonly', value => {... })` to react to read only mode changes.
- The BootstrapPlugin has been removed. Instead now use the `initialEditorState` prop on either the PlainTextPlugin or RichTextPlugin to initialize editor state.

## 0.1.10 (February 22, 2022)

- Added NodeSelection to support multiple non-adjacent node selection. Selection is now `null | RangeSelection | NodeSelection`. Upgrade note: `selection !== null` -> `$isRangeSelection(selection)`.
- HTML to DOM conversion has been to moved to the nodes themselves. Nodes now take an optional `static convertDOM(): DOMConversionMap | null`.
- When onError is not passed to `createEditor({onError})` errors will now throw by default. Also, removed `registerListener('error')`.
- Fixed BootstrapPlugin race condition.

## 0.1.9 (February 18, 2022)

- Added `registerListener('mutation', Class<LexicalNode>, Map<NodeKey, NodeMutation>)` to track created/destroyed nodes. `NodeMutation = 'created' | 'destroyed'`
- Removed `$log()`.
- Moved TableNode/Row/Cell to its own `@lexical/table` package.
- Composition fixes.

## 0.1.8 (February 11, 2022)

- `Lexical{Plain/Rich}TextPlugin` and `DEPRECATED_use{Plain/Rich}TextPlugin` no longer create a ParagraphNode for you. This logic has been decoupled into a separate plugin <BootstrapPlugin />. The Bootstrap plugin also accepts an initialPayloadFn and clearEditorFn for custom initialization (i.e. edit behavior from server data). `<BootstrapPlugin /> <RichTextPlugin .. />`. If you're using the `DEPRECATED_{Plain/Rich}Text` version you may also want to copy-paste this hook and run it before the RichText initialization - https://github.com/facebook/lexical/blob/main/packages/lexical/src/__tests__/utils/DEPRECATED__useLexicalBootstrap.js
- Bugfixes.
