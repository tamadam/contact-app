"use client";

import { forwardRef } from "react";
import styles from "./ListItemDropdown.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import { useContactForm } from "@/app/providers/ContactForm/ContactFormContext";
import { ContactType } from "@/app/types";

interface ListItemDropdownProps {
  contact: ContactType;
}

const ListItemDropdown = forwardRef<HTMLUListElement, ListItemDropdownProps>(
  ({ contact }: ListItemDropdownProps, ref) => {
    const { openDialog } = useContactForm();

    return (
      <ul ref={ref} className={styles.dropdownWrapper}>
        <li className={styles.dropdownItem}>
          <Button variant="normal" className={styles.hideDesktop}>
            <Image src="/mute.svg" alt="mute" width={24} height={24} />
            <span>Mute</span>
          </Button>
        </li>
        <li className={styles.dropdownItem}>
          <Button variant="normal" className={styles.hideDesktop}>
            <Image src="/call.svg" alt="call" width={24} height={24} />
            <span>Call</span>
          </Button>
        </li>

        <li className={styles.dropdownItem}>
          <Button variant="normal" onClick={() => openDialog("edit", contact)}>
            <Image src="/settings.svg" alt="edit" width={24} height={24} />
            <span>Edit</span>
          </Button>
        </li>
        <li className={styles.dropdownItem}>
          <Button variant="normal">
            <Image src="/heart.svg" alt="edit" width={24} height={24} />
            <span>Favourite</span>
          </Button>
        </li>
        <li className={styles.dropdownItem}>
          <Button variant="normal">
            <Image src="/trash.svg" alt="edit" width={24} height={24} />
            <span>Remove</span>
          </Button>
        </li>
      </ul>
    );
  }
);

ListItemDropdown.displayName = "ListItemDropdown";

export default ListItemDropdown;
