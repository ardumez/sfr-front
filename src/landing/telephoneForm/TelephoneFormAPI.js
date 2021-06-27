import http from '../../tools/http';

const PREFIX = '/projet-telephone';

export const createTelephoneProjet = (params) => http.post(PREFIX + "/step1", params);