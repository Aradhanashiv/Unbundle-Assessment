import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What are Aligners?",
    answer:
      "Aligners are Orthodontic devices that are a transparent, plastic form of dental braces used to adjust teeth to make your smile more beautiful!",
  },
  {
    question: "How do Aligners work?",
    answer:
      "Whistle aligners, constructed from thin plastic shells, gently guide your teeth into position. In contrast to conventional metal braces, these invisible aligners are clear, discreet, and less bothersome. Remarkable results can be achieved in as few as six weeks, all while providing the flexibility to remove the aligners whenever needed. With the guidance of an orthodontist, Whistle aligners can work their magic, transforming your smile into a more beautiful one!",
  },
  {
    question: "Can any dentist do irregular teeth treatment?",
    answer:
      "An Orthodontist is a dental specialist who prevents, diagnoses and treats facial irregularities. Orthodontic treatments aim to improve the way the teeth and jaws function, as well as the person's smile or appearance. They straighten crooked or misaligned teeth, fix bad bites and make sure jaws are correctly aligned. For best results from your Invisible Aligners' one must consult with an Orthodontist.",
  },
  {
    question: "Are there any restriction on eating or drinking?",
    answer:
      "No restrictions as such. The 'snapon/snapoff' feature makes Aligners comfortable and easy to use in all social situations.",
  },
  {
    question: "How long does the treatment take?",
    answer:
      "Typically, it may take 6-12 months for correcting the 'social six (front teeth). For more complex cases such as crowded teeth, the treatment time could be 12-24 months or slightly longer. The best person to give advice on this your Orthodontist.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="text-center text-[40px] font-bold mb-16">
          <span className="text-[#8F62D4]">Got Questions?</span>{" "}
          <span className="text-[#181C1C]">We've got answers</span>
        </h2>

       <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-[24px] font-semibold text-[#000000]">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <Minus size={24} />
                ) : (
                  <Plus size={24} />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 mt-4"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}