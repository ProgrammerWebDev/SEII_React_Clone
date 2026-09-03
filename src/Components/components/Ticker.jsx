import React from 'react';

const tickerItems = [
  'SUSTAINABILITY',
  'CHILD WELFARE',
  'NUTRITION',
  'EMPOWERMENT',
  'NIGERIA',
  'FUTURE',
  'EDUCATION',
  'ENVIRONMENT',
  'HEALTH',
  'COMMUNITY',
];

export const Ticker = () => {
  return (
    <div className="w-full dark:bg-slate-900 bg-slate-50 overflow-hidden py-4 select-none">
      <div className="flex w-max animate-marquee">
        {/* Render twice for a seamless infinite loop */}
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            {tickerItems.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-slate-900 dark:text-slate-50 font-extrabold tracking-widest text-sm sm:text-base px-6 uppercase">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;