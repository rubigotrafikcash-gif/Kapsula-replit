import { useState, type ReactNode } from "react";
import {
  Bell,
  CalendarDays,
  ChevronLeft,
  CircleDollarSign,
  Heart,
  LayoutGrid,
  Plus,
  Search,
  Sparkles,
  UserRound,
  UsersRound,
  WalletCards,
} from "lucide-react";

type NavItem = { label: string; icon: typeof LayoutGrid };

const navItems: NavItem[] = [
  { label: "Главная", icon: LayoutGrid },
  { label: "Клиенты", icon: UsersRound },
  { label: "Финансы", icon: WalletCards },
  { label: "Профиль", icon: UserRound },
];

export function AppShell({
  title,
  eyebrow,
  children,
  active = "Главная",
  back = false,
  onBack,
  action,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  active?: string;
  back?: boolean;
  onBack?: () => void;
  action?: ReactNode;
}) {
  const [notice, setNotice] = useState("");
  const activeLabel = active;

  const handleNav = (label: string) => {
    setNotice(label === activeLabel ? "" : `${label} открывается в полном приложении`);
  };

  return (
    <main
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#171616] text-[#f2e9df]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 2%, rgba(113,38,49,.2), transparent 31%), radial-gradient(circle at -18% 53%, rgba(143,96,66,.1), transparent 37%), linear-gradient(145deg, #171616 0%, #1b1919 54%, #141313 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-[520px] flex-col px-5 pb-28 pt-5 sm:px-7">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {back ? (
              <button
                type="button"
                aria-label="Назад"
                onClick={onBack}
                className="grid h-10 w-10 place-items-center rounded-full border border-[#ffffff0b] bg-[#232120] text-[#d7c9bf] transition-colors hover:bg-[#302b29] active:scale-90"
              >
                <ChevronLeft className="h-[19px] w-[19px]" strokeWidth={1.8} />
              </button>
            ) : (
              <span className="font-['Playfair_Display'] text-[18px] tracking-[-0.04em] text-[#f1e4da]">
                капслук
              </span>
            )}
            {back ? (
              <span className="font-['DM_Sans'] text-[11px] text-[#978b84]">раздел</span>
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            {action}
            <button
              type="button"
              aria-label="Уведомления"
              onClick={() => setNotice("Новых уведомлений нет")}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-[#ffffff0b] bg-[#232120] text-[#d7c9bf] transition-colors hover:bg-[#302b29] active:scale-90"
            >
              <Bell className="h-[17px] w-[17px]" strokeWidth={1.8} />
              <span className="absolute right-[10px] top-[9px] h-1.5 w-1.5 rounded-full bg-[#af5d64] ring-2 ring-[#232120]" />
            </button>
            <button
              type="button"
              aria-label="Профиль Анны"
              onClick={() => setNotice("Профиль Анны")}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#b8775d66] bg-[#754133] font-['Playfair_Display'] text-[14px] font-semibold text-[#f5e3d8] shadow-[0_0_0_3px_#1a1717] transition-transform active:scale-90"
            >
              АВ
            </button>
          </div>
        </header>

        <section className="pt-7">
          {eyebrow ? (
            <p className="mb-2 font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.19em] text-[#aa8a7a]">
              {eyebrow}
            </p>
          ) : null}
          <div className="flex items-end justify-between gap-3">
            <h1 className="font-['Playfair_Display'] text-[34px] font-medium leading-[0.98] tracking-[-0.045em] text-[#f5ece3]">
              {title}
            </h1>
            {action ? null : <Sparkles className="mb-1 h-5 w-5 text-[#b67b67]" strokeWidth={1.5} />}
          </div>
          {notice ? (
            <p className="mt-3 font-['DM_Sans'] text-[11px] text-[#c7927b]">{notice}</p>
          ) : null}
        </section>

        <div className="flex-1">{children}</div>

        <nav className="fixed bottom-0 left-0 right-0 z-30 mx-auto max-w-[520px] border-t border-[#ffffff0b] bg-[#1c1a1ae8] px-5 pb-[calc(0.8rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-7">
          <div className="flex items-end justify-between">
            {navItems.slice(0, 2).map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => handleNav(label)}
                className={`flex w-14 flex-col items-center gap-1.5 transition-colors active:scale-90 ${activeLabel === label ? "text-[#c98a73]" : "text-[#7d726d] hover:text-[#b7a099]"}`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={activeLabel === label ? 2 : 1.6} />
                <span className="font-['DM_Sans'] text-[9px]">{label}</span>
              </button>
            ))}
            <button
              type="button"
              aria-label="Создать новую капсулу"
              onClick={() => setNotice("Создание новой капсулы")}
              className="relative -mt-7 grid h-14 w-14 place-items-center rounded-full border-[5px] border-[#1c1a1a] bg-[#6c2738] text-[#f4ddd4] shadow-[0_8px_22px_rgba(92,29,44,0.38)] transition-transform hover:-translate-y-0.5 hover:bg-[#813148] active:scale-90"
            >
              <Plus className="h-6 w-6" strokeWidth={1.8} />
            </button>
            {navItems.slice(2).map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => handleNav(label)}
                className={`flex w-14 flex-col items-center gap-1.5 transition-colors active:scale-90 ${activeLabel === label ? "text-[#c98a73]" : "text-[#7d726d] hover:text-[#b7a099]"}`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={activeLabel === label ? 2 : 1.6} />
                <span className="font-['DM_Sans'] text-[9px]">{label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}

export function SectionLabel({
  eyebrow,
  title,
  action,
  onAction,
}: {
  eyebrow?: string;
  title: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        {eyebrow ? (
          <p className="mb-1 font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.19em] text-[#aa8a7a]">{eyebrow}</p>
        ) : null}
        <h2 className="font-['DM_Sans'] text-[17px] font-semibold tracking-[-0.025em] text-[#f2e9df]">{title}</h2>
      </div>
      {action ? (
        <button type="button" onClick={onAction} className="font-['DM_Sans'] text-[11px] font-medium text-[#ad8c7b] transition-colors hover:text-[#e0b197] active:scale-[0.98]">
          {action}
        </button>
      ) : null}
    </div>
  );
}

export function Surface({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[22px] border border-[#ffffff0c] bg-[#292827] shadow-[0_14px_30px_rgba(0,0,0,0.15)] ${className}`}>{children}</div>;
}

export function ChoiceChip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-2 font-['DM_Sans'] text-[11px] transition-colors active:scale-[0.97] ${selected ? "border-[#c38a70] bg-[#6c2738] text-[#f5ddd3]" : "border-[#ffffff12] bg-[#242221] text-[#a99c94] hover:border-[#9d665e] hover:text-[#d6b3a2]"}`}
    >
      {label}
    </button>
  );
}

export function IconButton({ children, label, onClick }: { children: ReactNode; label: string; onClick?: () => void }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="grid h-9 w-9 place-items-center rounded-full border border-[#ffffff0c] bg-[#242221] text-[#bd806b] transition-colors hover:bg-[#3a2b2a] active:scale-90">
      {children}
    </button>
  );
}

export function Avatar({ initials, tone = "bg-[#8b5547]" }: { initials: string; tone?: string }) {
  return <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#ffffff19] font-['DM_Sans'] text-[10px] font-semibold text-[#f6ded5] ${tone}`}>{initials}</span>;
}

export function formatMoney(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value).replace(/\u00a0/g, " ");
}

export const shellIcons = { CalendarDays, CircleDollarSign, Heart, Search, UserRound, WalletCards };