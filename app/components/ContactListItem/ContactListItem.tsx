"use client";

import Image from "next/image";
import styles from "./ContactListItem.module.css";
import Button from "../Button/Button";
import ListItemDropdown from "../ListItemDropdown/ListItemDropdown";
import { useEffect, useRef, useState } from "react";
import { ContactType } from "@/app/types";
import MuteIcon from "@/app/icons/MuteIcon";
import CallIcon from "@/app/icons/CallIcon";
import MoreIcon from "@/app/icons/MoreIcon";

interface ContactListItemProps {
  contact: ContactType;
}

const ContactListItem = ({ contact }: ContactListItemProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef, buttonRef]);

  const dropdownActionsStyle = isDropdownOpen
    ? `${styles.contactActions} ${styles.visible}`
    : `${styles.contactActions} ${styles.hidden}`;

  return (
    <div className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <Image
          src={contact.imageUrl || "/images/profile-big.png"}
          alt="profile"
          width={40}
          height={40}
          className={styles.contactImage}
        />
        <div className={styles.contactDetails}>
          <span className={styles.contactName}>{contact.name}</span>
          <span className={styles.contactPhone}>{contact.phone}</span>
        </div>
      </div>
      <div className={dropdownActionsStyle}>
        <Button className={styles.hideMobile} variant="square">
          <MuteIcon />
        </Button>
        <Button className={styles.hideMobile} variant="square">
          <CallIcon />
        </Button>
        <Button
          ref={buttonRef}
          variant="square"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <MoreIcon />
        </Button>
        {isDropdownOpen && (
          <ListItemDropdown
            ref={dropdownRef}
            contact={contact}
            onClick={() => setDropdownOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ContactListItem;
