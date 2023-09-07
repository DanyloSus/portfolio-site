import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { quit } from "../features/userSlice";
import { Button, Popover, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const user = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const useOnExit = () => {
    dispatch(quit(""));
  };

  console.log(user.username);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <header className="">
      <div className="w-full h-14 flex items-center px-11 justify-between lg:px-4">
        <Link to={"../"}>
          <h2 className="text-3xl hover:underline decoration-white">
            Portfolios
          </h2>
        </Link>
        {user.username ? (
          <div className="hover:underline decoration-white cursor-pointer">
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              className="bg-transparent text-white rounded-xl border-2 border-[#5c5c5c] text-xl shadow-none hover:underline decoration-white "
            >
              {user.username}
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: 65,
              }}
              className="popover"
            >
              <Typography
                onClick={useOnExit}
                style={{
                  padding: "5px 20px",
                  cursor: "pointer",
                  borderRadius: "12px",
                }}
              >
                Quit
              </Typography>
            </Popover>
          </div>
        ) : (
          <div>
            <Link to={"/login"} className="hover:underline decoration-white">
              Login
            </Link>
            /
            <Link
              to={"/registration"}
              className="hover:underline decoration-white"
            >
              Registration
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
