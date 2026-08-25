import { useState, type ComponentType } from "react";
import {
  ArrowUpRight,
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Heart,
  LayoutGrid,
  Menu,
  Plus,
  Search,
  Sparkles,
  UserRound,
  UsersRound,
  WalletCards,
} from "lucide-react";

type IconType = ComponentType<{ className?: string }>;

const quickActions: {
  label: string;
  hint: string;
  icon: IconType;
  tone: string;
}[] = [
  {
    label: "AI-капсула",
    hint: "собрать образ",
    icon: Sparkles,
    tone: "bg-[#5b1d2c] text-[#f4d8d0]",
  },
  {
    label: "Клиенты",
    hint: "24 активных",
    icon: UsersRound,
    tone: "bg-[#292827] text-[#d5a184]",
  },
  {
    label: "Финансы",
    hint: "к оплате · 2",
    icon: WalletCards,
    tone: "bg-[#292827] text-[#d5a184]",
  },
];

function SectionLabel({
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
          <p className="mb-1 font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.19em] text-[#aa8a7a]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-['DM_Sans'] text-[17px] font-semibold tracking-[-0.025em] text-[#f2e9df]">
          {title}
        </h2>
      </div>
      {action ? (
        <button
          type="button"
          onClick={onAction}
          className="group inline-flex items-center gap-1 pb-0.5 font-['DM_Sans'] text-[11px] font-medium text-[#ad8c7b] transition-colors hover:text-[#e0b197] active:scale-[0.98]"
        >
          {action}
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      ) : null}
    </div>
  );
}

function QuickAction({
  label,
  hint,
  icon: Icon,
  tone,
  onClick,
}: (typeof quickActions)[number] & { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex min-h-[76px] w-full flex-col justify-between rounded-[20px] border border-[#ffffff0a] p-3 text-left shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97] ${tone}`}
    >
      <Icon className="h-[17px] w-[17px] transition-transform duration-200 group-hover:scale-110" />
      <span className="mt-2 block">
        <span className="block font-['DM_Sans'] text-[11px] font-semibold leading-tight">
          {label}
        </span>
        <span className="mt-0.5 block font-['DM_Sans'] text-[9px] text-[#c9b8ae]">
          {hint}
        </span>
      </span>
    </button>
  );
}

export function CapslookHome() {
  const [activeNav, setActiveNav] = useState("Главная");
  const [notice, setNotice] = useState("Ваш рабочий день собран");

  const handleAction = (label: string) => {
    setNotice(`${label} открывается`);
  };

  return (
    <main
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#171616] text-[#f2e9df]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 4%, rgba(113,38,49,.18), transparent 30%), radial-gradient(circle at -10% 44%, rgba(143,96,66,.08), transparent 34%), linear-gradient(145deg, #171616 0%, #1b1919 54%, #141313 100%)",
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

      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-[520px] flex-col px-5 pb-3 pt-5 sm:px-7">
        <header className="flex items-center justify-between">
          <button
            type="button"
            aria-label="Открыть меню"
            onClick={() => handleAction("Меню")}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#ffffff0b] bg-[#232120] text-[#d7c9bf] transition-transform hover:bg-[#2d2928] active:scale-90"
          >
            <Menu className="h-[19px] w-[19px]" strokeWidth={1.8} />
          </button>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Уведомления"
              onClick={() => handleAction("Уведомления")}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-[#ffffff0b] bg-[#232120] text-[#d7c9bf] transition-transform hover:bg-[#2d2928] active:scale-90"
            >
              <Bell className="h-[17px] w-[17px]" strokeWidth={1.8} />
              <span className="absolute right-[10px] top-[9px] h-1.5 w-1.5 rounded-full bg-[#9d4454] ring-2 ring-[#232120]" />
            </button>
            <button
              type="button"
              aria-label="Профиль Анны"
              onClick={() => handleAction("Профиль")}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#b8775d66] bg-[#754133] font-['Playfair_Display'] text-[14px] font-semibold text-[#f5e3d8] shadow-[0_0_0_3px_#1a1717]"
            >
              АВ
            </button>
          </div>
        </header>

        <section className="pt-7">
          <div className="flex items-center gap-2">
            <span className="h-px w-7 bg-[#9d5961]" />
            <p className="font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ad8c7b]">
              Среда · 24 сентября
            </p>
          </div>
          <h1 className="mt-3 font-['Playfair_Display'] text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#f5ece3]">
            Добрый день,
            <br />
            <span className="text-[#b77a68]">Анна</span>
          </h1>
          <div className="mt-3 flex items-center justify-between">
            <p className="font-['DM_Sans'] text-[12px] text-[#988d86]">{notice}</p>
            <span className="flex items-center gap-1.5 font-['DM_Sans'] text-[10px] font-medium text-[#bc9c8d]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#af5d64]" />
              В работе
            </span>
          </div>
        </section>

        <section className="mt-6">
          <SectionLabel title="Быстрый доступ" />
          <div className="grid grid-cols-[0.85fr_1.65fr] gap-3">
            <div className="flex flex-col gap-2.5">
              {quickActions.map((action) => (
                <QuickAction
                  key={action.label}
                  {...action}
                  onClick={() => handleAction(action.label)}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => handleAction("План дня")}
              className="group relative min-h-[238px] overflow-hidden rounded-[24px] border border-[#ffffff0d] bg-[#292827] p-4 text-left shadow-[0_18px_35px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.985]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#9d59612b] bg-[#702d3c1c]" />
              <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#191818] text-[#d29b7b]">
                <CalendarDays className="h-4 w-4" strokeWidth={1.7} />
              </div>
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#5b1d2c] px-2 py-1 font-['DM_Sans'] text-[9px] font-semibold text-[#e8c2b6]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#cd8c7a]" />
                    Сегодня
                  </span>
                  <h2 className="mt-12 font-['Playfair_Display'] text-[25px] leading-none text-[#f4e9df]">
                    План дня
                  </h2>
                  <p className="mt-2 font-['DM_Sans'] text-[11px] leading-relaxed text-[#a9a09a]">
                    3 задачи ждут
                    <br />
                    вашего внимания
                  </p>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex -space-x-1.5">
                    {["ЕМ", "МК", "АБ"].map((initials, index) => (
                      <span
                        key={initials}
                        className={`grid h-7 w-7 place-items-center rounded-full border-2 border-[#292827] font-['DM_Sans'] text-[8px] font-semibold ${
                          index === 0
                            ? "bg-[#8b5547] text-[#f4ddd4]"
                            : index === 1
                              ? "bg-[#66504c] text-[#e8d8d0]"
                              : "bg-[#a16f59] text-[#251c1b]"
                        }`}
                      >
                        {initials}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="h-[18px] w-[18px] text-[#bd806d] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </button>
          </div>
        </section>

        <section className="mt-7">
          <SectionLabel
            eyebrow="В фокусе"
            title="Ваши рабочие зоны"
            action="Все разделы"
            onAction={() => handleAction("Все разделы")}
          />

          <button
            type="button"
            onClick={() => handleAction("Клиенты")}
            className="group mb-3 flex w-full items-center justify-between rounded-[22px] border border-[#ffffff0c] bg-[#292827] p-4 text-left shadow-[0_14px_30px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.985]"
          >
            <div className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 place-items-center rounded-[15px] bg-[#382a28] text-[#c88d73]">
                <UsersRound className="h-[19px] w-[19px]" strokeWidth={1.6} />
              </span>
              <span>
                <span className="block font-['DM_Sans'] text-[15px] font-semibold text-[#f0e4da]">
                  Клиенты
                </span>
                <span className="mt-1 block font-['DM_Sans'] text-[11px] text-[#9f9791]">
                  24 активных клиента
                </span>
              </span>
            </div>
            <div className="text-right">
              <span className="block font-['Playfair_Display'] text-[27px] leading-none text-[#e4b09a]">
                24
              </span>
              <span className="mt-1 block font-['DM_Sans'] text-[9px] uppercase tracking-[0.12em] text-[#887e79]">
                база
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleAction("Мои капсулы")}
            className="group relative mb-3 w-full overflow-hidden rounded-[22px] border border-[#ffffff0c] bg-[#292827] p-4 text-left transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.985]"
          >
            <div className="absolute right-0 top-0 h-full w-[46%] opacity-80">
              <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-[#6d3037]/30 blur-2xl" />
              <div className="absolute right-4 top-3 h-[100px] w-[86px] rotate-[-8deg] rounded-[46%_46%_10%_10%] border border-[#b9826d80] bg-gradient-to-br from-[#7a4a47] via-[#4b3033] to-[#282626]" />
              <div className="absolute right-[71px] top-8 h-20 w-10 rotate-[10deg] rounded-t-[18px] rounded-b-[7px] border border-[#c89a7f55] bg-[#a2715d66]" />
              <div className="absolute right-[72px] top-[18px] h-2 w-8 rounded-full bg-[#c8977f]" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 font-['DM_Sans'] text-[9px] font-semibold uppercase tracking-[0.16em] text-[#ba8473]">
                <Sparkles className="h-3 w-3" />
                Studio archive
              </span>
              <h2 className="mt-8 font-['Playfair_Display'] text-[25px] leading-none text-[#f3e7dd]">
                Мои капсулы
              </h2>
              <p className="mt-2 font-['DM_Sans'] text-[11px] text-[#a9a09a]">
                12 образов готовы
              </p>
            </div>
            <span className="absolute bottom-4 right-4 grid h-8 w-8 place-items-center rounded-full border border-[#c08772] text-[#c08772] transition-colors group-hover:bg-[#c08772] group-hover:text-[#292827]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>

          <div className="grid grid-cols-[1.12fr_0.88fr] gap-3">
            <button
              type="button"
              onClick={() => handleAction("Финансы")}
              className="group min-h-[128px] rounded-[22px] border border-[#ffffff0c] bg-[#292827] p-4 text-left transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.985]"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-8 w-8 place-items-center rounded-[11px] bg-[#3a2928] text-[#c38a70]">
                  <CircleDollarSign className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#806e67] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <span className="mt-4 block font-['DM_Sans'] text-[10px] uppercase tracking-[0.14em] text-[#988b83]">
                Финансы
              </span>
              <span className="mt-1 block font-['Playfair_Display'] text-[24px] leading-none text-[#f0e3da]">
                ₽ 186 400
              </span>
              <span className="mt-1.5 block font-['DM_Sans'] text-[10px] text-[#9c918a]">
                за этот месяц
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleAction("Профиль")}
              className="group min-h-[128px] rounded-[22px] border border-[#ffffff0c] bg-[#292827] p-4 text-left transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.985]"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-8 w-8 place-items-center rounded-[11px] bg-[#382a28] text-[#c38a70]">
                  <UserRound className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#806e67] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <span className="mt-4 block font-['DM_Sans'] text-[10px] uppercase tracking-[0.14em] text-[#988b83]">
                Личный кабинет
              </span>
              <span className="mt-1 block font-['DM_Sans'] text-[14px] font-semibold text-[#f0e3da]">
                Анна Воронова
              </span>
              <span className="mt-1 block font-['DM_Sans'] text-[10px] text-[#9c918a]">
                Персональный стилист
              </span>
            </button>
          </div>
        </section>

        <div className="mt-6 flex items-center justify-center gap-2 pb-24">
          <Clock3 className="h-3.5 w-3.5 text-[#8d756b]" />
          <span className="font-['DM_Sans'] text-[10px] text-[#8d817a]">
            Последняя синхронизация 2 мин назад
          </span>
          <Check className="h-3.5 w-3.5 text-[#9a655a]" />
        </div>

        <nav className="fixed bottom-0 left-0 right-0 z-30 mx-auto max-w-[520px] border-t border-[#ffffff0b] bg-[#1c1a1ae8] px-5 pb-[calc(0.8rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-7">
          <div className="flex items-end justify-between">
            {[
              { label: "Главная", icon: LayoutGrid },
              { label: "Поиск", icon: Search },
            ].map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setActiveNav(label);
                  handleAction(label);
                }}
                className={`flex w-14 flex-col items-center gap-1.5 transition-colors active:scale-90 ${
                  activeNav === label ? "text-[#c98a73]" : "text-[#7d726d] hover:text-[#b7a099]"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={activeNav === label ? 2 : 1.6} />
                <span className="font-['DM_Sans'] text-[9px]">{label}</span>
              </button>
            ))}

            <button
              type="button"
              aria-label="Создать новую капсулу"
              onClick={() => {
                setActiveNav("Новая капсула");
                handleAction("Новая капсула");
              }}
              className="relative -mt-7 grid h-14 w-14 place-items-center rounded-full border-[5px] border-[#1c1a1a] bg-[#6c2738] text-[#f4ddd4] shadow-[0_8px_22px_rgba(92,29,44,0.38)] transition-transform hover:-translate-y-0.5 hover:bg-[#813148] active:scale-90"
            >
              <Plus className="h-6 w-6" strokeWidth={1.8} />
            </button>

            {[
              { label: "Избранное", icon: Heart },
              { label: "Профиль", icon: UserRound },
            ].map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setActiveNav(label);
                  handleAction(label);
                }}
                className={`flex w-14 flex-col items-center gap-1.5 transition-colors active:scale-90 ${
                  activeNav === label ? "text-[#c98a73]" : "text-[#7d726d] hover:text-[#b7a099]"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={activeNav === label ? 2 : 1.6} />
                <span className="font-['DM_Sans'] text-[9px]">{label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}