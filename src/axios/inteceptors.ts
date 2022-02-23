import instace from "./instance";
import { loadLeaders, message } from "../store/form-service/actions";
import { Leader } from "../core/types";

export default {
  setupInterceptors: (store: any) => {
    instace.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (
          error.response.status === 500 &&
          error.config.url === "starting-state"
        ) {
          store.dispatch(loadLeaders());
        }
        console.log({ error });

        return Promise.reject(error);
      }
    );
  },
};
