import React from "react";

function CharacterCounter() {
  const [text, setText] = useState("");
  return (
    <div>
      <textarea />
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;
