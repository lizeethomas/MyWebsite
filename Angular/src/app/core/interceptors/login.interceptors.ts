import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders()
            .append('Authorization',`Bearer ${localStorage.getItem("token")}`)
        const modifiedReq = req.clone({ headers });
        return next.handle(modifiedReq);
    }

}