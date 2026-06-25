import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HERO_IMG = 'https://cdn.poehali.dev/projects/634128c6-5534-4ae8-8b2d-3514e86e881a/files/2df0f1b1-a38e-4773-817e-8583e8b72c2d.jpg';
const CASE_IMG = 'https://cdn.poehali.dev/projects/634128c6-5534-4ae8-8b2d-3514e86e881a/files/87f4b997-a5ac-4145-a200-effd1af08066.jpg';
const ENGRAVE_IMG = 'https://cdn.poehali.dev/projects/634128c6-5534-4ae8-8b2d-3514e86e881a/files/a5e285f4-4421-403e-8e41-2c1d9655769f.jpg';

const Reveal = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVis(true),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${vis ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const gallery = [
  { img: HERO_IMG, title: 'Дамасская сталь', sub: 'Многослойный узор клинка' },
  { img: ENGRAVE_IMG, title: 'Эксклюзивная отделка', sub: 'Гравировка и фурнитура' },
  { img: CASE_IMG, title: 'Премиальная упаковка', sub: 'Деревянные кейсы и футляры' },
];

const guarantees = [
  { icon: 'ShieldCheck', t: 'Контроль качества', d: 'Каждое изделие проходит финальную проверку мастером.' },
  { icon: 'BadgeCheck', t: 'Сертифицированные материалы', d: 'Высоколегированные стали и редкие породы дерева.' },
  { icon: 'Clock', t: 'Соблюдение сроков', d: 'Изготовление и доставка точно в оговорённый день.' },
  { icon: 'Lock', t: 'Конфиденциальность', d: 'Полная приватность корпоративных заказов.' },
  { icon: 'UserCheck', t: 'Персональный менеджер', d: 'Ведёт ваш проект от идеи до вручения.' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-graphite/60 border-b border-border/40">
        <div className="container flex items-center justify-between h-16">
          <div className="font-display text-xl md:text-2xl tracking-[0.18em] font-semibold">
            SHARP<span className="text-khaki"> </span>KNIVES
          </div>
          <a href="#form">
            <Button variant="outline" className="border-khaki/50 text-khaki hover:bg-khaki hover:text-graphite rounded-none uppercase text-xs tracking-luxury">
              Заявка
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover animate-slow-zoom opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/30" />
          <div className="absolute inset-0 grain opacity-[0.07] mix-blend-overlay" />
        </div>
        <div className="container relative z-10 py-24">
          <Reveal>
            <p className="font-oswald text-khaki uppercase tracking-luxury text-sm mb-6">
              Ручная работа · Ограниченные серии
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] max-w-4xl font-medium">
              Премиальные ножи ручной работы для <span className="text-shimmer">корпоративных подарков</span> и VIP-партнёров
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Эксклюзивные изделия от мастеров-ножевиков, которые подчёркивают статус компании, укрепляют деловые отношения и остаются в памяти на долгие годы.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
              {['Ручная работа и ограниченные серии', 'Персональная гравировка и брендирование', 'Подарочная упаковка премиум-класса', 'Корпоративные партии любого объёма'].map((a) => (
                <div key={a} className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-khaki mt-1 shrink-0" />
                  <span className="text-foreground/90">{a}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="#catalog">
                <Button className="bg-khaki text-graphite hover:bg-khaki-deep rounded-none h-14 px-10 uppercase tracking-luxury text-xs font-semibold w-full sm:w-auto">
                  <Icon name="Download" size={18} className="mr-2" /> Получить каталог
                </Button>
              </a>
              <a href="#form">
                <Button variant="outline" className="border-border text-foreground hover:border-khaki hover:text-khaki rounded-none h-14 px-10 uppercase tracking-luxury text-xs w-full sm:w-auto bg-transparent">
                  Рассчитать стоимость проекта
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-28 border-t border-border/40 relative">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="font-oswald text-khaki uppercase tracking-luxury text-sm mb-6">Когда обычный подарок не работает</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8 font-medium">
              Ваши партнёры заслуживают большего, чем стандартные сувениры
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>Большинство корпоративных подарков быстро забываются. Ежедневники, кружки и стандартные наборы теряются среди десятков аналогичных презентов.</p>
              <p>Авторский нож ручной работы — это предмет, который вызывает эмоции, демонстрирует уважение и становится символом особого отношения к получателю.</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-px bg-border/40">
              {['высокий статус компании', 'ценность партнёрских отношений', 'внимание к деталям', 'безупречный вкус дарителя'].map((t, i) => (
                <div key={t} className="bg-card flex items-center gap-5 p-6 group hover:bg-secondary transition-colors">
                  <span className="font-display text-3xl text-khaki/60 w-10">0{i + 1}</span>
                  <span className="text-lg">{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-28 border-t border-border/40 bg-secondary/30">
        <div className="container">
          <Reveal className="text-center mb-16">
            <p className="font-oswald text-khaki uppercase tracking-luxury text-sm mb-4">Галерея изделий</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium">Каждый нож — произведение искусства</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((g, i) => (
              <Reveal key={g.title} delay={i * 120}>
                <div className="group relative overflow-hidden border border-border/40 aspect-[3/4]">
                  <img src={g.img} alt={g.title} className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-7">
                    <h3 className="font-display text-2xl mb-1">{g.title}</h3>
                    <p className="text-khaki text-sm font-oswald uppercase tracking-wider">{g.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG / PDF */}
      <section id="catalog" className="py-28 border-t border-border/40">
        <div className="container">
          <Reveal>
            <div className="relative border border-khaki/30 bg-card p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
              <div className="absolute inset-0 grain opacity-[0.05]" />
              <div className="shrink-0 w-28 h-36 bg-gradient-to-br from-khaki/20 to-graphite border border-khaki/40 flex items-center justify-center relative">
                <Icon name="FileText" size={48} className="text-khaki" />
                <span className="absolute -bottom-3 bg-khaki text-graphite text-[10px] font-oswald uppercase tracking-wider px-3 py-1">PDF</span>
              </div>
              <div className="flex-1 text-center md:text-left relative z-10">
                <h2 className="font-display text-3xl md:text-4xl mb-3 font-medium">Каталог моделей и материалов</h2>
                <p className="text-muted-foreground max-w-xl">Подробное описание авторских моделей, сталей, рукоятей и вариантов брендирования — в одном PDF-файле.</p>
              </div>
              <a href="#" download className="relative z-10 shrink-0">
                <Button className="bg-khaki text-graphite hover:bg-khaki-deep rounded-none h-14 px-10 uppercase tracking-luxury text-xs font-semibold">
                  <Icon name="Download" size={18} className="mr-2" /> Скачать каталог
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-28 border-t border-border/40 bg-secondary/30">
        <div className="container">
          <Reveal className="text-center mb-16">
            <p className="font-oswald text-khaki uppercase tracking-luxury text-sm mb-4">Гарантии</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium">Безупречное качество в каждой детали</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40">
            {guarantees.map((g, i) => (
              <Reveal key={g.t} delay={i * 80}>
                <div className="bg-card p-9 h-full hover:bg-secondary transition-colors group">
                  <div className="w-12 h-12 border border-khaki/40 flex items-center justify-center mb-6 group-hover:bg-khaki transition-colors">
                    <Icon name={g.icon} size={22} className="text-khaki group-hover:text-graphite transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">{g.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{g.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section id="form" className="py-28 border-t border-border/40 relative">
        <div className="absolute inset-0">
          <img src={ENGRAVE_IMG} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-graphite/85" />
        </div>
        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="font-oswald text-khaki uppercase tracking-luxury text-sm mb-6">Персональное предложение</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6 font-medium">
              Подберите корпоративный подарок, который будут помнить годами
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Получите персональную подборку премиальных ножей ручной работы и расчёт стоимости для вашей компании.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <form className="bg-card/90 backdrop-blur border border-border/60 p-8 md:p-10 space-y-4">
              <Input placeholder="Имя" className="bg-secondary/50 border-border rounded-none h-12 focus-visible:ring-khaki" />
              <Input placeholder="Компания" className="bg-secondary/50 border-border rounded-none h-12 focus-visible:ring-khaki" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Телефон" className="bg-secondary/50 border-border rounded-none h-12 focus-visible:ring-khaki" />
                <Input placeholder="Email" className="bg-secondary/50 border-border rounded-none h-12 focus-visible:ring-khaki" />
              </div>
              <Input placeholder="Количество подарков" className="bg-secondary/50 border-border rounded-none h-12 focus-visible:ring-khaki" />
              <Button className="w-full bg-khaki text-graphite hover:bg-khaki-deep rounded-none h-14 uppercase tracking-luxury text-xs font-semibold">
                Получить персональное предложение
              </Button>
              <p className="text-center text-sm text-muted-foreground pt-1">
                Ответим в течение 30 минут и подготовим индивидуальную презентацию.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="py-10 border-t border-border/40">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <div className="font-display text-xl text-foreground tracking-[0.18em] font-semibold">SHARP<span className="text-khaki"> </span>KNIVES</div>
          <p>© 2026 · Премиальные ножи ручной работы для корпоративных подарков</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;