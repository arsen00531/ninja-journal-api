import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                TYPEORM_URL: Joi.string().required()
            }),
            envFilePath: './apps/sockets/.env'
        }),
    ]
})
export class CommonConfigModule {

}