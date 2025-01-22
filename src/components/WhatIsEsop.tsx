import { BookOpen } from 'lucide-react';

export function WhatIsEsop() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">What is an ESOP?</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <p className="text-lg text-slate-600 mb-6">
            Think of an ESOP (Employee Stock Ownership Plan) as your slice of the company pie. 
            It's a benefit that gives you the right to buy shares in your company at a predetermined price, 
            making you a partial owner of the business you help build.
          </p>
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Components:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
                <p className="text-slate-700">Options grant you the right to buy shares at a fixed price</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
                <p className="text-slate-700">Vesting schedule determines when you can exercise these options</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
                <p className="text-slate-700">Exercise price is set when options are granted</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}