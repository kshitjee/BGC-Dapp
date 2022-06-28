import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";

export default function BGCheckForm() {
  const submit = (data) => SendBGFormData(data);

  async function SendBGFormData(data) {
    console.log(data);
    // post request to store info 
    const response = await fetch("/api/storeBGInformation", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
  }
  
  
  const { register, control, handleSubmit, formState: { errors, isValid }} = useForm({
    // defaultValues: {}; pass in default value by querying database fro first and last name and email
  });

  const { fields, append, remove} = useFieldArray({
    control,
    name: "identity"
  });

  /** Group the person input fields in a component */
  // this is first page
  // need to figure out how to make it work by moving code to a seperate js file 

  // using react-hook-form need to register every input and final submit calls handleSubmit
  const PersonalFields = () => (
    <>
      <h3>Personal Information</h3>
      <br></br>
      <legend>Prefix</legend>
      <input {...register("prefix", {required : false})} type="text"/>
      <br/>
      <legend>Sufix</legend>
      <input {...register("sufix", {required : false})} type="text"/>
      <br/>
      <legend>Legal First Name</legend>
      <input {...register("first_name", {required : true})} type="text"/>
      <br/>
      <legend>Legal Middle Name</legend>
      <input {...register("middle_name", {required : false})} type="text"/>
      <br/>
      <legend>Legal Last Name</legend>
      <input {...register("last_name", {required : true})} type="text"/>
      <br/>
      <legend>Prefered First Name</legend>
      <input {...register("prefered_first_name", {required : true})} type="text"/>
      <br/>
      <legend>Prefered Last Name</legend>
      <input {...register("prefered_last_name", {required : true})} type="text"/>
      <br/>
      <legend>Email Adress</legend>
      <input {...register("email_adress", {required : true})} type="email"/>
      <br/>
      <legend>Phone Number</legend>
      <input {...register("phone", {required : true})} type="tel"/>
      <br/>
      <br/>
      <h3>Current Primary Adress</h3>
      <br/>
       {/*TODO: make this options instead of text */}
      <legend>Country</legend>
      <input {...register("country", {required : true})} type="text"/>
      <br/>
      <legend>State</legend>
      <input {...register("state", {required : true})} type="text"/>
      <br/>
      <legend>City</legend>
      <input {...register("city", {required : true})} type="text"/>
      <br/>
      <legend>Postal Code</legend>
      <input {...register("postal_code", {required : true})} type="number"/>
      <br/>
      <legend>Adress Line 1</legend>
      <input {...register("adress_1", {required : true})} type="text"/>
      <br/>
      <legend>Adress Line 2</legend>
      <input {...register("adress_2", {required : false})} type="text"/>
      <br/>
      <br/>
      <h3>Gender</h3>
      <br/>
      
      <select {...register("gender")} >
      <option value="M">Male</option>
      <option value="F">Female</option>
      <option value="O">Other</option>
      </select>
      <br/>
      <br/>

      <h3>Identification</h3>

       {/*This part is whats creating the dynamic form*/}

      {fields.map((item, index) => (
          <div key={item.id}>
            <legend>Date of Birth</legend>
            <input {...register(`identity.${index}.dob` , {required : true})} type="date" />
            <legend>Country</legend>
            <input {...register(`identity.${index}.country`, {required : true})} type="text" />
            <legend>National ID Type</legend>
            <input {...register(`identity.${index}.national_id_type`, {required : true})} type="text" />
            <legend>National ID</legend>
            <input {...register(`identity.${index}.national_id`, {required : true})} type="text" />
            <legend>Issue Date</legend>
            <input {...register(`identity.${index}.issue_date`, {required : false})} type="date" />
            <legend>Expiration Date</legend>
            <input {...register(`identity.${index}.expiration_date`, {required : false})} type="date" />
            <br/>
            <button type="button" onClick={() => remove(index)}>Delete</button>
          </div>
        ))}
      <button
        type="button"
        onClick={() => append({ })}
      >
        Add New Identifier
      </button>
      <br></br>
    </>
  );

  // TODO: got to complete this form nect copy dyanimc form code

  const Education = () => (
    <section>
      <h3>Education</h3>
      To do
    </section>
  );

  // TODO: same as education
  const Security = () => (
    <section>
      <h3>Criminal Background</h3>
      To do
    </section>
  );



  const rightArrow =
  "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345";
  const leftArrow =
  "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363";

 // this is the navigation buttons and submit
const Navigation = () => (
  <section>
    {step === fieldGroups.length - 1 && (
      <button type="submit" >
        SUBMIT
      </button>
    )}
    {step < fieldGroups.length - 1 && (
      <button
        type="button"
        onClick={() => {
          setStep(step + 1);
        }}
      >
        <img src={rightArrow} />
        NEXT
      </button>
    )}
    {step > 0 && (
      <button
        type="button"
        onClick={() => {
          setStep(step - 1);
        }}
      >
        <img src={leftArrow} />
        BACK
      </button>
    )}
  </section>
);

  // this is the useState that allows us to move page to page
  const [step, setStep] = useState(0);

  // html list renders according to which step we are on
  const fieldGroups = [<PersonalFields />, <Education />, <Security />];

  return (
    <>
    <form onSubmit={handleSubmit(submit)}>
    {fieldGroups[step]}
    <Navigation />
    </form>
    </>
  );
}
