import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ThemeSettingServiceBase } from "./base/themeSetting.service.base";

@Injectable()
export class ThemeSettingService extends ThemeSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
