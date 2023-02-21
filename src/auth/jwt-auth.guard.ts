import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        const isAuthEnabled = super.canActivate(context);
        if (!isAuthEnabled) {
            return false;
        }

        const request = context.switchToHttp().getRequest();
        return request.user;
    }
}
