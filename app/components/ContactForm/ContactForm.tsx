"use client";

import { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormFields, contactFormSchema } from "@/app/validationSchemas";

const ContactForm = () => {
  const dialogFormRef = useRef<HTMLDialogElement | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const closeDialog = () => {
    dialogFormRef.current?.close();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    // TODO: submit to server
    console.log("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("submitted");
    reset();
    closeDialog();
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    let url = null;
    if (files && files.length > 0) {
      url = URL.createObjectURL(files[0]);
      setProfileImage(url);
    } else {
      setProfileImage(null);
    }
  };

  const triggerFileInputClick = () => {
    fileInputRef.current?.click();
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
              src={profileImage || "/images/profile-big.png"}
              alt="profile-picture"
              width={88}
              height={88}
              className={styles.profileImageInput}
              onClick={triggerFileInputClick}
            />
            <label htmlFor="imageUrl">
              <Button variant="primary" onClick={triggerFileInputClick}>
                <Image src="/add.svg" alt="add" width={24} height={24} />{" "}
                <span>Add picture</span>
              </Button>
            </label>
            <input
              {...register("imageUrl")}
              ref={fileInputRef}
              type="file"
              accept="image/*"
              id="imageUrl"
              disabled={isSubmitting}
              hidden
              onChange={onImageChange}
            />
            {errors.imageUrl && (
              <p className="text-red-500 mt-1">{errors.imageUrl?.message}</p>
            )}
          </div>
          <div className={styles.normalInputFieldsWrapper}>
            <div className={styles.inputFieldWrapper}>
              <label htmlFor="name" className={styles.inputLabel}>
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Jamie Wright"
                className={styles.inputField}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name?.message}</p>
              )}
            </div>
            <div className={styles.inputFieldWrapper}>
              <label htmlFor="phone" className={styles.inputLabel}>
                Phone number
              </label>
              <input
                {...register("phone")}
                type="text"
                id="phone"
                placeholder="+01 234 5678"
                className={styles.inputField}
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-red-500 mt-1">{errors.phone?.message}</p>
              )}
            </div>
            <div className={styles.inputFieldWrapper}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email address
              </label>
              <input
                {...register("email")}
                type="text"
                id="email"
                placeholder="jamie.wright@mail.com"
                className={styles.inputField}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email?.message}</p>
              )}
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
