/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import redisClient from './utils/redis';

(async () => {
    console.log(redisClient.isAlive());
    console.log(await redisClient.get('myKey'));
    await redisClient.set('myKey', 12, 5);
    console.log(await redisClient.get('myKey'));

    setTimeout(async () => {
        console.log(await redisClient.get('myKey'));
    }, 1000*10)
})();