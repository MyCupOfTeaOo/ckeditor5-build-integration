import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import plainTextToHtml from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';

class Format extends Plugin {
  init() {
    const editor = this.editor;
    const editingView = editor.editing.view;
    editingView.document.on("clipboardInput", (evt, data) => {
      if (editor.isReadOnly) {
        return;
      }
      const dataTransfer = data.dataTransfer;
      let content = plainTextToHtml( dataTransfer.getData( 'text/plain' ) );
      data.content = editor.data.htmlProcessor.toView( content );
                  
      editingView.scrollToTheSelection();
    });
  }
}

export default Format;
