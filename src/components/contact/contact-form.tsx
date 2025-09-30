"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    error: "",
    submit: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e: { target: { id: string | number; value: string | number; }; }) => {
    setValues({ ...values, [e.target.id]: e.target.value, error: "", submit: "" });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const { firstName, lastName, phone, email, message } = values;

    if (!firstName || !lastName || !phone || !email) {
      setValues({ ...values, error: "Please fill all required fields." });
      return;
    }

    const templateParams = {
      firstName,
      lastName,
      phone,
      email,
      message,
    };

    emailjs
      .send("service_d73t4z4", "template_d5famuk", templateParams, "xaEFPwaLGcVLvYgrF")
      .then(
        () => {
          setValues({
            ...initialState,
            submit: "Your request was successfully sent.",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setValues({
            ...values,
            error: "Failed to send your request. Please try again later.",
          });
        }
      );
  };

  return (
    <div className="w-full pb-16 lg:pb-24">
      <Wrapper>
        <Container delay={0.1}>
          <div className="flex flex-col lg:items-center lg:justify-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-left lg:text-center">
              Contact Us
            </h2>
          </div>
        </Container>

        <Container delay={0.2}>
          <form
            className="max-w-3xl mx-auto w-full mt-10 space-y-4"
            onSubmit={handleSubmit}
          >
            {/* Error Message */}
            {values.error && <p className="text-red-500">{values.error}</p>}
            {values.submit && <p className="text-green-500">{values.submit}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name*</Label>
                <Input
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="bg-[#0A0A0A] border-border/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name*</Label>
                <Input
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="bg-[#0A0A0A] border-border/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone*</Label>
              <Input
                id="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="1234567890"
                className="bg-[#0A0A0A] border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Work Email*</Label>
              <Input
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className="bg-[#0A0A0A] border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">How can we help you?*</Label>
              <Textarea
                id="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="min-h-[150px] bg-[#0A0A0A] border-border/50 resize-none"
              />
            </div>

            {/* <div className="flex flex-col gap-2">
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center gap-2 px-4 py-8 rounded-lg border border-dashed border-border/50 bg-[#0A0A0A] cursor-pointer"
              >
                <UploadIcon className="size-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Drop your files here or click to upload
                </span>
                <input id="file-upload" type="file" multiple className="hidden" />
              </label>
            </div> */}

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Container>
      </Wrapper>
    </div>
  );
};

export default ContactForm;
