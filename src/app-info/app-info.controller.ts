import { Controller, Get } from '@nestjs/common';
import { AppInfoService } from './app-info.service';

@Controller('app-info')
export class AppInfoController {
    constructor(private readonly appInfoService: AppInfoService){}

    @Get()
    getInfo(): string {
        return this.appInfoService.getInfo();
    }
}
