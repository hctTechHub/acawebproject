
import {Editor} from "@tinymce/tinymce-react"
const TextEditor = ({onContentChange,content}) => {

        return(
             <Editor
      apiKey='fwxm1fnss3fjygfipprqslq3yurzp0s9cetsc87vy8xydnjy'
      onEditorChange={(content) => onContentChange(content)}
      init={{
        plugins: [
          // Core editing features
           'searchreplace', 'autolink', 'directionality', 'code', 'visualblocks', 'visualchars', 'image', 'link', 'media',  'codesample', 'table', 'charmap', 'pagebreak', 'nonbreaking', 'anchor', 'insertdatetime', 'advlist', 'lists', 'wordcount', 'help','charmap', 'linkchecker', 'emoticons','autosave',
           ],
        toolbar: 'undo redo |forecolor backcolor | tinymceai-chat tinymceai-quickactions tinymceai-review | blocks styles fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
            style_formats: [
      {
        title: "Custom Heading 1",
        block: "h2",
        classes: "custom-heading",
        styles: {
          textAlign: "center",
          padding: "20px",
          backgroundColor: "brown",
          color:"#fff"
        }
      }
    ],

    setup: (editor) => {
      editor.on("BeforeExecCommand", (event) => {

        if (
          event.command !== "BackColor" &&
          event.command !== "HiliteColor"
        ) {
          return;
        }

        const node = editor.selection.getNode();

        const heading = editor.dom.getParent(
          node,
          "h1,h2,h3,h4,h5,h6"
        );

        if (
          !heading ||
          !editor.dom.hasClass(heading, "custom-heading")
        ) {
          return;
        }

        let color = event.value;

        if (typeof color === "object" && color !== null) {
          color = color.value || color.color;
        }

        if (!color) {
          return;
        }

        event.preventDefault();

        editor.dom.setStyle(
          heading,
          "background-color",
          color
        );

        editor.nodeChanged();
      });
    },

        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        tinymceai_token_provider: async () => {
          await fetch(`https://demo.api.tiny.cloud/1/fwxm1fnss3fjygfipprqslq3yurzp0s9cetsc87vy8xydnjy/auth/random`, { method: "POST", credentials: "include" });
          return { token: await fetch(`https://demo.api.tiny.cloud/1/fwxm1fnss3fjygfipprqslq3yurzp0s9cetsc87vy8xydnjy/jwt/tinymceai`, { credentials: "include" }).then(r => r.text()) };
        },
        uploadcare_public_key: 'a16d65ec68970c96c84d',
      }}
    value={content || ""}
    />
        )
    
}

export default TextEditor