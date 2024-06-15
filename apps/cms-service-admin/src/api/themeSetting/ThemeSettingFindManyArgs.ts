import { ThemeSettingWhereInput } from "./ThemeSettingWhereInput";
import { ThemeSettingOrderByInput } from "./ThemeSettingOrderByInput";

export type ThemeSettingFindManyArgs = {
  where?: ThemeSettingWhereInput;
  orderBy?: Array<ThemeSettingOrderByInput>;
  skip?: number;
  take?: number;
};
