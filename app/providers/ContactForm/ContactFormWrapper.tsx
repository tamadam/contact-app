"use client";

import { PropsWithChildren } from "react";
import { ContactFormProvider } from "./ContactFormContext";

const ContactFormWrapper = ({ children }: PropsWithChildren) => {
  return <ContactFormProvider>{children}</ContactFormProvider>;
};

export default ContactFormWrapper;
