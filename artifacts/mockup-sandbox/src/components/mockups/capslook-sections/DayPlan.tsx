import { useState } from "react";
import { Check, Clock3, MoreHorizontal, Plus } from "lucide-react";
import { AppShell, Avatar, SectionLabel, Surface } from "./_shared/AppShell";

const initialItems = [
  { time: "10:00", duration: "45 мин", title: "Разбор гардероба", client: "Мария Крылова", initials: "МК", tone: "bg-[#66504c]", done: true },
  { time: "13:30", duration: "1 ч 30 мин", title: "Съёмка образов", client: "Алина Белова", initials: "АБ", tone: "bg-[#a16f59]", done: false },
  { time: "16:30", duration: "50 мин", title: "Примерка капсулы", client: "Елена Михайлова", initials: "ЕМ", tone: "bg-[#8b5547]", done: false },
];

export function DayPlan() {
  const [items, setItems] = useState(initialItems);
  const [notice, setNotice] = useState("");
  const toggle = (index: number) => setItems((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, done: !item.done } : item));
  const addTask = () => { setNotice("Новая задача добавлена на 18:00"); setItems((current) => [...current, { time: "18:00", duration: "30 мин", title: "Подготовить подборку", client: "Внутренняя задача", initials: "АВ", tone: "bg-[#754133]", done: false }]); };

  return (
    <AppShell title="План дня" eyebrow="среда · 24 сентября" active="Главная" action={<button type="button" onClick={addTask} aria-label="Добавить задачу" className="grid h-9 w-9 place-items-center rounded-full bg-[#6c2738] text-[#f3ddd5] transition-colors hover:bg-[#813148] active:scale-90"><Plus className="h-4 w-4" /></button>}>
      <div className="mt-6 space-y-5">
        <Surface className="flex items-center justify-between bg-[#3a2928] p-4">
          <div><p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.16em] text-[#bf8b77]">ритм дня</p><p className="mt-1 font-['Playfair_Display'] text-[25px] text-[#f3e4da]">{items.filter((item) => item.done).length} из {items.length}</p><p className="font-['DM_Sans'] text-[10px] text-[#b09e95]">задач завершено</p></div>
          <div className="relative h-16 w-16 rounded-full border-[6px] border-[#5a3438]"><div className="absolute inset-[-6px] rounded-full border-[6px] border-[#c38a70] border-b-transparent border-l-transparent" /><span className="absolute inset-0 grid place-items-center font-['DM_Sans'] text-[11px] font-semibold text-[#e9c2b0]">{Math.round(items.filter((item) => item.done).length / items.length * 100)}%</span></div>
        </Surface>
        <section>
          <SectionLabel title="Сегодня" action="Календарь" onAction={() => setNotice("Календарь открывается")} />
          <div className="relative ml-2 border-l border-[#ffffff15] pb-2">
            {items.map((item, index) => (
              <div key={`${item.time}-${item.title}`} className="relative pb-4 pl-6">
                <span className={`absolute -left-[5px] top-1.5 h-2 w-2 rounded-full border-2 border-[#171616] ${item.done ? "bg-[#c38a70]" : "bg-[#6c2738]"}`} />
                <div className="mb-2 flex items-center gap-2"><span className="font-['DM_Sans'] text-[11px] font-semibold text-[#d6b09d]">{item.time}</span><span className="font-['DM_Sans'] text-[10px] text-[#766d68]">{item.duration}</span></div>
                <Surface className={`p-3.5 transition-colors ${item.done ? "opacity-75" : ""}`}>
                  <div className="flex items-center gap-3">
                    <Avatar initials={item.initials} tone={item.tone} />
                    <div className="min-w-0 flex-1"><p className={`font-['DM_Sans'] text-[13px] font-semibold ${item.done ? "text-[#aa9c95] line-through" : "text-[#f0e4da]"}`}>{item.title}</p><p className="mt-1 truncate font-['DM_Sans'] text-[10px] text-[#9d918b]">{item.client}</p></div>
                    <button type="button" aria-label={item.done ? "Вернуть задачу" : "Отметить выполненной"} onClick={() => toggle(index)} className={`grid h-8 w-8 place-items-center rounded-full border transition-colors active:scale-90 ${item.done ? "border-[#b77c68] bg-[#6c2738] text-[#f3dbd1]" : "border-[#ffffff15] text-[#806f68] hover:border-[#bb806b] hover:text-[#ce9a82]"}`}><Check className="h-4 w-4" strokeWidth={2} /></button>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-[#ffffff0b] pt-2.5"><span className="flex items-center gap-1.5 font-['DM_Sans'] text-[9px] text-[#887d77]"><Clock3 className="h-3 w-3" /> {item.done ? "Завершено" : "В работе"}</span><MoreHorizontal className="h-4 w-4 text-[#776c67]" /></div>
                </Surface>
              </div>
            ))}
          </div>
        </section>
        <button type="button" onClick={addTask} className="flex min-h-[82px] w-full items-center justify-center gap-2 rounded-[20px] border border-dashed border-[#ffffff17] bg-[#201e1d] font-['DM_Sans'] text-[11px] text-[#9d8176] transition-colors hover:border-[#a66d61] hover:text-[#d09a82] active:scale-[0.99]"><Plus className="h-4 w-4" /> Добавить задачу</button>
        {notice ? <p className="text-center font-['DM_Sans'] text-[10px] text-[#c38a70]">{notice}</p> : null}
      </div>
    </AppShell>
  );
}