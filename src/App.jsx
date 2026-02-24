import React, { useState } from 'react';
import { 
  Plane, Car, ShoppingBag, MapPin, Utensils, 
  Camera, Calendar, CheckSquare, Info, Ship, 
  Clock, Sun, Coffee, ShoppingCart, Gem,
  Square, CheckSquare as CheckSquareIcon,
  ChevronRight, ArrowLeft, Heart, Bookmark,
  StickyNote, Star, Sparkles, Anchor, ParkingCircle,
  Smartphone, Timer, Landmark, Bus, Wand2
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('cover');
  const [activeTab, setActiveTab] = useState('checklist');
  
  const [checkedItems, setCheckedItems] = useState({
    '護照 & 國際駕照 & 台汽機照': false,
    '台幣 10000 & 旅遊險 & 簽證': false,
    '絕緣膠帶 & 行利束帶 & 扣環': false,
    '行動電源*2 & 原廠線 & 轉接頭': false,
    '可淘汰衣物襪子 & 牙刷': false,
    '下載 Airbnb/機票/租車檔案': false,
    'Wowpass 下載/儲值/綁定': false,
    'KKday/Klook Sim卡預約': false
  });

  const [tripTasks, setTripTasks] = useState({
    'rental_confirm': false,
    'udo_wowpass': false,
    'udo_forms': false,
    'udo_passport_check': false,
    'udo_return_ticket': false,
    'sisters_reservation': false
  });

  const toggleItem = (item) => setCheckedItems(p => ({...p, [item]: !p[item]}));
  const toggleTripTask = (id) => setTripTasks(p => ({...p, [id]: !p[id]}));

  const days = [
    {
      id: 'day1',
      title: 'DAY 1 (03/23)',
      subtitle: '濟州島，我們來了！',
      icon: '✈️',
      dailyNote: '✈️ 今天要移動比較久，穿寬鬆舒適最重要！領車時記得張大眼核對時間，別讓司機歐爸等太久唷！',
      schedule: [
        { time: '17:25', activity: '降落 ✈️ 濟州機場', detail: '辦理入境手續。' },
        { 
          time: '18:30', 
          activity: '天使租車 🚗', 
          isTask: true,
          taskId: 'rental_confirm',
          taskText: '確認承租時間 3/23 18:30 - 3/29 08:00',
          detail: '1樓5號出口5區14號。' 
        },
        { time: '19:30', activity: 'Check-in Sodam Pension', detail: '🏠 放置行李，稍作休息。' },
        { time: '20:30', activity: '偶來市場巡禮 🥯', detail: '老奶奶橘子麻糬 (NT$2100)、炸壽司、蒜香麵包。' },
        { time: '21:30', activity: '必吃炸雞 🍴', detail: '營業至 23:00，宵夜首選！' }
      ]
    },
    {
      id: 'day2',
      title: 'DAY 2 (03/24)',
      subtitle: '網美攝影與黑豬肉',
      icon: '📷',
      dailyNote: '👗 下午有攝影行程，最厲害的洋裝穿起來！記得留點肚子給晚上的黑豬肉，那是人間美味～',
      schedule: [
        { time: '08:00', activity: '紅豆蒸包 🥯', detail: '限量供應！08:00-14:00' },
        { time: '09:00', activity: '倫敦貝果 🥯', detail: '必拍人氣店，建議提早排隊。' },
        { time: '11:00', activity: 'Mazeland 迷宮', detail: '🎟️ 門票 327₩，挑戰兩小時脫逃。' },
        { time: '13:30', activity: '海女博物館', detail: '🎟️ 深入了解海女文化。' },
        { time: '15:00', activity: 'Tempus Cafe ☕️', detail: '月汀里無敵海景 + 招牌橘子咖啡。' },
        { time: '16:30', activity: '無名照相館 📷', detail: '無地標私藏點，加購精緻相框。' },
        { 
          time: '18:30', 
          activity: 'Donsadon 豚似豚돈사돈 🍴', 
          hasExtraNote: 'donsadon',
          detail: '12:00-21:30 權志龍 GD 認證的名店！' 
        },
        { time: '20:30', activity: '逛街時光 🛍️', detail: '大創(22:00止)、Gentle Monster。' }
      ]
    },
    {
      id: 'day3',
      title: 'DAY 3 (03/25)',
      subtitle: '跳島：牛島慢活',
      icon: '🚢',
      dailyNote: '⚓ 海邊風很大要注意髮型，太陽公公很熱情也要做好防曬唷！護照跟船票是命根子，絕對不能丟！',
      schedule: [
        { 
          time: '09:00', 
          activity: '城山港碼頭 🚢', 
          hasExtraNote: 'udo_terminal',
          detail: '前往牛島前，務必先完成碼頭購票流程。' 
        },
        { 
          time: '09:30', 
          activity: '購票任務清單', 
          isTaskList: true,
          tasks: [
            { id: 'udo_wowpass', text: '🎟️ 使用 Wowpass 自動售票機購票' },
            { id: 'udo_forms', text: '📃 填寫登船申請書 (去回各一份)' },
            { id: 'udo_passport_check', text: '🛂 出示護照正本買票/登船' },
            { id: 'udo_return_ticket', text: '🎫 回程船票已收好' }
          ]
        },
        { time: '10:30', activity: '牛島美食全攻略 🥜', detail: '花生冰淇淋、炸醬麵、鮑魚、烤魷魚。' },
        { time: '17:00', activity: 'Under The Dam 🍴', detail: '需預約。必點白切肉與炸茄子。' },
        { time: '20:00', activity: '早點休息 😴', detail: '為了明天的體力，今晚好好放鬆！' }
      ]
    },
    {
      id: 'day4',
      title: 'DAY 4 (03/26)',
      subtitle: '絕景與海洋奇緣',
      icon: '🌋',
      dailyNote: '⛰️ 日出峰要爬很多階梯，不想腿軟就穿球鞋！下午去採橘子，穿橘色系的衣服拍照會超可愛唷～',
      schedule: [
        { time: '08:00', activity: '城山日出峰 ⛰️', detail: '🎟️ 走很多路！必爬絕景約兩小時。' },
        { time: '11:00', activity: '水上星球 Aqua Planet 🎟️', detail: '門票 NT$732。必看海洋劇場(40min)：10:00 / 12:00 / 14:00 / 15:40' },
        { time: '14:30', activity: '漢拿山奶油餅乾 🎁', detail: '11:00-17:00 購買伴手禮。' },
        { time: '15:30', activity: 'Ae-in 柑橘園 🍊', detail: '10:00-18:00。體驗：做果醬、採摘、必喝松露濃湯。' },
        { time: '18:00', activity: '返回住宿地點 🏠', detail: '先回住宿休息，改成叫 Uber 去喝酒吧！' },
        { time: '19:00', activity: '三姓穴海鮮鍋 🍴', detail: '營業至 21:00，海味饗宴補充滿滿體力。' },
        { time: '21:00', activity: 'Taengtail 酒吧 🍸', detail: '營業至凌晨 02:00，放鬆微醺的時光。' }
      ]
    },
    {
      id: 'day5',
      title: 'DAY 5 (03/27)',
      subtitle: '極速賽車與燈塔日落',
      icon: '🏎️',
      dailyNote: '🏎️ 玩賽車穿褲裝最帥也最方便！今天的主角是日落，記得要隨時盯著手錶，別讓夕陽不等你就溜走囉！',
      schedule: [
        { time: '10:30', activity: '退房 sodam 🧳', detail: '11:00前完成退房。' },
        { time: '11:00', activity: '9.81 公園 🏎️', detail: '🎟️ NT$751。營業 09:30-18:00。預計玩 2 小時，建議「只買動力賽車」。' },
        { time: '13:30', activity: 'Jaemi Jeju 🍴', detail: '義大利麵午餐。營業時間：11:00-15:00, 17:00-19:20。' },
        { time: '15:30', activity: 'mumujeju 🎁', detail: '可愛選物店。營業時間：11:00-18:00。' },
        { time: '16:30', activity: 'Haejigae Cafe ☕️', detail: '09:00-21:00。推薦鹽麵包，觀察丹麥麵包外觀。看日落聖地！' },
        { time: '18:00', activity: '梨湖 海邊小馬燈塔 📷', detail: '絕美日落視角。結束後「回住宿處改搭 Uber」去市區。' },
        { 
          time: '19:00', 
          activity: '入住 Villa de Aewol 🏠', 
          detail: '※ 若趕燈塔日落時間不夠，就延後 Check-in。' 
        },
        { time: '19:30', activity: 'Mandarin Island 🎁', detail: '14:00-21:00 (週四公休)。採買精緻伴手禮。' },
        { time: '20:30', activity: 'Wonwoojeong 韓牛 🍴', detail: '大推排骨大醬湯。醬蟹小菜不要吃！' }
      ]
    },
    {
      id: 'day6',
      title: 'DAY 6 (03/28)',
      subtitle: '文化巡禮與最後衝刺',
      icon: '🏛️',
      dailyNote: '🏛️ 慢慢散步感受文化的氣息，博物館很大要量力而為喔！預約麵條的時間記在心裡，歐爸在等你了！',
      schedule: [
        { time: '08:30', activity: '海螺湯麵 🍴', detail: '道地早餐，配蒸餃更完美。' },
        { 
          time: '11:00', 
          activity: '濟州特別自治道 民俗自然史博物館 🏛️', 
          hasExtraNote: 'museum_info',
          detail: '🎟️ 需門票 / 09:00-18:00 / 建議停留兩小時。' 
        },
        { 
          time: '13:30', 
          activity: '濟州牧 官衙 🏯', 
          detail: '🎟️ 需門票 / 09:00-18:00 / 預計一小時。朝鮮時代濟州島的行政中心。' 
        },
        { time: '15:00', activity: '小馬體驗公園 🐎', detail: '與濟州小馬近距離接觸。' },
        { 
          time: '16:10', 
          activity: '姊妹麵條 🍴', 
          isTask: true,
          taskId: 'sisters_reservation',
          taskText: '姊妹麵條預約成功 (預約制)',
          detail: '吃飯時間 16:10-18:00。必點豬肉湯麵、拌麵。' 
        },
        { time: '19:00', activity: '伴手禮補貨 🎁', detail: '最後的購物衝刺 (The Islander)。' }
      ]
    },
    {
      id: 'day7',
      title: 'DAY 7 (03/29)',
      subtitle: '平安回家，滿載而歸',
      icon: '👋',
      dailyNote: '🎁 行利箱塞滿了嗎？退稅單要收好，記得留點時間去機場最後巡禮，把濟州島的香氣帶回家！',
      schedule: [
        { time: '07:00', activity: '天使租車還車 🚗', detail: '抵達租車中心，處理還車手續。' },
        { 
          time: '07:20', 
          activity: '搭乘機場接駁車 🚌', 
          hasExtraNote: 'shuttle_info',
          detail: '車次時間：07:20 / 07:40 / 08:00 / 08:20。' 
        },
        { time: '08:30', activity: '濟州機場辦理手續 ✈️', detail: '辦理退稅、行李託運與最後採買。' },
        { time: '10:40', activity: '班機起飛返家', detail: 'Bye Bye Jeju! 帶著滿滿的回憶與橘子香氣回家。' }
      ]
    }
  ];

  const ScrapbookCover = () => (
    <div className="min-h-screen bg-[#FDF6E3] flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-md w-full h-auto bg-white rounded-xl shadow-2xl border-[16px] border-[#FFF] relative flex flex-col overflow-hidden rotate-1">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-200/50 -rotate-3 z-20"></div>
        <div className="absolute top-4 right-4 text-4xl">🌸</div>
        <div className="flex-grow flex flex-col items-center justify-center p-8 border-2 border-dashed border-orange-200 m-2 rounded-lg text-center">
          <div className="bg-orange-100 p-2 px-4 rounded-full mb-4 text-[#D35400] font-bold text-sm tracking-widest">2026 SPRING</div>
          <h1 className="text-4xl font-serif font-black text-[#2C3E50] leading-tight mb-4">濟州島<br/><span className="text-[#E67E22]">探險手帳</span></h1>
          <div className="w-20 h-1 bg-[#E67E22] mb-6 mx-auto"></div>
          <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
             <div className="absolute inset-0 bg-orange-50 rounded-full flex items-center justify-center text-8xl">🍊</div>
          </div>
          <button onClick={() => setView('guide')} className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-[#E67E22] rounded-xl focus:outline-none shadow-lg hover:bg-[#D35400] active:scale-95">
            翻開手帳 <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="h-12 bg-orange-50 flex items-center justify-center gap-4 text-xl">🌸 🍊 🌊 🗿</div>
      </div>
    </div>
  );

  if (view === 'cover') return <ScrapbookCover />;

  return (
    <div className="min-h-screen bg-[#FDF6E3] p-4 md:p-8 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-8">
        <button onClick={() => setView('cover')} className="flex items-center text-[#E67E22] font-bold hover:scale-105 transition-transform bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-100 shadow-sm active:scale-95">
          <ArrowLeft className="mr-2 w-4 h-4" /> 返回封面
        </button>
        <div className="flex items-center gap-3 text-[#E67E22] font-serif font-bold">
          <Heart className="w-5 h-5 fill-orange-400 text-orange-400" /> JEJU 2026
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        <aside className="w-full md:w-48 flex-shrink-0 sticky top-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 no-scrollbar pb-2 md:pb-0">
            <button 
              onClick={() => setActiveTab('checklist')} 
              className={`flex-shrink-0 px-4 py-3 rounded-xl md:rounded-r-none md:rounded-l-2xl transition-all text-sm font-bold flex items-center justify-start shadow-sm min-w-max md:min-w-0 ${activeTab === 'checklist' ? 'bg-white text-[#E67E22] border-l-4 border-[#E67E22] md:translate-x-2' : 'bg-orange-100/50 text-orange-400 hover:bg-white/50'}`}
            >
              <Bookmark className="mr-2 w-4 h-4" /> <span>行前清單</span>
            </button>
            {days.map((day) => (
              <button 
                key={day.id} 
                onClick={() => setActiveTab(day.id)} 
                className={`flex-shrink-0 px-4 py-3 rounded-xl md:rounded-r-none md:rounded-l-2xl transition-all text-sm font-bold flex items-center justify-start shadow-sm min-w-max md:min-w-0 ${activeTab === day.id ? 'bg-white text-[#E67E22] border-l-4 border-[#E67E22] md:translate-x-2' : 'bg-orange-100/50 text-orange-400 hover:bg-white/50'}`}
              >
                <span className="mr-2">{day.icon}</span> <span>{day.id.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-grow w-full bg-white rounded-3xl p-6 md:p-12 shadow-xl border-t-[12px] border-orange-200 min-h-[600px] relative overflow-hidden">
          {activeTab === 'checklist' && (
            <div className="animate-in">
              <h2 className="text-2xl font-black text-[#2C3E50] mb-8">我的行李箱 🧳</h2>
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-3">
                   {Object.entries(checkedItems).map(([item, isChecked]) => (
                    <div key={item} onClick={() => toggleItem(item)} className={`flex items-center p-4 rounded-2xl cursor-pointer transition-all border-2 ${isChecked ? 'bg-gray-50 border-gray-100 opacity-50' : 'bg-white border-orange-50 hover:border-orange-200'}`}>
                      <div className={`w-6 h-6 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center ${isChecked ? 'bg-orange-400' : 'bg-orange-50'}`}>{isChecked && <CheckSquareIcon className="w-4 h-4 text-white" />}</div>
                      <span className={`font-medium ${isChecked ? 'line-through text-gray-400' : 'text-[#2C3E50]'}`}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 p-6 rounded-3xl border-2 border-yellow-100 -rotate-1 shadow-sm h-fit">
                  <h4 className="font-bold text-yellow-700 mb-3 flex items-center"><StickyNote className="mr-2 w-4 h-4" /> 重要備忘錄</h4>
                  <ul className="text-sm text-yellow-800/80 space-y-2 leading-relaxed">
                    <li className="flex items-start"><span className="mr-2">•</span>KKday (桃機取) / Klook (機場機台)</li>
                    <li className="flex items-start"><span className="mr-2">•</span>門口換匯匯率通常較優</li>
                    <li className="flex items-start"><span className="mr-2">•</span>台灣汽車與機車駕照正本都要帶</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {days.map((day) => activeTab === day.id && (
            <div key={day.id} className="animate-in">
              <div className="mb-8 flex flex-col md:flex-row md:items-baseline md:gap-4">
                <h2 className="text-3xl font-black text-[#2C3E50]">{day.title}</h2>
                <p className="text-lg text-orange-400 italic font-medium mt-2 md:mt-0">{day.subtitle}</p>
              </div>
              <div className="bg-[#D35400] text-white p-5 rounded-3xl mb-10 shadow-md flex gap-4 items-center">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex-shrink-0 flex items-center justify-center"><Wand2 className="w-6 h-6" /></div>
                <p className="text-sm font-bold leading-relaxed">{day.dailyNote}</p>
              </div>
              <div className="space-y-8 relative">
                <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-orange-100/50"></div>
                {day.schedule.map((item, idx) => (
                  <div key={idx} className="flex gap-8 group relative z-10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center font-mono text-[10px] font-black text-orange-400 shadow-sm">{item.time}</div>
                    <div className="pb-8 border-b border-gray-50 flex-grow last:border-0 last:pb-0">
                      <h4 className="text-lg font-black text-[#2C3E50] mb-2">{item.activity}</h4>
                      {item.isTask && (
                        <div onClick={() => toggleTripTask(item.taskId)} className={`flex items-center p-3 rounded-xl border-2 cursor-pointer mb-3 ${tripTasks[item.taskId] ? 'bg-green-50 opacity-60' : 'bg-orange-50'}`}>
                          <div className={`w-5 h-5 rounded-md mr-3 flex-shrink-0 flex items-center justify-center ${tripTasks[item.taskId] ? 'bg-green-500' : 'bg-white border-orange-200'}`}>{tripTasks[item.taskId] && <CheckSquareIcon className="w-3 h-3 text-white" />}</div>
                          <span className={`text-sm font-bold ${tripTasks[item.taskId] ? 'line-through text-green-700' : 'text-orange-700'}`}>{item.taskText}</span>
                        </div>
                      )}
                      {item.isTaskList && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                          {item.tasks.map(task => (
                            <div key={task.id} onClick={() => toggleTripTask(task.id)} className={`flex items-center p-3 rounded-xl border-2 cursor-pointer ${tripTasks[task.id] ? 'bg-blue-50 opacity-60' : 'bg-white border-blue-50'}`}>
                              <div className={`w-5 h-5 rounded-md mr-3 flex-shrink-0 flex items-center justify-center ${tripTasks[task.id] ? 'bg-blue-500' : 'bg-white border-blue-200'}`}>{tripTasks[task.id] && <CheckSquareIcon className="w-3 h-3 text-white" />}</div>
                              <span className={`text-xs font-bold ${tripTasks[task.id] ? 'line-through text-blue-700' : 'text-blue-800'}`}>{task.text}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="text-sm text-gray-500 bg-[#FDFDFD] p-3 rounded-xl border border-dashed border-gray-100 italic">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
      <style>{`
        @import url('[https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@700;900&family=Noto+Sans+TC:wght@400;500;700;900&display=swap](https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@700;900&family=Noto+Sans+TC:wght@400;500;700;900&display=swap)');
        body { font-family: 'Noto Sans TC', sans-serif; }
        .font-serif { font-family: 'Noto Serif TC', serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
