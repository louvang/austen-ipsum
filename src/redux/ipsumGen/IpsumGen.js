import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateText, selectText } from './ipsumGenSlice';
import copy from 'copy-text-to-clipboard';
import styles from './IpsumGen.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

export function IpsumGen() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();
  const [parCount, setParCount] = useState(8);
  const [title, setTitle] = useState('All');
  const [copyBtnText, setCopyBtnText] = useState('Copy');

  const handleCopy = () => {
    setCopyBtnText('Copied!');
    copy(text.join('\r\n'));
  };

  const handleGenBtnClick = () => {
    setCopyBtnText('Copy');
    dispatch(generateText({ parCount, title }));
  };

  return (
    <div className="ipsumGen">
      <div className={styles.genOptions}>
        <div className={styles.optionRow}>
          <label htmlFor="parcount" className={styles.optionLabel}>
            Paragraphs:
          </label>
          <input
            name="parcount"
            type="number"
            className={styles.parCount}
            value={parCount}
            onChange={(e) => setParCount(e.target.value)}
          />

          <label htmlFor="book" className={styles.optionLabel}>
            Book:
          </label>
          <select
            name="book"
            className={styles.bookDropdown}
            id="book"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="All">All Books</option>
            <option value="Emma">Emma</option>
            <option value="Mansfield Park">Mansfield Park</option>
            <option value="Northanger Abbey">Northanger Abbey</option>
            <option value="Persuasion">Persuasion</option>
            <option value="Pride and Prejudice">Pride and Prejudice</option>
            <option value="Sense and Sensibility">Sense and Sensibility</option>
          </select>

          <button onClick={handleGenBtnClick} className={styles.genBtn}>
            Generate
          </button>
        </div>
      </div>

      <div className={styles.ipsumText}>
        <div className={styles.copyRow}>
          <button onClick={handleCopy} className={styles.copyBtn}>
            <FontAwesomeIcon icon={faCopy} />
            <span>{copyBtnText}</span>
          </button>
        </div>
        <div className={styles.genText} id="generatedText">
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
