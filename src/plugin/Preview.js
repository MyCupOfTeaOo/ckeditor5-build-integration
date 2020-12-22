import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import eyeIcon from "../icons/eye.svg";
import "./Preview.css";

class Preview extends Plugin {
  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add("preview", (locale) => {
      const view = new ButtonView(locale);
      view.set({
        label: "预览",
        icon: eyeIcon,
        tooltip: true,
      });

      // Callback executed once the image is clicked.
      view.on("execute", () => {
        const root = document.createElement("div");
        const mask = document.createElement("div");
        const body = document.createElement("div");
        const content = document.createElement("div");
        const close = document.createElement("div");
        root.className = "ck-editor-plugin-preview";
        mask.className = "ck-editor-plugin-preview-mask";
        body.className = "ck-editor-plugin-preview-body";
        close.className = "ck-editor-plugin-preview-close";
        close.innerHTML = "x";
        close.onclick = function () {
          root.onclick = () => void 0;
          root.classList.add("ck-editor-plugin-preview-leave");
          setTimeout(() => {
            root.remove();
            document.body.classList.remove("ck-editor-plugin-preview-effect");
          }, 300);
        };
        content.className = "ck-content";
        content.innerHTML = this.editor.getData();
        root.appendChild(mask);
        root.appendChild(body);
        body.appendChild(close);
        body.appendChild(content);
        document.body.classList.add("ck-editor-plugin-preview-effect");
        document.body.appendChild(root);
      });

      return view;
    });
  }
}

export default Preview;
