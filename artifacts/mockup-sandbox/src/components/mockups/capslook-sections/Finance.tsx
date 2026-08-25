import { useState } from "react";
import { ArrowUpRight, Check, Plus, WalletCards } from "lucide-react";
import { AppShell, Avatar, formatMoney, SectionLabel, Surface } from "./_shared/AppShell";

const initialOperations = [
  { name: "Мария Крылова", service: "Разбор гардероба", amount: 18500, date: "вчера", incoming: true, initials: "МК", tone: "bg-[#66504c]" },
  { name: "Алина Белова", service: "Съёмка образов", amount: 32000, date: "19 сент.", incoming: true, initials: "АБ", tone: "bg-[#a16f59]" },
  { name: "Аренда студии", service: "Операционный расход", amount: 12400, date: "18 сент.", incoming: false, initials: "АС", tone: "bg-[#4b4844]" },
];

export function Finance() {
  const [operations, setOperations] = useState(initialOperations);
  const [notice, setNotice] = useState("");
  const addPayment = () => { setOperations((current) => [{ name: "Елена Михайлова", service: "Предоплата капсулы", amount: 24000, date: "только что", incoming: true, initials: "ЕМ", tone: "bg-[#8b5547]" }, ...current]); setNotice("Оплата добавлена в операции"); };
  const income = operations.filter((item) => item.incoming).reduce((sum, item) => sum + item.amount, 0);

  return (
    <AppShell title="Финансы" eyebrow="сентябрь 2024" active="Финансы" action={<button type="button" onClick={addPayment} aria-label="Добавить оплату" className="grid h-9 w-9 place-items-center rounded-full bg-[#6c2738] text-[#f3ddd5] transition-colors hover:bg-[#813148] active:scale-90"><Plus className="h-4 w-4" /></button>}>
      <div className="mt-6 space-y-5">
        <Surface className="relative overflow-hidden bg-[#3a2928] p-5">
          <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-[#c38a7033]" />
          <div className="relative">
            <div className="flex items-center justify-between"><p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.17em] text-[#c18d78]">доход за месяц</p><WalletCards className="h-5 w-5 text-[#d09a7d]" strokeWidth={1.5} /></div>
            <p className="mt-3 font-['Playfair_Display'] text-[36px] leading-none tracking-[-0.04em] text-[#f6e7dd]">₽ {formatMoney(income)}</p>
            <div className="mt-4 flex items-center gap-2"><span className="flex items-center gap-1 rounded-full bg-[#5b1d2c] px-2 py-1 font-['DM_Sans'] text-[9px] text-[#e3b9ad]"><ArrowUpRight className="h-3 w-3" /> 12,4%</span><span className="font-['DM_Sans'] text-[10px] text-[#b19d94]">к августу</span></div>
          </div>
        </Surface>
        <div className="grid grid-cols-2 gap-3">
          <Surface className="p-4"><p className="font-['DM_Sans'] text-[10px] text-[#9a8d86]">Ожидают оплаты</p><p className="mt-2 font-['Playfair_Display'] text-[25px] text-[#e9d9ce]">₽ 47 500</p><p className="mt-1 font-['DM_Sans'] text-[10px] text-[#c38a70]">2 клиента</p></Surface>
          <Surface className="p-4"><p className="font-['DM_Sans'] text-[10px] text-[#9a8d86]">Средний чек</p><p className="mt-2 font-['Playfair_Display'] text-[25px] text-[#e9d9ce]">₽ 18 640</p><p className="mt-1 font-['DM_Sans'] text-[10px] text-[#958882]">за услугу</p></Surface>
        </div>
        <section>
          <SectionLabel eyebrow="структура дохода" title="Клиенты и услуги" />
          <Surface className="p-4">
            {[["Елена Михайлова", 38, "₽ 72 000"], ["Алина Белова", 24, "₽ 45 000"], ["Разбор гардероба", 19, "₽ 35 500"]].map(([label, width, value]) => <div key={label} className="mb-3 last:mb-0"><div className="mb-1.5 flex justify-between font-['DM_Sans'] text-[10px]"><span className="text-[#b8a9a1]">{label}</span><span className="text-[#d09b80]">{value}</span></div><div className="h-1.5 rounded-full bg-[#201e1d]"><div className="h-full rounded-full bg-[#9f5e5d]" style={{ width: `${width}%` }} /></div></div>)}
          </Surface>
        </section>
        <section>
          <SectionLabel eyebrow="история" title="Последние операции" action="Все" onAction={() => setNotice("Показаны все операции")} />
          <Surface className="divide-y divide-[#ffffff0b]">
            {operations.map((operation, index) => <div key={`${operation.name}-${index}`} className="flex items-center gap-3 p-3.5"><Avatar initials={operation.initials} tone={operation.tone} /><div className="min-w-0 flex-1"><p className="truncate font-['DM_Sans'] text-[12px] font-semibold text-[#eee2d9]">{operation.name}</p><p className="mt-1 truncate font-['DM_Sans'] text-[10px] text-[#8f837d]">{operation.service} · {operation.date}</p></div><div className="text-right"><p className={`font-['DM_Sans'] text-[12px] font-semibold ${operation.incoming ? "text-[#d5a184]" : "text-[#aa9288]"}`}>{operation.incoming ? "+" : "−"} ₽ {formatMoney(operation.amount)}</p><span className="mt-1 flex items-center justify-end gap-1 font-['DM_Sans'] text-[9px] text-[#7f7771]"><Check className="h-3 w-3 text-[#9f7064]" /> проведено</span></div></div>)}
          </Surface>
        </section>
        <button type="button" onClick={addPayment} className="flex w-full items-center justify-center gap-2 rounded-[17px] bg-[#6c2738] px-4 py-3.5 font-['DM_Sans'] text-[13px] font-semibold text-[#f6dfd7] shadow-[0_12px_24px_rgba(92,29,44,0.3)] transition-colors hover:bg-[#813148] active:scale-[0.98]"><Plus className="h-4 w-4" /> Добавить оплату</button>
        {notice ? <p className="pb-2 text-center font-['DM_Sans'] text-[10px] text-[#c38a70]">{notice}</p> : null}
      </div>
    </AppShell>
  );
}