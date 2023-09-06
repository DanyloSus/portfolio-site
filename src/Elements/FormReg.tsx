import { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";

const FormReg = () => {
  const [data, setData] =
    useState<{ email: string; password: string; username: string }[]>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameTextError, setUsernameTextError] = useState("");
  const [emailTextError, setEmailTextError] = useState("");
  const [passwordTextError, setPasswordTextError] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);
    setUsernameError(false);

    const checkEmail = (email: string) => {
      if (data) {
        return data.findIndex((user) => user.email === email) > -1;
      }
    };
    const checkUsername = (username: string) => {
      if (data) {
        return data.findIndex((user) => user.username === username) > -1;
      }
    };

    if (email == "") {
      setEmailError(true);
      setEmailTextError("Enter email");
    } else if (checkEmail(email)) {
      setEmailError(true);
      setEmailTextError("Email is already registed");
    }
    if (password == "") {
      setPasswordError(true);
      setPasswordTextError("Enter password");
    }
    if (username == "") {
      setUsernameError(true);
      setUsernameTextError("Enter username");
    } else if (checkUsername(username)) {
      setUsernameError(true);
      setUsernameTextError("Username is already registered");
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

  useEffect(() => {
    getRegData();
  }, []);

  const getRegData = async () => {
    fetch("https://wyn70xjevv.loclx.io/auth/get_users")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  };

  const textfieldStyling = {
    "&": {
      borderColor: "white",
    },
    "& label": {
      color: "white",
      "&.Mui-focused": {
        color: "white",
        fontWeight: "700",
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      borderRadius: "12px",
      color: "white",
    },
    "& fieldset": {
      borderRadius: "12px",
      borderColor: "white",
    },
    "& > div > input": {
      color: "white",
      fill: "white",
      background: "#5c5c5c",
      borderRadius: "12px",
      boxShadow: "0px 10px 100px 0px rgba(0,0,0,0.3)",
    },
    "& p": {
      color: "white",
      marginBottom: "2px",
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
              helperText={usernameTextError}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={textfieldStyling}
              type="text"
              className="w-full"
            />
            <TextField
              label="Email"
              value={email}
              error={emailError}
              helperText={emailTextError}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
              sx={textfieldStyling}
              type="email"
            />
            <TextField
              label="Password"
              value={password}
              error={passwordError}
              helperText={passwordTextError}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
              sx={textfieldStyling}
              type="password"
            />
            <Button
              className="go-button text-white rounded-xl border-2 border-[#5c5c5c] text-xl"
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
