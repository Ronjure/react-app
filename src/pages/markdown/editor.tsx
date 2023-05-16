import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/zh-cn'
import React from 'react'
import { connect } from 'react-redux';

const tips = '***这是一个markdown编辑器***\n可以直接在框内输入，也可以从左侧区域导入本地文件\n每次导入都会直接覆盖输入框内已有的全部内容'

class MarkdownEditorComponent extends React.Component {
  el = React.createRef<HTMLDivElement>()
  editorInstance

  componentDidMount(): void {
    this.editorInstance = new Editor({
      el: this.el.current!,
      initialEditType: 'markdown',
      initialValue: (this.props as any).content || tips,
      language: 'zh-CN',
      hideModeSwitch: true,
      height: 'auto',
      events: {
        focus: () => {
          if (this.editorInstance.getMarkdown() === tips) {
            this.editorInstance.setMarkdown('')
          }
        },
      },
      autofocus: false,
    })
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    this.editorInstance.setMarkdown((this.props as any).content)
  }

  render(): React.ReactNode {
    return (
      <div style={{backgroundColor: '#fff'}} ref={this.el}></div>
    )
  }
}

const MarkdownEditor = connect((state: { mdEditor: { content: string } }) => {
  return state.mdEditor
})(MarkdownEditorComponent)

export default MarkdownEditor
