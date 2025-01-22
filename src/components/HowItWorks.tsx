import { Cog } from 'lucide-react';

const steps = [
  {
    title: "Grant",
    description: "You receive your ESOP grant with a specified number of options"
  },
  {
    title: "Vesting",
    description: "Options vest over time, typically 4 years with a 1-year cliff"
  },
  {
    title: "Exercise",
    description: "You can exercise vested options by paying the strike price"
  },
  {
    title: "Exit",
    description: "Sell shares during a liquidity event (IPO, acquisition)"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Cog className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">How Does it Work?</h2>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-6 h-full w-0.5 bg-blue-200" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}