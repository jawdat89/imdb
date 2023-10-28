"use client";
import { ThemeProvider } from "next-themes";

interface Props {
  children: JSX.Element;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="bg-slate-100 dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
