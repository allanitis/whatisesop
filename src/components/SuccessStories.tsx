import { Trophy } from 'lucide-react';

export function SuccessStories() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Trophy className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">ESOP Success Stories</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Joe" 
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Meet Joe: The Surfboard Collector</h3>
            <p className="text-slate-600">
              Joe joined a tech startup in 2018. When the company went public in 2022, 
              his ESOP was worth enough to buy his dream surfboard collection and still 
              have plenty left for investment.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Sarah" 
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Sarah's Startup Journey</h3>
            <p className="text-slate-600">
              Sarah's company was acquired after 5 years. Her patience through the vesting 
              period paid off, turning her ESOP into a down payment for her dream house.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}