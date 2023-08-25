import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';


@Module({
    imports: [
        AuthModule,
        UserModule,
        NoteModule,
        PrismaModule
    ],
    providers: [PrismaService],
})

export class AppModule { }
