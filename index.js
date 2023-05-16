// ------------------- isRelevant(topics, paragraph)--------------------------------------

function isRelevant(topics, paragraph) {
  //paragraph to lower case
  const lowerPar = paragraph.toLowerCase();

  //array 'topics' to lower case
  for (let i = 0; i < topics.length; i++) {
    const lowTopics = topics[i].toLowerCase();

    if (lowerPar.includes(lowTopics)) {
      return true;
    }
  }

  return false;
}

isRelevant(["cat", "kitten"], "The quick brown fox jumps over the lazy dog"); // false

isRelevant(["blue", "brown"], "The quick brown fox jumps over the lazy dog"); // true

// ------------------- ABOUT(TOPICS)--------------------------------------

function about(topics) {
  // takes in array
  return function (sentence) {
    const lowSentence = sentence.toLowerCase();
    for (let i = 0; i < topics.length; i++) {
      // convert array to lowercase
      const lowTopics = topics[i].toLowerCase();

      if (lowSentence.includes(lowTopics)) {
        return true;
      }
    }

    return false;
  };
}

// const aboutCats = about(["cat", "kitten", "cats"]);
// (aboutCats("The quick brown fox jumps over the lazy dog.")); // false
// (aboutCats("The quick brown cat jumps over the lazy dog.")); // true

//go through sentences array
// go through topics array
// if topics[i] matches sentence[i] return sentence

function getRelevantSentences(criteriaFn, sentences) {
  // takes function and array

  let sentenceHolder = []; // array holder

  for (let i = 0; i < sentences.length; i++) {
    // loop through sentences array
    if (criteriaFn(sentences[i])) {
      sentenceHolder.push(sentences[i]);
    }
    

  }  return sentenceHolder;

}
  const aboutCats =  (sentence) =>{
    // takes in array
    // return function (sentences) {
      const words = ["dog", "kitten", "cats"]
      let lowSentence = sentence.toLowerCase();

      for (let i = 0; i < words.length; i++) {
        // convert array to lowercase
        let lowTopics = words[i].toLowerCase();

        if (lowSentence.includes(lowTopics[i])) {
          return true;
        }
      }
      return false;
    };
  


const sentences = [
  "I have a pet cat.",
  "I have a pet dog.",
  "I don't have a pet.",
];
console.log(getRelevantSentences(aboutCats, sentences)); // ["I have a pet cat."]

console.log(getRelevantSentences((s) => s.length > 17, sentences)); // ["I don't have a pet."]
