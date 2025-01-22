import { TrendingUp, DollarSign, Users, Target, Award } from 'lucide-react';

export function WhyCare() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">Why Should You Care?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-slate-900">Wealth Creation</h3>
            </div>
            <p className="text-slate-600 mb-4">
              As the company grows, so does the value of your shares. This creates an opportunity
              for significant financial gains if the company succeeds.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2" />
                <span>Potential for substantial returns</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2" />
                <span>Tax-advantaged wealth building</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-slate-900">Ownership Mindset</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Being a shareholder aligns your interests with the company's success, fostering
              a culture of ownership and long-term thinking.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                <span>Direct stake in company success</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                <span>Long-term growth perspective</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-slate-900">Career Growth</h3>
            </div>
            <p className="text-slate-600 mb-4">
              ESOPs often come with increased responsibilities and opportunities for
              professional development.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                <span>Enhanced decision-making role</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                <span>Leadership opportunities</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-slate-900">Recognition</h3>
            </div>
            <p className="text-slate-600 mb-4">
              ESOPs are often awarded to key employees who have demonstrated value
              and commitment to the company.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2" />
                <span>Acknowledgment of contributions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2" />
                <span>Competitive advantage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}