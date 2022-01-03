import { Injectable } from '@nestjs/common';

import { AppInfoDto } from './dto/app-info.dto';

@Injectable()
export class AppInfoService {
  getInfo(): AppInfoDto {
    const appInfo: AppInfoDto = {
      name: process.env.npm_package_name,
      description: process.env.npm_package_description,
      version: process.env.npm_package_version,
      author: process.env.npm_package_author,
    };
    return appInfo;
  }
}
