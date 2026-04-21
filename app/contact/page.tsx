import AboutStatsSection from "../pages-component/AboutStatsSection";
import ContactFormMapSection from "../pages-component/ContactFormMapSection";
import MainSection from "../pages-component/MainSection";
import SpeakWithExpertSection from "../pages-component/SpeakWithExpertSection";
import Testimonials from "../pages-component/Testimonials";

export default function ContactPage() {
  return (
    <>
      <MainSection
        title="Contact Us"
        heading="Speak With a Loan Expert Today"
        description="Have a question about loans or need expert guidance?"
        extraDescription="Get expert guidance with faster approvals, access to multiple lenders, and personalised loan solutions tailored to your needs."
        featurePoints={[
          "Access to Multiple Trusted Lenders",
          "Fast & Hassle-Free Approvals",
          "Personalised Loan Solutions",
        ]}
        featurePointIcon="/contact/star.png"
        image="/contact/contact.png"
        sectionBgClassName="bg-[#EEF4E4]"
        callText="Call Now"
        chatText="Chat With Us"
      />

      <SpeakWithExpertSection />
      <ContactFormMapSection />
      <AboutStatsSection />
      <Testimonials
        title="Testimonials"
        description="Clients trust LendSmart Mortgages for reliable loan guidance and support."
      />
    </>
  );
}
