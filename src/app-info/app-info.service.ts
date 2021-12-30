import { Injectable } from '@nestjs/common';
import { version,name, description,author } from 'package.json';
import { AppInfoDto } from './dto/app-info.dto';

@Injectable()
export class AppInfoService {
    getInfo(): AppInfoDto {
        const appInfo: AppInfoDto = {
            name: name,
            description:description,
            version:version,
            author: author
        }
        return appInfo;
    }
}
