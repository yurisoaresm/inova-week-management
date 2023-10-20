import { Module } from '@nestjs/common';
import { InMemoryAttendancesRepository } from '@test/repositories/in-memory.attendances.repository';
import { InMemoryEventsRepository } from '@test/repositories/in-memory.events.repository';
import { InMemoryReviewCriteriasRepository } from '@test/repositories/in-memory.review-criterias';
import { InMemoryRolesRepository } from '@test/repositories/in-memory.roles.repository';
import { InMemoryThemesRepository } from '@test/repositories/in-memory.themes.repository';
import { InMemoryUsersRepository } from '@test/repositories/in-memory.users.repository';

import {
  AttendancesRepository,
  EventsRepository,
  RolesRepository,
  ThemesRepository,
  UsersRepository,
  ReviewsCriteriasRepository,
} from '@/application/repositories';

@Module({
  providers: [
    {
      provide: RolesRepository,
      useClass: InMemoryRolesRepository,
    },
    {
      provide: UsersRepository,
      useClass: InMemoryUsersRepository,
    },
    {
      provide: ThemesRepository,
      useClass: InMemoryThemesRepository,
    },
    {
      provide: EventsRepository,
      useClass: InMemoryEventsRepository,
    },
    {
      provide: AttendancesRepository,
      useClass: InMemoryAttendancesRepository,
    },
    {
      provide: ReviewsCriteriasRepository,
      useClass: InMemoryReviewCriteriasRepository,
    },
  ],
  exports: [
    RolesRepository,
    UsersRepository,
    ThemesRepository,
    EventsRepository,
    AttendancesRepository,
    ReviewsCriteriasRepository,
  ],
})
export class DatabaseModule {}
