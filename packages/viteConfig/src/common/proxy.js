/**
 * Create proxy for parsing .env.development proxy configuration
 * @param list
 */
export function createProxy(list = []) {
    const ret = {};
    for (const [prefix, target] of list) {
        const httpsRE = /^https:\/\//;
        const isHttps = httpsRE.test(target);
        // https://github.com/http-party/node-http-proxy#options
        ret[prefix] = {
            target: target,
            changeOrigin: true,
            ws: true,
            // https is require secure=false
            ...(isHttps ? { secure: false } : {})
        };
    }
    return ret;
}
