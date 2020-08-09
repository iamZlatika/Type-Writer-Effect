// const TypeWriter = function (txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false
// }


// TypeWriter.prototype.type = function () {
//   //get current index of word
//   const current = this.wordIndex % this.words.length;
//   //get full text of current word
//   const fullTxt = this.words[current];
//   //Check if deliteng
//   if (this.isDeleting) {
//     // Remove a char
//     this.txt = fullTxt.substring(0, this.txt.length - 1)
//   } else {
//     //add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1)
//   }
//   //Insert txt into el
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   //Init Type Speed
//   let typeSpeed = 300;
//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }
//   // Check if word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     //pause at the end
//     typeSpeed = this.wait;
//     //set delete to true
//     this.isDeleting = true
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     //move to next word
//     this.wordIndex++;

//     //pause before start typing
//     typeSpeed = 500
//   }

//   setTimeout(() => this.type(), typeSpeed)
// }



// document.addEventListener('DOMContentLoaded', init);

// function init() {
//   const txtElement = document.querySelector('.txt-type');
//   const words = JSON.parse(txtElement.getAttribute('data-words'));
//   const wait = txtElement.getAttribute('data-wait');

//   new TypeWriter(txtElement, words, wait)
// }

class TypeWriter {
  constructor(txtElement, words, wait = 300) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false
  }
  type() {
    //get current index of word
    const current = this.wordIndex % this.words.length;
    //get full text of current word
    const fullTxt = this.words[current];
    //Check if deliteng
    if (this.isDeleting) {
      // Remove a char
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      //add char
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    //Insert txt into el
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Init Type Speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    // Check if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //pause at the end
      typeSpeed = this.wait;
      //set delete to true
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      //move to next word
      this.wordIndex++;

      //pause before start typing
      typeSpeed = 500
    }

    setTimeout(() => this.type(), typeSpeed)
  }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new TypeWriter(txtElement, words, wait)
}
