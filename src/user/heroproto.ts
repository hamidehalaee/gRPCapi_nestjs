import { Observable } from 'rxjs';
import { Metadata } from 'grpc';
 
export namespace hero {
    export interface HeroesService {
        findOne(data: HeroById, metadata?: Metadata): Observable<Hero>;
    }
    export interface HeroById {
        id?: number;
    }
    export interface Hero {
        id?: number;
        name?: string;
    }
}