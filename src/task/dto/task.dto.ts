import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
