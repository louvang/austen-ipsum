import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
    <div className="container">
      <Header />
      <h1>About</h1>
      <div class="content-container">
        <div class="content">
          <h2>The Site</h2>
          <p>
            Austen Ipsum Generator allows designers and developers to use placeholder text taken from the many works of
            Jane Austen. Traditionally, 'Lorem Ipsum' text is used as placeholder content. However, as a developer and
            designer myself, I find 'Lorem Ipsum' paragraphs to be quite long and exhaustive. I created Austen Ipsum to
            pull must more 'realistic' sentences as placeholder text for any ongoing projects.
          </p>

          <p>
            Now, when I say 'realistic', I mean in the sense of actual sentences that use words of varying lengths. Of
            course, there are several ipsum generators out there. But if an ipsum generator only returns a series of
            words that are always 6 or more letters, does that really mimic the true structure of an English sentence?
          </p>

          <p>
            My countenence resolved upon English literature and something of public domain. I concluded on Jane Austen's
            work primarily for my affinity of regency film and television and the several alternative spins of these
            classics.
          </p>

          <p>
            However, as one can imagine, many of Jane Austen's paragraphs can be quite long and exhaustive too. In this
            generator, only paragraphs that are less then 500 characters are generated to reflect the average paragraph
            length of today's Internet articles and blogs.
          </p>

          <h2>Jane Austen</h2>
          <p>
            Jane Austen's most prolific work is none other than PRIDE AND PREJUDICE. The classic features an Elizabeth
            Bennet and the romance of her and her sisters around several distinguished (and not so distinguished)
            English men. PRIDE AND PREJUDICE is known as the first 'love-hate' romance trope. Mr. Darcy is the reknowned
            'brooding yet wealthy' romantic love interest that several characters are (tirelessly) modelled after.
          </p>

          <p>
            Austen's work is so revered (and of public domain), that there are several spin-offs and retellings of her
            work. There's a zombie apocalypse version of PRIDE AND PREJUDICE (originally a book, also adapted as film).
            Also inspired by PRIDE AND PREJUDICE is the classic British romantic comedy, BRIDGET JONES' DIARY. The
            infamous film and TV series, CLUELESS, is modelled after Austen's EMMA. Not to mention the plethora of BBC
            mini-dramas crafted after Austen's work.
          </p>

          <p>
            It is no wonder that regency period dramas are a niche well-loved by the generations. Austen has contributed
            to the creative arts with her wondrous realm of modest, windswept romance in historical times where
            gentlemen are honored and women are independent in their own right.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
