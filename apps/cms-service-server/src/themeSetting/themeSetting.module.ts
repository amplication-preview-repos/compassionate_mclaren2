import { Module } from "@nestjs/common";
import { ThemeSettingModuleBase } from "./base/themeSetting.module.base";
import { ThemeSettingService } from "./themeSetting.service";
import { ThemeSettingController } from "./themeSetting.controller";
import { ThemeSettingResolver } from "./themeSetting.resolver";

@Module({
  imports: [ThemeSettingModuleBase],
  controllers: [ThemeSettingController],
  providers: [ThemeSettingService, ThemeSettingResolver],
  exports: [ThemeSettingService],
})
export class ThemeSettingModule {}
