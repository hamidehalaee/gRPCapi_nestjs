import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { hero } from './heroproto';
import { Observable } from 'rxjs';

type HeroById = hero.HeroById;
//'HeroesService'corresponding to the
// HeroesService service definition in hero.proto.
@Controller()
export class HeroesController implements hero.HeroesService {
    @GrpcMethod('HeroesService', 'FindOne')
    findOne(data: HeroById, meta: Metadata): Observable<hero.Hero> {
      const items = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe' },
      ];
   
      return items.find(({ id }) => id === data.id);
    }
  }