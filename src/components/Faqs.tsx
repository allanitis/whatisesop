import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What happens if I leave the company?",
    answer: "Typically, you have 90 days to exercise vested options after leaving. Unvested options are usually forfeited."
  },
  {
    question: "How are taxes handled?",
    answer: "Tax implications vary by country and type of options (ISO vs NSO). Consult a tax professional for specific advice."
  },
  {
    question: "Can I sell my options?",
    answer: "Usually, options cannot be sold until after an IPO or other liquidity event, subject to company policies."
  }
];

export function Faqs() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <HelpCircle className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}