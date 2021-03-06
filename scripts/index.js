init();

function init() {
  document.getElementById("word-generator").onclick = generate;
}

function generate() {
  let word = document.getElementById("word-input").value;
  let prefixes = ["Ɛ"].concat(getPrefixes(word));
  let suffixes = ["Ɛ"].concat(getSuffixes(word));
  let subwords = ["Ɛ"].concat(getSubwords(word));

  document.getElementById("prefix").innerText = "Prefixos: " + prefixes.join(", ");
  document.getElementById("suffix").innerText = "Sufixos: " + suffixes.join(", ");
  document.getElementById("subword").innerText = "Subpalavras: " + subwords.join(", ");
}

function getPrefixes(word) {
  let prefixes = [];
  let currentPrefix;
  for (let i = 0; i < word.length; i++) {
    currentPrefix = word.substring(0, i + 1);
    prefixes.push(currentPrefix);
  }
  return prefixes;
}

function getSuffixes(word) {
  let suffixes = [];
  let currentSuffix;
  for (let i = word.length; i--; i >= 0) {
    currentSuffix = word.substr(i);
    suffixes.push(currentSuffix);
  }
  return suffixes;
}

function getSubwords(word) {
  let subwords = [];
  let currentSubword = [];
  for (let length = 1; length <= word.length; length++) {
    for (let i = 0; i < word.length - length + 1; i++) {
      currentSubword = word.substr(i, length);
      if (!subwords.includes(currentSubword)) {
        subwords.push(currentSubword);
      }
    }
  }
  return subwords;
}