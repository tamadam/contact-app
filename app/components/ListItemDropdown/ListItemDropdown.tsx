"use client";

import { forwardRef, useState } from "react";
import styles from "./ListItemDropdown.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import { useContactForm } from "@/app/providers/ContactForm/ContactFormContext";
import { ContactType } from "@/app/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Spinner from "../Spinner/Spinner";
import deleteContactProfileImage from "@/app/actions/removeContactProfilePicture";

interface ListItemDropdownProps {
  contact: ContactType;
  onClick: () => void;
}

const ListItemDropdown = forwardRef<HTMLUListElement, ListItemDropdownProps>(
  ({ contact, onClick }: ListItemDropdownProps, ref) => {
    const { openDialog } = useContactForm();

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleContactDelete = async () => {
      try {
        setIsLoading(true);

        if (!contact) throw new Error("No contact available");

        if (contact.imageUrl) {
          deleteContactProfileImage(contact.imageUrl);
        }

        const response = await fetch(`/api/contacts/${contact.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          // delete contact image
          // TODO

          router.refresh();
          toast.success("Contact deleted successfully!");
        } else {
          throw new Error();
        }
      } catch (error) {
        toast.error("Delete failed.");
      } finally {
        setIsLoading(false);
        onClick();
      }
    };

    return (
      <ul ref={ref} className={styles.dropdownWrapper}>
        <li className={styles.dropdownItem}>
          <Button
            variant="normal"
            className={styles.hideDesktop}
            disabled={isLoading}
          >
            <Image src="/mute.svg" alt="mute" width={24} height={24} />
            <span>Mute</span>
          </Button>
        </li>
        <li className={styles.dropdownItem}>
          <Button
            variant="normal"
            className={styles.hideDesktop}
            disabled={isLoading}
          >
            <Image src="/call.svg" alt="call" width={24} height={24} />
            <span>Call</span>
          </Button>
        </li>

        <li className={styles.dropdownItem}>
          <Button
            variant="normal"
            onClick={() => {
              openDialog("edit", contact);
              onClick();
            }}
            disabled={isLoading}
          >
            <Image src="/settings.svg" alt="edit" width={24} height={24} />
            <span>Edit</span>
          </Button>
        </li>
        <li className={styles.dropdownItem}>
          <Button variant="normal" disabled={isLoading}>
            <Image src="/heart.svg" alt="edit" width={24} height={24} />
            <span>Favourite</span>
          </Button>
        </li>
        <li className={styles.dropdownItem}>
          <Button
            variant="normal"
            onClick={handleContactDelete}
            disabled={isLoading}
          >
            <Image src="/trash.svg" alt="edit" width={24} height={24} />
            <span className="flex gap-2 items-center">
              Remove {isLoading && <Spinner />}
            </span>
          </Button>
        </li>
      </ul>
    );
  }
);

ListItemDropdown.displayName = "ListItemDropdown";

export default ListItemDropdown;
