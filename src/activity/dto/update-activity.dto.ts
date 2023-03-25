import {
    IsString,
    IsNotEmpty
} from "class-validator"

export class UpdateActivityDto{
    @IsString()
    @IsNotEmpty()
    title: string
}