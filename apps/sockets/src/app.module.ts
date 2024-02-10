import { CommonConfigModule, DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        CommonConfigModule,
        TypeOrmModule.forFeature([]),
        DatabaseModule
    ]
})
export class AppModule {

}