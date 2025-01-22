import { PiggyBank } from 'lucide-react';

export function CashingOut() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <PiggyBank className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">Cashing Out: The Good, the Bad, and the Taxes</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <p className="text-lg text-slate-600 mb-6">
            Yes, Uncle Sam loves your ESOP too! Let's break down when and how you can turn those 
            options into actual cash (and how much the tax collector wants to join the party).
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">When Can You Cash Out?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  <p className="text-slate-600">IPO: Company goes public</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  <p className="text-slate-600">Acquisition: Company gets bought</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  <p className="text-slate-600">Secondary market: If company allows it</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Tax Considerations</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  <p className="text-slate-600">Exercise triggers potential AMT</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  <p className="text-slate-600">Sale triggers capital gains tax</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  <p className="text-slate-600">Timing matters for tax treatment</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}