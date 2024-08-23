"use client";

import { createContext, useContext, useState, PropsWithChildren } from "react";
import { ContactType } from "@/app/types";

interface ContactFormContextType {
  isDialogOpen: boolean;
  formMode: "add" | "edit";
  activeContact: ContactType | null;
  openDialog: (mode: "add" | "edit", contact?: ContactType) => void;
  closeDialog: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(
  undefined
);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }
  return context;
};

export const ContactFormProvider = ({ children }: PropsWithChildren) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [formMode, setFormMode] = useState<"add" | "edit">("add");
  const [activeContact, setActiveContact] = useState<ContactType | null>(null);

  const openDialog = (mode: "add" | "edit", contact?: ContactType) => {
    setFormMode(mode);
    setActiveContact(contact || null);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setActiveContact(null);
  };

  return (
    <ContactFormContext.Provider
      value={{ isDialogOpen, formMode, activeContact, openDialog, closeDialog }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
