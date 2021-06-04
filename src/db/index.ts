import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from 'src/config/config.module';
import { AppConfigService } from 'src/config/config.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./config');

export default TypeOrmModule.forRootAsync({
  imports: [AppConfigModule],
  useFactory: (configService: AppConfigService) => ({
    ...config,
    url: configService.mongodbUri,
    synchronize: configService.isDevelopment,
  }),
  inject: [AppConfigService],
});
