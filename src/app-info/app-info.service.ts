import { Injectable } from '@nestjs/common';

@Injectable()
export class AppInfoService {
    getInfo(): string{
        return "App Info";
    }
}
