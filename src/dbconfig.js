import 'dotenv/config'

const config = {
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    server : 'localhost',
    database : process.env.DB_DATABASE,
    options : {
        trusterverCertificate : true,
        trustedConnection     : true
    }
}
export default config;