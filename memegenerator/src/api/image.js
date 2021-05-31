const BASE_URL = process.env.VUE_APP_BASE_URL;
export default axios => ({
    getAll() {
        return axios.get(`${BASE_URL}/get_memes`).then(
            res=> {
                return res;
            },
            err => {
                return err;
            }
        );
    },
});