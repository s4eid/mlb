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
            <Typography color={"#F8BF4E"}>Do you do Levelling?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we do, We do levelling with high quality material. Also,
              Grinding, supply and install the plywood.
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
              How long does it take to get my flooring installed?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is a common question in between costumers, but it’s all
              depends on job.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#000", color: "#fff" }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon color="secondary" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography color={"#F8BF4E"}>How do I place an order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can place order Online through our website, Make a call, or
              even with Text .Also, after quotation time.
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
              What are your delivery options?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you choose supply and install together, installer will bring
              all the materials with him (For 50 km from supplier is free). If
              you choose only installation, depends on your products we will
              provide you a quote for delivery.
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
              Do you offer free quote and measurement services?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we do. We provide our customers with free measurement and
              free quote In addition; we do provide samples on site too.
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
              Do you offer commercial flooring installation services?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we do We have a professional team for commercial
              installations.
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
              What is the difference between Laminate and Hybrid?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Both are click system but in compare to each other, Hybrid is
              waterproof and durable also, resistance of the Hybrid is almost
              higher than Laminate Against scratches .In total, for laminate,
              you would need underlay but for Hybrid you won’t need it. In terms
              of the price, Laminate is cheaper and the maximum thickness is 16
              mm in contrary with Hybrid also, Hybrid has a thinner thickness
              which is maximum 10 mm.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Questions;
