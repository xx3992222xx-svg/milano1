import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Storefront from "./pages/Store";
import { useAuth } from "@/_core/hooks/useAuth";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { startLogin } from "./const";

function AdminGuard() {
  const { user, loading, logout } = useAuth();
  const [, setLocation] = useLocation();
  const allowed = user?.role === "admin" || user?.role === "vendor";

  useEffect(() => {
    if (loading || allowed || !user) return;
    toast.error("غير مسموح لك بالدخول إلى لوحة الإدارة");
    void logout();
    setLocation("/");
  }, [allowed, loading, logout, setLocation, user]);

  if (loading) return <div className="route-guard" dir="rtl"><div className="route-guard-card"><strong>جارٍ التحقق من الصلاحيات...</strong><span>لحظات من فضلك.</span></div></div>;
  if (!user) return <div className="route-guard" dir="rtl"><div className="route-guard-card"><strong>لوحة تحكم التاجر</strong><span>هذه الصفحة مخصصة للبائعين والمديرين المصرح لهم فقط.</span><button className="route-guard-login" onClick={() => startLogin("/admin")}>تسجيل الدخول للمتابعة</button><button className="route-guard-back" onClick={() => setLocation("/")}>العودة إلى المتجر</button></div></div>;
  if (!allowed) return <div className="route-guard" dir="rtl"><div className="route-guard-card"><strong>يتم التحقق من الصلاحيات</strong><span>سيتم إعادتك إلى المتجر.</span></div></div>;
  return <Home />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Storefront} />
      <Route path="/checkout" component={Storefront} />
      <Route path="/admin" component={AdminGuard} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster position="top-center" richColors />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
