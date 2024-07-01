import React, { useState } from 'react';

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }, () => {
      console.error('Failed to copy text to clipboard');
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', padding: '5px' }}>
      <input 
        type="text" 
        value={text} 
        readOnly 
        style={{ marginRight: '10px', flexGrow: 1, border: 'none', outline: 'none', background: 'transparent' }}
      />
      <button 
        onClick={handleCopy} 
        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
        aria-label="Copy to clipboard"
      >
        {copied ? 'Copied!' : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24"
            fill="#000"
          >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M16 1H4c-1.1 0-2 .9-2 2v16h2V3h12V1zm-1 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h8v14z"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default CopyToClipboard;
