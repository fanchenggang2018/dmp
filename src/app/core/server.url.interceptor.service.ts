import { environment } from './../../environments/environment';
import {Interceptor,InterceptedResponse,InterceptedRequest} from 'ng2-interceptors';

export class ServerURLInterceptor implements Interceptor  {

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    // 修改请求
    
    request.url = environment.baseURL+request.url;
    return request; 
  }
  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
      return response;
  }


}
