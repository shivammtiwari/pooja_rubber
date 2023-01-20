import React from 'react'
import './form.css'

const Form = () => {
  return (
    <>
    <div className="FormWrapper">
      <h3 style={{textAlign:"center",}}>Inquery Now</h3>
    <form>
        <ul>
            <li>
                <label for="name"><span>Name <span class="required-star">*</span></span></label>
                <input type="text" id="name" name="user_name"/>
            </li>
            <li>
                <label for="mail"><span>Phone <span class="required-star">*</span></span></label>
                <input type="email" id="mail" name="user_email"/>
            </li>
            <li>
                <label for="mail"><span>Email <span class="required-star">*</span></span></label>
                <input type="email" id="mail" name="user_email"/>
            </li>
            <li>
                <label for="msg"><span>Message</span></label>
                <textarea rows="2" cols="40"></textarea>
            </li>
            <li>
                <input type="submit"/>
            </li>
        </ul>
    </form>
</div>

    </>
  )
}

export default Form