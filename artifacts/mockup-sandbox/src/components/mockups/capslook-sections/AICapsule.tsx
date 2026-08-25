import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { AppShell, ChoiceChip, SectionLabel, Surface } from "./_shared/AppShell";

const styles = ["Тихая роскошь", "Городской шик", "Мягкий минимализм"];
const seasons = ["Осень / зима", "Весна / лето", "Межсезонье"];

export function AICapsule() {
  const [client, setClient] = useState("Елена Михайлова");
  const [occasion, setOccasion] = useState("Деловая поездка");
  const [style, setStyle] = useState(styles[0]);
  const [season, setSeason] = useState(seasons[0]);
  const [notice, setNotice] = useState("");
  const [ready, setReady] = useState(false);

  return (
    <AppShell title="AI-капсула" eyebrow="Новая подборка" active="Главная">
      <div className="mt-6 space-y-5">
        <Surface className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.15em] text-[#9f8b82]">для кого</p>
              <p className="mt-1 font-['DM_Sans'] text-[14px] font-semibold text-[#f0e3da]">{client}</p>
            </div>
            <span className="rounded-full bg-[#3a2928] px-2.5 py-1 font-['DM_Sans'] text-[9px] text-[#d39a81]">шаг 01</span>
          </div>
          <label className="mb-2 block font-['DM_Sans'] text-[10px] text-[#9e918a]">Имя клиента</label>
          <input value={client} onChange={(event) => setClient(event.target.value)} className="w-full rounded-[14px] border border-[#ffffff10] bg-[#222020] px-3.5 py-3 font-['DM_Sans'] text-[12px] text-[#f2e9df] outline-none transition-colors placeholder:text-[#746b67] focus:border-[#b37563]" />
          <label className="mb-2 mt-4 block font-['DM_Sans'] text-[10px] text-[#9e918a]">Повод</label>
          <div className="relative">
            <select value={occasion} onChange={(event) => setOccasion(event.target.value)} className="w-full appearance-none rounded-[14px] border border-[#ffffff10] bg-[#222020] px-3.5 py-3 font-['DM_Sans'] text-[12px] text-[#f2e9df] outline-none focus:border-[#b37563]">
              <option>Деловая поездка</option>
              <option>Свадебный уикенд</option>
              <option>Новая должность</option>
              <option>Повседневный гардероб</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-[#a87867]" />
          </div>
        </Surface>

        <section>
          <SectionLabel eyebrow="настроение" title="Как должна звучать капсула?" />
          <div className="flex flex-wrap gap-2">
            {styles.map((item) => <ChoiceChip key={item} label={item} selected={style === item} onClick={() => setStyle(item)} />)}
          </div>
        </section>

        <section>
          <SectionLabel eyebrow="контекст" title="Сезон и ритм" />
          <div className="flex gap-2">
            {seasons.map((item) => <ChoiceChip key={item} label={item} selected={season === item} onClick={() => setSeason(item)} />)}
          </div>
        </section>

        <Surface className="relative overflow-hidden p-4">
          <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#6c2738]/30 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.17em] text-[#b88673]">AI-настройки</span>
              <Sparkles className="h-4 w-4 text-[#c38a70]" strokeWidth={1.5} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {["12 вещей", "3 акцентных образа", "Бюджет · средний", "Собрать за 40 сек"].map((item) => (
                <div key={item} className="rounded-[13px] border border-[#ffffff0a] bg-[#242221] px-3 py-2.5 font-['DM_Sans'] text-[10px] text-[#b9aaa1]">{item}</div>
              ))}
            </div>
          </div>
        </Surface>

        {ready ? (
          <div className="rounded-[22px] border border-[#b57b6959] bg-[#3a2928] p-4">
            <div className="flex items-center gap-2 text-[#e3b29a]"><Check className="h-4 w-4" /><span className="font-['DM_Sans'] text-[11px] font-semibold">Капсула собрана</span></div>
            <p className="mt-2 font-['Playfair_Display'] text-[21px] text-[#f6e7dc]">«{style}» для {client}</p>
            <p className="mt-1 font-['DM_Sans'] text-[11px] leading-relaxed text-[#bca9a0]">12 вещей, 8 готовых сочетаний и список покупок уже ждут в архиве.</p>
            <button type="button" onClick={() => setReady(false)} className="mt-3 inline-flex items-center gap-1.5 font-['DM_Sans'] text-[11px] text-[#d49a7e]">Изменить параметры <ArrowRight className="h-3.5 w-3.5" /></button>
          </div>
        ) : (
          <div className="flex min-h-[100px] items-center justify-center rounded-[22px] border border-dashed border-[#ffffff16] bg-[#201e1d] px-5 text-center">
            <p className="font-['DM_Sans'] text-[11px] leading-relaxed text-[#887b74]">Preview появится здесь<br /><span className="text-[#b88774]">после сборки капсулы</span></p>
          </div>
        )}

        <button type="button" onClick={() => { setReady(true); setNotice(`${client}: ${occasion}`); }} className="flex w-full items-center justify-center gap-2 rounded-[17px] bg-[#6c2738] px-4 py-3.5 font-['DM_Sans'] text-[13px] font-semibold text-[#f6dfd7] shadow-[0_12px_24px_rgba(92,29,44,0.3)] transition-colors hover:bg-[#813148] active:scale-[0.98]">
          <Sparkles className="h-4 w-4" /> Собрать капсулу
        </button>
        {notice ? <p className="pb-2 text-center font-['DM_Sans'] text-[10px] text-[#ac8a7c]">{notice}</p> : null}
      </div>
    </AppShell>
  );
}