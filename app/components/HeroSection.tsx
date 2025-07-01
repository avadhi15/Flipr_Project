import ContactForm from './ContactForm';

export default function HeroSection() {
  return (
  <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-center pt-24 px-8"
         style={{ 
           backgroundImage: "url('/assets/images/bg.svg')",
           backgroundSize: "100%",
           backgroundPosition: "center 80%", // Adjust positioning
           backgroundRepeat: "no-repeat"
         }}>
      
      <div className="text-white max-w-lg space-y-6 z-10">
        <h1 className="text-inter text-[60px] font-extrabold leading-tight">
          Consultation, <br /> Design, <br /> & Marketing
        </h1>
      </div>

      {/* Form on the right */}
  <div className="relative left-[-180px] p-8 rounded-lg shadow-lg w-full max-w-sm mt-12 lg:mt-0 z-10">
  <ContactForm />
</div>



    </section>
  );
}
