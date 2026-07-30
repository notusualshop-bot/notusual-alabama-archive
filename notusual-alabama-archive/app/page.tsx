'use client'

import React, { useState, useEffect } from 'react'
import { alabama100FinalProductionReady, Trivia } from '@/lib/trivia'

export default function AlabamaTriviaPage() {
  const [currentTrivia, setCurrentTrivia] = useState<Trivia | null>(null)
  const [shared, setShared] = useState(false)
  const [bgSrc, setBgSrc] = useState('/stadium-1.jpg')

  useEffect(() => {
    const STORAGE_KEY_POOL = 'notusual_alabama_pool_v1'
    const STORAGE_KEY_LAST_DAY = 'notusual_alabama_last_day'
    const STORAGE_KEY_CURRENT_INDEX = 'notusual_alabama_current_index'

    try {
      const stadiumImages = [
        '/stadium-1.jpg',
        '/stadium-2.jpg',
        '/stadium-3.jpg',
        '/stadium-4.jpg',
        '/stadium-5.jpg',
        '/stadium-6.jpg'
      ]
      const randomIdx = Math.floor(Math.random() * stadiumImages.length)
      setBgSrc(stadiumImages[randomIdx])

      const todayStr = new Date().toISOString().split('T')[0]
      const lastDayStr = localStorage.getItem(STORAGE_KEY_LAST_DAY)
      
      let pool: number[] = JSON.parse(localStorage.getItem(STORAGE_KEY_POOL) || '[]')
      let currentIndex: number = JSON.parse(localStorage.getItem(STORAGE_KEY_CURRENT_INDEX) ?? '-1')

      if (!Array.isArray(pool) || pool.length === 0) {
        pool = Array.from({ length: alabama100FinalProductionReady.length }, (_, i) => i)
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[pool[i], pool[j]] = [pool[j], pool[i]]
        }
      }

      if (lastDayStr !== todayStr) {
        currentIndex = pool.shift() ?? 0
        localStorage.setItem(STORAGE_KEY_POOL, JSON.stringify(pool))
        localStorage.setItem(STORAGE_KEY_LAST_DAY, todayStr)
        localStorage.setItem(STORAGE_KEY_CURRENT_INDEX, JSON.stringify(currentIndex))
      } else {
        if (currentIndex === -1 || currentIndex >= alabama100FinalProductionReady.length) {
          currentIndex = pool.shift() ?? 0
          localStorage.setItem(STORAGE_KEY_POOL, JSON.stringify(pool))
          localStorage.setItem(STORAGE_KEY_LAST_DAY, todayStr)
          localStorage.setItem(STORAGE_KEY_CURRENT_INDEX, JSON.stringify(currentIndex))
        }
      }

      setCurrentTrivia(alabama100FinalProductionReady[currentIndex])
    } catch (e) {
      const fallbackIndex = Math.floor(Math.random() * alabama100FinalProductionReady.length)
      setCurrentTrivia(alabama100FinalProductionReady[fallbackIndex])
    }
  }, [])

  const handleShare = () => {
    if (navigator.share && currentTrivia) {
      navigator.share({
        title: `Alabama Crimson Tide - ${currentTrivia.headline}`,
        text: `"${currentTrivia.headline}" — Check out this Alabama football legend on NOTUSUAL Edition.`,
        url: window.location.href,
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    }
  }

  if (!currentTrivia) return null

  return (
    <div className="min-h-screen bg-[#9E1B32] text-white flex flex-col justify-between select-none font-sans">
      
      {/* 顶部：黑白球场底图 + 经典的阿拉巴马潮红色系过渡 */}
      <div className="relative w-full h-[38vh] overflow-hidden flex items-center justify-center bg-black">
        <img 
          src={bgSrc} 
          alt="Stadium Background" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-150 brightness-90 opacity-60"
        />
        {/* 顶部渐变蒙版，完美过渡到官方正宗的阿拉巴马潮红 #9E1B32 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#9E1B32]" />

        {/* 常青藤大学体育厚重粗体年份：向右边图鉴看齐的超强复古视觉冲击 */}
        <div className="relative z-10 text-center px-4 mt-2">
          <h1 className="text-7xl md:text-8xl font-black tracking-normal text-[#9E1B32] drop-shadow-[0_4px_4px_rgba(0,0,0,1)] drop-shadow-[0_10px_14px_rgba(0,0,0,0.95)] font-mono uppercase scale-y-125 transform inline-block bg-white/95 px-4 py-0.5 rounded-sm">
            {currentTrivia.year}
          </h1>
          <p className="text-xs md:text-sm font-black tracking-[0.35em] uppercase text-white mt-4 drop-shadow-md">
            ALABAMA CRIMSON TIDE ARCHIVE
          </p>
        </div>
      </div>

      <div className="text-center py-1.5 bg-[#9E1B32]">
        <h2 className="text-sm md:text-base font-serif tracking-[0.25em] uppercase text-white font-bold">
          Alabama Crimson Tide
        </h2>
      </div>

      {/* 主体：纯白复古收藏级卡片 */}
      <div className="px-5 pb-6 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white text-gray-900 rounded-none shadow-2xl p-8 border border-gray-200 flex flex-col justify-between min-h-[300px]">
          
          <div className="space-y-4 text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold leading-snug text-gray-900">
              "{currentTrivia.headline}"
            </h3>
            <p className="text-base md:text-lg font-serif text-gray-700 leading-relaxed text-left">
              {currentTrivia.body}
            </p>
          </div>

          <div className="mt-8 pt-2">
            <button 
              onClick={handleShare}
              className="w-full py-3.5 bg-[#9E1B32] hover:bg-[#801427] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {shared ? 'LINK COPIED!' : 'SHARE WITH FRIENDS'}
            </button>
          </div>

        </div>
      </div>

      {/* 底部品牌栏 */}
      <footer className="bg-[#801427] py-6 px-4 text-center border-t border-white/15 space-y-1.5">
        <p className="text-[10px] tracking-[0.25em] uppercase text-white/70 font-sans">
          NOTUSUAL EDITION
        </p>
        <p className="text-xs font-serif italic text-white/90">
          Love the vintage look? Grab our prints & goods.
        </p>
        <div className="pt-0.5">
          <a 
            href="https://www.etsy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-white underline decoration-1 underline-offset-4 hover:text-gray-200 transition-colors"
          >
            VISIT OUR ETSY SHOP
          </a>
        </div>
        <p className="text-[9px] tracking-[0.2em] text-white/40 pt-3 uppercase">
          © NOTUSUAL FOOTBALL ARCHIVE
        </p>
      </footer>

    </div>
  )
}