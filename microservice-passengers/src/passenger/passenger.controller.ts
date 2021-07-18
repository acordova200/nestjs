import { Body, Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassengerMSG } from './../common/constants';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';

@Controller()
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @MessagePattern(PassengerMSG.CREATE)
  create(@Body() passengerDTO: PassengerDTO) {
    return this.passengerService.create(passengerDTO);
  }

  @MessagePattern(PassengerMSG.FIND_ALL)
  findAll() {
    return this.passengerService.findAll();
  }

  @MessagePattern(PassengerMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.passengerService.findOne(id);
  }

  @MessagePattern(PassengerMSG.UPDATE)
  update(@Payload() payload) {
    return this.passengerService.update(payload.id, payload.passengerDTO);
  }

  @MessagePattern(PassengerMSG.DELETE)
  delete(@Payload() id: string) {
    return this.passengerService.delete(id);
  }

  @MessagePattern('GET_PASSENGER_FROM_USER')
  getPassengerFromUser(@Payload() payload) {
    console.log({
      payload,
    });
    return {
      payload,
      test: 'this was a communication between microservices',
    };
  }
}
