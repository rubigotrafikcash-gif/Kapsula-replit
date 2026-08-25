import { useMemo, useState } from "react";
import { CalendarDays, ChevronRight, Filter, Search, SlidersHorizontal } from "lucide-react";
import { AppShell, Avatar, ChoiceChip, IconButton, SectionLabel, Surface } from "./_shared/AppShell";

const clients = [
  { name: "Елена Михайлова", initials: "ЕМ", status: "В работе", meeting: "сегодня, 16:30", note: "капсула для поездки", tone: "bg-[#8b5547]" },
  { name: "Мария Крылова", initials: "МК", status: "Пауза", meeting: "завтра, 11:00", note: "разбор гардероба", tone: "bg-[#66504c]" },
  { name: "Алина Белова", initials: "АБ", status: "В работе", meeting: "пт, 13:00", note: "съёмка образов", tone: "bg-[#a16f59]" },
  { name: "Софья Романова", initials: "СР", status: "Новый", meeting: "24 окт, 12:30", note: "первичная встреча", tone: "bg-[#596057]" },
];

export function Clients() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Все");
  const [selected, setSelected] = useState<string | null>(null);
  const visible = useMemo(() => clients.filter((client) => (filter === "Все" || client.status === filter) && `${client.name} ${client.note}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);

  return (
    <AppShell title="Клиенты" eyebrow="рабочая база" active="Клиенты" action={<IconButton label="Фильтры"><Filter className="h-4 w-4" /></IconButton>}>
      <div className="mt-6 space-y-5">
        <div className="flex items-center gap-2 rounded-[16px] border border-[#ffffff10] bg-[#242221] px-3.5 py-3">
          <Search className="h-4 w-4 text-[#a87867]" />
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Найти клиента" className="min-w-0 flex-1 bg-transparent font-['DM_Sans'] text-[12px] text-[#f0e4da] outline-none placeholder:text-[#7f7570]" />
          <SlidersHorizontal className="h-4 w-4 text-[#776d68]" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {["Все", "В работе", "Новый", "Пауза"].map((item) => <ChoiceChip key={item} label={item} selected={filter === item} onClick={() => setFilter(item)} />)}
        </div>
        <div className="flex items-end justify-between">
          <SectionLabel eyebrow="24 в базе" title="Клиенты" />
          <span className="mb-3 font-['DM_Sans'] text-[10px] text-[#877b75]">{visible.length} показано</span>
        </div>
        <div className="space-y-2.5">
          {visible.length ? visible.map((client) => (
            <button key={client.name} type="button" onClick={() => setSelected(selected === client.name ? null : client.name)} className="w-full text-left">
              <Surface className={`p-3.5 transition-transform hover:-translate-y-0.5 active:scale-[0.99] ${selected === client.name ? "border-[#b67a6899]" : ""}`}>
                <div className="flex items-center gap-3">
                  <Avatar initials={client.initials} tone={client.tone} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate font-['DM_Sans'] text-[13px] font-semibold text-[#f0e4da]">{client.name}</p>
                      <ChevronRight className={`h-4 w-4 shrink-0 text-[#8d7066] transition-transform ${selected === client.name ? "rotate-90" : ""}`} />
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${client.status === "Пауза" ? "bg-[#887973]" : client.status === "Новый" ? "bg-[#d19b73]" : "bg-[#b76569]"}`} />
                      <span className="font-['DM_Sans'] text-[10px] text-[#9e918a]">{client.status}</span>
                      <span className="text-[#5e5652]">·</span>
                      <span className="truncate font-['DM_Sans'] text-[10px] text-[#8e827b]">{client.note}</span>
                    </div>
                  </div>
                </div>
                {selected === client.name ? (
                  <div className="mt-3 flex items-center justify-between border-t border-[#ffffff0b] pt-3">
                    <span className="flex items-center gap-1.5 font-['DM_Sans'] text-[10px] text-[#b69587]"><CalendarDays className="h-3.5 w-3.5" /> {client.meeting}</span>
                    <span className="font-['DM_Sans'] text-[10px] font-semibold text-[#d39a80]">Открыть карточку</span>
                  </div>
                ) : null}
              </Surface>
            </button>
          )) : (
            <Surface className="flex min-h-[160px] flex-col items-center justify-center p-6 text-center">
              <Search className="h-6 w-6 text-[#a87867]" />
              <p className="mt-3 font-['Playfair_Display'] text-[21px] text-[#e9dcd3]">Никого не нашли</p>
              <p className="mt-1 font-['DM_Sans'] text-[11px] text-[#958882]">Попробуйте изменить поиск или статус.</p>
            </Surface>
          )}
        </div>
        <Surface className="flex items-center justify-between bg-[#3a2928] p-4">
          <div><p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.15em] text-[#bf8a77]">ближайшая встреча</p><p className="mt-1 font-['DM_Sans'] text-[13px] font-semibold text-[#f2e3da]">Елена Михайлова · сегодня</p><p className="mt-1 font-['DM_Sans'] text-[10px] text-[#b19e94]">16:30 · примерка капсулы</p></div>
          <CalendarDays className="h-5 w-5 text-[#d29a7d]" strokeWidth={1.5} />
        </Surface>
      </div>
    </AppShell>
  );
}