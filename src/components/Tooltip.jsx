import React from "react";
import Tooltip from "@mui/material/Tooltip";

const CustomTooltip = ({ title, placement = "top", children }) => {
  return (
    <Tooltip
      disableInteractive
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "#282828",
            color: "#fff",
            fontSize: "14px",
            padding: "5px 12.5px",
            fontFamily: "Nunito Sans",
            boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.75)",
          },
        },
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -6],
              },
            },
          ],
        },
      }}
      title={title}
      placement={placement}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
