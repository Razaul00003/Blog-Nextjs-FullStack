import ContactForm from "../components/contact/contact-form";
import Head from "next/head";
function ContactPage() {
  return (
    <>
      <Head>
        <title>Nextjs fullstack blog on Javscript- contact page </title>
        <meta name="description" content=" nextjs full stack blog home page " />
      </Head>
      <ContactForm />;
    </>
  );
}

export default ContactPage;
