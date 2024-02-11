import { IsNotEmpty, IsString } from "class-validator";

export class MessageDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    text: string
}