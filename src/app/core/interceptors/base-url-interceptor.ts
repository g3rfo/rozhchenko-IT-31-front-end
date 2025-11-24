import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'http://localhost:3000/';
  let updatedReq = req;

  // 1. Fix: prepend base URL only if URL is relative
  if (!req.url.startsWith('http')) {
    updatedReq = updatedReq.clone({
      url: baseUrl + req.url
    });
  }

  // 2. Add token if exists
  const token = localStorage.getItem('token');
  if (token) {
    updatedReq = updatedReq.clone({
      headers: updatedReq.headers.set('Authorization', `Bearer ${token}`)
    });
  }

  return next(updatedReq);
};
