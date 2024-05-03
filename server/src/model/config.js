module.exports = {
    database: {
        name: 'notes',
        user: 'root',
        password: 'password',
        host: 'server-database',
        dialect: process.env.APP_ENV === 'test' ? 'sqlite' : 'mysql',
        dialectOptions : process.env.APP_ENV === 'test' ? {} : {
            useUTC:false,
            dateStrings: true,
            typeCast: true,
        },
        timezone : process.env.APP_ENV === 'test' ? '+00:00' : '+01:00',
    },
};
