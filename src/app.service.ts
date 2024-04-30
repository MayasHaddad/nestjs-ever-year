import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  @Cron(CronExpression.EVERY_YEAR)
  handleCron() {
    this.logger.debug('Called every year');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
