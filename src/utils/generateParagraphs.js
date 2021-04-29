import Paragraphs from '../paragraphs.json';

const generateParagraphs = (num, book) => {
  let finalText = [];
  const allPars = Paragraphs.paragraphs;

  let pars;
  switch (book) {
    case 'Emma':
      pars = allPars.filter((par) => par.title === 'Emma');
      break;
    case 'Mansfield Park':
      pars = allPars.filter((par) => par.title === 'Mansfield Park');
      break;
    case 'Northanger Abbey':
      pars = allPars.filter((par) => par.title === 'Northanger Abbey');
      break;
    case 'Persuasion':
      pars = allPars.filter((par) => par.title === 'Persuasion');
      break;
    case 'Pride and Prejudice':
      pars = allPars.filter((par) => par.title === 'Pride and Prejudice');
      break;
    case 'Sense and Sensibility':
      pars = allPars.filter((par) => par.title === 'Sense and Sensibility');
      break;
    default:
      pars = allPars;
  }

  for (let i = 0; i < num; i++) {
    finalText.push(pars[Math.floor(Math.random() * (pars.length - 0) + 0)].text);
  }

  return finalText;
};

export default generateParagraphs;
