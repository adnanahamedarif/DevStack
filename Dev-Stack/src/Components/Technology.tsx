import React, { use } from 'react';
import type { Itechnology } from '../Type/techType';

interface TechnologyProps {
  technologyPromise: Promise<Itechnology[]>;
}

const Technology = ({ technologyPromise }: TechnologyProps) => {
  const technology = use(technologyPromise);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-600">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">


        {/* Technology Cards */}

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technology.map((item) => (
            <div
              key={item.id || item.name}
              className="card bg-white border border-slate-100 shadow-sm rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain"
                    />
                  </div>
                  {item.badge && (
                    <span className="badge bg-sky-50 text-sky-500 border-none font-medium px-4 py-3 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-700 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-gray-700 pt-4 border-t border-slate-100 mb-6">
                  <span className="bg-slate-100 text-gray-700 px-3 py-1.5 rounded-md font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {item.difficulty}
                  </span>
                  <div className="flex items-center gap-1 font-semibold">
                    <span className="text-amber-400">★</span>
                    <span>{item.rating}</span>
                  </div>
                </div>

                <button className="btn w-full bg-black text-white rounded-xl">
                  Add to Stack
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;