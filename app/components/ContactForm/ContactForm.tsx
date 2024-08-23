"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormFields, contactFormSchema } from "@/app/validationSchemas";
import { useContactForm } from "@/app/providers/ContactForm/ContactFormContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const dialogFormRef = useRef<HTMLDialogElement | null>(null);
  const { isDialogOpen, formMode, activeContact, closeDialog } =
    useContactForm();

  useEffect(() => {
    if (isDialogOpen) {
      dialogFormRef.current?.showModal();
    } else {
      dialogFormRef.current?.close();
    }
  }, [isDialogOpen]);

  const [profileImage, setProfileImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    try {
      console.log(data);
      const rawImageInput = data.imageUrl?.[0];
      console.log(rawImageInput);
      // DELETE PREVIOUS IMAGE - IF NEEDED
      // TODO

      // UPLOAD IMAGE - IF NEEDED
      // TODO

      // PREPARE CONTACT DATA TO SAVE IN THE DATABASE
      // TODO
      let contactData = { ...data, imageUrl: null };

      // SAVE DATA IN DATABASE
      const requestUrl = activeContact
        ? `/api/contacts/${activeContact.id}`
        : "/api/contacts";

      const requestOptions = {
        method: activeContact ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      };

      const response = await fetch(requestUrl, requestOptions);

      if (response.ok) {
        router.refresh();
        toast.success("Contact created");
        reset();
        handleImageDelete();
        closeDialog();
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
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

  const handleImageDelete = () => {
    resetField("imageUrl");
    setProfileImage(null);
    /*  reset({ ...getValues(), imageUrl: null }); */
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
        onClose={closeDialog}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
          <h1 className={styles.formTitle}>
            {formMode === "edit" ? "Edit contact" : "Add contact"}
          </h1>
          <div className={styles.profilePictureInputWrapper}>
            <Image
              src={profileImage || "/images/profile-big.png"}
              alt="profile-picture"
              width={88}
              height={88}
              className={styles.profileImageInput}
            />
            <div
              className={`flex flex-row items-center w-full gap-1 ${
                activeContact ? "justify-end" : ""
              }`}
            >
              <label htmlFor="imageUrl">
                {activeContact ? (
                  <div className="flex gap-2 items-center">
                    <div className={`${styles.button} ${styles.buttonPrimary}`}>
                      <Image
                        src="/change.svg"
                        alt="change"
                        width={24}
                        height={24}
                      />
                      <span>Change picture</span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${styles.button} ${styles.buttonPrimary} flex items-center`}
                  >
                    <Image src="/add.svg" alt="add" width={24} height={24} />
                    <span>Add picture</span>
                  </div>
                )}

                {errors.imageUrl && (
                  <p className="text-red-500 mt-1">
                    {errors.imageUrl?.message}
                  </p>
                )}
              </label>

              <input
                {...register("imageUrl")}
                type="file"
                accept="image/*"
                id="imageUrl"
                disabled={isSubmitting}
                onChange={onImageChange}
                className="opacity-0 w-0 h-0"
              />
              {activeContact && (
                <div
                  className={`${styles.button} ${styles.buttonPrimary}`}
                  onClick={handleImageDelete}
                >
                  <Image src="/trash.svg" alt="delete" width={24} height={24} />
                </div>
              )}
            </div>
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
    </>
  );
};

export default ContactForm;
