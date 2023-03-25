import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ActivityController } from './controllers/activity.controller';
import { ActivityService } from './services/activity.service';

@Module({
    imports: [PrismaModule],
    controllers: [ActivityController],
    providers: [ActivityService]
})
export class ActivityModule{}