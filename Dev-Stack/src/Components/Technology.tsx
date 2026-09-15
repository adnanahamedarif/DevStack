import React, { use, useState } from 'react';
import type { Itechnology } from '../Type/techType';
import { toast } from 'react-toastify';


interface TechnologyProps {
  technologyPromise: Promise<Itechnology[]>;
}

const Technology = ({ technologyPromise }: TechnologyProps) => {
  const technology = use(technologyPromise);

  const [selectedTech, setSelectedTech] = useState<Itechnology[]>([]);

  const handleAddToStack = (tech: Itechnology) => {
    const isAlreadyAdded = selectedTech.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.error(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedTech((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to stack!`);
  };



  const handleRemoveFromStack = (id: string, name?: string) => {
    setSelectedTech((prev) => prev.filter((item) => item.id !== id));
    toast.error(`${name || 'Item'} removed from stack`);
  };

  const handleClearAll = () => {
    setSelectedTech([]);
    toast.error('All technologies removed from stack');
  };



  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Explore the <span className="text-pink-600">Technologies</span></h2>
        <p className="mt-2 text-gray-800">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">


        {/* Technology Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technology.map((item) => {
            
            
            const isAdded = selectedTech.some((tech) => tech.id === item.id);

            return (
              <div
                key={item.id || item.name}
                className="card bg-white border border-slate-100 shadow-sm rounded-3xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    {item.badge && (
                      <span className="badge bg-sky-50 text-sky-500 border-none font-medium px-4 py-3 rounded-full text-xs"> {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-700 mb-3"> {item.name} </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6"> {item.description}</p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-800 pt-4 border-t border-slate-100 mb-6">
                    <span className="bg-slate-100 text-gray-800 px-3 py-1.5 rounded-md font-medium"> {item.category} </span>
                    <span className="text-gray-500 font-medium"> {item.difficulty} </span>
                    <div className="flex items-center gap-1 font-semibold">
                      <span className="text-amber-400">★</span>
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToStack(item)}
                    disabled={isAdded}
                    className={`btn w-full rounded-xl transition-all ${
                      isAdded
                        ? 'bg-pink-100 text-pink-600 border-pink cursor-not-allowed '
                        : 'bg-black text-white'
                    }`}
                  >
                    {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>



        {/* Your Stack  */}
        <div>
          <h3 className="text-xl font-bold text-black">Your Stack</h3>
          <p className="text-xs text-gray-800 mt-1 mb-6">
            {selectedTech.length} Technology Selected 
          </p>

          <div className="mb-6 space-y-3 rounded-2xl border border-gray-200  ">
            {selectedTech.length === 0 ? (
              <p className="text-sm text-gray-800 py-4 text-center">
                No technologies added yet.
              </p>
            ) : (
              selectedTech.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-xl "
                >
                  <div className="flex items-center gap-3">
                    <img src={tech.icon} alt={tech.name}className="w-8 h-8 object-contain"/>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 leading-none">
                        {tech.name}
                      </h4>
                      <span className="text-[10px] text-gray-800 "> {tech.category}</span>
                    </div>
                  </div>
                  <button onClick={() => handleRemoveFromStack(tech.id, tech.name)} className="text-gray-800  hover:text-rose-500 p-1 rounded-lg transition-colors"aria-label="" >
                     ✕ 
                  </button>
                </div>
              ))
            )}
          </div>
          {selectedTech.length > 0 && (
            <button onClick={handleClearAll}  className="btn btn-outline border-rose-200 text-rose-500 hover:bg-rose-50 hover:border-rose-300 w-full rounded-xl font-medium normal-case" >
              Remove All 
            </button>
          )}
        </div>
          
        </div>


    </div>
  );
};

export default Technology;