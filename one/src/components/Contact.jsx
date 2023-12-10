import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact US</h1>
            <form>
                <div>
                    <label htmlFor='name'>Enter Name</label>
                    <input type="text" id='name' required placeholder="Enter Name"/>
                </div>
                <div>
                    <label htmlFor='name'>Enter Name</label>
                    <input type="email" id='name' required placeholder="Enter Email"/>
                </div>
                <div>
                    <label htmlFor='name'>Enter Name</label>
                    <input type="text" id='name' required placeholder="Tell us about your query"/>
                </div>
            <button type='submit'>Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact