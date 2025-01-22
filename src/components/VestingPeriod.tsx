import { Clock } from 'lucide-react';

export function VestingPeriod() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Clock className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">The Vesting Period: Playing the Long Game</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <p className="text-lg text-slate-600 mb-6">
            It's like planting a money tree—you've gotta wait before you can harvest it. And no, 
            you can't cash out after your first week (we know you were thinking about it! 😉).
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Standard 4-Year Schedule</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                  <p className="text-slate-700">1 year cliff: 25% vests</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                  <p className="text-slate-700">Monthly vesting thereafter</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                  <p className="text-slate-700">Full vesting at 4 years</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Example Timeline</h3>
              <div className="space-y-4">
                <p className="text-slate-700">Start Date: 1,000 options granted</p>
                <p className="text-slate-700">Year 1: 250 options vest</p>
                <p className="text-slate-700">Years 2-4: ~21 options vest monthly</p>
                <p className="text-slate-700">Year 4: All 1,000 options vested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}