import { useState, useEffect } from "react";
import "./feedback.css";

function Feedback() {
  const initialValues = { salutation:"", fname:"", mname:"", lname:"", review:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [comment, setComment] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormValues({ salutation:"", fname:"", mname:"", lname:"", review:"" });
    setFormErrors({});
    setIsSubmit(false);
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const newComment = {salutation:formValues.salutation,fname:formValues.fname,mname:formValues.mname,lname:formValues.lname,review:formValues.review};
      setComment([...comment,newComment])
      setFormValues({ salutation:"", fname:"", mname:"", lname:"", review:"" });
      setIsSubmit(false);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if(!(values.salutation==="Mr." || values.salutation==="Mrs.")){
      errors.salutation="Select Appropriate Salutation!"
    }
    if (!values.fname) {
      errors.fname = "First Name is required!";
    }
    if(values.salutation==="Mr." && values.lname===""){
      errors.lname="Last Name is required!";
    }
    if (!values.review) {
      errors.review = "Comment is required!";
    } 
    return errors;
  };

  return (
    <>
    <div className="mainView">
      
      <form >
        <h1>Feedback Form</h1>
        <hr /><br />
        
        <div className="form">
          
        <select name="salutation" value={formValues.salutation} onChange={handleChange}>
            <option>select</option>
                <option>Mr.</option>
                <option>Mrs.</option>
        </select><br />
        <p className="errorshow">{formErrors.salutation}</p>
            <label>First Name</label><br />
            <input
              type="text"
              name="fname"
              value={formValues.fname}
              onChange={handleChange}
            /><br />
          
          <p className="errorshow">{formErrors.fname}</p>
          
            <label>Middle Name</label><br />
            <input
              type="text"
              name="mname"
              
              value={formValues.mname}
              onChange={handleChange}
            /><br />
            <label>Last Name</label><br />
            <input
              type="text"
              name="lname"
              
              value={formValues.lname}
              onChange={handleChange}
            /><br />
            <p className="errorshow">{formErrors.lname}</p>

          <label>Comment</label><br />
          <textarea name="review" id="review" cols="30" rows="3" value={formValues.review} onChange={handleChange}></textarea>
          <br /><p className="errorshow">{formErrors.review}</p>

          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleReset}>Reset</button>
          
        </div>
      </form>
      <div className="comments">
        <h2 className="topcomments">Top Reviews...</h2>
        <div className="comment">
          <h3 className="commentheading">Mr. Sudhanshu Meena says ,</h3>
          <hr />
          <p className="commentdiscription">Amazing!!</p>
        </div>
        {
          
          comment.map((comment) =>
          <div className="comment">
         <h3 className="commentheading">{comment.salutation + " " + comment.fname + " " + comment.mname + " " + comment.lname + " " + "Says , "}</h3>
         <hr />
         <p className="commentdiscription">{comment.review}</p>
         </div>
          )
       }
      </div>
    </div>
    </>
  );
}

export default Feedback;
