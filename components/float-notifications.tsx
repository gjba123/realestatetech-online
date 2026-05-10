/**
 * Rendy-style floating notification cards (booking / payment proof).
 * Renders absolutely-positioned cards inside a relative parent — caller positions the wrapper.
 */

type Notif = {
  icon: "calendar" | "cash" | "heart" | "share";
  title: string;
  sub: string;
  amount?: string;
  pos: { top?: string; left?: string; right?: string; bottom?: string };
  rotate?: string;
  delay?: string;
};

const ICON: Record<Notif["icon"], React.ReactNode> = {
  calendar: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cash: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V12Zm-12 0h.008v.008H6V12Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  heart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  share: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186-9.566-5.314m9.566 7.5-9.566 5.314M17.25 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const NICHE_NOTIFS: Record<"hosts" | "realtors" | "developers" | "home", Notif[]> = {
  home: [
    {
      icon: "cash",
      title: "Booking confirmed",
      sub: "Maya · 3 nights · Diani",
      amount: "+ $642",
      pos: { top: "8%", right: "-8%" },
      rotate: "3deg",
      delay: "0.4s",
    },
    {
      icon: "heart",
      title: "Inquiry from Jordan",
      sub: "Wants viewing this weekend",
      pos: { bottom: "10%", left: "-8%" },
      rotate: "-4deg",
      delay: "0.7s",
    },
  ],
  hosts: [
    {
      icon: "calendar",
      title: "New booking",
      sub: "Coastal villa · 4 nights",
      amount: "+ $480",
      pos: { top: "8%", right: "-10%" },
      rotate: "3deg",
      delay: "0.4s",
    },
    {
      icon: "heart",
      title: "Saved by 12 guests",
      sub: "Past 24 hours",
      pos: { bottom: "12%", left: "-12%" },
      rotate: "-4deg",
      delay: "0.7s",
    },
  ],
  realtors: [
    {
      icon: "cash",
      title: "Listing inquiry",
      sub: "Premium 4-bed · Westlands",
      amount: "$890k",
      pos: { top: "8%", right: "-10%" },
      rotate: "3deg",
      delay: "0.4s",
    },
    {
      icon: "share",
      title: "247 video shares",
      sub: "This listing on IG/TikTok",
      pos: { bottom: "12%", left: "-12%" },
      rotate: "-4deg",
      delay: "0.7s",
    },
  ],
  developers: [
    {
      icon: "cash",
      title: "Pre-sale reserved",
      sub: "Unit B-12 · 2-bed",
      amount: "$245k",
      pos: { top: "8%", right: "-10%" },
      rotate: "3deg",
      delay: "0.4s",
    },
    {
      icon: "share",
      title: "Launch teaser views",
      sub: "12.4k in 48 hours",
      pos: { bottom: "12%", left: "-12%" },
      rotate: "-4deg",
      delay: "0.7s",
    },
  ],
};

export function FloatNotifications({
  variant = "home",
}: {
  variant?: "home" | "hosts" | "realtors" | "developers";
}) {
  const notifs = NICHE_NOTIFS[variant];

  return (
    <>
      {notifs.map((n, i) => (
        <div
          key={i}
          className="absolute z-20 notif-card animate-notify-in animate-float w-[200px] sm:w-[230px]"
          style={{
            ...n.pos,
            // @ts-expect-error CSS custom prop
            "--rot": n.rotate || "0deg",
            transform: `rotate(${n.rotate || "0deg"})`,
            animationDelay: n.delay,
          }}
        >
          <div className="flex items-start gap-3">
            <span className="shrink-0 w-9 h-9 rounded-full bg-[var(--green-soft)] text-[var(--whatsapp-dark)] flex items-center justify-center">
              {ICON[n.icon]}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-[var(--ink)] truncate">
                {n.title}
              </p>
              <p className="text-[11px] text-[var(--muted)] truncate">{n.sub}</p>
            </div>
            {n.amount && (
              <span className="shrink-0 font-display font-bold text-sm text-[var(--whatsapp-dark)]">
                {n.amount}
              </span>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
