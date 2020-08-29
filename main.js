// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.querySelector('#modal')
modal.className = 'hidden'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("click", (e) => {

    if (e.target.closest('.like-glyph')){
      console.log("Heart Clicked!")
      
      //like is red, make clear else make red
      if (e.target.classList[1] === 'activated-heart'){
        e.target.innerText = EMPTY_HEART
        e.target.classList.remove('activated-heart')
      } else {
          mimicServerCall()
          .then(res => {
            //make the heart red
            e.target.innerText = FULL_HEART
            e.target.classList.add('activated-heart')
          })
          .catch((error) => {
            modal.style.visibility = 'visible'
            setTimeout(function(){
              modal.style.visibility = 'hidden'
            }, 5000)
          })
      }
    }
  })

  

})





//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
