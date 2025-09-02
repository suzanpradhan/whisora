import * as dotenv from 'dotenv';
dotenv.config();

export const appConfig = {
    appName: process.env.APP_NAME || 'Whisora Backend',
    port: process.env.PORT || 3000,
};