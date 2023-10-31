import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    city: '',
    State: '',
    Zip: '',
    comments: false,
    offers: false,
    candidates: false,
  })

  function handleChange(event) {
    const { name, type, value, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checked' ? !checked : value,
    }))
    console.log(formData)
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname</label>
        <br></br>
        <input
          className="outline"
          type="text"
          placeholder="Enter your First Name"
          name="firstname"
          onChange={handleChange}
          value={formData.firstname}
        />
        <br></br>
        <label htmlFor="lastname">Lastname</label>
        <br></br>
        <input
          className="outline"
          type="text"
          placeholder="Enter your Last Name"
          name="lastname"
          onChange={handleChange}
          value={formData.lastname}
        />
        <br></br>
        <label htmlFor="email">email</label>
        <br></br>
        <input
          className="outline"
          type="email"
          placeholder="Enter your Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <br></br>
        <label htmlFor="Country">country</label>
        <br></br>
        <select
          className="outline"
          id="country"
          name="country"
          checked={formData.country}
          onChange={handleChange}
        >
          <option>india</option>
          <option>usa</option>
          <option>japan</option>
        </select>
        <br></br>
        <label htmlFor="City">City</label>
        <br></br>
        <input
          className="outline"
          type="text"
          placeholder="City"
          name="city"
          onChange={handleChange}
          checked={formData.city}
        />
        <br></br>
        <label htmlFor="State">State/Province</label>
        <br></br>
        <input
          className="outline"
          type="text"
          placeholder="1234 Main St"
          name="State"
          onChange={handleChange}
          value={formData.State}
        />
        <br></br>
        <label htmlFor="Zip">Zip / Province</label>
        <br></br>
        <input
          className="outline"
          type="number"
          placeholder="500062"
          name="Zip"
          onChange={handleChange}
          value={formData.Zip}
        />
        <br></br>
        <fieldset>
          <legend>By email</legend>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <input
                id="comments"
                type="checkbox"
                name="comments"
                onChange={handleChange}
                value={formData.comments}
              ></input>
              <div>
                <label htmlFor="candidates">candidates</label>
                <p>Get notified when someone comments on this job posting</p>
              </div>
            </div>
            <div className="flex flex-row">
              <input
                id="candidates"
                type="checkbox"
                name="candidates"
                checked={formData.candidates}
                onChange={handleChange}
              ></input>
              <div>
                <label htmlFor="comments">comments</label>
                <p>Get notified when someone comments on this job posting</p>
              </div>
            </div>
            <div className="flex flex-row">
              <input
                id="offers"
                type="checkbox"
                name="offers"
                checked={formData.offers}
                onChange={handleChange}
              ></input>
              <div>
                <label htmlFor="offers">offers</label>
                <p>Get notified when someone offers on this job posting</p>
              </div>
            </div>
          </div>
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
