import Image from "next/image";

export default function Home() {
  // 随机从 6 张赛场图中挑选一张背景，保持每次刷新都有新鲜感
  const stadiumImages = [
    "/stadium-1.jpg",
    "/stadium-2.jpg",
    "/stadium-3.jpg",
    "/stadium-4.jpg",
    "/stadium-5.jpg",
    "/stadium-6.jpg",
  ];
  // 随机选一张
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

      {/* 顶部英雄区：随机背景图轮换 */}
      <div className="relative w-full min-h-[580px] flex flex-col items-center justify-center px-6 py-16 overflow-hidden border-b border-[#600018]">
        {/* 背景图层（动态随机取自 stadium-1 到 6） */}
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
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mt-8">
          
          {/* 专属复古大字体年份数字，无白底，完美加粗 */}
          <div className="mb-6 transform -rotate-1">
            <span className="block tracking-tight text-[110px] md:text-[160px] leading-none text-white drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] vintage-number">
              2020
            </span>
          </div>

          {/* 副标题标签 */}
          <div className="tracking-[0.25em] uppercase text-xs md:text-sm font-bold bg-black/50 px-5 py-2.5 backdrop-blur-sm border border-white/30 text-white/95 shadow-inner">
            ALABAMA CRIMSON TIDE ARCHIVE
          </div>
        </div>
      </div>

      {/* 中间核心文章/档案展示区 */}
      <div className="max-w-xl mx-auto px-6 py-24 w-full">
        <h2 className="text-center tracking-[0.15em] uppercase text-[11px] text-white/70 mb-12 font-semibold border-b border-white/10 pb-4 inline-block mx-auto left-1/2 transform -translate-x-1/2 relative">
          featured archive
        </h2>

        <div className="bg-white text-stone-950 p-10 md:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative rounded-sm border-2 border-stone-200">
          <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-center mb-10 leading-tight text-stone-950 tracking-tight">
            “DeVonta Smith: Slim Reaper&apos;s Heisman”
          </h3>

          <p className="text-stone-800 text-lg md:text-xl leading-relaxed text-center font-serif mb-12 font-medium tracking-wide">
            Defying a generation of voters who ignored wide receivers, DeVonta Smith took home the Heisman Trophy by putting on a clinic of route-running wizardry and impossible sideline catches.
          </p>

          <div className="flex justify-center">
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#800020] hover:bg-[#600018] text-white font-serif font-bold tracking-widest text-sm uppercase px-12 py-5 transition-all duration-300 shadow-lg hover:shadow-2xl text-center inline-block rounded-sm border border-black"
            >
              share with friends
            </a>
          </div>
        </div>
      </div>

      {/* 底部版权与外链区 */}
      <footer className="w-full bg-[#590016] py-16 px-6 border-t border-[#400010] text-center mt-10">
        <div className="max-w-lg mx-auto space-y-6">
          <p className="font-serif italic text-xs tracking-widest text-white/80 uppercase font-bold">
            Notusual Edition
          </p>
          <p className="font-serif italic text-base text-white/90 leading-relaxed font-medium">
            Love the vintage look? Grab our prints & goods.
          </p>
          <div>
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-serif tracking-widest text-sm uppercase underline underline-offset-8 hover:text-white/70 transition-colors font-bold"
            >
              Visit Our Etsy Shop
            </a>
          </div>
          <div className="pt-8 border-t border-white/10">
            <p className="text-[11px] tracking-widest uppercase text-white/50 font-semibold">
              © Notusual Football Archive
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
