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
  CloudUpload,
  Copy,
  ChevronDown,
  ChevronLeft,
  CircleDollarSign,
  Clock3,
  CalendarDays,
  Facebook,
  FileText,
  Filter,
  Globe2,
  Hash,
  HelpCircle,
  Instagram,
  Languages,
  LayoutDashboard,
  Link2,
  LogOut,
  Menu,
  MessageCircle,
  MessageSquareText,
  Mic,
  Moon,
  MoreHorizontal,
  MoreVertical,
  ExternalLink,
  Eye,
  EyeOff,
  Package,
  Paperclip,
  Pencil,
  Plus,
  QrCode,
  RefreshCw,
  Ruler,
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
  Palette,
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
type View = "dashboard" | "conversations" | "channels" | "settings" | "categoryProducts" | "products" | "orders" | "purchases" | "analytics" | "discounts" | "reviews" | "shipping" | "payments" | "expenses" | "reports" | "addProductMenu" | "productList" | "inventory" | "orderList" | "pointOfSale" | "externalOrder";

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
    addProductMenu: "إضافة منتج جديد",
    productList: "قائمة المنتجات",
    inventory: "إدارة المخزون",
    orderList: "قائمة الطلبات",
    pointOfSale: "نقطة البيع",
    externalOrder: "إنشاء طلب خارجي",
    design: "التصميم",
    inboxMenu: "صندوق الوارد",
    expensesNotes: "المصروفات والسندات",
    systemSettings: "إعدادات النظام",
    social: "التواصل الاجتماعي",
    footerSettings: "إعدادات التذييل",
    logout: "تسجيل الخروج",
    help: "مركز المساعدة",
    store: "متجر ميلانو",
    online: "متصل الآن",
    welcome: "نظـام ميلانو المحاسبي",
    welcomeSub: "إليك نظرة سريعة على أداء نظام ميلانو اليوم.",
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
    addProductMenu: "Add new product",
    productList: "Product list",
    inventory: "Inventory management",
    orderList: "Order list",
    pointOfSale: "Point of sale",
    externalOrder: "Create external order",
    design: "Design",
    inboxMenu: "Inbox",
    expensesNotes: "Expenses and vouchers",
    systemSettings: "System settings",
    social: "Social media",
    footerSettings: "Footer settings",
    logout: "Sign out",
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

const navGroups: { title: string; items: { key: View | "help"; label: string; icon: LucideIcon; badge?: string; children?: { label: string; icon?: LucideIcon }[] }[] }[] = [
  { title: "workspace", items: [
    { key: "dashboard", label: "dashboard", icon: LayoutDashboard },
    { key: "purchases", label: "purchases", icon: ShoppingBag },
    { key: "products", label: "products", icon: Package, children: [{ label: "addProductMenu", icon: Plus }, { label: "productList", icon: MoreHorizontal }, { label: "inventory", icon: Boxes }] },
    { key: "orders", label: "orders", icon: ShoppingCart, children: [{ label: "orderList", icon: MoreHorizontal }, { label: "pointOfSale", icon: Store }, { label: "externalOrder", icon: SendHorizontal }] },
    { key: "conversations", label: "conversations", icon: MessageSquareText, badge: "12" },
  ] },
  { title: "commerce", items: [
    { key: "discounts", label: "discounts", icon: Tag },
    { key: "reviews", label: "reviews", icon: MessageCircle },
    { key: "channels", label: "design", icon: Palette },
    { key: "conversations", label: "inboxMenu", icon: MessageSquareText },
    { key: "shipping", label: "shipping", icon: ShoppingBag },
    { key: "payments", label: "payments", icon: WalletCards },
    { key: "expenses", label: "expensesNotes", icon: WalletCards },
    { key: "reports", label: "reports", icon: FileText },
  ] },
];

function ChannelMini({ channel }: { channel: string }) {
  const Icon = channel === "instagram" ? Instagram : channel === "facebook" ? Facebook : channel === "telegram" ? SendHorizontal : MessageCircle;
  return <span className="channel-mini"><Icon size={8} /></span>;
}

function Sidebar({ locale, view, setView, open, onClose, onHelp }: { locale: Locale; view: View; setView: (v: View) => void; open: boolean; onClose: () => void; onHelp: () => void }) {
  const t = (key: string) => getText(locale, key);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ products: true, orders: true, settings: true });
  const selectSubmenu = (label: string) => { setView(label === "productList" || label === "categoryManagement" ? "products" : label as View); onClose(); };
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
              <div className="nav-heading">{group.title === "workspace" ? (locale === "ar" ? "مساحة العمل" : "WORKSPACE") : (locale === "ar" ? "التجارة" : "COMMERCE")}</div>
              {group.items.map((item) => {
                const Icon = item.icon;
                const hasChildren = Boolean(item.children?.length);
                return <div key={`${group.title}-${item.label}`} className="nav-tree"><button className={`nav-item ${view === item.key ? "active" : ""}`} onClick={() => { setView(item.key as View); if (hasChildren) setExpanded((current) => ({ ...current, [item.key]: !current[item.key] })); else onClose(); }}><Icon className="nav-icon" size={17} /><span>{t(item.label)}</span>{item.badge && <span className="nav-badge">{item.badge}</span>}{hasChildren && <ChevronDown className={`nav-chevron ${expanded[item.key] ? "open" : ""}`} size={13} />}</button>{hasChildren && expanded[item.key] && <div className="nav-children">{item.children?.map((child) => { const ChildIcon = child.icon ?? MoreHorizontal; return <button className={`nav-child ${view === child.label ? "active" : ""}`} key={child.label} onClick={() => selectSubmenu(child.label)}><ChildIcon size={13} /><span>{t(child.label)}</span></button>; })}</div>}</div>;
              })}
            </div>
          ))}
          <div className="nav-group">
            <div className="nav-heading">{locale === "ar" ? "النظام" : "SYSTEM"}</div>
            <div className="nav-tree"><button className={`nav-item ${view === "settings" ? "active" : ""}`} onClick={() => { setView("settings"); setExpanded((current) => ({ ...current, settings: !current.settings })); }}><Settings className="nav-icon" size={17} /><span>{t("systemSettings")}</span><ChevronDown className={`nav-chevron ${expanded.settings ? "open" : ""}`} size={13} /></button>{expanded.settings && <div className="nav-children"><button className="nav-child" onClick={() => { setView("settings"); onClose(); }}><Settings size={13} /><span>{t("settings")}</span></button><button className="nav-child" onClick={() => selectSubmenu("social")}><Globe2 size={13} /><span>{t("social")}</span></button><button className="nav-child" onClick={() => selectSubmenu("footerSettings")}><MoreHorizontal size={13} /><span>{t("footerSettings")}</span></button></div>}</div>
            <button className="nav-item" onClick={onHelp}><HelpCircle className="nav-icon" size={17} /><span>{t("help")}</span></button>
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="store-switcher">
            <div className="store-avatar"><Store size={16} /></div>
            <div className="store-info"><strong>{t("store")}</strong><span>{t("online")}</span></div>
            <ChevronDown size={15} color="var(--muted)" />
          </div>
          <button className="logout-bar" onClick={() => toast.info(locale === "ar" ? "سيتم تفعيل تسجيل الخروج عند ربط الحساب" : "Sign out will be enabled when the account is connected")}><LogOut size={16} />{t("logout")}</button>
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
  if (view === "purchases" || view === "addProductMenu") return null;
  if (view === "conversations") return <div className="page-heading"><div><div className="eyebrow"><Sparkles size={13} /> AI CUSTOMER SUPPORT</div><h1 className="page-title">{t("conversations")}</h1><p className="page-subtitle">{t("conversationsSub")}</p></div><div className="heading-actions"><button className="ghost-button" onClick={() => toast.info(locale === "ar" ? "يمكنك إدارة القنوات من تبويب القنوات المتصلة" : "Manage channels from Connected channels.")}><Link2 size={15} />{t("channels")}</button><button className="primary-button" onClick={onAdd}><Plus size={15} />{locale === "ar" ? "محادثة جديدة" : "New conversation"}</button></div></div>;
  if (view === "channels") return <div className="page-heading"><div><div className="eyebrow"><Link2 size={13} /> OMNICHANNEL</div><h1 className="page-title">{t("channels")}</h1><p className="page-subtitle">{locale === "ar" ? "اربط قنواتك الاجتماعية وأدرها من صندوق واحد." : "Connect social channels and manage them from one inbox."}</p></div><button className="primary-button" onClick={onAdd}><Plus size={15} />{t("connect")}</button></div>;
  if (view === "settings") return <div className="page-heading"><div><div className="eyebrow"><Settings size={13} /> CONTROL CENTER</div><h1 className="page-title">{t("settingsTitle")}</h1><p className="page-subtitle">{t("settingsSub")}</p></div></div>;
  if (view !== "dashboard") return <div className="page-heading"><div><div className="eyebrow"><Boxes size={13} /> MILANO WORKSPACE</div><h1 className="page-title">{t(view)}</h1><p className="page-subtitle">{t("noDataSub")}</p></div><button className="primary-button" onClick={onAdd}><Plus size={15} />{view === "products" ? t("addProduct") : locale === "ar" ? "إضافة جديد" : "Add new"}</button></div>;
  return <div className="page-heading"><div><div className="eyebrow"><Zap size={13} /> MILANO COMMERCE SUITE</div><h1 className="page-title">{t("welcome")}</h1><p className="page-subtitle">{t("welcomeSub")}</p></div><div className="heading-actions"><span className="page-subtitle">{t("today")}</span><button className="primary-button" onClick={onAdd}><Plus size={15} />{t("addProduct")}</button></div></div>;
}

function StatCards({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const cards = [
    { label: ar ? "طلبات مكتملة" : "Completed orders", value: "12", icon: CheckCircle2, tone: "green", sub: "" },
    { label: ar ? "صافي الربح" : "Net profit", value: ar ? "44,100" : "44,100", icon: CircleDollarSign, tone: "blue", sub: ar ? "ريال يمني" : "YER" },
    { label: ar ? "آراء العملاء" : "Customer reviews", value: "2", icon: MessageCircle, tone: "teal", sub: "" },
    { label: ar ? "طلبات غير مكتملة" : "Incomplete orders", value: "4", icon: Clock3, tone: "pink", sub: "" },
    { label: ar ? "حالة المخزون" : "Inventory status", value: "", icon: AlertTriangle, tone: "orange", stock: true, sub: "" },
    { label: ar ? "قيمة المخزون" : "Inventory value", value: ar ? "4,090,200" : "4,090,200", icon: Package, tone: "purple", sub: ar ? "ريال يمني" : "YER", note: ar ? "(977 منتج)" : "(977 products)" },
    { label: ar ? "إجمالي المبيعات" : "Total sales", value: ar ? "102,000" : "102,000", icon: TrendingUp, tone: "blue", sub: ar ? "ريال يمني" : "YER", note: ar ? "(12 فاتورة)" : "(12 invoices)" },
    { label: ar ? "إجمالي المشتريات" : "Total purchases", value: ar ? "940,800" : "940,800", icon: ShoppingCart, tone: "green", sub: ar ? "ريال يمني" : "YER", note: ar ? "(6 فواتير)" : "(6 invoices)" },
  ];
  return <div className="stats-grid reference-stats">{cards.map((item) => { const Icon = item.icon; return <article className={`stat-card reference-stat ${item.stock ? "stock-stat" : ""}`} key={item.label}><div className="reference-icon-row"><span className={`stat-icon ${item.tone}`}><Icon size={16} /></span></div>{item.stock ? <div className="stock-values"><div><span>{ar ? "مخزون منخفض" : "Low stock"}</span><strong className="stock-low">30</strong></div><div className="stock-divider" /><div><span>{ar ? "نفد من المخزون" : "Out of stock"}</span><strong className="stock-out">18</strong></div></div> : <div className="reference-card-copy"><strong>{item.value} {item.sub && <small>{item.sub}</small>}</strong><span>{item.label}</span>{item.note && <em>{item.note}</em>}</div>}</article>; })}</div>;
}

function Dashboard({ locale, onViewAll }: { locale: Locale; onViewAll: () => void }) {
  const ar = locale === "ar";
  const [period, setPeriod] = useState("month");
  const [storeOpen, setStoreOpen] = useState(true);
  const linePoints = "0,150 55,150 110,150 165,150 220,150 275,145 330,120 385,90 440,42 495,24 550,8";
  const chartLabels = ar ? ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "١١"] : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  const realOrders = [
    { id: "#ML-4832", name: "سارة العتيبي", total: "349 ريال", phone: "05 5123 8492", city: "الرياض", status: "مكتمل", tone: "success" },
    { id: "#ML-4831", name: "محمد القحطاني", total: "580 ريال", phone: "05 6987 2145", city: "جدة", status: "قيد المعالجة", tone: "warning" },
    { id: "#ML-4830", name: "نورة الحربي", total: "799 ريال", phone: "05 4432 1908", city: "الدمام", status: "معلّق", tone: "danger" },
  ];
  return <>
    <StatCards locale={locale} />
    <div className="dashboard-chart-row">
      <section className="panel daily-sales-panel"><div className="panel-header"><div><h2 className="panel-title">{ar ? "مبيعات المتجر اليومية" : "Daily store sales"}</h2><span className="panel-note">{ar ? "تحليل أداء المتجر" : "Store performance analysis"}</span></div><div className="period-switcher">{[["month", "الشهر"], ["week", "الأسبوع"], ["day", "اليوم"]].map(([key, label]) => <button key={key} className={period === key ? "active" : ""} onClick={() => setPeriod(key)}>{ar ? label : key}</button>)}</div></div><div className="line-chart-wrap"><div className="line-y-axis"><span>26,000</span><span>19,500</span><span>13,000</span><span>6,500</span><span>0</span></div><svg className="line-chart" viewBox="0 0 550 170" role="img" aria-label={ar ? "رسم مبيعات المتجر اليومية" : "Daily sales chart"}><defs><linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3B82F6" stopOpacity=".28" /><stop offset="100%" stopColor="#3B82F6" stopOpacity=".03" /></linearGradient></defs><g className="chart-grid-lines"><line x1="0" y1="0" x2="550" y2="0" /><line x1="0" y1="37" x2="550" y2="37" /><line x1="0" y1="75" x2="550" y2="75" /><line x1="0" y1="112" x2="550" y2="112" /><line x1="0" y1="150" x2="550" y2="150" /></g><polygon points={`${linePoints} 550,150 0,150`} fill="url(#salesFill)" /><polyline points={linePoints} fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />{linePoints.split(" ").map((point, index) => { const [cx, cy] = point.split(","); return <circle key={index} cx={cx} cy={cy} r="4.5" fill="white" stroke="#3B82F6" strokeWidth="2.5" />; })}</svg><div className="line-x-axis">{chartLabels.map(label => <span key={label}>{label}</span>)}</div></div></section>
      <section className="panel best-sellers-panel"><div className="panel-header"><div><h2 className="panel-title">{ar ? "الأكثر مبيعًا" : "Best sellers"}</h2><span className="panel-note">{ar ? "هذا الشهر" : "This month"}</span></div></div><div className="sales-donut" /><div className="best-seller-list">{[["سماعات", "4 قطعة", "#32b7df"], ["حقائب", "2 قطعة", "#d93c96"], ["ساعات", "2 قطعة", "#984fe4"], ["إكسسوارات", "2 قطعة", "#ffad16"]].map(([name, qty, color]) => <div key={name}><span><i style={{ background: color }} />{ar ? name : name}</span><b>{qty}</b></div>)}</div></section>
    </div>
    <div className="dashboard-tools-grid"><section className="panel tool-card"><div className="panel-header"><h2 className="panel-title">{ar ? "رابط المتجر" : "Store link"}</h2><Copy size={16} className="muted-icon" /></div><div className="store-link-field"><span>milanobooks.manus.space</span><button onClick={() => { navigator.clipboard?.writeText("milanobooks.manus.space"); toast.success(ar ? "تم نسخ الرابط" : "Link copied"); }}><Copy size={13} /></button></div><div className="store-link-actions"><button className="ghost-button"><QrCode size={14} /> QR Code</button><button className="store-button" onClick={() => toast.success(ar ? "تم فتح المتجر" : "Store opened")}><ExternalLink size={14} />{ar ? "اذهب إلى المتجر" : "Go to store"}</button></div></section><section className="panel tool-card store-status-card"><div className="panel-header"><h2 className="panel-title">{ar ? "حالة المتجر" : "Store status"}</h2><button className={`toggle-control ${storeOpen ? "on" : ""}`} onClick={() => setStoreOpen(!storeOpen)}><span /></button></div><div className="status-open"><CheckCircle2 size={19} /><strong>{storeOpen ? (ar ? "مفتوح" : "Open") : (ar ? "مغلق" : "Closed")}</strong></div><p>{storeOpen ? (ar ? "المتجر مفتوح ويستقبل الطلبات" : "The store is open and accepting orders") : (ar ? "المتجر مغلق حالياً" : "The store is currently closed")}</p></section><section className="panel tool-card visitors-card"><div className="visitor-icon"><UserRound size={18} /></div><div className="visitor-metric"><strong>0</strong><span>{ar ? "الزائرين اليوم" : "Visitors today"}</span></div><div className="visitor-divider" /><div className="visitor-metric"><strong>523</strong><span>{ar ? "جميع زائرين المتجر" : "All store visitors"}</span></div></section></div>
    <section className="panel real-orders-panel"><div className="panel-header"><div><h2 className="panel-title">{ar ? "أحدث الطلبات الحقيقية" : "Latest real orders"}</h2><span className="panel-note">{ar ? "آخر الطلبات الواردة" : "Recently received orders"}</span></div><button className="panel-action" onClick={onViewAll}>{ar ? "عرض الكل" : "View all"}</button></div><div className="table-wrap"><table className="data-table real-orders-table"><thead><tr><th>{ar ? "رقم الطلب" : "Order"}</th><th>{ar ? "الاسم" : "Name"}</th><th>{ar ? "إجمالي الطلب" : "Total"}</th><th>{ar ? "رقم الهاتف" : "Phone"}</th><th>{ar ? "المدينة" : "City"}</th><th>{ar ? "الحالة" : "Status"}</th></tr></thead><tbody>{realOrders.map(order => <tr key={order.id}><td><strong>{order.id}</strong></td><td>{order.name}</td><td>{order.total}</td><td dir="ltr">{order.phone}</td><td>{order.city}</td><td><span className={`status-pill ${order.tone}`}>{order.status}</span></td></tr>)}</tbody></table></div></section>
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

function ProductEditor({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [imageName, setImageName] = useState("");
  const [extraImages, setExtraImages] = useState<string[]>([]);
  const [sizes, setSizes] = useState([{ name: "S", quantity: 3 }, { name: "M", quantity: 4 }, { name: "L", quantity: 0 }, { name: "XL", quantity: 8 }, { name: "XXL", quantity: 12 }]);
  const [sizeInput, setSizeInput] = useState("");
  const [colors, setColors] = useState([{ hex: "#000000", name: "أسود" }, { hex: "#ffffff", name: "أبيض" }]);
  const [colorInput, setColorInput] = useState("#2563EB");
  const [description, setDescription] = useState(ar ? "اكتب وصفاً واضحاً ومختصراً للمنتج هنا..." : "Write a clear and concise product description here...");
  const fields: Array<[string, string, string, boolean]> = [["name", ar ? "اسم المنتج" : "Product name", ar ? "أدخل اسم المنتج" : "Enter product name", true], ["sku", ar ? "رمز المنتج (SKU)" : "Product SKU", "ML-PR-0001", true], ["cost", ar ? "سعر التكلفة (يمني)" : "Cost price (YER)", "0", true], ["stock", ar ? "عدد المخزون" : "Stock quantity", "0", true], ["price", ar ? "سعر البيع" : "Selling price", "0", true], ["sort", ar ? "ترتيب المنتج" : "Product order", "0", false]];
  const addSize = () => { const value = sizeInput.trim().toUpperCase(); if (value && !sizes.some(item => item.name === value)) { setSizes([...sizes, { name: value, quantity: 3 }]); setSizeInput(""); } };
  const addColor = () => { const value = colorInput.toUpperCase(); if (/^#[0-9A-F]{6}$/.test(value) && !colors.some(c => c.hex === value)) setColors([...colors, { hex: value, name: value }]); };
  const handleExtraImages = (files: FileList | null) => { if (!files) return; const next = Array.from(files).filter(file => file.size <= 10 * 1024 * 1024).slice(0, 3 - extraImages.length).map(file => URL.createObjectURL(file)); setExtraImages(prev => [...prev, ...next].slice(0, 3)); };
  return <div className="product-editor"><section className="panel product-info-card"><div className="product-section-heading"><div className="section-number">1</div><div><h2 className="panel-title">{ar ? "معلومات المنتج" : "Product information"}</h2><span className="panel-note">{ar ? "أدخل تفاصيل المنتج الأساسية" : "Enter the basic product details"}</span></div><button className="primary-button save-product-button" onClick={() => toast.success(ar ? "تم حفظ المنتج بنجاح" : "Product saved successfully")}><Check size={15} />{ar ? "حفظ المنتج" : "Save product"}</button></div><div className="section-divider" /><div className="product-fields-grid">{fields.map(([key, label, placeholder, required]) => <label key={key} className="product-field"><span>{label}{required && <b>*</b>}</span><div className={key === "sku" ? "input-with-icon" : ""}>{key === "sku" && <Hash size={15} />}<input type={key === "cost" || key === "stock" || key === "price" || key === "sort" ? "number" : "text"} placeholder={placeholder} /></div></label>)}<label className="product-field"><span>{ar ? "عنوان الكتالوج" : "Catalog title"}<b>*</b></span><select><option>{ar ? "اختر عنوان الكتالوج" : "Select catalog title"}</option><option>{ar ? "المنتجات الجديدة" : "New products"}</option><option>{ar ? "الأكثر مبيعاً" : "Best sellers"}</option></select></label></div><div className="product-image-section"><div className="product-image-preview"><div className="product-image-placeholder">{imageName ? <span>{imageName}</span> : <Package size={29} />}</div><div><strong>{ar ? "الصورة الأساسية" : "Main product image"}</strong><span>{ar ? "اختر صورة واضحة للمنتج" : "Choose a clear product image"}</span></div></div><label className="upload-image-button"><Plus size={14} />{ar ? "رفع صورة" : "Upload image"}<input type="file" accept="image/*" onChange={e => setImageName(e.target.files?.[0]?.name ?? "")} /></label></div></section><section className="panel description-card"><div className="product-section-heading description-heading"><div><h2 className="panel-title">{ar ? "وصف المنتج" : "Product description"}</h2><span className="panel-note">{ar ? "اكتب وصفاً يساعد العملاء على فهم المنتج" : "Write a description that helps customers"}</span></div><div className="editor-mode-switch"><button className={mode === "preview" ? "active" : ""} onClick={() => setMode("preview")}>{ar ? "معاينة" : "Preview"}</button><button className={mode === "edit" ? "active" : ""} onClick={() => setMode("edit")}>{ar ? "تحرير" : "Edit"}</button></div></div>{mode === "edit" ? <div className="rich-editor"><div className="editor-toolbar"><button><strong>B</strong></button><button><i>I</i></button><button><u>U</u></button><button>↗</button><button>H2</button><button>&bull; —</button></div><textarea value={description} onChange={e => setDescription(e.target.value)} dir="rtl" /></div> : <div className="description-preview" dir="rtl">{description}</div>}</section><section className="panel extra-images-card"><div className="extra-section-heading"><h2 className="panel-title">{ar ? "الصور الإضافية (اختياري)" : "Additional images (optional)"}</h2><p>{ar ? "يمكنك رفع حتى 3 صور، بحد أقصى 10MB لكل صورة." : "Upload up to 3 images, maximum 10MB per image."}</p></div><label className="extra-upload-zone"><CloudUpload size={31} /><strong>{ar ? "اسحب وأفلت الصور هنا" : "Drag and drop images here"}</strong><span>{ar ? "أو انقر للاختيار" : "or click to choose"}</span><input type="file" accept="image/*" multiple onChange={e => handleExtraImages(e.target.files)} /></label>{extraImages.length > 0 && <div className="extra-image-list">{extraImages.map((src, index) => <div className="extra-image-thumb" key={src}><img src={src} alt={`extra-${index + 1}`} /><button onClick={() => setExtraImages(extraImages.filter((_, i) => i !== index))}><Trash2 size={13} /></button></div>)}</div>}</section><section className="panel variants-card"><div className="variants-heading"><div className="variants-title"><span className="variants-icon"><Ruler size={17} /></span><div><h2 className="panel-title">{ar ? "المقاسات والألوان المتوفرة" : "Available sizes and colors"}</h2><p>{ar ? "أضف المقاسات والألوان التي يمكن للعميل اختيارها من صفحة المنتج." : "Add sizes and colors customers can choose."}</p></div></div></div><div className="variant-block"><h3>{ar ? "إضافة المقاسات (مثل: S, M, XL أو 42, 43)" : "Add sizes (e.g. S, M, XL or 42, 43)"}</h3><div className="variant-add-row"><input value={sizeInput} onChange={e => setSizeInput(e.target.value)} onKeyDown={e => e.key === "Enter" && addSize()} placeholder={ar ? "أضف مقاس..." : "Add size..."} /><button className="variant-add-button" onClick={addSize}>{ar ? "إضافة" : "Add"}</button></div><div className="chip-list">{sizes.map(size => <span className="option-chip size-chip" key={size.name}><button className="chip-remove" aria-label={ar ? "حذف المقاس" : "Remove size"} onClick={() => setSizes(sizes.filter(item => item.name !== size.name))}>×</button><span className="size-chip-content"><strong>{ar ? "مقاس " : "Size "}{size.name}</strong><span className={`quantity-control ${size.quantity === 0 ? "stock-zero" : size.quantity < 5 ? "stock-low" : "stock-good"}`}><input aria-label={ar ? `كمية ${size.name}` : `${size.name} quantity`} type="number" min="0" value={size.quantity} onChange={e => setSizes(sizes.map(item => item.name === size.name ? { ...item, quantity: Math.max(0, Number(e.target.value) || 0) } : item))} /></span></span></span>)}</div></div><div className="variant-block"><h3>{ar ? "إضافة الألوان (مثل: أحمر، أزرق، #FF0000)" : "Add colors (e.g. red, blue, #FF0000)"}</h3><div className="variant-add-row color-row"><input type="color" value={colorInput} onChange={e => setColorInput(e.target.value)} /><input value={colorInput} onChange={e => setColorInput(e.target.value)} placeholder="#000000" /><button className="variant-add-button" onClick={addColor}>{ar ? "إضافة" : "Add"}</button></div><div className="chip-list">{colors.map(color => <span className="option-chip color-chip" key={color.hex}><i style={{ background: color.hex }} />{color.hex}<button onClick={() => setColors(colors.filter(item => item.hex !== color.hex))}>×</button></span>)}</div></div><div className="variant-alert"><HelpCircle size={17} /><span>{ar ? "سيتم عرض هذه الاختيارات للعميل في صفحة المنتج بشكل دقيق، مما يسهل عليه اختيار المقاس واللون المناسب قبل الإضافة للسلة." : "Customers can choose size and color from the product page. Quantities for each variation are managed in Inventory."}</span></div></section></div>;
}

const categoryData = [
  { name: "بوتاتي حبوب درجه اولى", count: 9, tone: "amber", glyph: "✦" },
  { name: "منتجات العناية الشخصية", count: 6, tone: "blue", glyph: "✿" },
  { name: "الأجهزة والإكسسوارات", count: 21, tone: "purple", glyph: "◈" },
  { name: "الأغذية والمشروبات", count: 14, tone: "green", glyph: "◉" },
];
const categoryProducts = [
  { name: "بوتاتي حبوب درجه اولى", price: "28000", sku: "1001", stock: 0, order: 1, discount: "0%", options: 4, images: 3, tone: "amber", glyph: "✦", hidden: false },
  { name: "بوتاتي حبوب فاخر", price: "32000", sku: "1002", stock: 6, order: 2, discount: "10%", options: 3, images: 4, tone: "blue", glyph: "✦", hidden: false },
  { name: "بوتاتي حبوب محمص", price: "24500", sku: "1003", stock: 14, order: 3, discount: "5%", options: 2, images: 2, tone: "purple", glyph: "✦", hidden: false },
  { name: "بوتاتي حبوب عضوي", price: "41000", sku: "1004", stock: 8, order: 4, discount: "0%", options: 5, images: 3, tone: "green", glyph: "✦", hidden: true },
];
function categoryStockClass(stock: number) { return stock === 0 ? "stock-zero" : stock < 10 ? "stock-low" : "stock-good"; }
function CategoriesPage({ locale, onOpenCategory }: { locale: Locale; onOpenCategory: () => void }) {
  const ar = locale === "ar"; const [query, setQuery] = useState(""); const [sortReverse, setSortReverse] = useState(false); const [categories, setCategories] = useState(categoryData); const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const filtered = [...categories.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))].sort((a, b) => sortReverse ? b.count - a.count : a.count - b.count); const moveCategory = (name: string, direction: number) => { const index = categories.findIndex(item => item.name === name); const next = index + direction; if (next < 0 || next >= categories.length) return; const reordered = [...categories]; [reordered[index], reordered[next]] = [reordered[next], reordered[index]]; setCategories(reordered); };
  return <div className="categories-page"><div className="categories-toolbar"><div className="category-search"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder={ar ? "بحث عن قسم..." : "Search category..."} /></div><div className="category-toolbar-actions"><button className="sort-category-button" onClick={() => setSortReverse(!sortReverse)}><MoreVertical size={15} />{ar ? "ترتيب الأقسام" : "Sort categories"}</button><button className="primary-button" onClick={() => { setCategories([...categories, { name: ar ? `قسم جديد ${categories.length + 1}` : `New category ${categories.length + 1}`, count: 0, tone: "blue", glyph: "✦" }]); toast.success(ar ? "تمت إضافة قسم جديد" : "New category added"); }}><Plus size={15} />{ar ? "إضافة قسم" : "Add category"} +</button></div></div><div className="category-list">{filtered.map((item, index) => <article className="category-row" key={item.name} onClick={onOpenCategory}><div className={`category-watermark ${item.tone}`}>{item.glyph}</div><div className={`category-thumb ${item.tone}`}>{item.glyph}</div><div className="category-copy"><h2>{item.name}</h2><span>{item.count} {ar ? "منتج" : "products"}</span></div><div className="category-actions"><button className="category-action reorder" title={ar ? "رفع القسم" : "Move up"} onClick={e => { e.stopPropagation(); moveCategory(item.name, -1); }}><ArrowUpRight size={14} /></button><button className="category-action reorder" title={ar ? "تنزيل القسم" : "Move down"} onClick={e => { e.stopPropagation(); moveCategory(item.name, 1); }}><ArrowDownRight size={14} /></button><button className="category-action edit" onClick={e => { e.stopPropagation(); const next = window.prompt(ar ? "اكتب اسم القسم الجديد" : "Enter the new category name", item.name); if (next?.trim()) setCategories(categories.map(category => category.name === item.name ? { ...category, name: next.trim() } : category)); }}><Pencil size={14} /></button><label className="category-action image" onClick={e => e.stopPropagation()}><CloudUpload size={14} /><input className="category-image-input" type="file" accept="image/*" onChange={e => { if (e.target.files?.[0]) toast.success(ar ? `تم اختيار صورة ${e.target.files[0].name}` : `Image selected: ${e.target.files[0].name}`); }} /></label><button className="category-action delete" onClick={e => { e.stopPropagation(); setCategories(categories.filter(category => category.name !== item.name)); toast.success(ar ? "تم حذف القسم" : "Category deleted"); }}><Trash2 size={14} /></button></div></article>)}</div>{filtered.length === 0 && <div className="empty-category-state">{ar ? "لا توجد أقسام مطابقة" : "No matching categories"}</div>}</div>;
}
function CategoryProductsPage({ locale, onBack, onEdit }: { locale: Locale; onBack: () => void; onEdit: () => void }) {
  const ar = locale === "ar"; const [query, setQuery] = useState(""); const [products, setProducts] = useState(categoryProducts); const [sortReverse, setSortReverse] = useState(false); const filtered = [...products.filter(item => `${item.name} ${item.sku}`.toLowerCase().includes(query.toLowerCase()))].sort((a, b) => sortReverse ? b.order - a.order : a.order - b.order);
  return <div className="category-products-page"><div className="category-products-header"><button className="back-category-button" onClick={onBack}><ChevronLeft size={16} />{ar ? "رجوع للأقسام" : "Back to categories"}</button><div className="category-products-title"><h1>{ar ? "بوتاتي حبوب درجه اولى" : "First-grade Botati grains"}</h1><span>{ar ? "9 منتج في هذا القسم" : "9 products in this category"}</span></div><div className="product-list-tools"><div className="product-list-search"><Search size={15} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder={ar ? "ابحث عن اسم المنتج / رمز المنتج" : "Search product name / SKU"} /></div><button className="product-search-button" onClick={() => toast.success(ar ? "تم تحديث نتائج البحث" : "Search results updated")}><Search size={14} />{ar ? "بحث" : "Search"}</button><button className="square-tool" onClick={() => toast.info(ar ? "تم فتح إعدادات قائمة المنتجات" : "Product list settings opened")}><Settings size={15} /></button><button className="square-tool" onClick={() => setSortReverse(!sortReverse)}><MoreVertical size={15} /></button></div></div><div className="category-product-grid">{filtered.map(product => <article className={`category-product-card ${product.hidden ? "product-hidden" : ""}`} key={product.sku}><div className={`product-visual ${product.tone}`}><span className="product-glyph">{product.glyph}</span><div className="product-card-actions"><button className="card-action delete" onClick={() => { setProducts(products.filter(item => item.sku !== product.sku)); toast.success(ar ? "تم حذف المنتج" : "Product deleted"); }}><Trash2 size={13} /></button><button className={`card-action visibility ${product.hidden ? "is-hidden" : ""}`} onClick={() => setProducts(products.map(item => item.sku === product.sku ? { ...item, hidden: !item.hidden } : item))}>{product.hidden ? <EyeOff size={13} /> : <Eye size={13} />}</button><button className="card-action view" onClick={() => { navigator.clipboard?.writeText(`milanobooks.manus.space/product/${product.sku}`); toast.success(ar ? "تم نسخ رابط المنتج" : "Product link copied"); }}><Copy size={13} /></button><button className="card-action view" onClick={() => toast.info(ar ? "تم فتح عرض المنتج" : "Product preview opened")}><ExternalLink size={13} /></button></div></div><div className="category-product-info"><h2>{product.name}</h2><strong className="product-price">{product.price} <small>{ar ? "ريال يمني" : "YER"}</small></strong><div className="product-meta-grid"><span>SKU <b>{product.sku}</b></span><span>{ar ? "المخزون" : "Stock"} <b className={categoryStockClass(product.stock)}>{product.stock}</b></span><span>{ar ? "الترتيب" : "Order"} <b>{product.order}</b></span><span>{ar ? "خصم" : "Discount"} <b>{product.discount}</b></span><span>{ar ? "خيارات" : "Options"} <b>{product.options}</b></span><span>{ar ? "صور" : "Images"} <b>{product.images}</b></span></div><button className="edit-product-full" onClick={() => onEdit()}><Pencil size={14} />{ar ? "تعديل المنتج" : "Edit product"}</button></div></article>)}</div></div>;
}

function InventoryPage({ locale }: { locale: Locale }) {
  const ar = locale === "ar"; const [query, setQuery] = useState(""); const [filter, setFilter] = useState("all");
  const rows = [{ no: 1, code: "1001", name: "بوتاتي حبوب درجه اولى", stock: 0, costTotal: "0", cost: "28,000", saleTotal: "0", sale: "28,000", tone: "amber", tags: "S · M · أسود" }, { no: 2, code: "1002", name: "بوتاتي حبوب فاخر", stock: 6, costTotal: "168,000", cost: "28,000", saleTotal: "192,000", sale: "32,000", tone: "blue", tags: "M · L · بني" }, { no: 3, code: "1003", name: "بوتاتي حبوب محمص", stock: 14, costTotal: "343,000", cost: "24,500", saleTotal: "420,000", sale: "30,000", tone: "purple", tags: "S · XL · أسود" }, { no: 4, code: "1004", name: "بوتاتي حبوب عضوي", stock: 8, costTotal: "196,000", cost: "24,500", saleTotal: "328,000", sale: "41,000", tone: "green", tags: "L · أزرق" }];
  const visible = rows.filter(row => `${row.name} ${row.code}`.includes(query) && (filter === "all" || filter === "available" && row.stock >= 10 || filter === "low" && row.stock > 0 && row.stock < 10 || filter === "out" && row.stock === 0));
  const statusCards = [["all", "جميع المنتجات", "23", "blue"], ["available", "متوفر في المخزون", "13", "green"], ["low", "قريب على النفاد", "5", "orange"], ["out", "نفد من المخزون", "5", "red"]];
  return <div className="inventory-page"><div className="inventory-toolbar"><div className="inventory-search"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder={ar ? "بحث عن المنتج أو رمز المنتج" : "Search product or code"} /><button className="inventory-search-button"><Search size={14} />{ar ? "بحث" : "Search"}</button></div><div className="inventory-actions"><button className="inventory-sort-button" onClick={() => toast.success(ar ? "تم ترتيب المنتجات حسب المخزون" : "Products sorted by stock")}><MoreVertical size={15} />{ar ? "فرز المنتجات" : "Sort products"}</button><button className="print-inventory-button" onClick={() => toast.success(ar ? "تم تجهيز تقرير إدارة المخزون للطباعة" : "Inventory report ready to print")}><Printer size={15} />{ar ? "طباعة تقرير إدارة المخزون" : "Print inventory report"}</button></div></div><div className="inventory-status-grid">{statusCards.map(([key, label, value, tone]) => <button key={key} className={`inventory-status-card ${tone} ${filter === key ? "active" : ""}`} onClick={() => setFilter(key)}><span>{label}</span><strong>{value}</strong></button>)}</div><div className="inventory-info-bar"><FileText size={18} /><strong>{ar ? "جرد المنتجات" : "Product inventory"}</strong><span>23</span></div><section className="panel inventory-table-card"><div className="inventory-table-wrap"><table className="data-table inventory-table"><thead><tr><th>#</th><th>{ar ? "رمز المنتج" : "Product code"}</th><th>{ar ? "اسم المنتج" : "Product name"}</th><th>{ar ? "المخزون الحالي" : "Current stock"}</th><th>{ar ? "إجمالي التكلفة" : "Total cost"}</th><th>{ar ? "سعر التكلفة" : "Cost price"}</th><th>{ar ? "إجمالي البيع" : "Total sale"}</th><th>{ar ? "سعر البيع" : "Sale price"}</th><th>{ar ? "الإجراءات" : "Actions"}</th></tr></thead><tbody>{visible.map(row => <tr key={row.code}><td className="inventory-number">{row.no}</td><td className="inventory-code">{row.code}</td><td><div className="inventory-product-name"><div className={`inventory-thumb ${row.tone}`}>✦</div><div><strong>{row.name}</strong><small>{row.tags}</small></div></div></td><td><span className={`inventory-stock ${categoryStockClass(row.stock)}`}>{row.stock}</span></td><td><span className="cost-total-box">{row.costTotal}</span></td><td><span className="cost-price-box">{row.cost}</span></td><td><span className="sale-total-box">{row.saleTotal}</span></td><td>{row.sale}</td><td><div className="inventory-row-actions"><button className="row-action edit" onClick={() => toast.info(ar ? "تم فتح تعديل المنتج" : "Product editor opened")}><Pencil size={13} /></button><button className="row-action delete" onClick={() => toast.success(ar ? "تم حذف المنتج من العرض" : "Product removed from view")}><Trash2 size={13} /></button></div></td></tr>)}</tbody></table></div></section><section className="panel inventory-total-card"><h2>{ar ? "الإجمالي الكلي لإدارة المخزون" : "Total inventory summary"}</h2><p>{ar ? "يشمل جميع المنتجات ضمن المخزون المحدد." : "Includes all products within the selected inventory."}</p><div className="inventory-totals-grid">{[["إجمالي المنتجات", "17", "منتج مسجل", "teal"], ["إجمالي الكميات", "109", "قطعة", "purple"], ["إجمالي قيمة التكلفة", "301,662", "ريال يمني", "orange"], ["إجمالي قيمة البيع", "619,740", "ريال يمني", "green"], ["صافي الربح المتوقع", "+318,078", "ريال يمني", "blue"]].map(([label, value, unit, tone]) => <div className={`inventory-total-item ${tone}`} key={label}><span>{label}</span><strong>{value}</strong><small>{unit}</small></div>)}</div></section></div>;
}

function OperationalPage({ locale, view }: { locale: Locale; view: View }) {
  if (view === "addProductMenu") return <ProductEditor locale={locale} />;
  const t = (key: string) => getText(locale, key);
  const isProduct = ["addProductMenu", "productList", "inventory", "products"].includes(view);
  const isOrder = ["orderList", "pointOfSale", "externalOrder", "orders"].includes(view);
  const isDiscount = view === "discounts";
  const isReviews = view === "reviews";
  const rows = isProduct ? [{ name: "سماعة لاسلكية Pro", code: "ML-AU-204", value: "128" }, { name: "حقيبة جلدية كلاسيك", code: "ML-BG-119", value: "42" }, { name: "ساعة Milano One", code: "ML-WA-882", value: "18" }] : [{ name: "#ML-4832", code: "سارة العتيبي", value: "349 ر.س" }, { name: "#ML-4831", code: "محمد القحطاني", value: "580 ر.س" }, { name: "#ML-4830", code: "نورة الحربي", value: "799 ر.س" }];
  const title = t(view);
  const icon = isProduct ? <Package size={22} /> : isOrder ? <ShoppingCart size={22} /> : isDiscount ? <Tag size={22} /> : <MessageCircle size={22} />;
  return <div className="operational-page"><div className="operational-summary"><div className="stat-icon blue">{icon}</div><div><strong>{title}</strong><span>{locale === "ar" ? "إدارة هذا القسم من مساحة عمل ميلانو" : "Manage this section from the Milano workspace"}</span></div><button className="primary-button" onClick={() => toast.success(locale === "ar" ? `تم تنفيذ إجراء ${title}` : `${title} action completed`)}><Plus size={15} />{locale === "ar" ? "إضافة جديد" : "Add new"}</button></div><div className="stats-grid mini-stats"><article className="stat-card"><span className="stat-label">{isReviews ? (locale === "ar" ? "متوسط التقييم" : "Average rating") : isDiscount ? (locale === "ar" ? "العروض النشطة" : "Active offers") : isProduct ? (locale === "ar" ? "إجمالي المنتجات" : "Total products") : (locale === "ar" ? "إجمالي الطلبات" : "Total orders")}</span><div className="stat-value">{isReviews ? "4.8" : isDiscount ? "12" : isProduct ? "248" : "842"}</div></article><article className="stat-card"><span className="stat-label">{locale === "ar" ? "هذا الشهر" : "This month"}</span><div className="stat-value">{isReviews ? "96%" : isDiscount ? "٣٤,٨٠٠" : isProduct ? "+12.8%" : "١٢٤,٥٨٠"}<small>{isReviews ? "ممتاز" : isProduct ? "" : "ر.س"}</small></div></article><article className="stat-card"><span className="stat-label">{locale === "ar" ? "تحتاج إلى انتباهك" : "Needs attention"}</span><div className="stat-value">{isProduct ? "18" : isOrder ? "24" : isDiscount ? "3" : "6"}<small>{locale === "ar" ? "عنصر" : "items"}</small></div></article></div><section className="panel operational-table"><div className="panel-header"><div><h2 className="panel-title">{isReviews ? (locale === "ar" ? "آخر آراء العملاء" : "Recent customer reviews") : isDiscount ? (locale === "ar" ? "العروض والخصومات" : "Offers and discounts") : isProduct ? (locale === "ar" ? "قائمة المنتجات" : "Product list") : (locale === "ar" ? "قائمة الطلبات" : "Order list")}</h2><span className="panel-note">{locale === "ar" ? "تحديثات مباشرة" : "Live updates"}</span></div><button className="panel-action" onClick={() => toast.info(locale === "ar" ? "تم تحديث البيانات" : "Data refreshed")}><RefreshCw size={13} /> {locale === "ar" ? "تحديث" : "Refresh"}</button></div><div className="table-wrap"><table className="data-table"><thead><tr><th>{isReviews ? "العميل" : isProduct ? "المنتج" : "المرجع"}</th><th>{isReviews ? "التقييم" : isProduct ? "الرمز" : "العميل"}</th><th>{isReviews ? "الحالة" : isProduct ? "الكمية" : "المبلغ"}</th><th>{locale === "ar" ? "الإجراء" : "Action"}</th></tr></thead><tbody>{(isReviews ? [{ name: "سارة العتيبي", code: "★★★★★", value: "ممتاز" }, { name: "محمد القحطاني", code: "★★★★☆", value: "جيد جداً" }, { name: "نورة الحربي", code: "★★★★★", value: "رائع" }] : rows).map((row) => <tr key={row.name}><td><strong>{row.name}</strong></td><td>{row.code}</td><td>{row.value}</td><td><button className="small-action" onClick={() => toast.success(locale === "ar" ? "تم فتح التفاصيل" : "Details opened")}><MoreHorizontal size={15} /></button></td></tr>)}</tbody></table></div></section></div>;
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
  const heading = useMemo(() => ["products", "categoryProducts", "inventory"].includes(view) ? null : <PageHeading locale={locale} view={view} onAdd={handleAdd} />, [locale, view]);

  const operationalViews: View[] = [ "orders", "addProductMenu", "productList", "orderList", "pointOfSale", "externalOrder", "discounts", "reviews"];
  return <div className={`app-shell ${theme}`} dir={locale === "ar" ? "rtl" : "ltr"}><div className="app-layout"><Sidebar locale={locale} view={view} setView={setView} open={sidebarOpen} onClose={() => setSidebarOpen(false)} onHelp={() => toast.info(locale === "ar" ? "مركز المساعدة قيد التجهيز" : "Help center is being prepared.")} /><main className="app-main"><div className="dashboard-content"><Topbar locale={locale} theme={theme} setTheme={setTheme} setLocale={setLocale} setSidebarOpen={setSidebarOpen} onNotifications={() => toast.info(locale === "ar" ? "لديك ٣ تنبيهات جديدة" : "You have 3 new notifications")} />{heading}{view === "dashboard" && <Dashboard locale={locale} onViewAll={() => setView("orders")} />}{view === "purchases" && <Purchases locale={locale} />}{view === "conversations" && <Conversations locale={locale} selected={selectedConversation} setSelected={setSelectedConversation} onProfile={() => setProfileOnMobile(!profileOnMobile)} />}{view === "channels" && <Channels locale={locale} onAction={() => toast.success(locale === "ar" ? "تم فتح إعدادات ربط القناة" : "Channel connection settings opened")} />}{view === "settings" && <SettingsView locale={locale} setLocale={setLocale} theme={theme} setTheme={setTheme} />}{view === "products" && <CategoriesPage locale={locale} onOpenCategory={() => setView("categoryProducts")} />} {view === "inventory" && <InventoryPage locale={locale} />}{view === "categoryProducts" && <CategoryProductsPage locale={locale} onBack={() => setView("products")} onEdit={() => setView("addProductMenu")} />}{operationalViews.includes(view) && <OperationalPage locale={locale} view={view} />}{!["dashboard", "purchases", "conversations", "channels", "settings", "products", "categoryProducts", "inventory", ...operationalViews].includes(view) && <Placeholder locale={locale} view={view} onBack={() => setView("dashboard")} />}</div></main></div></div>;
}
