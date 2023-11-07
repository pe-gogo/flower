import request from '@/libs/request';

export default function () {
  return request<any>({
    method: 'get',
    url: '/api',
  });
}

export function getNotices() {
  return request<any>({
    method: 'get',
    url: '/system/notice/list',
  });
}