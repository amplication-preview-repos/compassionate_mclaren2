import { ThemeSetting as TThemeSetting } from "../api/themeSetting/ThemeSetting";

export const THEMESETTING_TITLE_FIELD = "id";

export const ThemeSettingTitle = (record: TThemeSetting): string => {
  return record.id?.toString() || String(record.id);
};
