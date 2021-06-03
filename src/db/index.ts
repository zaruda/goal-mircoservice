import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from 'src/config/config.module';
import { AppConfigService } from 'src/config/config.service';

export default MongooseModule.forRootAsync({
  imports: [AppConfigModule],
  useFactory: async (configService: AppConfigService) => ({
    uri: configService.mongodbUri,
  }),
  inject: [AppConfigService],
});
