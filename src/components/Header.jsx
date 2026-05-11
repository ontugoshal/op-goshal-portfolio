import { useState, useEffect } from 'react';
import { MapPin, Clock } from 'lucide-react';

const Header = ({ showOnlyMeta, showOnlyProfile }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Dhaka'
  });

  if (showOnlyMeta) {
    return (
      <div className="flex w-full h-12">
        <div className="flex-1 flex items-center gap-2 px-6 border-r border-dashed border-border-subtle">
          <MapPin className="w-3.5 h-3.5 text-text-muted" />
          <span className="text-[11px] font-bold text-text-muted tracking-widest uppercase">Dhaka, Bangladesh</span>
        </div>
        <div className="flex-1 flex justify-end items-center gap-2 px-6">
          <Clock className="w-3.5 h-3.5 text-text-muted" />
          <span className="text-[11px] font-bold text-text-muted tracking-widest uppercase">{formattedTime} GMT+6</span>
        </div>
      </div>
    );
  }

  if (showOnlyProfile) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dweciloal/image/upload/v1778493543/617206410_18305666797259012_2835634939535950975_n_wlhudq.jpg" 
            alt="OP Goshal"
            className="w-32 h-32 rounded-[20px] border border-border-subtle object-cover"
          />
        </div>
        <h1 className="text-[32px] font-extrabold text-text-primary mt-4 tracking-[-0.03em]">
          OP Goshal
        </h1>
        <p className="text-[16px] text-text-muted mt-1 font-medium tracking-tight">
          CEO & Founder at <a href="https://www.citygfx.agency" target="_blank" rel="noopener noreferrer" className="font-bold text-text-primary hover:underline">CityGfx</a>.
        </p>
      </div>
    );
  }

  return null;
};

export default Header;
