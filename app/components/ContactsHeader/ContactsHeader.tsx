"use client";

import styles from "./ContactsHeader.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import { useContactForm } from "@/app/providers/ContactForm/ContactFormContext";
import { useTheme } from "@/app/providers/ThemeContext/ThemeContext";
import BackButtonIcon from "@/app/icons/BackButtonIcon";
import SettingsIcon from "@/app/icons/SettingsIcon";
import ProfileIcon from "@/app/icons/ProfileIcon";
import AddIcon from "@/app/icons/AddIcon";
import ColorSwitchIcon from "@/app/icons/ColorSwitchIcon";

const ContactsHeader = () => {
  const { openDialog } = useContactForm();
  const { toggleTheme } = useTheme();

  return (
    <div className={styles.contactsHeader}>
      <div className={[styles.headerItem, styles.headerBackButton].join(" ")}>
        <Button variant="square">
          <BackButtonIcon />
        </Button>
      </div>
      <div className={[styles.headerItem, styles.headerText].join(" ")}>
        Contacts
      </div>
      <div className={[styles.headerItem, styles.headerOptions].join(" ")}>
        <div className="settings">
          <Button variant="square">
            <SettingsIcon />
          </Button>
        </div>
        <div className="profile">
          <Button variant="square">
            <ProfileIcon />
          </Button>
        </div>
        <div className="addButton">
          <Button
            variant="priority"
            onClick={() => {
              openDialog("add");
            }}
          >
            <AddIcon />
            Add new
          </Button>
        </div>
      </div>
      <div className={[styles.headerItem, styles.headerLightDark].join(" ")}>
        <Button variant="square" onClick={() => toggleTheme()}>
          <ColorSwitchIcon />
        </Button>
      </div>
    </div>
  );
};

export default ContactsHeader;
