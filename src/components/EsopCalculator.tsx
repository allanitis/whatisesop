import { Calculator } from 'lucide-react';
import { useState } from 'react';

export function EsopCalculator() {
  const [strikePrice, setStrikePrice] = useState<number>(1);
  const [totalShares, setTotalShares] = useState<number>(1000000);
  const [currentPrice, setCurrentPrice] = useState<number>(2);
  const [optionsCount, setOptionsCount] = useState<number>(10000);

  const calculateOwnership = () => {
    return ((optionsCount / totalShares) * 100).toFixed(4);
  };

  const calculateValue = () => {
    return ((currentPrice - strikePrice) * optionsCount).toFixed(2);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Calculator className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">ESOP Calculator</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Input Values</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="strikePrice" className="block text-sm font-medium text-slate-700 mb-1">
                    Strike Price (USD)
                  </label>
                  <input
                    type="number"
                    id="strikePrice"
                    min="0.01"
                    step="0.01"
                    value={strikePrice}
                    onChange={(e) => setStrikePrice(Math.max(0.01, Number(e.target.value)))}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="totalShares" className="block text-sm font-medium text-slate-700 mb-1">
                    Total Shares Outstanding
                  </label>
                  <input
                    type="number"
                    id="totalShares"
                    min="1"
                    value={totalShares}
                    onChange={(e) => setTotalShares(Math.max(1, Number(e.target.value)))}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="currentPrice" className="block text-sm font-medium text-slate-700 mb-1">
                    Current Share Price (USD)
                  </label>
                  <input
                    type="number"
                    id="currentPrice"
                    min="0.01"
                    step="0.01"
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(Math.max(0.01, Number(e.target.value)))}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="optionsCount" className="block text-sm font-medium text-slate-700 mb-1">
                    Number of Options
                  </label>
                  <input
                    type="number"
                    id="optionsCount"
                    min="1"
                    value={optionsCount}
                    onChange={(e) => setOptionsCount(Math.max(1, Number(e.target.value)))}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Results</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-1">Ownership Percentage</h4>
                  <p className="text-3xl font-bold text-blue-600">{calculateOwnership()}%</p>
                  <p className="text-sm text-slate-600 mt-1">
                    of the company
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-1">Current Value</h4>
                  <p className="text-3xl font-bold text-green-600">
                    {formatCurrency(Number(calculateValue()))}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    based on current share price
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-1">Cost to Exercise</h4>
                  <p className="text-3xl font-bold text-slate-900">
                    {formatCurrency(strikePrice * optionsCount)}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    total cost to exercise all options
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-slate-600">
              <strong>Note:</strong> This calculator provides estimates based on current values. 
              Actual results may vary due to factors like dilution, market conditions, and future funding rounds. 
              Always consult with financial advisors for personalized advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}