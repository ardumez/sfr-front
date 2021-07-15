import http from '../tools/http';

const PREFIX = '/operateur';

const fetchOperateurs = (params) => http.get(PREFIX + "/all");

const operateurAPI = {
  fetchOperateurs
};

export default operateurAPI;