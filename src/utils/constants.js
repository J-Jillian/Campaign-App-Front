export const BASE_API_URL = 
process.env.NODE_ENV == 'production'
? 'https://make-the-difference.herokuapp.com'
:'http://localhost:5005'