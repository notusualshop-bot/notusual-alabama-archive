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
    <main className="min-h-screen bg-[#9e1b32] text-white flex flex-col justify-between selection:bg-white selection:text-[#9e1b32]">
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

      {/* 顶部：品牌与档案声明区块（缩小间距） */}
      <header className="w-full pt-4 pb-2 px-4 text-center">
        <div className="max-w-md mx-auto space-y-0.5">
          <p className="tracking-[0.25em] uppercase text-[10px] text-white/70 font-semibold">
            EST. ARCHIVE
          </p>
          <p className="tracking-[0.2em] uppercase text-xs text-white font-bold">
            NOTUSUAL
          </p>
          <p className="tracking-[0.15em] uppercase text-xs text-white/90 font-serif">
            ALABAMA CRIMSON TIDE DAILY
          </p>
        </div>
      </header>

      {/* 中间核心信息大卡片 */}
      <div className="max-w-md sm:max-w-lg mx-auto px-4 py-2 w-full">
        <div className="bg-white text-stone-950 shadow-[0_25px_50px_rgba(0,0,0,0.6)] overflow-hidden border-2 border-stone-900 rounded-none">
          
          {/* 卡片上半部分：黑白图片背景 + 叠印层 */}
          <div className="relative w-full h-[220px] sm:h-[250px] flex flex-col items-center justify-center overflow-hidden border-b-2 border-stone-900">
            {/* 纯黑白图片背景 */}
            <div className="absolute inset-0 z-0 grayscale contrast-150 brightness-90">
              <Image
                src={randomBg}
                alt="Alabama Crimson Tide Stadium Archive"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            {/* 压暗遮罩确保文字清晰 */}
            <div className="absolute inset-0 z-1 bg-black/10"></div>

            {/* 内容区：年份放大，改回校色酒红，严格对齐标杆图结构 */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <p className="tracking-[0.2em] uppercase text-[10px] sm:text-xs font-bold text-stone-900 mb-1">
                NO. 2020 — ALABAMA CRIMSON TIDE EDITION
              </p>
              <p className="tracking-[0.15em] uppercase text-[10px] text-stone-800 font-semibold mb-1">
                EVERY CORNER TELLS A STORY
              </p>
              <div className="transform -rotate-1">
                <span className="block tracking-tight text-[85px] sm:text-[110px] leading-none text-[#9e1b32] vintage-number drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
                  2020
                </span>
              </div>
            </div>
          </div>

          {/* 卡片下半部分：标题、正文与分享按钮 */}
          <div className="p-6 sm:p-8 bg-white text-center">
            <h3 className="text-2xl sm:text-3xl font-serif font-extrabold mb-4 leading-snug text-stone-950 tracking-tight">
              &ldquo;The Houndstooth Hat Legacy&rdquo;
            </h3>

            <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-serif mb-7 font-medium tracking-wide">
              &ldquo;Beginning in the 1950s and 1960s, Paul &apos;Bear&apos; Bryant&apos;s signature black-and-white houndstooth fedora became an enduring visual symbol of southern football authority.&rdquo;
            </p>

            <div className="flex justify-center">
              <a
                href="https://www.etsy.com/shop/notusualcreative"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9e1b32] hover:bg-[#7a1325] text-white font-serif font-bold tracking-widest text-xs uppercase px-8 py-3.5 transition-all duration-300 text-center inline-block rounded-none border border-black shadow-sm"
              >
                SHARE WITH FRIENDS
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 底部：颜色与主色调一致，高度瘦身 */}
      <footer className="w-full bg-[#9e1b32] py-5 px-4 border-t border-[#7a1325] text-center mt-2">
        <div className="max-w-md mx-auto space-y-1.5">
          <p className="font-serif italic text-[10px] tracking-widest text-white/80 uppercase font-bold">
            NOTUSUAL EDITION
          </p>
          <p className="font-serif italic text-xs text-white/90 leading-relaxed font-medium">
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
          <div className="pt-2 border-t border-white/10">
            <p className="text-[9px] tracking-widest uppercase text-white/50 font-semibold">
              © NOTUSUAL FOOTBALL ARCHIVE
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
