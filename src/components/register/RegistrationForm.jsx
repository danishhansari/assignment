import Input from "../Input";
import { registerAtom } from "../../states/atom";
import { useRecoilState } from "recoil";
import { z } from "zod";
import { useState } from "react";
import { MdOutlineError } from "react-icons/md";

const RegistrationForm = () => {
  const [register, setRegister] = useRecoilState(registerAtom);
  const [error, setError] = useState(false);

  const handleNameChange = (e) => {
    setRegister((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleEmailChange = (e) => {
    setRegister((prev) => ({ ...prev, email: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const emailSchema = z.string().email();

    const form = new FormData(registerForm);
    const formData = {};
    for (const [key, value] of form.entries()) {
      formData[key] = value;
    }
    try {
      const email = emailSchema.parse(formData.email);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="max-w-[800] mx-auto p-4 columnFlex">
      <h2 className="headingCursive">Registration Form</h2>

      <h1 className="text-3xl md:text-5xl font-semibold md:font-medium text-center w-full md:w-2/3">
        Start your success Journey here!
      </h1>

      <form className="mt-12 md:mt-16 w-full" id="registerForm">
        <div className="columnFlex">
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            defaultValue={register.name}
            onchange={handleNameChange}
          />
          <Input
            type="email"
            name="email"
            className="mt-4"
            placeholder="Enter your email"
            defaultValue={register.email}
            onchange={handleEmailChange}
          />
          {error && (
            <p className="text-red-500 font-semibold mt-2">
              <MdOutlineError className="inline-block mr-1" />
              Enter a valid email address
            </p>
          )}
          <button
            className="formBtn"
            disabled={!register.name || !register.email}
            type="submit"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
