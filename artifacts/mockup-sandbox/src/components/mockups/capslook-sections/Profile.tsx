import { useState } from "react";
import { Bell, ChevronRight, LogOut, Palette, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { AppShell, Surface } from "./_shared/AppShell";

const settingRows = [
  { label: "Настройки бренда", hint: "цвета, подпись, документы", icon: Palette },
  { label: "Уведомления", hint: "встречи и оплаты", icon: Bell },
  { label: "Профиль и доступ", hint: "контакты и безопасность", icon: ShieldCheck },
];

export function Profile() {
  const [enabled, setEnabled] = useState(true);
  const [notice, setNotice] = useState("");
  return (
    <AppShell title="Профиль" eyebrow="личный кабинет" active="Профиль">
      <div className="mt-6 space-y-5">
        <Surface className="relative overflow-hidden p-5">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#6c2738]/25 blur-2xl" />
          <div className="relative flex items-center gap-4">
            <div className="grid h-[68px] w-[68px] place-items-center rounded-[23px] border border-[#c38a7070] bg-[#754133] font-['Playfair_Display'] text-[23px] font-semibold text-[#f7e4da] shadow-[0_0_0_5px_#292827]">АВ</div>
            <div><h2 className="font-['Playfair_Display'] text-[24px] leading-none text-[#f3e5da]">Анна Воронова</h2><p className="mt-2 font-['DM_Sans'] text-[11px] text-[#b98773]">Персональный стилист</p><p className="mt-1 font-['DM_Sans'] text-[10px] text-[#8d827c]">Москва · studio@capslook.ru</p></div>
          </div>
          <button type="button" onClick={() => setNotice("Редактирование профиля доступно")} className="mt-5 flex w-full items-center justify-between border-t border-[#ffffff0c] pt-3 font-['DM_Sans'] text-[11px] text-[#c38a70]">Редактировать профиль <ChevronRight className="h-4 w-4" /></button>
        </Surface>

        <Surface className="relative overflow-hidden bg-[#3a2928] p-4">
          <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#5b1d2c] text-[#e3b39f]"><Sparkles className="h-4 w-4" /></div>
          <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.16em] text-[#c18b77]">ваш тариф</p>
          <p className="mt-2 font-['Playfair_Display'] text-[25px] text-[#f4e6dc]">Studio</p>
          <p className="mt-1 max-w-[245px] font-['DM_Sans'] text-[11px] leading-relaxed text-[#b5a198]">AI-лимит обновится через 12 дней. В этом месяце осталось 18 из 30 капсул.</p>
          <div className="mt-4 h-1.5 rounded-full bg-[#241e1e]"><div className="h-full w-[40%] rounded-full bg-[#c38a70]" /></div>
          <button type="button" onClick={() => setNotice("Управление тарифом открывается")} className="mt-4 font-['DM_Sans'] text-[11px] font-semibold text-[#d19a80]">Управлять тарифом →</button>
        </Surface>

        <section>
          <p className="mb-3 font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.19em] text-[#aa8a7a]">рабочая среда</p>
          <Surface className="divide-y divide-[#ffffff0b]">
            {settingRows.map(({ label, hint, icon: Icon }) => <button key={label} type="button" onClick={() => setNotice(`${label}: настройки открываются`)} className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-[#302d2b] active:bg-[#352e2c]"><span className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#382a28] text-[#c38a70]"><Icon className="h-4 w-4" strokeWidth={1.6} /></span><span className="min-w-0 flex-1"><span className="block font-['DM_Sans'] text-[12px] font-semibold text-[#eee2d9]">{label}</span><span className="mt-1 block font-['DM_Sans'] text-[10px] text-[#90847d]">{hint}</span></span><ChevronRight className="h-4 w-4 text-[#816e67]" /></button>)}
            <div className="flex items-center gap-3 p-4"><span className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#382a28] text-[#c38a70]"><Bell className="h-4 w-4" strokeWidth={1.6} /></span><span className="flex-1"><span className="block font-['DM_Sans'] text-[12px] font-semibold text-[#eee2d9]">Тихие уведомления</span><span className="mt-1 block font-['DM_Sans'] text-[10px] text-[#90847d]">не беспокоить после 21:00</span></span><button type="button" aria-label="Переключить тихие уведомления" onClick={() => setEnabled(!enabled)} className={`h-6 w-11 rounded-full p-1 transition-colors ${enabled ? "bg-[#6c2738]" : "bg-[#4a4542]"}`}><span className={`block h-4 w-4 rounded-full bg-[#f2e9df] transition-transform ${enabled ? "translate-x-5" : ""}`} /></button></div>
          </Surface>
        </section>
        <button type="button" onClick={() => setNotice("Выход из аккаунта")} className="flex w-full items-center justify-center gap-2 rounded-[16px] border border-[#ffffff12] bg-[#242221] px-4 py-3 font-['DM_Sans'] text-[11px] text-[#a78c82] transition-colors hover:border-[#a65e61] hover:text-[#d69c83] active:scale-[0.98]"><LogOut className="h-4 w-4" /> Выйти из аккаунта</button>
        {notice ? <p className="pb-2 text-center font-['DM_Sans'] text-[10px] text-[#c38a70]">{notice}</p> : null}
        <div className="flex items-center justify-center gap-2 pb-2 text-[#746b67]"><UserRound className="h-3.5 w-3.5" /><span className="font-['DM_Sans'] text-[9px]">Капслук · рабочее пространство Анны</span></div>
      </div>
    </AppShell>
  );
}