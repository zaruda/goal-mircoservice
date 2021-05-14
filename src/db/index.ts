import { MongooseModule } from '@nestjs/mongoose';

const databaseModule = MongooseModule.forRoot('mongodb://localhost/nest');

export default databaseModule;
