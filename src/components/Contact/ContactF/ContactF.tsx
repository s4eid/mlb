"use client";
import React, { useRef, useState } from "react";
import contactF from "./contactF.module.css";
import { Formik, Field, Form } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
// import { useRouter } from "next/router";
import {
  initialValues,
  contactSchema,
} from "../../../../validation/contactFormV";

function ContactF() {
  const reRef = useRef<ReCAPTCHA | any>(null);
  let loading = false;
  // const router = useRouter();
  return (
    <div className={contactF.mainContainer}>
      <div className={contactF.title}>
        <h1>Get In Touch</h1>
      </div>
      <div className={contactF.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={async (data) => {
            console.log(data);
            // await fetch("/api/email", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(data),
            // });
            // const token = await reRef.current.executeAsync();
            // reRef.current.reset();
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={contactF.fields}>
              {/* <ReCAPTCHA
                sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                size="invisible"
                ref={reRef}
                className={contactF.reCaptcha}
              /> */}

              <div className={contactF.inputsContainer}>
                <div className={contactF.holder}>
                  <Field
                    as={TextField}
                    label="full name"
                    variant="outlined"
                    type="string"
                    name="full_name"
                    className={contactF.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.full_name && touched.full_name ? (
                    <div className={contactF.error}>
                      <p>{errors.full_name}</p>
                    </div>
                  ) : (
                    <div className={contactF.errorC}>
                      <p>Plaese Enter Your Full Name</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={contactF.inputsContainer}>
                <div className={contactF.holder}>
                  <Field
                    as={TextField}
                    label="Phone Number"
                    variant="outlined"
                    type="text"
                    name="phone_number"
                    className={contactF.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.phone_number && touched.phone_number ? (
                    <div className={contactF.error}>
                      <p>{errors.phone_number}</p>
                    </div>
                  ) : (
                    <div className={contactF.errorC}>
                      <p>Plaese Enter Your Phone Number</p>
                    </div>
                  )}
                </div>
              </div>

              <div className={contactF.inputsContainer}>
                <div className={contactF.holder}>
                  <Field
                    as={TextField}
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    className={contactF.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.email && touched.email ? (
                    <div className={contactF.error}>
                      <p>{errors.email}</p>
                    </div>
                  ) : (
                    <div className={contactF.errorC}>
                      <p>Plaese Enter Your Email</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={contactF.inputsContainer}>
                <div className={contactF.holder}>
                  <Field
                    as={TextField}
                    label="Message"
                    variant="outlined"
                    type="message"
                    name="message"
                    className={contactF.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.message && touched.message ? (
                    <div className={contactF.error}>
                      <p>{errors.message}</p>
                    </div>
                  ) : (
                    <div className={contactF.errorC}>
                      <p>Plaese Enter Your Message</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={contactF.loginOr}>
                <LoadingButton
                  className={contactF.loginBtn}
                  size="large"
                  type="submit"
                  color="primary"
                  disabled={!isValid && dirty}
                  loading={loading}
                  variant="contained"
                >
                  Send
                </LoadingButton>
                {/* <div
                    type="button"
                    onClick={() => router.push("/change_password")}
                    className={login.resetPass}
                  >
                    Forgot Your Password?
                  </div> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactF;
