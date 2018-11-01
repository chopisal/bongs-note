import React from "react";
import styled from "styled-components";
import MarkdownRenderer from "react-markdown-renderer";
import TextareaAutosize from "react-textarea-autosize";

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    font-weight: 600;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Button = styled.button``;

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || "",
      content: props.content || "",
      id: props.id || null
    };
  }
  render() {
    const { title, content } = this.state;
    return (
      <>
        <TitleContainer>
          <TitleInput
            value={title}
            onChange={this._onInputChange}
            placeholder={"Untitled..."}
            name={"title"}
          />
          <Button onClick={this._onSave}>Save</Button>
        </TitleContainer>
      </>
    );
  }
}
