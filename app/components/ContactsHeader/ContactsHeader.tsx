"use client";

import styles from "./ContactsHeader.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import { useContactForm } from "@/app/providers/ContactForm/ContactFormContext";

const ContactsHeader = () => {
  const { openDialog } = useContactForm();

  return (
    <div className={styles.contactsHeader}>
      <div
        className={[
          styles.headerItem,
          styles.headerBackButton,
          "text-cyan-50",
        ].join(" ")}
      >
        <Button variant="square">
          <Image
            src="/backButton.svg"
            alt="back button"
            width={24}
            height={24}
            priority
          />
        </Button>
      </div>
      <div
        className={[
          styles.headerItem,
          styles.headerText,
          "text-cyan-50",
          "text-4xl",
        ].join(" ")}
      >
        Contacts
      </div>
      <div
        className={[
          styles.headerItem,
          styles.headerOptions,
          "text-cyan-50",
        ].join(" ")}
      >
        <div className="settings">
          <Button variant="square">
            <Image
              src="/settings.svg"
              alt="settings"
              width={24}
              height={24}
              priority
            />
          </Button>
        </div>
        <div className="profile">
          <Button variant="square">
            <Image
              src="/profile.svg"
              alt="profile picture"
              width={24}
              height={24}
              priority
            />
          </Button>
        </div>
        <div className="addButton">
          <Button
            variant="priority"
            onClick={() => {
              openDialog("add");
            }}
          >
            <Image
              src="/add.svg"
              alt="plus sign"
              width={24}
              height={24}
              priority
            />
            Add new
          </Button>
        </div>
      </div>
      <div
        className={[
          styles.headerItem,
          styles.headerLightDark,
          "text-cyan-50",
        ].join(" ")}
      >
        <Button variant="square">
          <Image
            src="/colorSwitch.svg"
            alt="color switch"
            width={24}
            height={24}
            priority
          />
        </Button>
      </div>
    </div>
  );
};

export default ContactsHeader;
