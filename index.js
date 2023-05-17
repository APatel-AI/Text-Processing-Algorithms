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
// alternative solution:  const about = (topics) => (sentence) => isRelevant(topics, sentence)
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

    const  sentenceHolder = [];
    
    for (let i = 0; i < sentences.length; i++) {
      if (criteriaFn(sentences[i])) {
        sentenceHolder.push(sentences[i]);
      }
    }
    return sentenceHolder;
  }
  
  function aboutCats (sentence) {
    const keywords = ["cat", "kitten", "cats"];
    sentence.toLowerCase()
    for (let i = 0; i < keywords.length; i++) {
      if (sentence.includes(keywords[i])) {
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
(getRelevantSentences(aboutCats, sentences)); // ["I have a pet cat."]

(getRelevantSentences((s) => s.length > 17, sentences)); // ["I don't have a pet."]



function getLengthDistance(s1,s2){
  let difference = s1.length - s2.length
  return Math.abs(difference)

}

(getLengthDistance("goat", "whale"));//1
(getLengthDistance("goat", "boat")); // 0
(getLengthDistance("whale", "goat")) // 1




function getClosestInLength (words, word, limit){
  //calculate the difference between the length of each word in "Words" 

  // itrate through words array 
  for (let i = 0; i < words.length; i++){
    //array to store the differences in length
    differences = []
    let min = Math.min(differences)
    let initial = Math.abs(word.length - words[0].length)

    // calculate the difference in length among the words in array "words" and the string "word"
    words[i].length - word.length
    let difference = words[i].length - word.length

    // add the differences into the empty array "differences"
    differences.push(Math.abs(difference))

    ;
    if (min < initial && min <= limit)
     return words[min]
    
  }
  return word 

}

const words = ["hello", "bye", "goodbye"];
console.log(getClosestInLength(words, "hi", 3)); // "bye"
console.log(getClosestInLength(words, "hi", 0)); // "hi"
