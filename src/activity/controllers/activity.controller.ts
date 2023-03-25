import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Patch } from "@nestjs/common";
import { ActivityService } from "../services/activity.service";
import { CreateActivityDto } from "../dto/create-activity.dto";
import { UpdateActivityDto } from "../dto/update-activity.dto";

@Controller("activity-groups")
export class ActivityController{
    constructor(
        private readonly activityService: ActivityService
    ){}

    @Get()
    getAllActivity(){
        return this.activityService.getAllActivity()
    }

    @Post()
    createActivity(@Body() data: CreateActivityDto){
        return this.activityService.createActivity(data)
    }

    @Get(":id")
    getOneActivity(@Param("id", ParseIntPipe) id: number){
        return this.activityService.getOneActivity(id)
    }

    @Delete(":id")
    deleteAcivity(@Param("id", ParseIntPipe) id: number){
        return this.activityService.deleteActivity(id)
    }

    @Patch(":id")
    updateActivity(
        @Param("id", ParseIntPipe) id: number,
        @Body() data: UpdateActivityDto
    ){
        return this.activityService.updateActivity(id, data)
    }
}