"use client";

import { useRef } from "react";
import styles from "./ContactForm.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import { FieldValues, useForm } from "react-hook-form";

const ContactForm = () => {
  const dialogFormRef = useRef<HTMLDialogElement | null>(null);

  const closeDialog = () => {
    dialogFormRef.current?.close();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // TODO: submit to server
    console.log("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("submitted");
    reset();
    closeDialog();
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
        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
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
            <input
              type="file"
              accept="image/*"
              hidden
              disabled={isSubmitting}
            />
          </div>
          <div className={styles.normalInputFieldsWrapper}>
            <div className={styles.inputFieldWrapper}>
              <label htmlFor="name" className={styles.inputLabel}>
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Jamie Wright"
                className={styles.inputField}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <label htmlFor="phone" className={styles.inputLabel}>
                Phone number
              </label>
              <input
                {...register("phone")}
                type="text"
                placeholder="+01 234 5678"
                className={styles.inputField}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email address
              </label>
              <input
                {...register("email")}
                type="text"
                placeholder="jamie.wright@mail.com"
                className={styles.inputField}
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className={styles.formActionButtonsWrapper}>
            <Button
              variant="secondary"
              onClick={() => closeDialog()}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button variant="normal" type="submit" disabled={isSubmitting}>
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
