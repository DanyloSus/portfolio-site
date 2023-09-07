import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const FormLog = () => {
  const [data, setData] = useState<string[] | { detail: string }>();

  const dispatch = useDispatch();

  const useOnReg = (username: string) => {
    dispatch(login({ username }));
    window.location.href = "/";
  };

  const [isCheck, setIsCheck] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailTextError, setEmailTextError] = useState("");
  const [passwordTextError, setPasswordTextError] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    setEmailTextError("");
    setPasswordTextError("");

    if (email == "") {
      setEmailError(true);
      setEmailTextError("Enter email");
    }
    if (!Array.isArray(data)) {
      if (data?.detail) {
        setEmailError(true);
        setPasswordError(true);
        setEmailTextError("You are wrong");
      }
    }
    if (password == "") {
      setPasswordError(true);
      setPasswordTextError("Enter password");
    } else if (password.length < 8) {
      setPasswordError(true);
      setPasswordTextError("Enter a longer password");
    }

    if (!passwordError && password.length >= 8) {
      setIsCheck(true);
      console.log(passwordError, emailError);
      fetch("https://portfolio-site-378x.onrender.com/auth/get_users", {
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
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            useOnReg(data[0]);
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
      <div className="max-w-[60%] w-full h-full object-cover md:h-[70%] md:object-cover md:max-w-full md:w-full bg-bg-elements">
        {isCheck ? (
          <div className="flex h-full w-full items-center justify-center">
            <img src="./load.gif" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="h-full">
            <FormControl className="flex items-center justify-center h-full text-white gap-5 px-5">
              <h2 className="text-3xl md:text-2xl">Login</h2>
              <TextField
                label="Email"
                value={email}
                error={
                  data
                    ? Array.isArray(data)
                      ? false
                      : emailError
                      ? true
                      : false
                    : false
                }
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
                error={
                  data
                    ? Array.isArray(data)
                      ? false
                      : passwordError
                      ? true
                      : false
                    : false
                }
                helperText={passwordTextError}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                  setData({ detail: "" });
                  setPasswordTextError("");
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

export default FormLog;
