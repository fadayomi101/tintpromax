import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

const ColorDot = () => (
  <span className="relative inline-block w-4 h-4 rounded-full shrink-0 mx-1.5 align-middle shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ transform: 'translateY(-1px)' }}>
    <span className="absolute inset-0 rounded-full animate-pulse-color" />
    <span 
      className="absolute inset-0 rounded-full pointer-events-none" 
      style={{ 
        background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.6) 100%)',
        boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.8), inset 2px 2px 4px rgba(255,255,255,0.8)'
      }} 
    />
  </span>
);

const GlowButton = ({ icon: Icon, text, href }: { icon: any, text: string, href: string }) => {
  return (
    <a 
      href={href}
      className="relative flex items-center p-1.5 md:p-2 pr-8 md:pr-10 gap-4 md:gap-6 rounded-[50px] bg-[#1a1a1c]/40 backdrop-blur-[24px] hover:bg-[#27272a]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group w-[85%] max-w-[280px] md:max-w-[340px] md:w-auto md:min-w-[280px] shadow-[0_12px_40px_rgba(0,0,0,0.8)] mx-auto md:mx-0 overflow-hidden border-[3px] border-white/30"
    >
      {/* 3D glass edge effects */}
      <div className="absolute inset-0 rounded-[50px] pointer-events-none shadow-[inset_0_2px_3px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.6)]" />

      {/* Icon Circle Container */}
      <div className="relative flex items-center justify-center w-[56px] h-[56px] md:w-[72px] md:h-[72px] rounded-full shrink-0 ml-1 shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden bg-black">
        
        {/* Glow - blurred ring 1 (Warm) */}
        <div 
          className="absolute w-[150%] h-[150%] rounded-full blur-[8px] opacity-80 group-hover:opacity-100 transition-opacity animate-flow1 mix-blend-screen" 
          style={{ 
            background: 'radial-gradient(circle, rgba(255, 0, 60, 1) 0%, transparent 60%)',
            left: '-20%', top: '-20%'
          }} 
        />
        {/* Glow - blurred ring 2 (Cool) */}
        <div 
          className="absolute w-[150%] h-[150%] rounded-full blur-[8px] opacity-80 group-hover:opacity-100 transition-opacity animate-flow2 mix-blend-screen" 
          style={{ 
            background: 'radial-gradient(circle, rgba(0, 80, 255, 1) 0%, transparent 60%)',
            right: '-20%', bottom: '-20%'
          }} 
        />
        {/* Glow - blurred ring 3 (Yellow) */}
        <div 
          className="absolute w-[120%] h-[120%] rounded-full blur-[8px] opacity-80 group-hover:opacity-100 transition-opacity animate-flow3 mix-blend-screen" 
          style={{ 
            background: 'radial-gradient(circle, rgba(255, 180, 0, 1) 0%, transparent 60%)',
            left: '20%', bottom: '-10%'
          }} 
        />
        
        {/* Base Black Ring (Center cut out) */}
        <div className="absolute inset-[3px] rounded-full bg-gradient-to-b from-[#404044] to-[#121214] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_6px_rgba(0,0,0,0.8),0_4px_12px_rgba(0,0,0,1)] z-10">
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#ffffff] drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" strokeWidth={2.5} />
        </div>
      </div>

      {/* Text */}
      <span className="text-[#ffffff] font-semibold text-[18px] md:text-[22px] tracking-wide whitespace-nowrap z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-95 group-hover:opacity-100 transition-opacity">
        {text}
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Images */}
      <div className="fixed inset-0 z-0 bg-black pointer-events-none overflow-hidden">
        {/* Mobile Background */}
        <div className="absolute inset-0 md:hidden animate-zoom-in-out">
          <img src="https://i.ibb.co/Y4R22BzP/photo-5974136373453196801-y.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </div>
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0 animate-zoom-in-out bg-black">
          <img src="https://i.ibb.co/Hpx6YPNB/hero-for-tint.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black/30 from-[0%] via-[30%] to-[100%]" />
        </div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-[15vh] pb-12 px-4 justify-center md:justify-start md:pt-[30vh]">

        {/* Heading */}
        <h2 className="absolute top-[10vh] md:static font-sora text-[12px] font-medium text-center text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:mb-8 max-w-xl px-4 tracking-wide w-full left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto uppercase leading-loose md:leading-normal z-20">
          <ColorDot />Best car tinting expert in lagos , ppf  , vinyl wrap and more....
        </h2>

        {/* Buttons Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 w-full max-w-6xl mx-auto">
          <GlowButton icon={Phone} text="Call" href="tel:08140429402" />
          <GlowButton icon={MessageCircle} text="WhatsApp" href="https://wa.me/2348140429402" />
          <GlowButton icon={Instagram} text="Instagram" href="https://www.instagram.com/tintpromax?igsh=MWV5bzZ6MTVkZm11Zw==" />
        </div>

      </div>
    </div>
  );
}


