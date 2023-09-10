import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder='Abc' />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" required placeholder='abc@gmail.com' />
                </div>

                <div>
                    <label  id='message' htmlFor="">Msg:</label>
                    <input type="text" required placeholder='Tell us about your query...' />
                </div>

                <button type='submit'>submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact