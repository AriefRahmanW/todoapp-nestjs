import {
    IsEmail,
    IsString,
    IsNotEmpty
} from "class-validator"

export class CreateActivityDto{
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    title: string
}