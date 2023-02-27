import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import quesions from "./questions.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Questions = () => {
  return (
    <div className={quesions.holderC}>
      <div className={quesions.mainC}>
        <div className={quesions.titleC}>
          <h1>You Ask & We Answers</h1>
        </div>
        <Accordion sx={{ backgroundColor: "#000", color: "#fff" }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon color="secondary" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color={"#F8BF4E"}>Do you install floors?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes! We have our own team of expert flooring installers in
              Victoria and a vast network of contractors across Australia to
              help you with your flooring needs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#000", color: "#fff" }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon color="secondary" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography color={"#F8BF4E"}>
              Can you help with installation recommendations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our friendly staff are happy to offer advice on how to install
              your flooring. We can walk you through the installation manual and
              provide technical support.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Questions;
