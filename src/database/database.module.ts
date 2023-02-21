import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConnection } from './database.connection';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://mina:mina@cluster0.b0dgdxk.mongodb.net/?retryWrites=true&w=majority',
        ),
    ],
    providers: [DatabaseConnection],
    exports: [DatabaseConnection],
})
export class DatabaseModule { }
