import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  AtSign,
  BarChart3,
  Bell,
  Bot,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  CircleDollarSign,
  Clock3,
  CalendarDays,
  Facebook,
  FileText,
  Filter,
  Globe2,
  HelpCircle,
  Instagram,
  Languages,
  LayoutDashboard,
  Link2,
  Menu,
  MessageCircle,
  MessageSquareText,
  Mic,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Package,
  Paperclip,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  Send,
  SendHorizontal,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Printer,
  Smile,
  Sparkles,
  Store,
  Sun,
  Tablet,
  Tag,
  TrendingUp,
  UserRound,
  Users,
  WalletCards,
  Trash2,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Locale = "ar" | "en";
type Theme = "light" | "dark";
type View = "dashboard" | "conversations" | "channels" | "settings" | "products" | "orders" | "purchases" | "analytics" | "discounts" | "reviews" | "shipping" | "payments" | "expenses" | "reports";

type Copy = {
  [key: string]: string | Copy;
};

const copy: Record<Locale, Copy> = {
  ar: {
    dashboard: "لوحة التحكم",
    overview: "نظرة عامة",
    purchases: "المشتريات",
    products: "المنتجات",
    orders: "الطلبات",
    conversations: "المحادثات",
    customers: "العملاء",
    analytics: "التحليلات",
    discounts: "الخصومات",
    reviews: "آراء العملاء",
    shipping: "إعدادات التوصيل",
    payments: "المدفوعات",
    reports: "التقارير المالية",
    settings: "الإعدادات",
    help: "مركز المساعدة",
    store: "متجر ميلانو",
    online: "متصل الآن",
    welcome: "صباح الخير، أحمد",
    welcomeSub: "إليك نظرة سريعة على أداء متجرك اليوم.",
    today: "اليوم، 16 سبتمبر 2026",
    addProduct: "إضافة منتج",
    totalSales: "إجمالي المبيعات",
    ordersCount: "الطلبات",
    customersCount: "العملاء",
    netProfit: "صافي الأرباح",
    vsLastMonth: "مقارنة بالشهر الماضي",
    revenue: "المبيعات",
    expenses: "المصروفات",
    thisMonth: "هذا الشهر",
    activity: "آخر النشاطات",
    viewAll: "عرض الكل",
    recentOrders: "أحدث الطلبات",
    lowStock: "تنبيهات المخزون",
    needAttention: "تحتاج إلى انتباهك",
    conversationsSub: "إدارة جميع محادثات عملائك من مكان واحد باستخدام الذكاء الاصطناعي.",
    channels: "القنوات المتصلة",
    inbox: "صندوق الوارد",
    totalConversations: "إجمالي المحادثات",
    newConversations: "محادثات جديدة",
    aiReplied: "رد عليها الذكاء الاصطناعي",
    humanHelp: "تحتاج تدخلاً بشرياً",
    responseTime: "متوسط سرعة الرد",
    satisfaction: "رضا العملاء",
    search: "ابحث في النظام...",
    searchConversations: "ابحث عن عميل أو رقم هاتف...",
    all: "الكل",
    unread: "غير مقروءة",
    needsAgent: "تحتاج موظف",
    aiAnswered: "رد آلي",
    important: "مهمة",
    connected: "متصلة",
    connect: "ربط الحساب",
    manage: "إدارة القناة",
    settingsTitle: "الإعدادات العامة",
    settingsSub: "تحكم في تجربة نظام ميلانو بما يناسب فريقك ومتجرك.",
    language: "لغة الواجهة",
    languageSub: "تتغير اتجاهات النظام ومحتواه بالكامل عند اختيار اللغة.",
    theme: "مظهر النظام",
    themeSub: "اختر بين الواجهة الفاتحة والداكنة المريحة للعين.",
    autoLanguage: "لغة العميل تلقائياً",
    autoLanguageSub: "يتعرف الذكاء الاصطناعي على لغة العميل ويرد باللغة نفسها.",
    dialect: "اللهجة العربية",
    dialectSub: "اختر أسلوب الرد الافتراضي للمحادثات العربية.",
    autoDialect: "التعرف التلقائي على اللهجة",
    autoDialectSub: "تحليل أسلوب كتابة العميل مع الحفاظ على الاحترافية.",
    light: "فاتح",
    dark: "داكن",
    save: "حفظ التغييرات",
    product: "المنتج",
    status: "الحالة",
    amount: "المبلغ",
    customer: "العميل",
    date: "التاريخ",
    inStock: "متوفر",
    low: "منخفض",
    completed: "مكتمل",
    processing: "قيد المعالجة",
    pending: "معلّق",
    noDataTitle: "هذه الصفحة جاهزة للتوسع",
    noDataSub: "تم تجهيز البنية الأساسية، وسيتم ربط بيانات هذا القسم من قاعدة البيانات لاحقاً.",
    backDashboard: "العودة للوحة التحكم",
    send: "إرسال",
    typeMessage: "اكتب رسالتك...",
    customerDetails: "بيانات العميل",
    quickActions: "إجراءات سريعة",
    createOrder: "إنشاء طلب",
    orderHistory: "سجل الطلبات",
    addNote: "إضافة ملاحظة",
    assign: "تحويل لموظف",
    monthly: "شهرياً",
    storeStatus: "حالة المتجر",
    open: "مفتوح ويستقبل الطلبات",
  },
  en: {
    dashboard: "Dashboard",
    overview: "Overview",
    purchases: "Purchases",
    products: "Products",
    orders: "Orders",
    conversations: "Conversations",
    customers: "Customers",
    analytics: "Analytics",
    discounts: "Discounts",
    reviews: "Customer reviews",
    shipping: "Shipping settings",
    payments: "Payments",
    reports: "Financial reports",
    settings: "Settings",
    help: "Help center",
    store: "Milano Store",
    online: "Online now",
    welcome: "Good morning, Ahmed",
    welcomeSub: "Here is a quick look at your store performance today.",
    today: "Today, Sep 16, 2026",
    addProduct: "Add product",
    totalSales: "Total sales",
    ordersCount: "Orders",
    customersCount: "Customers",
    netProfit: "Net profit",
    vsLastMonth: "vs last month",
    revenue: "Revenue",
    expenses: "Expenses",
    thisMonth: "This month",
    activity: "Recent activity",
    viewAll: "View all",
    recentOrders: "Recent orders",
    lowStock: "Stock alerts",
    needAttention: "Needs your attention",
    conversationsSub: "Manage every customer conversation from one place with AI.",
    channels: "Connected channels",
    inbox: "Inbox",
    totalConversations: "Total conversations",
    newConversations: "New conversations",
    aiReplied: "AI answered",
    humanHelp: "Needs human help",
    responseTime: "Avg. response time",
    satisfaction: "Customer satisfaction",
    search: "Search the system...",
    searchConversations: "Search customer or phone...",
    all: "All",
    unread: "Unread",
    needsAgent: "Needs agent",
    aiAnswered: "AI answered",
    important: "Important",
    connected: "Connected",
    connect: "Connect account",
    manage: "Manage channel",
    settingsTitle: "General settings",
    settingsSub: "Tune Milano to match your team and store workflow.",
    language: "Interface language",
    languageSub: "The system direction and content update when the language changes.",
    theme: "System appearance",
    themeSub: "Choose a light or dark interface that feels comfortable.",
    autoLanguage: "Auto-detect customer language",
    autoLanguageSub: "AI identifies the language and replies in the same language.",
    dialect: "Arabic dialect",
    dialectSub: "Choose the default reply style for Arabic conversations.",
    autoDialect: "Auto-detect dialect",
    autoDialectSub: "Analyze writing style while keeping a professional tone.",
    light: "Light",
    dark: "Dark",
    save: "Save changes",
    product: "Product",
    status: "Status",
    amount: "Amount",
    customer: "Customer",
    date: "Date",
    inStock: "In stock",
    low: "Low",
    completed: "Completed",
    processing: "Processing",
    pending: "Pending",
    noDataTitle: "This page is ready to grow",
    noDataSub: "The foundation is ready; this section can be connected to live database data next.",
    backDashboard: "Back to dashboard",
    send: "Send",
    typeMessage: "Write a message...",
    customerDetails: "Customer details",
    quickActions: "Quick actions",
    createOrder: "Create order",
    orderHistory: "Order history",
    addNote: "Add note",
    assign: "Assign to agent",
    monthly: "Monthly",
    storeStatus: "Store status",
    open: "Open and accepting orders",
  },
};

function getText(locale: Locale, key: string) {
  const value = key.split(".").reduce<Copy | string | undefined>((acc, part) => (typeof acc === "object" ? acc[part] : undefined), copy[locale]);
  return typeof value === "string" ? value : key;
}

const stats = [
  { key: "totalSales", value: "١٢٤,٥٨٠", en: "124,580", suffix: "ر.س", icon: CircleDollarSign, color: "blue", change: "+12.8%", positive: true },
  { key: "ordersCount", value: "٨٤٢", en: "842", suffix: "طلب", icon: ShoppingCart, color: "green", change: "+8.2%", positive: true },
  { key: "customersCount", value: "٣,٦٨٤", en: "3,684", suffix: "عميل", icon: Users, color: "orange", change: "+5.4%", positive: true },
  { key: "netProfit", value: "٤٨,٢١٠", en: "48,210", suffix: "ر.س", icon: TrendingUp, color: "red", change: "-2.1%", positive: false },
];

const chartBars = [48, 64, 50, 72, 61, 82, 69, 91, 76, 89, 73, 96];
const months = ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"];

const orders = [
  { id: "#ML-4832", name: "سماعة لاسلكية Pro", sku: "ML-AU-204", amount: "٣٤٩ ر.س", status: "completed", customer: "سارة العتيبي" },
  { id: "#ML-4831", name: "حقيبة جلدية كلاسيك", sku: "ML-BG-119", amount: "٥٨٠ ر.س", status: "processing", customer: "محمد القحطاني" },
  { id: "#ML-4830", name: "ساعة Milano One", sku: "ML-WA-882", amount: "٧٩٩ ر.س", status: "pending", customer: "نورة الحربي" },
];

const conversations = [
  { id: 1, name: "سارة العتيبي", initials: "سع", color: "linear-gradient(135deg,#f6a6bd,#d94e87)", message: "متى يصل طلبي؟", time: "09:42", channel: "whatsapp", unread: 2, tag: "new" },
  { id: 2, name: "محمد القحطاني", initials: "مق", color: "linear-gradient(135deg,#91b7ff,#5367d9)", message: "هل يوجد لون أسود؟", time: "09:18", channel: "instagram", unread: 0, tag: "ai" },
  { id: 3, name: "نورة الحربي", initials: "نه", color: "linear-gradient(135deg,#8edbbd,#339f89)", message: "شكراً، وصلتني الشحنة", time: "08:56", channel: "facebook", unread: 0, tag: "done" },
  { id: 4, name: "خالد الدوسري", initials: "خد", color: "linear-gradient(135deg,#fbd38d,#e98939)", message: "أحتاج مساعدة من موظف", time: "أمس", channel: "telegram", unread: 1, tag: "agent" },
  { id: 5, name: "ريم الشمري", initials: "رش", color: "linear-gradient(135deg,#d0b4fb,#906bd0)", message: "هل يمكن تغيير العنوان؟", time: "أمس", channel: "whatsapp", unread: 0, tag: "important" },
];

const purchaseRows = [
  { invoice: "PUR-550493", supplier: "تاجر بوني", product: "بوني حبوب البن الخضراء", date: "2026-09-15", qty: "2", total: "28,000", paid: "28,000", remaining: "0", status: "paid", ref: "554465" },
  { invoice: "PUR-2026-573", supplier: "تاجر بوني", product: "بوني حبوب إدرياس بنغالي", date: "2026-09-13", qty: "3", total: "17,300", paid: "1,000", remaining: "16,300", status: "pending", ref: "798464" },
  { invoice: "PUR-2026-001", supplier: "مصنع الأبطال للملابس الرياضية", product: "أطقم كورة قدم ميلانو الرياضية 2025", date: "2026-09-11", qty: "101", total: "350,500", paid: "350,000", remaining: "500", status: "late", ref: "771234567" },
  { invoice: "PUR-2026-002", supplier: "مؤسسة النجم الراقي للأحذية", product: "أحذية كرة قدم عشب صناعية مقاس مختلفة", date: "2026-09-08", qty: "40", total: "320,000", paid: "200,000", remaining: "120,000", status: "late", ref: "772345678" },
  { invoice: "PUR-2026-003", supplier: "مؤسسة الهدف للكرات والمعدات", product: "كرات قدم احترافية بألوان متعددة", date: "2026-09-05", qty: "30", total: "135,000", paid: "5,000", remaining: "130,000", status: "late", ref: "773456789" },
  { invoice: "PUR-2026-004", supplier: "مصنع القمر للملابس والمستلزمات", product: "ملابس رياضية وجاكيتات شتاء مطابقة", date: "2026-08-28", qty: "60", total: "90,000", paid: "90,000", remaining: "0", status: "paid", ref: "774567890" },
];

const channels = [
  { name: "WhatsApp", ar: "واتساب", icon: MessageCircle, color: "#1cbf73", description: "استقبل رسائل عملائك وأدر الردود من صندوق واحد.", count: "١,٢٨٤ محادثة", active: true },
  { name: "Instagram", ar: "إنستغرام", icon: Instagram, color: "#d9477b", description: "الرسائل الخاصة والتعليقات والإشارات في مكان واحد.", count: "٨٤٢ محادثة", active: true },
  { name: "Facebook", ar: "فيسبوك", icon: Facebook, color: "#3979ed", description: "تواصل مع عملاء صفحتك وأتمت الردود المتكررة.", count: "٣٨٩ محادثة", active: true },
  { name: "Telegram", ar: "تلقرام", icon: SendHorizontal, color: "#2a9bd1", description: "اربط بوت تلقرام لإرسال الإشعارات والعروض.", count: "١٨٦ محادثة", active: false },
  { name: "TikTok", ar: "تيك توك", icon: AtSign, color: "#151922", description: "إدارة التفاعلات المتاحة عبر التكامل الرسمي.", count: "قريباً", active: false },
  { name: "Live chat", ar: "الموقع الإلكتروني", icon: Globe2, color: "#7759e7", description: "أضف محادثة مباشرة إلى متجرك وابدأ بالرد فوراً.", count: "قريباً", active: false },
];

const navGroups: { title: string; items: { key: View | "customers" | "help"; label: string; icon: LucideIcon; badge?: string }[] }[] = [
  { title: "workspace", items: [
    { key: "dashboard", label: "dashboard", icon: LayoutDashboard },
    { key: "purchases", label: "purchases", icon: ShoppingBag },
    { key: "products", label: "products", icon: Package },
    { key: "orders", label: "orders", icon: ShoppingCart },
    { key: "conversations", label: "conversations", icon: MessageSquareText, badge: "12" },
  ] },
  { title: "manage", items: [
    { key: "customers", label: "customers", icon: Users },
    { key: "analytics", label: "analytics", icon: BarChart3 },
  ] },
  { title: "commerce", items: [
    { key: "discounts", label: "discounts", icon: Tag },
    { key: "reviews", label: "reviews", icon: MessageCircle },
    { key: "shipping", label: "shipping", icon: ShoppingBag },
    { key: "payments", label: "payments", icon: WalletCards },
    { key: "reports", label: "reports", icon: FileText },
  ] },
];

function ChannelMini({ channel }: { channel: string }) {
  const Icon = channel === "instagram" ? Instagram : channel === "facebook" ? Facebook : channel === "telegram" ? SendHorizontal : MessageCircle;
  return <span className="channel-mini"><Icon size={8} /></span>;
}

function Sidebar({ locale, view, setView, open, onClose, onHelp }: { locale: Locale; view: View; setView: (v: View) => void; open: boolean; onClose: () => void; onHelp: () => void }) {
  const t = (key: string) => getText(locale, key);
  return (
    <>
      <div className={`sidebar-backdrop ${open ? "visible" : ""}`} onClick={onClose} />
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">م</div>
          <div><div className="brand-name">ميلانو</div><span className="brand-caption">commerce suite</span></div>
          <button className="icon-button mobile-menu" onClick={onClose} aria-label="Close menu"><X size={17} /></button>
        </div>
        <div className="sidebar-scroll">
          {navGroups.map((group) => (
            <div className="nav-group" key={group.title}>
              <div className="nav-heading">{group.title === "workspace" ? (locale === "ar" ? "مساحة العمل" : "WORKSPACE") : (locale === "ar" ? "الإدارة" : "MANAGE")}</div>
              {group.items.map((item) => {
                const Icon = item.icon;
                return <button key={item.key} className={`nav-item ${view === item.key ? "active" : ""}`} onClick={() => { setView(item.key as View); onClose(); }}><Icon className="nav-icon" size={17} /><span>{t(item.label)}</span>{item.badge && <span className="nav-badge">{item.badge}</span>}</button>;
              })}
            </div>
          ))}
          <div className="nav-group">
            <div className="nav-heading">{locale === "ar" ? "النظام" : "SYSTEM"}</div>
            <button className={`nav-item ${view === "settings" ? "active" : ""}`} onClick={() => { setView("settings"); onClose(); }}><Settings className="nav-icon" size={17} /><span>{t("settings")}</span></button>
            <button className="nav-item" onClick={onHelp}><HelpCircle className="nav-icon" size={17} /><span>{t("help")}</span></button>
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="store-switcher">
            <div className="store-avatar"><Store size={16} /></div>
            <div className="store-info"><strong>{t("store")}</strong><span>{t("online")}</span></div>
            <ChevronDown size={15} color="var(--muted)" />
          </div>
        </div>
      </aside>
    </>
  );
}

function Topbar({ locale, theme, setTheme, setLocale, setSidebarOpen, onNotifications }: { locale: Locale; theme: Theme; setTheme: (t: Theme) => void; setLocale: (l: Locale) => void; setSidebarOpen: (open: boolean) => void; onNotifications: () => void }) {
  const t = (key: string) => getText(locale, key);
  return (
    <header className="topbar">
      <div className="topbar-start">
        <button className="icon-button mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Open menu"><Menu size={18} /></button>
        <div className="searchbox"><Search size={16} /><input placeholder={t("search")} /></div>
      </div>
      <div className="topbar-actions">
        <button className="icon-button" onClick={() => setLocale(locale === "ar" ? "en" : "ar")} title={locale === "ar" ? "English" : "العربية"}><Languages size={17} /></button>
        <button className="icon-button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} title={theme === "light" ? t("dark") : t("light")}>{theme === "light" ? <Moon size={17} /> : <Sun size={17} />}</button>
        <button className="icon-button notification" onClick={onNotifications} aria-label="Notifications"><Bell size={17} /><span className="notification-dot" /></button>
        <div className="user-pill"><div className="user-avatar">أح</div><div className="user-meta"><strong>أحمد الحربي</strong><span>مدير المتجر</span></div><ChevronDown size={14} color="var(--muted)" /></div>
      </div>
    </header>
  );
}

function PageHeading({ locale, view, onAdd }: { locale: Locale; view: View; onAdd: () => void }) {
  const t = (key: string) => getText(locale, key);
  if (view === "purchases") return null;
  if (view === "conversations") return <div className="page-heading"><div><div className="eyebrow"><Sparkles size={13} /> AI CUSTOMER SUPPORT</div><h1 className="page-title">{t("conversations")}</h1><p className="page-subtitle">{t("conversationsSub")}</p></div><div className="heading-actions"><button className="ghost-button" onClick={() => toast.info(locale === "ar" ? "يمكنك إدارة القنوات من تبويب القنوات المتصلة" : "Manage channels from Connected channels.")}><Link2 size={15} />{t("channels")}</button><button className="primary-button" onClick={onAdd}><Plus size={15} />{locale === "ar" ? "محادثة جديدة" : "New conversation"}</button></div></div>;
  if (view === "channels") return <div className="page-heading"><div><div className="eyebrow"><Link2 size={13} /> OMNICHANNEL</div><h1 className="page-title">{t("channels")}</h1><p className="page-subtitle">{locale === "ar" ? "اربط قنواتك الاجتماعية وأدرها من صندوق واحد." : "Connect social channels and manage them from one inbox."}</p></div><button className="primary-button" onClick={onAdd}><Plus size={15} />{t("connect")}</button></div>;
  if (view === "settings") return <div className="page-heading"><div><div className="eyebrow"><Settings size={13} /> CONTROL CENTER</div><h1 className="page-title">{t("settingsTitle")}</h1><p className="page-subtitle">{t("settingsSub")}</p></div></div>;
  if (view !== "dashboard") return <div className="page-heading"><div><div className="eyebrow"><Boxes size={13} /> MILANO WORKSPACE</div><h1 className="page-title">{t(view)}</h1><p className="page-subtitle">{t("noDataSub")}</p></div><button className="primary-button" onClick={onAdd}><Plus size={15} />{view === "products" ? t("addProduct") : locale === "ar" ? "إضافة جديد" : "Add new"}</button></div>;
  return <div className="page-heading"><div><div className="eyebrow"><Zap size={13} /> MILANO COMMERCE SUITE</div><h1 className="page-title">{t("welcome")}</h1><p className="page-subtitle">{t("welcomeSub")}</p></div><div className="heading-actions"><span className="page-subtitle">{t("today")}</span><button className="primary-button" onClick={onAdd}><Plus size={15} />{t("addProduct")}</button></div></div>;
}

function StatCards({ locale }: { locale: Locale }) {
  const t = (key: string) => getText(locale, key);
  return <div className="stats-grid">{stats.map((item) => { const Icon = item.icon; return <article className="stat-card" key={item.key}><div className="stat-top"><span className="stat-label">{t(item.key)}</span><span className={`stat-icon ${item.color}`}><Icon size={17} /></span></div><div className="stat-value">{locale === "ar" ? item.value : item.en}<small>{locale === "ar" ? item.suffix : item.key === "ordersCount" ? "orders" : item.key === "customersCount" ? "customers" : "SAR"}</small></div><div className={`stat-foot ${item.positive ? "positive" : "negative"}`}>{item.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}<b>{item.change}</b><span>{t("vsLastMonth")}</span></div></article>; })}</div>;
}

function Dashboard({ locale, onViewAll }: { locale: Locale; onViewAll: () => void }) {
  const t = (key: string) => getText(locale, key);
  return <>
    <StatCards locale={locale} />
    <div className="stats-grid secondary-stats">
      {[{label: locale === "ar" ? "إجمالي المشتريات" : "Purchases", value: locale === "ar" ? "٩٤٠,٨٠٠" : "940,800", suffix: "ر.س", icon: ShoppingBag, color: "green"}, {label: locale === "ar" ? "إجمالي المبيعات" : "Sales", value: locale === "ar" ? "١٠٢,٠٠٠" : "102,000", suffix: "ر.س", icon: BarChart3, color: "blue"}, {label: locale === "ar" ? "قيمة المخزون" : "Inventory value", value: locale === "ar" ? "٤,٠٩٠,٢٠٠" : "4,090,200", suffix: "ر.س", icon: Boxes, color: "orange"}, {label: locale === "ar" ? "المخزون المنخفض" : "Low stock", value: locale === "ar" ? "١٨" : "18", suffix: locale === "ar" ? "منتج" : "items", icon: AlertTriangle, color: "red"}].map(item => { const Icon = item.icon; return <article className="stat-card" key={item.label}><div className="stat-top"><span className="stat-label">{item.label}</span><span className={`stat-icon ${item.color}`}><Icon size={17} /></span></div><div className="stat-value">{item.value}<small>{item.suffix}</small></div><div className="stat-foot"><span>{locale === "ar" ? "مقارنة بالشهر الماضي" : "Compared to last month"}</span></div></article>})}
    </div>
    <div className="main-grid">
      <section className="panel"><div className="panel-header"><div><h2 className="panel-title">{t("revenue")}</h2><span className="panel-note">{t("thisMonth")}</span></div><div className="chart-legend"><span className="legend-item"><i className="legend-dot blue" />{t("revenue")}</span><span className="legend-item"><i className="legend-dot soft" />{t("expenses")}</span><button className="ghost-button" style={{ height: 29, padding: "0 8px", fontSize: 10 }}>{t("monthly")} <ChevronDown size={12} /></button></div></div><div className="chart-wrap"><div className="chart-total">{locale === "ar" ? "إجمالي" : "Total"}<strong>{locale === "ar" ? "١٢٤,٥٨٠ ر.س" : "124,580 SAR"}</strong></div><div className="chart">{chartBars.map((height, index) => <div className="chart-bar-group" key={index}><span className="chart-bar" style={{ height: `${Math.max(25, height - 15)}%` }} /><span className="chart-bar primary" style={{ height: `${height}%` }} /><span className="chart-label">{locale === "ar" ? months[index] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index]}</span></div>)}</div></div></section>
      <section className="panel donut-panel"><div className="panel-header"><div><h2 className="panel-title">{locale === "ar" ? "الأكثر مبيعاً" : "Best sellers"}</h2><span className="panel-note">{locale === "ar" ? "هذا الشهر" : "This month"}</span></div><button className="panel-action" onClick={onViewAll}>{t("viewAll")}</button></div><div className="donut-wrap"><div className="donut" /><div className="donut-legend"><span><i style={{background:"#32b7df"}} />{locale === "ar" ? "سماعات" : "Headphones"}</span><span><i style={{background:"#d93c96"}} />{locale === "ar" ? "حقائب" : "Bags"}</span><span><i style={{background:"#984fe4"}} />{locale === "ar" ? "ساعات" : "Watches"}</span><span><i style={{background:"#ffad16"}} />{locale === "ar" ? "إكسسوارات" : "Accessories"}</span></div></div></section>
    </div>
    <div className="bottom-grid"><section className="panel"><div className="panel-header"><div><h2 className="panel-title">{t("recentOrders")}</h2><span className="panel-note">{locale === "ar" ? "آخر ٧ أيام" : "Last 7 days"}</span></div><button className="panel-action" onClick={onViewAll}>{t("viewAll")}</button></div><div className="table-wrap"><table className="data-table"><thead><tr><th>{t("product")}</th><th>{t("customer")}</th><th>{t("amount")}</th><th>{t("status")}</th></tr></thead><tbody>{orders.map((order) => <tr key={order.id}><td><div className="product-cell"><div className="product-thumb"><ShoppingBag size={14} /></div><div><span className="product-name">{order.name}</span><span className="product-sku">{order.id} · {order.sku}</span></div></div></td><td>{locale === "ar" ? order.customer : ["Sara Alotaibi", "Mohammed Alqahtani", "Noura Alharbi"][orders.indexOf(order)]}</td><td style={{ fontFamily: "Inter", fontWeight: 700 }}>{locale === "ar" ? order.amount : ["349 SAR", "580 SAR", "799 SAR"][orders.indexOf(order)]}</td><td><span className={`status-pill ${order.status === "completed" ? "success" : order.status === "processing" ? "warning" : "danger"}`}>{order.status === "completed" ? <CheckCircle2 size={11} /> : order.status === "processing" ? <Clock3 size={11} /> : <AlertTriangle size={11} />}{t(order.status)}</span></td></tr>)}</tbody></table></div></section><section className="panel"><div className="panel-header"><div><h2 className="panel-title">{t("lowStock")}</h2><span className="panel-note">{t("needAttention")}</span></div><button className="panel-action" onClick={onViewAll}>{t("viewAll")}</button></div><div className="alert-list"><div className="alert-card"><div className="alert-symbol orange"><AlertTriangle size={15} /></div><div><strong>{locale === "ar" ? "حقيبة جلدية كلاسيك" : "Classic leather bag"}</strong><span>{locale === "ar" ? "متبقي ٤ قطع فقط · حد التنبيه ١٠" : "Only 4 units left · Alert limit 10"}</span></div></div><div className="alert-card"><div className="alert-symbol red"><AlertTriangle size={15} /></div><div><strong>{locale === "ar" ? "ساعة Milano One" : "Milano One watch"}</strong><span>{locale === "ar" ? "متبقي ٢ قطعة فقط · حد التنبيه ٥" : "Only 2 units left · Alert limit 5"}</span></div></div></div></section></div>
  </>;
}

function ConversationStats({ locale }: { locale: Locale }) {
  const t = (key: string) => getText(locale, key);
  const items = [{ key: "totalConversations", value: "٢,٧٠١", en: "2,701", icon: MessageSquareText, color: "blue" }, { key: "newConversations", value: "١٨٤", en: "184", icon: Sparkles, color: "orange" }, { key: "aiReplied", value: "٧٨٪", en: "78%", icon: Bot, color: "green" }, { key: "humanHelp", value: "٢٤", en: "24", icon: UserRound, color: "red" }];
  return <div className="stats-grid">{items.map(item => { const Icon = item.icon; return <article className="stat-card" key={item.key}><div className="stat-top"><span className="stat-label">{t(item.key)}</span><span className={`stat-icon ${item.color}`}><Icon size={17} /></span></div><div className="stat-value">{locale === "ar" ? item.value : item.en}</div><div className="stat-foot"><Clock3 size={12} /><span>{item.key === "humanHelp" ? (locale === "ar" ? "بانتظار المراجعة" : "Awaiting review") : item.key === "aiReplied" ? t("satisfaction") + " 94%" : (locale === "ar" ? "خلال آخر ٢٤ ساعة" : "In the last 24h")}</span></div></article>})}</div>;
}

function Conversations({ locale, selected, setSelected, onProfile }: { locale: Locale; selected: number; setSelected: (id: number) => void; onProfile: () => void }) {
  const t = (key: string) => getText(locale, key);
  const selectedConversation = conversations.find(c => c.id === selected) ?? conversations[0];
  const [message, setMessage] = useState("");
  return <><ConversationStats locale={locale} /><div className="conversation-shell"><aside className="conv-sidebar"><div className="conv-heading"><div><strong>{t("inbox")}</strong><span> · ١٢ {locale === "ar" ? "مفتوحة" : "open"}</span></div><button className="icon-button" style={{ width: 30, height: 30 }} onClick={() => toast.info(locale === "ar" ? "الفلاتر المتقدمة جاهزة" : "Advanced filters are ready.")}><Filter size={14} /></button></div><div className="searchbox conv-search"><Search size={14} /><input placeholder={t("searchConversations")} /></div><div className="filter-row">{["all", "unread", "needsAgent", "aiAnswered", "important"].map((filter, index) => <button key={filter} className={`filter-chip ${index === 0 ? "active" : ""}`}>{t(filter)}</button>)}</div><div className="conversation-list">{conversations.map(c => <button className={`conversation-item ${selected === c.id ? "selected" : ""}`} key={c.id} onClick={() => setSelected(c.id)}><div className="chat-avatar" style={{ background: c.color }}>{c.initials}<ChannelMini channel={c.channel} /></div><div className="chat-copy"><div className="chat-line"><strong>{c.name}</strong><time>{c.time}</time></div><p>{c.message}</p><div className="chat-meta">{c.unread > 0 && <span className="status-pill danger">{c.unread} {locale === "ar" ? "جديد" : "new"}</span>}{c.tag === "ai" && <span className="status-pill" style={{ color: "var(--blue)", background: "var(--blue-soft)" }}><Bot size={10} />AI</span>}{c.tag === "agent" && <span className="status-pill warning">{t("needsAgent")}</span>}</div></div></button>)}</div></aside><main className="chat-main"><div className="chat-header"><div className="chat-header-person"><div className="chat-avatar" style={{ background: selectedConversation.color }}>{selectedConversation.initials}<ChannelMini channel={selectedConversation.channel} /></div><div><strong>{selectedConversation.name}</strong><span>{locale === "ar" ? "متصل الآن · عميل منذ مارس ٢٠٢٥" : "Online now · Customer since Mar 2025"}</span></div></div><div className="chat-header-actions"><button className="icon-button" style={{ width: 31, height: 31 }} onClick={onProfile}><UserRound size={14} /></button><button className="icon-button" style={{ width: 31, height: 31 }} onClick={() => toast.info(locale === "ar" ? "تم فتح خيارات المحادثة" : "Conversation options opened.")}><MoreVertical size={14} /></button></div></div><div className="message-area"><div className="day-divider">{locale === "ar" ? "اليوم" : "Today"}</div><div className="message-row"><div className="chat-avatar" style={{ background: selectedConversation.color }}>{selectedConversation.initials}</div><div><div className="message-bubble">{locale === "ar" ? "مرحباً، أود الاستفسار عن طلبي الأخير. هل يمكن معرفة موعد التوصيل؟" : "Hi, I wanted to ask about my recent order. Could you let me know the delivery time?"}</div><div className="message-meta"><span>09:39</span><span>·</span><span>{selectedConversation.channel}</span></div></div></div><div className="message-row outgoing"><div className="chat-avatar" style={{ background: "linear-gradient(135deg,#4e77ff,#1d43cc)" }}>م</div><div><div className="ai-label"><Sparkles size={10} />{locale === "ar" ? "اقتراح ذكي" : "AI suggestion"}</div><div className="message-bubble">{locale === "ar" ? "حياك الله! طلبك في الطريق، ومن المتوقع وصوله غداً بين الساعة ٢ و ٥ مساءً. يسعدنا خدمتك دائماً." : "Hello! Your order is on the way and expected to arrive tomorrow between 2 and 5 PM. Happy to help anytime."}</div><div className="message-meta"><Check size={10} /><span>09:40</span><span>· AI</span></div></div></div><div className="message-row"><div className="chat-avatar" style={{ background: selectedConversation.color }}>{selectedConversation.initials}</div><div><div className="message-bubble">{locale === "ar" ? "ممتاز، شكراً لكم على سرعة الرد!" : "Perfect, thank you for the quick reply!"}</div><div className="message-meta"><span>09:42</span></div></div></div></div><div className="composer"><div className="composer-box"><textarea value={message} onChange={e => setMessage(e.target.value)} placeholder={t("typeMessage")} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (message.trim()) { toast.success(locale === "ar" ? "تم إرسال الرسالة" : "Message sent"); setMessage(""); } } }} /><div className="composer-tools"><div className="tool-row"><button className="mini-button"><Paperclip size={15} /></button><button className="mini-button"><Smile size={15} /></button><button className="mini-button"><Mic size={15} /></button><button className="mini-button" onClick={() => toast.success(locale === "ar" ? "تم إدراج رد جاهز" : "Saved reply inserted")}><Zap size={15} /></button></div><button className="primary-button" style={{ height: 31, padding: "0 11px", fontSize: 10 }} onClick={() => { if (message.trim()) { toast.success(locale === "ar" ? "تم إرسال الرسالة" : "Message sent"); setMessage(""); } }}><Send size={13} />{t("send")}</button></div></div></div></main><aside className="conv-profile"><div className="profile-top"><div className="chat-avatar" style={{ background: selectedConversation.color }}>{selectedConversation.initials}</div><strong>{selectedConversation.name}</strong><span>+966 55 123 8492</span><div className="profile-actions"><button className="icon-button" style={{ width: 31, height: 31 }} onClick={() => toast.success(locale === "ar" ? "تم إنشاء طلب جديد" : "New order created")}><ShoppingCart size={13} /></button><button className="icon-button" style={{ width: 31, height: 31 }} onClick={() => toast.info(locale === "ar" ? "تم فتح سجل الطلبات" : "Order history opened")}><FileText size={13} /></button><button className="icon-button" style={{ width: 31, height: 31 }} onClick={() => toast.info(locale === "ar" ? "تمت إضافة ملاحظة" : "Note added")}><Tag size={13} /></button></div></div><div className="profile-section"><h4>{t("customerDetails")}</h4><div className="profile-info-row"><span>{locale === "ar" ? "البريد الإلكتروني" : "Email"}</span><b style={{ fontSize: 10 }}>sara@example.com</b></div><div className="profile-info-row"><span>{locale === "ar" ? "الدولة" : "Country"}</span><b style={{ fontSize: 10 }}>{locale === "ar" ? "السعودية" : "Saudi Arabia"}</b></div><div className="profile-info-row"><span>{locale === "ar" ? "إجمالي المشتريات" : "Total spent"}</span><b style={{ fontSize: 10, fontFamily: "Inter" }}>2,480 SAR</b></div></div><div className="profile-section"><h4>{t("quickActions")}</h4><button className="nav-item" onClick={() => toast.success(t("createOrder"))}><ShoppingCart size={14} className="nav-icon" /><span>{t("createOrder")}</span><ChevronLeft size={13} /></button><button className="nav-item" onClick={() => toast.info(t("orderHistory"))}><FileText size={14} className="nav-icon" /><span>{t("orderHistory")}</span><ChevronLeft size={13} /></button><button className="nav-item" onClick={() => toast.info(t("assign"))}><UserRound size={14} className="nav-icon" /><span>{t("assign")}</span><ChevronLeft size={13} /></button></div><div className="profile-section"><h4>{locale === "ar" ? "الوسوم" : "Tags"}</h4><span className="tag">VIP</span><span className="tag">{locale === "ar" ? "متكرر" : "Returning"}</span></div></aside></div></>;
}

function Channels({ locale, onAction }: { locale: Locale; onAction: () => void }) {
  const t = (key: string) => getText(locale, key);
  return <div className="channel-grid">{channels.map(channel => { const Icon = channel.icon; return <article className="channel-card" key={channel.name}><div className="channel-head"><div className="channel-brand" style={{ background: channel.color }}><Icon size={20} /></div>{channel.active ? <span className="channel-status"><CheckCircle2 size={12} />{t("connected")}</span> : <span className="status-pill" style={{ color: "var(--muted)", background: "var(--panel-soft)" }}>{locale === "ar" ? "غير متصلة" : "Not connected"}</span>}</div><h3>{locale === "ar" ? channel.ar : channel.name}</h3><p>{channel.description}</p><div className="channel-footer"><span>{channel.count}</span><button onClick={onAction}>{channel.active ? t("manage") : t("connect")}</button></div></article>; })}</div>;
}

function Purchases({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [rows, setRows] = useState(purchaseRows);
  const visibleRows = rows.filter(row => (filter === "all" || row.status === filter) && `${row.invoice} ${row.supplier} ${row.product}`.toLowerCase().includes(query.toLowerCase()));
  const statusText = (status: string) => status === "paid" ? (locale === "ar" ? "مدفوع" : "Paid") : status === "late" ? (locale === "ar" ? "آجل" : "Due") : (locale === "ar" ? "معلق" : "Pending");
  const money = (value: string) => `${value} ${locale === "ar" ? "ريال" : "SAR"}`;
  const removeRow = (invoice: string) => { setRows(current => current.filter(row => row.invoice !== invoice)); toast.success(locale === "ar" ? "تم حذف الفاتورة من العرض" : "Invoice removed from view"); };
  return <div className="purchase-page">
    <div className="purchase-stats">
      {[{label: locale === "ar" ? "إجمالي المشتريات" : "Total purchases", value: "940,800", color: "blue", icon: CircleDollarSign}, {label: locale === "ar" ? "إجمالي المدفوع" : "Total paid", value: "674,000", color: "green", icon: CheckCircle2}, {label: locale === "ar" ? "إجمالي المتبقي (ديون الموردين)" : "Supplier dues", value: "266,800", color: "red", icon: Clock3}, {label: locale === "ar" ? "عدد فواتير المشتريات" : "Purchase invoices", value: "6", color: "purple", icon: FileText}].map(item => { const Icon = item.icon; const isCount = item.color === "purple"; return <article className="purchase-stat" key={item.label}><span className={`purchase-stat-icon ${item.color}`}><Icon size={16} /></span><div><div className="purchase-stat-label">{item.label}</div><strong>{isCount ? item.value : money(item.value)}</strong></div></article>})}
    </div>
    <section className="purchase-panel panel">
      <div className="purchase-head"><div><h2>{locale === "ar" ? "إدارة المشتريات" : "Purchase management"}</h2><p>{locale === "ar" ? "متابعة فواتير الشراء، الموردين، والمدفوعات والتكاليف." : "Track purchase invoices, suppliers, payments and costs."}</p></div><div className="purchase-actions"><button className="ghost-button" onClick={() => setShowReport(true)}><FileText size={14} />{locale === "ar" ? "تقرير المشتريات" : "Purchase report"}</button><button className="primary-button" onClick={() => setShowForm(true)}><Plus size={15} />{locale === "ar" ? "إضافة فاتورة شراء" : "Add purchase invoice"}</button></div></div>
      <div className="purchase-filters"><div className="purchase-search"><Search size={15} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder={locale === "ar" ? "بحث برقم الفاتورة أو اسم المورد أو اسم المنتج..." : "Search invoice, supplier or product..."} /></div><div className="filter-tabs">{[["all", "الكل"], ["paid", "مدفوع"], ["late", "آجل"]].map(([key, label]) => <button key={key} className={filter === key ? "active" : ""} onClick={() => setFilter(key)}>{locale === "ar" ? label : key === "all" ? "All" : key === "paid" ? "Paid" : "Due"}</button>)}</div><button className="date-filter"><CalendarDays size={13} />{locale === "ar" ? "من: شوال / رمضان / ربيع" : "From: date"}</button><button className="date-filter"><CalendarDays size={13} />{locale === "ar" ? "إلى: شوال / رمضان / ربيع" : "To: date"}</button></div>
      <div className="purchase-table-wrap"><table className="purchase-table"><thead><tr><th>#</th><th>{locale === "ar" ? "رقم الفاتورة" : "Invoice"}</th><th>{locale === "ar" ? "اسم المورد" : "Supplier"}</th><th>{locale === "ar" ? "اسم المنتج" : "Product"}</th><th>{locale === "ar" ? "التاريخ" : "Date"}</th><th>{locale === "ar" ? "الكمية" : "Qty"}</th><th>{locale === "ar" ? "إجمالي الطلب" : "Total"}</th><th>{locale === "ar" ? "المدفوع" : "Paid"}</th><th>{locale === "ar" ? "المتبقي" : "Remaining"}</th><th>{locale === "ar" ? "الحالة" : "Status"}</th><th>{locale === "ar" ? "الإجراءات" : "Actions"}</th></tr></thead><tbody>{visibleRows.map((row, index) => <tr key={row.invoice}><td>{index + 1}</td><td><b>{row.invoice}</b><small>{row.ref}</small></td><td><b>{row.supplier}</b></td><td className="purchase-product">{row.product}</td><td dir="ltr">{row.date}</td><td>{row.qty}</td><td className="money">{money(row.total)}</td><td className="money paid-money">{money(row.paid)}</td><td className={`money ${row.remaining !== "0" ? "due-money" : "paid-money"}`}>{money(row.remaining)}</td><td><span className={`purchase-status ${row.status}`}>{statusText(row.status)}</span></td><td><div className="row-actions"><button title="Print" onClick={() => toast.info(locale === "ar" ? `طباعة ${row.invoice}` : `Printing ${row.invoice}`)}><Printer size={13} /></button><button title="Edit" onClick={() => toast.info(locale === "ar" ? `تعديل ${row.invoice}` : `Editing ${row.invoice}`)}><Pencil size={13} /></button><button title="Delete" onClick={() => removeRow(row.invoice)}><Trash2 size={13} /></button></div></td></tr>)}</tbody><tfoot><tr><td colSpan={5}>{locale === "ar" ? `الإجمالي (${visibleRows.length} فواتير)` : `Total (${visibleRows.length} invoices)`}</td><td>{visibleRows.reduce((sum, row) => sum + Number(row.qty), 0)}</td><td className="money">{money("940,800")}</td><td className="money paid-money">{money("674,000")}</td><td className="money due-money">{money("266,800")}</td><td colSpan={2}></td></tr></tfoot></table></div>
    </section>
    {showForm && <div className="modal-backdrop" onClick={() => setShowForm(false)}><div className="purchase-modal" onClick={e => e.stopPropagation()}><div className="modal-title"><div><h3>{locale === "ar" ? "إضافة فاتورة شراء جديدة" : "Add new purchase invoice"}</h3><p>{locale === "ar" ? "إدخال بيانات الفاتورة والمنتجات والمبلغ المستحق." : "Enter invoice, products and payment details."}</p></div><button className="icon-button" onClick={() => setShowForm(false)}><X size={16} /></button></div><div className="form-grid"><label>{locale === "ar" ? "رقم الفاتورة *" : "Invoice number *"}<input placeholder="PUR-650727" /></label><label>{locale === "ar" ? "تاريخ الفاتورة *" : "Invoice date *"}<input type="date" /></label><label>{locale === "ar" ? "اسم المورد *" : "Supplier *"}<input placeholder={locale === "ar" ? "شركة التوريد" : "Supplier name"} /></label><label>{locale === "ar" ? "هاتف المورد" : "Supplier phone"}<input placeholder="05xxxxxxxx" /></label></div><div className="invoice-items-preview"><div className="invoice-section-title"><b>{locale === "ar" ? "المنتجات المشتراة في الفاتورة" : "Products purchased in invoice"}</b><span>{locale === "ar" ? "يمكنك إضافة أكثر من منتج" : "Add multiple products"}</span></div><div className="item-entry"><input placeholder={locale === "ar" ? "اسم المنتج / الصنف" : "Product name"} /><input className="small-input" placeholder={locale === "ar" ? "الكمية" : "Qty"} /><input className="small-input" placeholder={locale === "ar" ? "السعر" : "Price"} /><button className="add-line-button" onClick={() => toast.info(locale === "ar" ? "تم تجهيز سطر منتج جديد" : "New product line ready")}><Plus size={15} /></button></div><div className="empty-items">{locale === "ar" ? "لم تتم إضافة أي منتج بعد. اختر منتجاً لإضافته إلى الفاتورة." : "No products added yet. Select a product to add it to the invoice."}</div></div><div className="invoice-totals"><div><span>{locale === "ar" ? "إجمالي الطلب (ريال) *" : "Order total *"}</span><strong>0</strong></div><div className="total-paid"><span>{locale === "ar" ? "المدفوع (ريال)" : "Paid"}</span><strong>0</strong></div><div className="total-due"><span>{locale === "ar" ? "المتبقي (ريال)" : "Remaining"}</span><strong>0</strong></div></div><div className="form-grid compact"><label>{locale === "ar" ? "حالة الفاتورة *" : "Invoice status *"}<select defaultValue="paid"><option value="paid">{locale === "ar" ? "مدفوع" : "Paid"}</option><option value="late">{locale === "ar" ? "معلق" : "Due"}</option></select></label><label>{locale === "ar" ? "طريقة الدفع" : "Payment method"}<select defaultValue="cash"><option value="cash">{locale === "ar" ? "نقداً" : "Cash"}</option><option value="bank">{locale === "ar" ? "تحويل بنكي" : "Bank transfer"}</option></select></label></div><label className="notes-field">{locale === "ar" ? "بيان وملاحظات الفاتورة" : "Invoice notes"}<textarea placeholder={locale === "ar" ? "اكتب أي ملاحظات إضافية حول التوريد أو الفاتورة..." : "Add notes about this purchase..."} /></label><div className="modal-footer"><button className="ghost-button" onClick={() => setShowForm(false)}>{locale === "ar" ? "إلغاء" : "Cancel"}</button><button className="primary-button" onClick={() => { setShowForm(false); toast.success(locale === "ar" ? "تم حفظ فاتورة الشراء بنجاح" : "Purchase invoice saved successfully"); }}><Check size={15} />{locale === "ar" ? "حفظ الفاتورة" : "Save invoice"}</button></div></div></div>}
    {showReport && <div className="report-backdrop" onClick={() => setShowReport(false)}><div className="purchase-report" onClick={e => e.stopPropagation()}><header className="report-header"><div><h3>{locale === "ar" ? "تقرير فواتير المشتريات المفصلة" : "Detailed purchase invoices report"}</h3><small>{locale === "ar" ? "إدارة المشتريات والتكاليف" : "Purchase and cost management"}</small></div><button className="report-print-top" onClick={() => window.print()}><Printer size={13} />{locale === "ar" ? "طباعة التقرير" : "Print report"}</button><button className="icon-button" onClick={() => setShowReport(false)}><X size={15} /></button></header><div className="report-paper"><div className="report-title"><h1>{locale === "ar" ? "تقرير فواتير المشتريات المفصلة" : "Detailed purchase invoices report"}</h1><p>{locale === "ar" ? "تاريخ التقرير: 16/09/2026 · الفلتر: الكل · عدد الفواتير: 6" : "Report date: 16/09/2026 · Filter: All · Invoices: 6"}</p></div><table className="report-table"><thead><tr><th>#</th><th>{locale === "ar" ? "رقم الفاتورة" : "Invoice"}</th><th>{locale === "ar" ? "المورد" : "Supplier"}</th><th>{locale === "ar" ? "اسم المنتج" : "Product"}</th><th>{locale === "ar" ? "الكمية" : "Qty"}</th><th>{locale === "ar" ? "إجمالي الفاتورة" : "Invoice total"}</th><th>{locale === "ar" ? "المدفوع" : "Paid"}</th><th>{locale === "ar" ? "المتبقي" : "Remaining"}</th></tr></thead><tbody>{rows.map((row, index) => <tr key={row.invoice}><td>{index + 1}</td><td>{row.invoice}</td><td>{row.supplier}</td><td>{row.product}</td><td>{row.qty}</td><td>{money(row.total)}</td><td className="paid-money">{money(row.paid)}</td><td className="due-money">{money(row.remaining)}</td></tr>)}</tbody></table><div className="report-summary"><div><span>{locale === "ar" ? "إجمالي المشتريات" : "Total purchases"}</span><strong>940,800 ريال</strong></div><div><span>{locale === "ar" ? "إجمالي المدفوع" : "Total paid"}</span><strong className="paid-money">674,000 ريال</strong></div><div><span>{locale === "ar" ? "إجمالي المتبقي (الديون)" : "Total dues"}</span><strong className="due-money">266,800 ريال</strong></div><div><span>{locale === "ar" ? "إجمالي الكمية المشتراة" : "Total quantity"}</span><strong>236 قطعة</strong></div></div><div className="report-signatures"><span>{locale === "ar" ? "توقيع المحاسب المسؤول" : "Accountant signature"}<i /></span><span>{locale === "ar" ? "اعتماد مدير المتجر" : "Store manager approval"}<i /></span></div></div><footer className="report-footer"><button className="ghost-button" onClick={() => setShowReport(false)}>{locale === "ar" ? "إغلاق" : "Close"}</button><button className="primary-button" onClick={() => window.print()}><Printer size={14} />{locale === "ar" ? "طباعة التقرير" : "Print report"}</button></footer></div></div>}
  </div>;
}

function SettingsView({ locale, setLocale, theme, setTheme }: { locale: Locale; setLocale: (l: Locale) => void; theme: Theme; setTheme: (t: Theme) => void }) {
  const t = (key: string) => getText(locale, key);
  const [autoLanguage, setAutoLanguage] = useState(true);
  const [autoDialect, setAutoDialect] = useState(true);
  return <div className="settings-panel"><div className="panel settings-card"><div className="setting-row"><div className="setting-copy"><strong>{t("language")}</strong><span>{t("languageSub")}</span></div><select className="select-control" value={locale} onChange={e => setLocale(e.target.value as Locale)}><option value="ar">العربية</option><option value="en">English</option></select></div><div className="setting-row"><div className="setting-copy"><strong>{t("theme")}</strong><span>{t("themeSub")}</span></div><select className="select-control" value={theme} onChange={e => setTheme(e.target.value as Theme)}><option value="light">{t("light")}</option><option value="dark">{t("dark")}</option></select></div><div className="setting-row"><div className="setting-copy"><strong>{t("autoLanguage")}</strong><span>{t("autoLanguageSub")}</span></div><button className={`switch ${autoLanguage ? "on" : ""}`} onClick={() => setAutoLanguage(!autoLanguage)} aria-label={t("autoLanguage")}><span /></button></div><div className="setting-row"><div className="setting-copy"><strong>{t("dialect")}</strong><span>{t("dialectSub")}</span></div><select className="select-control"><option>{locale === "ar" ? "العربية الفصحى الرسمية" : "Modern Standard Arabic"}</option><option>{locale === "ar" ? "اللهجة السعودية" : "Saudi dialect"}</option><option>{locale === "ar" ? "اللهجة الإماراتية" : "Emirati dialect"}</option><option>{locale === "ar" ? "اللهجة المصرية" : "Egyptian dialect"}</option></select></div><div className="setting-row"><div className="setting-copy"><strong>{t("autoDialect")}</strong><span>{t("autoDialectSub")}</span></div><button className={`switch ${autoDialect ? "on" : ""}`} onClick={() => setAutoDialect(!autoDialect)} aria-label={t("autoDialect")}><span /></button></div><div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 18 }}><button className="primary-button" onClick={() => toast.success(locale === "ar" ? "تم حفظ الإعدادات بنجاح" : "Settings saved successfully")}><Check size={15} />{t("save")}</button></div></div></div>;
}

function Placeholder({ locale, view, onBack }: { locale: Locale; view: View; onBack: () => void }) {
  const t = (key: string) => getText(locale, key);
  return <div className="panel" style={{ padding: 45, textAlign: "center", maxWidth: 700, margin: "30px auto" }}><div className="stat-icon blue" style={{ margin: "0 auto 15px", width: 52, height: 52 }}><Boxes size={24} /></div><h2 className="panel-title" style={{ fontSize: 17, marginBottom: 7 }}>{t("noDataTitle")}</h2><p className="page-subtitle" style={{ maxWidth: 460, margin: "0 auto 20px", lineHeight: 1.8 }}>{t("noDataSub")}</p><button className="primary-button" onClick={onBack}><ChevronLeft size={15} />{t("backDashboard")}</button></div>;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem("milano-locale") as Locale) || "ar");
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("milano-theme") as Theme) || "light");
  const [view, setView] = useState<View>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [profileOnMobile, setProfileOnMobile] = useState(false);
  const t = (key: string) => getText(locale, key);

  useEffect(() => { localStorage.setItem("milano-locale", locale); document.documentElement.lang = locale; document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"; }, [locale]);
  useEffect(() => { localStorage.setItem("milano-theme", theme); document.documentElement.classList.toggle("dark", theme === "dark"); }, [theme]);

  const handleAdd = () => toast.success(locale === "ar" ? "تم فتح نموذج الإضافة — هذه نسخة تجريبية تفاعلية" : "Add form opened — this is an interactive preview.");
  const heading = useMemo(() => <PageHeading locale={locale} view={view} onAdd={handleAdd} />, [locale, view]);

  return <div className={`app-shell ${theme}`} dir={locale === "ar" ? "rtl" : "ltr"}><div className="app-layout"><Sidebar locale={locale} view={view} setView={setView} open={sidebarOpen} onClose={() => setSidebarOpen(false)} onHelp={() => toast.info(locale === "ar" ? "مركز المساعدة قيد التجهيز" : "Help center is being prepared.")} /><main className="app-main"><div className="dashboard-content"><Topbar locale={locale} theme={theme} setTheme={setTheme} setLocale={setLocale} setSidebarOpen={setSidebarOpen} onNotifications={() => toast.info(locale === "ar" ? "لديك ٣ تنبيهات جديدة" : "You have 3 new notifications")} />{heading}{view === "dashboard" && <Dashboard locale={locale} onViewAll={() => setView("orders")} />}{view === "purchases" && <Purchases locale={locale} />}{view === "conversations" && <Conversations locale={locale} selected={selectedConversation} setSelected={setSelectedConversation} onProfile={() => setProfileOnMobile(!profileOnMobile)} />}{view === "channels" && <Channels locale={locale} onAction={() => toast.success(locale === "ar" ? "تم فتح إعدادات ربط القناة" : "Channel connection settings opened")} />}{view === "settings" && <SettingsView locale={locale} setLocale={setLocale} theme={theme} setTheme={setTheme} />}{!["dashboard", "purchases", "conversations", "channels", "settings"].includes(view) && <Placeholder locale={locale} view={view} onBack={() => setView("dashboard")} />}</div></main></div></div>;
}
