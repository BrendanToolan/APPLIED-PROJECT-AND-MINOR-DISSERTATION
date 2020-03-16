import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currUser = this.authenticationService.currUsrVal;
        if(currUser && currUser.token){
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currUser.token}`

                }
            });
        }
        return next.handle(request);
    }
}