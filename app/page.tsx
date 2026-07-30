import Image from "next/image";

export default function Home() {
  // 随机从 6 张赛场图中挑选一张背景
  const stadiumImages = [
    "/stadium-1.jpg",
    "/stadium-2.jpg",
    "/stadium-3.jpg",
    "/stadium-4.jpg",
    "/stadium-5.jpg",
    "/stadium-6.jpg",
  ];
  const randomBg = stadiumImages[Math.floor(Math.random() * stadiumImages.length)];

  return (
    <main className="min-h-screen bg-[#800020] text-white flex flex-col justify-between selection:bg-white selection:text-[#800020]">
      {/* 挂载自定义复古字体 AlfaSlabOne */}
      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'AlfaSlabOne';
          src: url('/AlfaSlabOne-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        .vintage-number {
          font-family: 'AlfaSlabOne', Impact, sans-serif;
        }
      `}} />

      {/* 顶部英雄区：收窄高度，使之更加紧凑 */}
      <div className="relative w-full pt-10 pb-8 px-4 flex flex-col items-center justify-center overflow-hidden border-b border-[#600018]">
        {/* 背景图层 */}
        <div className="absolute inset-0 z-0 opacity-35 mix-blend-luminosity contrast-125 scale-105">
          <Image
            src={randomBg}
            alt="Alabama Crimson Tide Stadium Archive"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* 顶部暗角与复古网格遮罩 */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/70 via-black/20 to-[#800020]"></div>

        {/* 核心内容区 */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* 年份数字：调整为更适合手机屏幕的高冲击力大字 */}
          <div className="mb-3 transform -rotate-1">
            <span className="block tracking-tight text-[90px] sm:text-[130px] leading-none text-white drop-shadow-[0_12px_20px_rgba(0,0,0,0.8)] vintage-number">
              2020
            </span>
          </div>

          {/* 副标题标签 */}
          <div className="tracking-[0.2em] uppercase text-[11px] sm:text-xs font-bold bg-black/50 px-4 py-1.5 backdrop-blur-sm border border-white/30 text-white/95 shadow-inner">
            ALABAMA CRIMSON TIDE ARCHIVE
          </div>
        </div>
      </div>

      {/* 中间核心文章/档案展示区：压缩上下留白，告别过度滚动 */}
      <div className="max-w-md sm:max-w-xl mx-auto px-4 py-8 sm:py-12 w-full">
        <h2 className="text-center tracking-[0.15em] uppercase text-[10px] text-white/70 mb-6 font-semibold border-b border-white/10 pb-2 inline-block mx-auto left-1/2 transform -translate-x-1/2 relative">
          featured archive
        </h2>

        <div className="bg-white text-stone-950 p-6 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative rounded-sm border-2 border-stone-200">
          <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-center mb-6 leading-snug text-stone-950 tracking-tight">
            “DeVonta Smith: Slim Reaper&apos;s Heisman”
          </h3>

          <p className="text-stone-800 text-base sm:text-lg leading-relaxed text-center font-serif mb-8 font-medium tracking-wide">
            Defying a generation of voters who ignored wide receivers, DeVonta Smith took home the Heisman Trophy by putting on a clinic of route-running wizardry and impossible sideline catches.
          </p>

          <div className="flex justify-center">
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#800020] hover:bg-[#600018] text-white font-serif font-bold tracking-widest text-xs uppercase px-8 py-3.5 transition-all duration-300 shadow-md hover:shadow-xl text-center inline-block rounded-sm border border-black"
            >
              share with friends
            </a>
          </div>
        </div>
      </div>

      {/* 底部版权与外链区：精简高度 */}
      <footer className="w-full bg-[#590016] py-8 px-4 border-t border-[#400010] text-center">
        <div className="max-w-md mx-auto space-y-3">
          <p className="font-serif italic text-[11px] tracking-widest text-white/80 uppercase font-bold">
            Notusual Edition
          </p>
          <p className="font-serif italic text-sm text-white/90 leading-relaxed font-medium">
            Love the vintage look? Grab our prints & goods.
          </p>
          <div>
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-serif tracking-widest text-xs uppercase underline underline-offset-4 hover:text-white/70 transition-colors font-bold"
            >
              Visit Our Etsy Shop
            </a>
          </div>
          <div className="pt-4 border-t border-white/10">
            <p className="text-[10px] tracking-widest uppercase text-white/50 font-semibold">
              © Notusual Football Archive
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
