import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { GetAllActivity } from "../responses/get-all-activity.response";
import { CreateActivityDto } from "../dto/create-activity.dto";
import { CreateActivityResponse } from "../responses/create-activity.response";
import { GetOneActivityResponse } from "../responses/get-one-activity.response";
import { DeleteActivityResponse } from "../responses/delete-activity.response";
import { UpdateActivityDto } from "../dto/update-activity.dto";
import { UpdateActivityResponse } from "../responses/update-activity.response";

@Injectable()
export class ActivityService{
    constructor(
        private prismaService: PrismaService
    ){}

    async getAllActivity(): Promise<GetAllActivity>{
        try{
            const activities = await this.prismaService.activities.findMany({
                orderBy: {
                    updated_at: "desc"
                }
            })
            return {
                status: "Success",
                message: "Success",
                data: activities
            }
        }catch(e){

        }
        
    }

    async getOneActivity(id: number): Promise<GetOneActivityResponse>{
        try{
            const activity = await this.prismaService.activities.findFirstOrThrow({
                
                where: {
                    id: id
                }
            })
            return {
                status: "Success",
                message: "Success",
                data: activity
            }
        }catch(e){
            throw new NotFoundException({
                "status": "Not Found",
                "message": `Activity with ID ${id} Not Found`,
                "data": {}
            })
        }
    }

    async createActivity(data: CreateActivityDto): Promise<CreateActivityResponse>{
        try{
            const activity = await this.prismaService.activities.create({
                data: data
            })

            return {
                status: "Success",
                message: "Success",
                data: activity
            }
            
        }catch(e){

        }
    }

    async deleteActivity(id: number): Promise<DeleteActivityResponse>{
        try{
            await this.prismaService.activities.delete({
                
                where: {
                    id: id
                }
            })
            return {
                status: "Success",
                message: "Success",
                data: {}
            }
        }catch(e){
            throw new NotFoundException({
                "status": "Not Found",
                "message": `Activity with ID ${id} Not Found`,
                "data": {}
            })
        }
    }

    async updateActivity(id: number, data: UpdateActivityDto): Promise<UpdateActivityResponse>{
        try{
            const activity = await this.prismaService.activities.update({
                where: {
                    id: id
                },
                data: data
            })

            return {
                status: "Success",
                message: "Success",
                data: activity
            }
        }catch(e){
            throw new NotFoundException({
                "status": "Not Found",
                "message": `Activity with ID ${id} Not Found`,
                "data": {}
            })
        }
    }
}