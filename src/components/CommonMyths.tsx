import { Brain } from 'lucide-react';

const myths = [
  {
    myth: "I'm going to be rich overnight!",
    reality: "ESOPs are a long-term investment. Think years, not days."
  },
  {
    myth: "It's just like Bitcoin",
    reality: "ESOPs represent real company ownership, not speculative cryptocurrency."
  },
  {
    myth: "I can sell my options anytime",
    reality: "Options typically can only be exercised during specific events or timeframes."
  },
  {
    myth: "The value only goes up",
    reality: "Company valuations can fluctuate, affecting your ESOP value."
  }
];

export function CommonMyths() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Brain className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">Common Myths About ESOPs</h2>
        </div>
        <div className="space-y-6">
          {myths.map((item) => (
            <div key={item.myth} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold text-red-600">Myth:</h3>
                  <p className="text-slate-900">{item.myth}</p>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-green-600">Reality:</h3>
                  <p className="text-slate-600">{item.reality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}