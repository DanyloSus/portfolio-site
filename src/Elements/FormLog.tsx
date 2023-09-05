import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";

const FormLog = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setPasswordError(false);

    if (password == "") {
      setPasswordError(true);
    }
    if (username == "") {
      setUsernameError(true);
    }
  };

  const textfieldStyling = {
    "& label": {
      color: "gray",
      "&.Mui-focused": {
        color: "gray",
        fontWeight: "700",
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
    },
  };

  return (
    <div className="w-screen h-[calc(100vh-56px)] bg-bg-body px-11 md:px-5 flex items-center justify-center py-11">
      <div className="max-w-[60%] w-full h-full object-cover md:h-[70%] md:object-cover md:max-w-full md:w-full bg-bg-elements">
        <form onSubmit={handleSubmit} className="h-full">
          <FormControl className="flex items-center justify-center h-full text-white gap-5 px-5">
            <h2 className="text-3xl md:text-2xl">Login</h2>
            <TextField
              label="Username"
              value={username}
              error={usernameError}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={textfieldStyling}
              type="text"
              className="w-full bg-[#eceeea] border border-[#555658] shadow-xl text-bg-elements font-bold"
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

export default FormLog;