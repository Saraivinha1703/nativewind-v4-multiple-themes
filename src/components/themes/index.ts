import {vars} from "nativewind";

export type ThemesVariants = "system" | "light" | "dark" | "deep-ocean";

export const themesVariables = {
light: {
    "--background": "0 0% 98%",
    "--foreground": "240 10% 4%",
    "--primary": "142 71% 45%",
    "--primary-foreground": "138 76% 97%",
    "--secondary": "173 80% 40%",
    "--secondary-foreground": "166 76% 97%",
    "--accent": "240 5% 84%",
    "--accent-foreground": "240 10% 4%",
    "--muted": "240 6% 90%",
    "--muted-foreground": "240 10% 4%",
    "--destructive": "349.72 89.16% 60.2%",
    "--destructive-foreground": "356 100% 97%",
    "--popover": "240 4.76% 95.88%",
    "--popover-foreground": "240 10% 4%",
    "--input": "240 6% 90%",
    "--radius": "0.5",
  },
dark: {
    "--background": "240 10% 3.92%",
    "--foreground": "0 0% 98.04%",
    "--primary": "270.74 91.01% 65.1%",
    "--primary-foreground": "240 10% 3.92%",
    "--secondary": "330.37 81.19% 60.39%",
    "--secondary-foreground": "240 10% 3.92%",
    "--accent": "240 5.2% 33.92%",
    "--accent-foreground": "240 4.76% 95.88%",
    "--muted": "240 5.26% 26.08%",
    "--muted-foreground": "240 5.88% 90%",
    "--destructive": "349.72 89.16% 60.2%",
    "--destructive-foreground": "343.1 87.65% 15.88%",
    "--popover": "240 3.7% 15.88%",
    "--popover-foreground": "0 0% 98.04%",
    "--input": "0 0% 23%",
    "--radius": "0.5",
  },
  //NEW THEME
  "deep-ocean": {
    "--background": "224 71.43% 4.12%",
    "--foreground": "210 20% 98.04%",
    "--primary": "217.22 91.22% 59.8%",
    "--primary-foreground": "224 71.43% 4.12%",
    "--secondary": "188.74 94.5% 42.75%",
    "--secondary-foreground": "224 71.43% 4.12%",
    "--accent": "215 13.79% 34.12%",
    "--accent-foreground": "220 14.29% 95.88%",
    "--muted": "216.92 19.12% 26.67%",
    "--muted-foreground": "220 13.04% 90.98%",
    "--destructive": "349.72 89.16% 60.2%",
    "--destructive-foreground": "343.1 87.65% 15.88%",
    "--popover": "215 27.91% 16.86%",
    "--popover-foreground": "210 20% 98.04%",
    "--input": "0 0% 25.1%",
    "--radius": "0.5",
  }
  // ----------------
}

export const themes = {
    light: vars(themesVariables.light),
    dark: vars(themesVariables.dark),
    // ADDING NEW THEME
    "deep-ocean": vars(themesVariables["deep-ocean"]),
    // ----------------
}