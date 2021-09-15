/** EditorJS-React Renderer
  *
  * A small library that provides functions to parse and render data saved by
  * EditorJS into react components
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert functions to React component
  *                             - Add CodeBoxOutput
  *                             - Adombang Munang Mbomndih
  * @version 1.0.2 - 2020.05.21 - Add key to list items - Adombang Munang Mbomndih
  * @version 1.0.3 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
  *
  */

//#region imports
import React from 'react';
import HeaderOutput from './renderers/header/index.jsx';
import ParagraphOutput from './renderers/paragraph/index.jsx';
import ImageOutput from './renderers/image/index.jsx';
import VideoOutput from './renderers/video/index.jsx';
import EmbedOutput from './renderers/embed/index.jsx';
import ListOutput from './renderers/list/index.jsx';
import QuoteOutput from './renderers/quote/index.jsx';
import ChecklistOutput from './renderers/checklist/index.jsx';
import WarningOutput from './renderers/warning/index.jsx';
import TableOutput from './renderers/table/index.jsx';
import DelimiterOutput from './renderers/delimiter/index.jsx';
import CodeBoxOutput from './renderers/codeBox/index.jsx';
//#endregion

const defaultRenderers = {
  codebox: CodeBoxOutput,
  header: HeaderOutput,
  paragraph: ParagraphOutput,
  image: ImageOutput,
  simpleimage: ImageOutput,
  video: VideoOutput,
  embed: EmbedOutput,
  table: TableOutput,
  list: ListOutput,
  checklist: ChecklistOutput,
  quote: QuoteOutput,
  warning: WarningOutput,
  delimiter: DelimiterOutput,
};

const Output = ({ data, style, classNames, config, renderers }) => {
  if (!data || typeof data !== 'object') return '';
  if (!style || typeof style !== 'object') style = {};
  if (!classNames || typeof classNames !== 'object') classNames = {};
  if (!config || typeof config !== 'object') config = {};
  if (!renderers || typeof renderers !== 'object') renderers = {};

  renderers = { ...defaultRenderers, ...renderers };

  return data.blocks.map((block, i) => {
    const Renderer = renderers[block.type.toLowerCase()];

    if (!render) return <p>{block.type.toLowerCase()} is not supported</p>

    return <Renderer key={i} data={block.data} style={style.codeBox || {}} config={config.codeBox || {}} classNames={classNames.codeBox || {}} />;
  });
};

export {
  HeaderOutput, ParagraphOutput, ImageOutput, VideoOutput, EmbedOutput, TableOutput, CodeBoxOutput, ListOutput, QuoteOutput,
  ChecklistOutput, WarningOutput, DelimiterOutput, Output as default
};
