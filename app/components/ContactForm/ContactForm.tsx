"use client";

import { useRef } from "react";
import styles from "./ContactForm.module.css";
import Image from "next/image";
import Button from "../Button/Button";

const ContactForm = () => {
  const dialogFormRef = useRef<HTMLDialogElement | null>(null);

  const closeDialog = () => {
    dialogFormRef.current?.close();
  };

  return (
    <>
      <dialog
        ref={dialogFormRef}
        className={styles.contactFormWrapper}
        onClick={(event) => {
          if (event.target === dialogFormRef.current) {
            closeDialog();
          }
        }}
      >
        <form className={styles.contactForm}>
          <h1 className={styles.formTitle}>Edit contact</h1>
          <div className={styles.profilePictureInputWrapper}>
            <Image
              src="/images/profile-big.png"
              alt="profile-picture"
              width={88}
              height={88}
            />
            <Button variant="primary">
              <Image src="/add.svg" alt="add" width={24} height={24} />{" "}
              <span>Add picture</span>
            </Button>
            <input type="file" accept="image/*" hidden />
          </div>
          <div className={styles.normalInputFieldsWrapper}>
            <div className={styles.inputFieldWrapper}>
              <label htmlFor="name" className={styles.inputLabel}>
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jamie Wright"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <label htmlFor="phone" className={styles.inputLabel}>
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="+01 234 5678"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email address
              </label>
              <input
                type="text"
                id="email"
                placeholder="jamie.wright@mail.com"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formActionButtonsWrapper}>
            <Button variant="secondary" onClick={() => closeDialog()}>
              Cancel
            </Button>
            <Button variant="normal" onClick={() => closeDialog()}>
              Done
            </Button>
          </div>
        </form>
      </dialog>
      <button
        onClick={() => dialogFormRef.current?.showModal()}
        style={{ color: "white", padding: "2em" }}
      >
        Show Form
      </button>
    </>
  );
};

export default ContactForm;
