import { useForm } from "react-hook-form";
import { useState } from "react";

// dynamically routed page for candidates to fill up details
export default function BackgroudCheckPage(props) {
  const onSubmit = (data) => SendBGFormData(data);

  async function SendBGFormData(data) {
    console.log(data);
    // post request
    fetch("/api/handleBGForm", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  /** Input field component */
  const Input = ({ label, required, type }) => (
    <div>
      <legend>{label}</legend>

      <input {...register(label, { required })} type={type} />
      {errors[label] && <span>mandatory</span>}
    </div>
  );

  /** Group the person input fields in a component */
  const PersonalFields = () => (
    <>
      <section>
        <h3>Personal information</h3>
        <br></br>
        <Input label="Prefix" type="text" />
        <Input label="Sufix" type="text" />
        <Input label="Legal First Name" required type="text" />
        <Input label="Legal Middle Name" type="text" />
        <Input label="Legal Last Name" required type="text" />
        <Input label="Prefered First Name" required type="text" />
        <Input label="Prefered Last Name" required type="text" />
        <Input label="Email Adress" required type="email" />
        <Input label="Phone Number" required type="tel" />
      </section>
      <br></br>
      <section>
        <h3>Current Primary Adress</h3>
        <Input label="Country" required type="text" />
        <Input label="State" type="text" />
        <Input label="City" required type="text" />
        <Input label="Postal Code" required type="text" />
        <Input label="Adress Line 1" required type="text" />
        <Input label="Adress Line 2" type="email" />
      </section>
      <br></br>
      <section>
        <h3>Gender</h3>
        {/*make this options instead of text */}

        <Input label="Gender" required type="text"></Input>
      </section>

      {/*Add angular code here to add identification method ie social security number/ passport number*/}
    </>
  );

  /** Group the contact input fields in a component */
  const Education = () => (
    <section>
      <h3>Education</h3>
      To do
    </section>
  );

  /** Group the address input fields in a component */
  const Security = () => (
    <section>
      <h3>Criminal Background</h3>
      To do
    </section>
  );

  /** Nnavigation between steps */
  const rightArrow =
    "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345";
  const leftArrow =
    "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363";

  const Navigation = () => (
    <section>
      {step === fieldGroups.length - 1 && (
        <button type="submit" disabled={!isValid}>
          SUBMIT
        </button>
      )}
      {step < fieldGroups.length - 1 && (
        <button
          type="button"
          disabled={!isValid}
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

  const [step, setStep] = useState(0);

  const fieldGroups = [<PersonalFields />, <Education />, <Security />];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Welcome {props.name}</h1>
        <h2>User Backgrouch Check Form</h2>
        {fieldGroups[step]}
        <Navigation />
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  // MORALIS INIT
  const Moralis = require("moralis/node");
  const serverUrl = "https://kbuw5v7jxsxa.usemoralis.com:2053/server";
  const appId = "eWgF6hJUPK14XZCfttLTsYw4yxITR3If5CLfFctR";
  const masterKey = "r8y7zATiNFbpsCML1L5ES961mrJqwlaAV1D4C3hH";
  await Moralis.start({ serverUrl, appId, masterKey });

  const { index } = context.query;
  const candidateEmailInfo = Moralis.Object.extend("CandidateEmailInfo");
  const query = new Moralis.Query(candidateEmailInfo);
  query.equalTo("UUID", index);
  const candidate = await query.first({ useMasterKey: true });
  console.log(candidate.get("Name"));

  return {
    props: {
      name: candidate.get("Name"),
    },
  };
}
