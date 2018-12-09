import React, { createRef, useRef } from "react";

class CallbackRefExample extends React.Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          alert(this.inputRef.value);
        }}
      >
        <input
          type="text"
          defaultValue="callback"
          ref={input => {
            this.inputRef = input;
          }}
        />
        <button>Submit</button>
      </form>
    );
  }
}

class CreateRefExample extends React.Component {
  inputRef = createRef();

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          alert(this.inputRef.current.value);
        }}
      >
        <input ref={this.inputRef} type="text" defaultValue="createRef" />
        <button>Submit</button>
      </form>
    );
  }
}

function UseRefExample() {
  const inputRef = useRef();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        alert(inputRef.current.value);
      }}
    >
      <input ref={inputRef} type="text" defaultValue="useRef" />
      <button>Submit</button>
    </form>
  );
}

export default function App() {
  return (
    <div>
      <CallbackRefExample />
      <CreateRefExample />
      <UseRefExample />
    </div>
  );
}
