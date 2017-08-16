import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
@Injectable()
export class ProcessHTTPMsgService {
  constructor() {}

  public extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
