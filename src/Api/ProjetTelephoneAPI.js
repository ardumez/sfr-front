import http from '../tools/http';

const PREFIX = '/projet-telephone';

export const doStep1 = (params) => http.post(PREFIX + "/step1", params);

const projetTelephoneAPI = {
  doStep1
};

export default projetTelephoneAPI;