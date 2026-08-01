"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// 请在这里填入你们完整的 BAMA 历史文案数据
const bamaArchives = [
  {
    id: 1,
    year: "2020",
    era: "2020 National Championship Season",
    headline: "The Houndstooth Hat Legacy",
    body: "Beginning in the 1950s and 1960s, Paul 'Bear' Bryant's signature black-and-white houndstooth fedora became an enduring visual symbol of southern football authority. It represents a standard of excellence that defines the Crimson Tide.",
  },
  {
    id: 2,
    year: "1979",
    era: "January 1, 1979 • Sugar Bowl",
    headline: "The Goal Line Stand",
    body: "In one of the most iconic defensive sequences in college football history, Alabama's defense stopped Penn State on fourth-and-inches to preserve a 14-7 victory, securing the national championship for Bear Bryant.",
  },
  {
    id: 3,
    year: "2018",
    era: "January 8, 2018 • National Championship",
    headline: "Second and Twenty-Six",
    body: "Trailing in overtime of the national championship game, freshman quarterback Tua Tagovailoa connected with DeVonta Smith on a stunning 41-yard touchdown pass on 2nd-and-26, securing a legendary 26-23 victory.",
  },
  // ... 请在此处继续粘贴你们其它的 BAMA 档案数据 ...
];

export default function Home() {
  const [selectedArchive, setSelectedArchive] = useState(bamaArchives[0]);
  const [shareButtonText, setShareButtonText] = useState("SHARE WITH THE TIDE FAITHFUL");

  // 第一次进入页面时随机抽选一条
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bamaArchives.length);
    setSelectedArchive(bamaArchives[randomIndex]);
  }, []);

  // 点击按钮无限随机刷新（循环推送）
  const handleRandomShuffle = () => {
    const randomIndex = Math.floor(Math.random() * bamaArchives.length);
    setSelectedArchive(bamaArchives[randomIndex]);
  };

  // 分享功能：优先调用原生分享，降级为复制链接并提示
  const handleShare = async () => {
    const shareData = {
      title: `Bama Football Story: ${selectedArchive.headline}`,
      text: selectedArchive.body,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // 用户取消或不支持时走降级复制
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareButtonText("LINK COPIED! SHARE WITH FRIENDS");
      setTimeout(() => {
        setShareButtonText("SHARE WITH THE TIDE FAITHFUL");
      }, 2500);
    } catch (err) {
      alert("Share failed, please copy link manually.");
    }
  };

  // 随机从 6 张赛场图中挑选背景
  const stadiumImages = [
    "/stadium-1.jpg",
    "/stadium-2.jpg",
    "/stadium-3.jpg",
    "/stadium-4.jpg",
    "/stadium-5.jpg",
    "/stadium-6.jpg",
  ];
  // 确保水合（Hydration）一致性，根据选中档案的 ID 来锁定图片索引
  const randomBg = stadiumImages[selectedArchive.id % stadiumImages.length];

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

      {/* 顶部：品牌与档案声明区块 */}
      <header className="w-full pt-3 pb-2 px-4 text-center">
        <div className="max-w-md mx-auto space-y-0.5">
          <p className="tracking-[0.3em] uppercase text-[10px] text-white/70 font-light">
            EST. ARCHIVE • ROLL TIDE
          </p>
          <p className="tracking-[0.25em] uppercase text-xs text-white/90 font-medium">
            NOTUSUAL CREATIVE STUDIO
          </p>
          <p className="tracking-[0.2em] uppercase text-xs text-white/70 font-sans font-light">
            BAMA FOOTBALL STORY
          </p>
        </div>
      </header>

      {/* 中间核心信息区域：经典的错落堆叠大卡片 */}
      <div className="max-w-md sm:max-w-lg mx-auto px-4 pt-1 pb-4 w-full relative">
        
        {/* 背景堆叠层 2（最底层卡片阴影位） */}
        <div className="absolute inset-x-4 top-4 bottom-2 bg-stone-300 border-2 border-stone-900 translate-y-3 translate-x-2 pointer-events-none"></div>
        {/* 背景堆叠层 1（中间层卡片） */}
        <div className="absolute inset-x-4 top-2 bottom-1 bg-stone-100 border-2 border-stone-900 translate-y-1.5 translate-x-1 pointer-events-none"></div>

        {/* 主卡片（最顶层） */}
        <div className="relative bg-white text-stone-950 overflow-hidden border-2 border-stone-900 rounded-none">
          
          {/* 卡片上半部分：黑白图片背景 + 叠印层 */}
          <div className="relative w-full h-[220px] sm:h-[250px] flex flex-col items-center justify-center overflow-hidden border-b-2 border-stone-900">
            {/* 纯黑白图片背景 */}
            <div className="absolute inset-0 z-0 grayscale contrast-150 brightness-90">
              <Image
                src={randomBg}
                alt="Bama Football Stadium Archive"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            {/* 压暗遮罩确保文字清晰 */}
            <div className="absolute inset-0 z-1 bg-black/20"></div>

            {/* 内容区 */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-1">
              <p className="tracking-[0.15em] uppercase text-[10px] sm:text-xs font-bold text-stone-900 bg-white/90 px-2 py-0.5 border border-stone-900">
                {selectedArchive.era}
              </p>
              <div className="transform -rotate-1 mt-1">
                <span className="block tracking-tight text-[75px] sm:text-[100px] leading-none text-[#9e1b32] vintage-number drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
                  {selectedArchive.year}
                </span>
              </div>
            </div>
          </div>

          {/* 卡片下半部分：标题、正文与分享/刷新按钮 */}
          <div className="p-6 sm:p-8 bg-white text-center">
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold mb-3 leading-snug text-stone-950 tracking-tight">
              &ldquo;{selectedArchive.headline}&rdquo;
            </h3>

            <p className="text-stone-800 text-xs sm:text-sm leading-relaxed font-serif mb-7 font-medium tracking-wide">
              &ldquo;{selectedArchive.body}&rdquo;
            </p>

            {/* 按钮区域 */}
            <div className="flex flex-col space-y-3 items-center">
              {/* 上方按钮：无线刷新档案 (BAMA深红色) */}
              <button
                onClick={handleRandomShuffle}
                className="w-full bg-[#9e1b32] hover:bg-[#7a1325] text-white font-serif font-bold tracking-widest text-xs uppercase py-3.5 transition-all duration-300 text-center rounded-none border border-black shadow-sm cursor-pointer"
              >
                NEXT CHAPTER IN BAMA HISTORY
              </button>

              {/* 下方按钮：分享给好友 */}
              <button
                onClick={handleShare}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-900 font-serif font-bold tracking-widest text-xs uppercase py-3 transition-all duration-300 text-center rounded-none border border-black shadow-sm cursor-pointer"
              >
                {shareButtonText}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 底部：无缝衔接与法律免责声明 */}
      <footer className="w-full bg-[#9e1b32] pt-6 pb-8 px-4 text-center">
        <div className="max-w-md mx-auto space-y-1.5">
          <p className="font-serif italic text-[10px] tracking-widest text-white/80 uppercase font-bold">
            NOTUSUAL EDITION • ROLL TIDE
          </p>
          <p className="font-serif italic text-xs text-white/90 leading-relaxed font-medium">
            Love the vintage Bama look? Grab our prints & goods.
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
          <div className="pt-2 border-t border-white/10 space-y-1">
            <p className="text-[9px] tracking-widest uppercase text-white/50 font-semibold">
              © NOTUSUAL FOOTBALL ARCHIVE
            </p>
            {/* 法律免责声明 */}
            <p className="text-[8px] tracking-wider uppercase text-white/40 font-light">
              Independent studio. Not affiliated with the University of Alabama.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
