import { createContext, useContext } from "react";
import { ThemesVariants } from ".";
import { Appearance } from "react-native";

/**
 * This are the possible variables to choose from your theme, 
 * this is used to get the color by the variable name in the `getThemeColorByVariable`
 * and `getThemeColorByVariableAndAlpha` functions, that are set in the theme provider.
 */
export type ThemesVariables =
  | "background"
  | "foreground"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "accent"
  | "accent-foreground"
  | "muted"
  | "muted-foreground"
  | "popover"
  | "popover-foreground"
  | "destructive"
  | "destructive-foreground"
  | "input";

/**
 * The system theme which is always dark, light or a custom theme in the app.
 */
export type SystemThemesVariants = "dark" | "light" | undefined;

/**
 * These are the properties and functions that will be provided from our theme provider.
 */
type ThemeContextProps = {
  theme: ThemesVariants;
  systemTheme: SystemThemesVariants;
  systemEnabled: boolean;
  handleThemeSwitch: (newTheme: ThemesVariants) => void;
  getThemeColorByVariable: (colorKey: ThemesVariables) => string;
  getThemeColorByVariableAndAlpha: (
    colorKey: ThemesVariables,
    alpha: number
  ) => string;
};

/**
 * The context creation with some default properties.
 */
export const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  systemTheme: Appearance.getColorScheme() === "light" ? "light" : "dark",
  systemEnabled: true,
} as ThemeContextProps);

/**
 * A hook to use the theme provider functions and properties.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
