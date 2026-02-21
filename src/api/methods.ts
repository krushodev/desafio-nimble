import type { AxiosRequestConfig } from 'axios';
import { request } from './request';
import { api } from './index';

export const get = <T>(url: string, config?: AxiosRequestConfig) => request<T>(api.get(url, config));

export const post = <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => request<T>(api.post(url, data, config));

export const put = <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => request<T>(api.put(url, data, config));

export const patch = <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => request<T>(api.patch(url, data, config));

export const del = <T>(url: string, config?: AxiosRequestConfig) => request<T>(api.delete(url, config));
