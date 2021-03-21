import { Injectable } from '@nestjs/common';
import { hero } from './heroproto';
 
@Injectable()
export class AppService implements OnModuleInit {
  private heroesService: hero.HeroesService;
 
  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}
 
  onModuleInit() {
    this.heroesService = this.client.getService<hero.HeroesService>('HeroesService');
  }
 
  getHero(): Observable<string> {
    return this.heroesService.findOne({ id: 1 });
  }
}