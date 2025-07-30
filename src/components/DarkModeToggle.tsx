import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function DarkModeToggle() {
  // Initialize state from localStorage or default to false
  const [isDark, setIsDark] = React.useState(
    () => typeof window !== 'undefined' && localStorage.getItem("theme") === "dark"
  );

  // Effect to update the class on the HTML element and localStorage
  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch id="dark-mode" checked={isDark} onCheckedChange={toggleDarkMode} />
      <Label htmlFor="dark-mode">Dark Mode</Label>
    </div>
  );
}
