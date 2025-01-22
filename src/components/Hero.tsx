import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Understanding Your ESOP
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Your guide to Employee Stock Ownership Plans in startups
        </p>
        <ChevronDown className="w-8 h-8 mx-auto text-blue-600 animate-bounce" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}