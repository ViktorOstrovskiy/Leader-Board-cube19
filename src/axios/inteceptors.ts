import instace from "./instance";
import { loadLeaders } from "../store/form-service/actions";

export default {
  setupInterceptors: (store: any) => {
    instace.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 500) {
          store.dispatch(loadLeaders());
        }
        return Promise.reject(error);
      }
    );
  },
};
