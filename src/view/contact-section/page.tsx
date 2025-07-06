import ContactMeForm from "@/components/form/contact-me";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="px-6 py-16 md:px-64 md:py-20" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#1F2937] dark:text-white mb-5">
          Get In Touch
        </h2>
        <p className="text-muted-foreground">
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-12 mt-12">
        <div className="md:w-1/2">
          <div className="md:text-left text-center">
            <h3 className="font-semibold text-xl text-[#1F2937] dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="flex flex-col gap-4 md:items-start items-center">
              <p className="flex gap-4 text-muted-foreground items-center">
                <Mail width={16} /> anandayudha777@gmail.com
              </p>
              <p className="flex gap-4 text-muted-foreground items-center">
                <Phone width={16} /> +6289637663755
              </p>
              <p className="flex gap-4 text-muted-foreground items-center">
                <MapPin width={16} /> Surabaya, Indonesia
              </p>
            </div>
            <div className="mt-8 md:text-left text-center">
              <h3 className="font-semibold text-xl text-[#1F2937] dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4 mt-4 md:justify-start justify-center">
                <Link
                  href={"https://www.linkedin.com/in/ananda-yudha-382533190/"}
                  className="p-2 bg-card border rounded hover:scale-110 duration-100 ease-in-out"
                  target="_blank"
                >
                  <Linkedin
                    className="text-muted-foreground"
                    width={14}
                    height={14}
                  />
                </Link>
                <Link
                  href={"https://github.com/yudhafrebian"}
                  className="p-2 bg-card border rounded hover:scale-110 duration-100 ease-in-out"
                  target="_blank"
                >
                  <Github
                    className="text-muted-foreground"
                    width={14}
                    height={14}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/yudha_frebian/"}
                  className="p-2 bg-card border rounded hover:scale-110 duration-100 ease-in-out"
                  target="_blank"
                >
                  <Instagram
                    className="text-muted-foreground"
                    width={14}
                    height={14}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <ContactMeForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
