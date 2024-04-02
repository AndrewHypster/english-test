const [text, words, first_button] = document.querySelector('.first_form')
const form1 = text.form

const replaceWordsWithBlanks = (sentence, ...wordsToRemove) => {
  const words = []
  const text = sentence.split(/\b/).map(word => {
  if(wordsToRemove.includes(word.toLowerCase())) {
    words.push(word)
    return '<input class="imput_word"></input>'
  } else {
    return word
  }
  }).join('')
  return {
    text: text,
    words: words
  }
  }
    
first_button.addEventListener('click', () => {
  const words_replace = replaceWordsWithBlanks(text.value, ...words.value.split(' ')).words
  form1.style = 'display: none;'

  const test = document.querySelector('.test')

  test.style = 'display: block;'
  test.innerHTML =  `<p>${replaceWordsWithBlanks(text.value, ...words.value.split(' ')).text}</p>` + test.innerHTML

  const [test_items, test_btn] = [[...[...document.querySelector('.test').children][0].children], [...document.querySelector('.test').children][1]]

  test_btn.addEventListener('click', () => {
    const result = []
    const items = test_items.map(e => e.value);
    items.forEach((e,i) => {
      result.push(e === words_replace[i])
    })

    test_items.forEach((e,i) => {
      result[i]?
        e.style = 'background: green;'
      :
        e.style = 'background: red;'
    })
  })

})