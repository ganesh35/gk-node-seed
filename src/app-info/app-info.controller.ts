import { Controller, Get } from '@nestjs/common';
import { AppInfoService } from './app-info.service';
import { AppInfoDto } from './dto/app-info.dto';

@Controller('app-info')
export class AppInfoController {
    constructor(private readonly appInfoService: AppInfoService){}

    @Get()
    getInfo(): AppInfoDto {
        return this.appInfoService.getInfo();
    }
}
