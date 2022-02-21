import { useRef } from 'react'
import { stringify } from 'querystring'

function HomePage() {
  const emailInputRef = useRef()
  const feedBackInputRef = useRef()
  function submitHandler(e) {
    e.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredFeedBack = feedBackInputRef.current.value

    const reqBody = { email: enteredEmail, text: enteredFeedBack }
//7
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedBackInputRef}></textarea>
        </div>
        <button onClick={submitHandler}>Submit Feedback</button>
      </form>
    </div>
  )
}

export default HomePage
