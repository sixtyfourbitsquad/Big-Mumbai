'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I get started with Big Mumbai Game?',
      answer: 'Getting started is simple! Click the "Register" button, fill in your basic details, verify your phone number, and you\'ll receive a ₹500 welcome bonus immediately. You can start playing games right away without any deposits.'
    },
    {
      question: 'Is Big Mumbai Game safe and legal?',
      answer: 'Absolutely! Big Mumbai Game operates under all applicable Indian gaming laws. We use bank-level encryption to protect your data, and all transactions are processed through secure payment gateways. Your privacy and security are our top priorities.'
    },
    {
      question: 'How do withdrawals work?',
      answer: 'Withdrawals are processed instantly to your bank account, UPI, or digital wallet. There\'s no minimum withdrawal limit, and all transactions are free of charge. Most withdrawals are completed within 5 minutes.'
    },
    {
      question: 'What types of games can I play?',
      answer: 'We offer 100+ games including puzzles, strategy games, trivia, card games, and action challenges. All games are skill-based and fair, with new games added regularly based on player feedback.'
    },
    {
      question: 'Are the rewards real money?',
      answer: 'Yes! All rewards, bonuses, and prize money are real and can be withdrawn directly to your bank account. We\'ve already distributed over ₹10 lakhs in rewards to our players.'
    },
    {
      question: 'Can I play on mobile devices?',
      answer: 'Definitely! Big Mumbai Game is optimized for all devices - smartphones, tablets, and computers. No downloads required - just open your browser and start playing instantly.'
    },
    {
      question: 'What is the welcome bonus?',
      answer: 'New players receive ₹500 as a welcome bonus immediately after registration. This bonus can be used to play games and any winnings from bonus gameplay can be withdrawn after completing simple verification steps.'
    },
    {
      question: 'How does customer support work?',
      answer: 'We provide 24/7 customer support through live chat, email, and phone. Our support team responds within minutes and can help with any questions, technical issues, or account matters in Hindi and English.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">❓ Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about Big Mumbai Game. 
              Can't find what you're looking for? Our 24/7 support team is here to help!
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardHeader>
                  <CardTitle 
                    className="flex items-center justify-between cursor-pointer text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center">
                      <HelpCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-lg md:text-xl font-semibold text-gray-900">
                        {faq.question}
                      </span>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    )}
                  </CardTitle>
                </CardHeader>
                {openIndex === index && (
                  <CardContent className="pt-0">
                    <div className="pl-9">
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our friendly support team is available 24/7 to help you with anything you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@bigmumbai.game"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  📧 Email Support
                </a>
                <a 
                  href="tel:+91-8000-123-456"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  📞 Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </>
  );
}