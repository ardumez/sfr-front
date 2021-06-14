import http from '../../tools/http';

const PREFIX = '/telephones-projets';

export const createTelephoneProjet = (params) => http.post(PREFIX, params);