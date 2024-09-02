"use client";

import { ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster as SonnerToaster } from "sonner";

import { useTheme } from "../store/global.store";
import { toastOptions, toastOptionsDark } from "../utils/toast";
import { ModalProvider } from "./modal";

export const queryClient = new QueryClient();

const isProduction = process.env.NODE_ENV === "production";

const Providers = ({ children }: { children: ReactNode }) => {
  const { isDark: isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    // <SessionProvider>
    <QueryClientProvider client={queryClient}>
      <SonnerToaster
        toastOptions={{
          style: !isDarkMode ? toastOptions : toastOptionsDark,
        }}
      />
      <ModalProvider>{children}</ModalProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
    // </SessionProvider>
  );
};

export default Providers;
