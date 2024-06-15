import * as graphql from "@nestjs/graphql";
import { ThemeSettingResolverBase } from "./base/themeSetting.resolver.base";
import { ThemeSetting } from "./base/ThemeSetting";
import { ThemeSettingService } from "./themeSetting.service";

@graphql.Resolver(() => ThemeSetting)
export class ThemeSettingResolver extends ThemeSettingResolverBase {
  constructor(protected readonly service: ThemeSettingService) {
    super(service);
  }
}
