import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UploadButton = props => {
  let fileReader;

  const handlefileRead = () => {
    const file = JSON.parse(fileReader.result);

    if (file.following) {
      props.handleChange(Object.values(file));
    } else if (file.groups_joined) {
      props.handleStories(Object.values(file));
    }
  };

  const handleFileChosen = file => {
    fileReader = new FileReader();
    fileReader.onloadend = handlefileRead;
    fileReader.readAsText(file);
  };

  return (
    <UploadButtonWrapper>
      <input
        type="file"
        id="file"
        accept=".json"
        onChange={e => handleFileChosen(e.target.files[0])}
      />
      <label htmlFor="file">Choose a file</label>
    </UploadButtonWrapper>
  );
};

const UploadButtonWrapper = styled.div`
  height: 20vh;
  padding: 1%;
  display: grid;
  justify-content: center;
  align-content: center;
  margin-top: 30vh;
  color: whitesmoke;
  & > input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  & input + label {
    flex: 1 1 auto;
    margin: 10px;
    padding: 20px;
    border: 2px solid #f7f7f7;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    transition: 0.3s;
    cursor: pointer;
  }
  & > label:hover {
    color: rgb(97, 97, 97);
  }
`;

UploadButton.propTypes = {
  handleChange: PropTypes.func,
  handleStories: PropTypes.func
};

export default UploadButton;
