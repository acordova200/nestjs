import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { IUser } from 'src/common/interfaces/user.interface';
import { UserMSG } from './../common/constants';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';

@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/user')
export class UserController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  @Post()
  create(@Body() userDTO: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.CREATE, userDTO);
  }

  @Get()
  findAll(): Observable<IUser[]> {
    return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() userDTO: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.UPDATE, { id, userDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(UserMSG.DELETE, id);
  }

  @Get('passenger/user-test')
  getPassengerFromUser(): Observable<any> {
    return this._clientProxyUser.send('GET_PASSENGER_FROM_USER', {
      id: '5f9f1b9b9c9d1c1b8c8c0c0c',
      name: 'test',
    });
  }
}
