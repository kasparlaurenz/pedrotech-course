import React, { useState, useEffect } from 'react';

const Text = () => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    console.log('Update');
  });
  useEffect(() => {
    console.log('DidMount');
  }, []);
  useEffect(() => {
    return () => {
      console.log('UnMount');
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
      />
      {text && <h1>{text}</h1>}
    </div>
  );
};

export default Text;
