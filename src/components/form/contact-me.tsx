"use client";
import { Formik, Form, FormikProps } from "formik";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import validationSchema from "@/schema/contact-me";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactMeForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (values: IFormValues) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://formspree.io/f/xanjzdkq",
        values
      );
      console.log(response);
      toast.success("Message sent successfully", {
        description: "I will reply as soon as possible",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values: IFormValues, { resetForm, setSubmitting }) => {
        await handleSubmit(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {(props: FormikProps<IFormValues>) => {
        const { handleChange, errors, touched, values } = props;
        return (
          <Form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <div className="flex flex-col gap-1">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <p className="text-destructive text-xs">{errors.name}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex flex-col gap-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <p className="text-destructive text-xs">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <div className="flex flex-col gap-1">
                <Textarea id="message" name="message" onChange={handleChange} value={values.message} />
                {errors.message && touched.message && (
                  <p className="text-destructive text-xs">{errors.message}</p>
                )}
              </div>
            </div>
            {loading ? (
              <Button type="submit" disabled>
                <Loader2 className="animate-spin" /> Sending...
              </Button>
            ) : (
              <Button className="cursor-pointer" type="submit">
                Submit
              </Button>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactMeForm;
