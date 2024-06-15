import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ThemeSettingService } from "./themeSetting.service";
import { ThemeSettingControllerBase } from "./base/themeSetting.controller.base";

@swagger.ApiTags("themeSettings")
@common.Controller("themeSettings")
export class ThemeSettingController extends ThemeSettingControllerBase {
  constructor(protected readonly service: ThemeSettingService) {
    super(service);
  }
}
