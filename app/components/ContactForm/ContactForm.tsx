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
import Spinner from "../Spinner/Spinner";
import deleteContactProfileImage from "@/app/actions/removeContactProfilePicture";
import ChangeIcon from "@/app/icons/ChangeIcon";
import AddIcon from "@/app/icons/AddIcon";
import TrashIcon from "@/app/icons/TrashIcon";

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

  const [profileImage, setProfileImage] = useState<string | null>(
    activeContact?.imageUrl ?? null
  );

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: activeContact || {
      name: "",
      phone: "",
      email: "",
    },
    reValidateMode: "onChange",
  });

  useEffect(() => {
    reset({
      name: "",
      email: "",
      phone: "",
    });

    if (formMode === "edit" && activeContact) {
      reset(activeContact);
    }

    setProfileImage(activeContact?.imageUrl ?? null);
  }, [formMode, activeContact, reset]);

  const router = useRouter();

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    try {
      // console.log(data);
      const rawImageInput = data.imageUrl?.[0];

      // DELETE PREVIOUS IMAGE - IF NEEDED
      // 1. User deleted their profile picture and hasn't uploaded a new one
      // 2. User uploaded a new profile picture, replacing the old one
      if (
        (activeContact?.imageUrl && !profileImage) ||
        (activeContact?.imageUrl && activeContact.imageUrl !== profileImage)
      ) {
        // console.log("Image needs to be deleted");
        deleteContactProfileImage(activeContact.imageUrl);
      }

      // UPLOAD IMAGE - IF NEEDED
      let imageUrl: string | null = null;

      if (rawImageInput) {
        const formData = new FormData();
        formData.append("file", rawImageInput);

        try {
          const response = await fetch("/api/s3-upload", {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            const result = await response.json();
            //console.log("File uploaded successfully", result);
            imageUrl = result.imageUrl;
          } else {
            console.error("File upload failed", response.statusText);
          }
        } catch (error) {
          console.error("An error occurred while uploading the file:", error);
        }
      }

      // PREPARE CONTACT DATA TO SAVE IN THE DATABASE
      let contactData = { ...data, imageUrl };

      //console.log(contactData);

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
        toast.success(
          `${activeContact ? "Contact updated" : "Contact created"} `
        );
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
    setValue("imageUrl", undefined);
    setProfileImage(null);
  };

  const onClose = () => {
    handleImageDelete();
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
        onClose={onClose}
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
                profileImage ? "justify-end" : ""
              }`}
            >
              <label htmlFor="imageUrl">
                {profileImage ? (
                  <div className="flex gap-2 items-center">
                    <div className={`${styles.button} ${styles.buttonPrimary}`}>
                      <ChangeIcon />
                      <span>Change picture</span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${styles.button} ${styles.buttonPrimary} flex items-center`}
                  >
                    <AddIcon />
                    <span>Add picture</span>
                  </div>
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
              {profileImage && (
                <div
                  className={`${styles.button} ${styles.buttonSquare}`}
                  onClick={handleImageDelete}
                >
                  <TrashIcon />
                </div>
              )}
            </div>
          </div>
          {errors.imageUrl && (
            <p className="text-red-500 mt-1">{errors.imageUrl?.message}</p>
          )}
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
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              <span className="flex items-center gap-2">
                Done {isSubmitting && <Spinner />}
              </span>
            </Button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ContactForm;
