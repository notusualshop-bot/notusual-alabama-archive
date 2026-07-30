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

      {/* 顶部英雄区：纯黑白图片，硬裁切，无红色遮罩覆盖 */}
      <div className="relative w-full pt-8 pb-6 px-4 flex flex-col items-center justify-center overflow-hidden border-b-4 border-[#50000e]">
        {/* 背景图层：纯黑白、高对比度、无红色混色 */}
        <div className="absolute inset-0 z-0 grayscale contrast-150 brightness-90">
          <Image
            src={randomBg}
            alt="Alabama Crimson Tide Stadium Archive"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* 硬裁切分界底纹，不用渐变，直接切断 */}
        <div className="absolute inset-0 z-1 bg-black/20"></div>

        {/* 核心内容区 */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* 年份数字：酒红色，无阴影，硬朗复古 */}
          <div className="mb-2 transform -rotate-1">
            <span className="block tracking-tight text-[100px] sm:text-[140px] leading-none text-[#800020] vintage-number">
              2020
            </span>
          </div>

          {/* 副标题标签：对齐图3的质感 */}
          <div className="tracking-[0.25em] uppercase text-[10px] sm:text-xs font-bold bg-[#600013] px-5 py-1.5 border border-white/20 text-white shadow-none">
            ALABAMA CRIMSON TIDE ARCHIVE
          </div>
        </div>
      </div>

      {/* 中间核心文章/档案展示区：对齐图3的紧凑边距 */}
      <div className="max-w-md sm:max-w-lg mx-auto px-4 py-8 w-full">
        <h2 className="text-center tracking-[0.2em] uppercase text-[10px] text-white/70 mb-5 font-semibold border-b border-white/20 pb-2 inline-block mx-auto left-1/2 transform -translate-x-1/2 relative">
          featured archive
        </h2>

        <div className="bg-white text-stone-950 p-6 sm:p-10 shadow-[0_15px_30px_rgba(0,0,0,0.5)] relative rounded-none border-2 border-stone-900">
          <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-center mb-5 leading-snug text-stone-950 tracking-tight">
            “DeVonta Smith: Slim Reaper&apos;s Heisman”
          </h3>

          <p className="text-stone-800 text-sm sm:text-base leading-relaxed text-center font-serif mb-8 font-medium tracking-wide">
            Defying a generation of voters who ignored wide receivers, DeVonta Smith took home the Heisman Trophy by putting on a clinic of route-running wizardry and impossible sideline catches.
          </p>

          <div className="flex justify-center">
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#800020] hover:bg-[#600018] text-white font-serif font-bold tracking-widest text-xs uppercase px-8 py-3.5 transition-all duration-300 text-center inline-block rounded-none border border-black shadow-sm"
            >
              SHARE WITH FRIENDS
            </a>
          </div>
        </div>
      </div>

      {/* 底部版权与外链区 */}
      <footer className="w-full bg-[#50000e] py-8 px-4 border-t border-[#3a000a] text-center">
        <div className="max-w-md mx-auto space-y-2.5">
          <p className="font-serif italic text-[11px] tracking-widest text-white/80 uppercase font-bold">
            Notusual Edition
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
            Love the vintage look? Grab our prints & goods.
          </p>
          <div>
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-serif tracking-widest text-xs uppercase underline underline-offset-4 hover:text-white/70 transition-colors font-bold"
            >
              VISIT OUR ETSY SHOP
            </a>
          </div>
          <div className="pt-3 border-t border-white/10">
            <p className="text-[10px] tracking-widest uppercase text-white/50 font-semibold">
              © NOTUSUAL FOOTBALL ARCHIVE
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
