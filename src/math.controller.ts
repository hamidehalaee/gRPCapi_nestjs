import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TaskController{
    @MessagePattern('tasks')
    accumulate(data: string[]): string { //accumulate is message handler for 'tasks'
        return (data || []).reduce((a, b) => a + b);
    }
}