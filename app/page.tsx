import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#800020] text-white flex flex-col justify-between selection:bg-white selection:text-[#800020]">
      {/* 顶部英雄区：黑白复古赛场大片背景 */}
      <div className="relative w-full min-h-[580px] flex flex-col items-center justify-center px-4 py-16 overflow-hidden border-b border-[#600018]">
        {/* 背景大图 */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity contrast-125">
          <Image
            src="/hero-bg.jpg"
            alt="Alabama Crimson Tide Stadium Archive"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* 顶部暗角与复古网格遮罩 */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/60 via-transparent to-[#800020]"></div>

        {/* 核心内容区 */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-4">
          
          {/* 极致加粗复古年份胶囊框 */}
          <div className="bg-white text-[#800020] px-8 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform -rotate-1 mb-6 border-2 border-black">
            <span className="block tracking-tighter text-7xl md:text-8xl leading-none font-black" style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>
              2020
            </span>
          </div>

          {/* 副标题标签 */}
          <div className="tracking-[0.3em] uppercase text-xs md:text-sm font-semibold bg-black/40 px-4 py-1.5 backdrop-blur-sm border border-white/20 text-white/90">
            Alabama Crimson Tide Archive
          </div>
        </div>
      </div>

      {/* 中间核心文章/档案展示区 */}
      <div className="max-w-2xl mx-auto px-6 py-16 w-full">
        <h2 className="text-center tracking-[0.2em] uppercase text-xs md:text-sm text-white/70 mb-8 font-medium">
          Alabama Crimson Tide
        </h2>

        <div className="bg-white text-stone-900 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-stone-900 relative">
          
          {/* 复古标签装饰 */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#800020] text-white px-4 py-1 text-xs uppercase tracking-widest font-bold border border-stone-900">
            Featured Archive
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-6 leading-snug text-stone-900">
            &ldquo;DeVonta Smith: Slim Reaper&apos;s Heisman&rdquo;
          </h3>

          <p className="text-stone-700 text-base md:text-lg leading-relaxed text-center font-serif mb-8">
            Defying a generation of voters who ignored wide receivers, DeVonta Smith took home the Heisman Trophy by putting on a clinic of route-running wizardry and impossible sideline catches.
          </p>

          <div className="flex justify-center">
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#800020] hover:bg-[#600018] text-white font-serif tracking-widest text-xs uppercase px-8 py-4 transition-all duration-300 shadow-md hover:shadow-xl border border-black text-center inline-block"
            >
              Share with Friends
            </a>
          </div>
        </div>
      </div>

      {/* 底部版权与外链区 */}
      <footer className="w-full bg-[#590016] py-12 px-6 border-t border-[#400010] text-center">
        <div className="max-w-md mx-auto space-y-4">
          <p className="font-serif italic text-xs tracking-widest text-white/80 uppercase">
            Notusual Edition
          </p>
          <p className="font-serif italic text-sm text-white/90">
            Love the vintage look? Grab our prints & goods.
          </p>
          <div>
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-serif tracking-widest text-sm uppercase underline underline-offset-8 hover:text-white/70 transition-colors"
            >
              Visit Our Etsy Shop
            </a>
          </div>
          <div className="pt-6 border-t border-white/10">
            <p className="text-[10px] tracking-widest uppercase text-white/50">
              © Notusual Football Archive
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
