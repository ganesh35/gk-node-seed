import { Controller, Get } from '@nestjs/common';

@Controller('app-health')
export class AppHealthController {
    @Get()
    getHealth(): string {
        return "App Works!";
    }
}
