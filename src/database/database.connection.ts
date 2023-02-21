import { Injectable } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';

@Injectable()
export class DatabaseConnection implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions {
        return {
            uri: 'mongodb+srv://mina:mina@cluster0.b0dgdxk.mongodb.net/?retryWrites=true&w=majority',
        };
    }
}