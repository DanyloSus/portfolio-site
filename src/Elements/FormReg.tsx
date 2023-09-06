import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";

const FormReg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }
    if (username == "") {
      setUsernameError(true);
    }

    if (email && password && username) {
      console.log("POST");
      fetch("https://wyn70xjevv.loclx.io/auth/reg_users", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });
    }
  };

  const textfieldStyling = {
    "& label": {
      color: "white",
      "&.Mui-focused": {
        color: "white",
        fontWeight: "700",
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& MuiInputBase-input": {
      color: "white",
    },
  };

  return (
    <div className="w-screen h-[calc(100vh-56px)] bg-bg-body px-11 md:px-5 flex items-center justify-center py-11">
      <div className="max-w-[60%] w-full h-full object-cover md:h-[70%] md:object-cover md:max-w-full md:w-full bg-bg-elements">
        <form onSubmit={handleSubmit} className="h-full">
          <FormControl className="flex items-center justify-center h-full text-white gap-5 px-5">
            <h2 className="text-3xl md:text-2xl">Registration</h2>
            <TextField
              label="Username"
              value={username}
              error={usernameError}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={textfieldStyling}
              type="text"
              className="w-full bg-[#5c5c5c] border border-[#555658] shadow-xl text-white font-bold"
            />
            <TextField
              label="Email"
              value={email}
              error={emailError}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#eceeea] border border-[#555658] shadow-xl text-bg-elements font-bold"
              sx={textfieldStyling}
              type="email"
            />
            <TextField
              label="Password"
              value={password}
              error={passwordError}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#eceeea] border border-[#555658] shadow-xl text-bg-elements font-bold"
              sx={textfieldStyling}
              type="password"
            />
            <Button
              className="w-[96px] h-7 bg-[#eceeea] border border-[#555658] shadow-xl text-bg-elements font-bold rounded-none"
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default FormReg;
