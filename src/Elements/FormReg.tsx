import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const FormReg = () => {
  const dispatch = useDispatch();

  const useOnReg = (username: string) => {
    dispatch(login({ username }));
    window.location.href = "/";
  };

  const [data, setData] = useState<{ detail: string }>({ detail: "" });

  const [isCheck, setIsCheck] = useState(false);

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

    setEmailTextError("");
    setPasswordTextError("");
    setUsernameTextError("");

    if (email == "") {
      setEmailError(true);
      setEmailTextError("Enter email");
    }
    if (password == "") {
      setPasswordError(true);
      setPasswordTextError("Enter password");
    } else if (password.length < 8) {
      setPasswordError(true);
      setPasswordTextError("Enter a longer password");
    }
    if (username == "") {
      setUsernameError(true);
      setUsernameTextError("Enter username");
    }
    if (data?.detail) {
      setUsernameError(true);
      setEmailError(true);
      setUsernameTextError("User is already exist");
    }

    if (
      !usernameError &&
      !passwordError &&
      !emailError &&
      password.length >= 8
    ) {
      console.log(usernameError, passwordError, emailError);
      setIsCheck(true);
      fetch("https://portfolio-site-378x.onrender.com/auth/reg_users", {
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
      })
        .then((response) => response.json())
        .then((data) => {
          if (data === null) {
            useOnReg(username);
            console.log("null");
          } else {
            setData(data);
          }
          console.log(data);
        })
        .finally(() => {
          console.log(data);
          setIsCheck(false);
        });
    }
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
      <div className="max-w-[60%] w-full h-full object-cover md:h-[90%] md:object-cover md:max-w-full md:w-full bg-bg-elements overflow-y-auto">
        {isCheck ? (
          <div className="flex h-full w-full items-center justify-center">
            <img src="./load.gif" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="h-full">
            <FormControl className="flex items-center justify-center h-full text-white gap-5 px-5">
              <h2 className="text-3xl md:text-2xl">Registration</h2>
              <TextField
                label="Username"
                value={username}
                error={data.detail ? true : usernameError ? true : false}
                helperText={usernameTextError}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError(false);
                  setUsernameTextError("");
                  setData({ detail: "" });
                }}
                required
                sx={textfieldStyling}
                type="text"
                className="w-full"
              />
              <TextField
                label="Email"
                value={email}
                error={data.detail ? true : emailError ? true : false}
                helperText={emailTextError}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                  setData({ detail: "" });
                  setEmailTextError("");
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                  setPasswordTextError("");
                  setData({ detail: "" });
                }}
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
        )}
      </div>
    </div>
  );
};

export default FormReg;
