import { AlertTriangle } from 'lucide-react';

export function RiskAndReward() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <AlertTriangle className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">Risk and Reward: What's the Catch?</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <p className="text-lg text-slate-600 mb-6">
            Spoiler alert: If the company tanks, so does your ESOP. But hey, that's why they call it a startup!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The Risks</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2" />
                  <p className="text-slate-700">Company might never go public</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2" />
                  <p className="text-slate-700">Share value could decrease</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2" />
                  <p className="text-slate-700">Dilution from future funding</p>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The Rewards</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2" />
                  <p className="text-slate-700">Potential significant upside</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2" />
                  <p className="text-slate-700">Benefit from company growth</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2" />
                  <p className="text-slate-700">True ownership stake</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}