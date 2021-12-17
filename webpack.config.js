const path = require('path');


// ---------------------------------------------------------------
const configObj = {
    context: path.resolve(__dirname,'src'),
    entry: {
        appendChild: {
            import: './appendChild.js',
            library: {
                name: 'appLib',
                type: 'window',
            }
        },
        main: {
            import: './index.js',
            dependOn: 'appendChild',
        },
    },
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        compareBeforeEmit: true,
    },
    module: {
        rules: [
            // {
            //     resource: (e) => {
            //         console.log(/\.(jpg|txt)$/i.test(e) ? 'YES' : "NO", e);
            //         return /\.(jpg)$/i.test(e);
            //     },
            //     type: 'asset/resource',
            // },
            // {
            //     test: [
            //         (e) => {
            //             return /\.(txt)$/i.test(e);
            //         },
            //         /\.txts$/i,
            //     ],
            //     resourceQuery: (quey) => {
            //         console.log('////', quey);
            //         return /iiiii/.test(quey);
            //     },
            //     type: 'asset/resource',
            // }
            {
                test: /\.(txt|jpg)$/i,
                type: 'asset/source',
            },
            {
                test: /\.(jpg|txt)$/i,
                resourceQuery: (q) => {
                    console.log('++QUERY++', q);
                    return /loadAsBase64/.test(q);
                },
                type: 'asset/inline',
            },
        ]
    }
    };
// ---------------------------------------------------------------


// EXPORTING VIA FUNCTION
function functionConfig (env, argv) {
    console.log('@ CLI_ENV_OBJECT_THROUGH --env', env);
    console.log('@ ARGV_OPTIONS_OBJECT_THROUGH_CLI', argv);
    console.log('@ CHECK_PROCESS_ENV', process.env.NODE_ENV);
    return configObj;
}

// EXPORTING VIA PROMISE
function promiseConfig (event) {
    console.log('@ PROMISE CONFIG EVENT', event);
    return new Promise(function(resolve, rejects) {
        setTimeout(() => {
            if (true) { resolve(configObj) }
            else {
                rejects({ data: 'Rejected' });
            }
        }, 5000);
    });
} 

// EXPORTING VIA MULTIPLE CONFIGS
const arrayofMultipleConfig = [
    {
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js',
        },
        name: 'PraveenK',
    },
    {
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, 'dist2'),
            filename: 'main.js',
        },
        name: 'KishoreK',
    }
]

// EXPORTING VIA MULTIPLE CONFIGS WITH PARALLELISM
// module.exports = arrayofMultipleConfig;
// module.exports.parallelism = 2;

module.exports = configObj