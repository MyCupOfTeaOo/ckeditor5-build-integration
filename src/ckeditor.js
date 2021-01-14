/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* eslint-disable */
// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import ListStyle from "@ckeditor/ckeditor5-list/src/listStyle";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontBackgroundColor";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";
import Preview from "./plugin/Preview";

class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Preview,
  RemoveFormat,
  Essentials,
  UploadAdapter,
  Autoformat,
  FontFamily,
  FontSize,
  FontColor,
  FontBackgroundColor,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  BlockQuote,
  Alignment,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  LinkImage,
  Indent,
  Link,
  List,
  ListStyle,
  TodoList,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TextTransformation,
  WordCount,
  HorizontalLine,
  CodeBlock,
  Code,
  Highlight,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "Preview",
      "|",
      "fontFamily",
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "highlight",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "removeFormat",
      "subscript",
      "superscript",
      "link",
      "bulletedList",
      "numberedList",
      "todoList",
      "|",
      "indent",
      "outdent",
      "alignment",
      "|",
      "HorizontalLine",
      "|",
      "code",
      "codeBlock",
      "blockQuote",
      "imageUpload",
      "mediaEmbed",
      "insertTable",
      "undo",
      "redo",
    ],
  },
  image: {
    styles: ["alignLeft", "alignCenter", "alignRight"],
    resizeOptions: [
      {
        name: "imageResize:original",
        value: null,
        icon: "original",
      },
      {
        name: "imageResize:50",
        value: "50",
        icon: "medium",
      },
      {
        name: "imageResize:75",
        value: "75",
        icon: "large",
      },
    ],
    toolbar: [
      "imageStyle:alignLeft",
      "imageStyle:alignCenter",
      "imageStyle:alignRight",
      "|",
      "imageResize:50",
      "imageResize:75",
      "imageResize:original",
      "|",
      "linkImage",
      "|",
      "imageTextAlternative",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "zh-cn",
};

export default ClassicEditor;
