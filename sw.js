/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/06/09/毛概复习综述/index.html","125adeb4dd305aac176bdbddf64fd017"],["/2024/10/07/14个常见回归模型/index.html","c6285199c60a53a741e8997e00b2e416"],["/2024/10/07/SQL快速入门/index.html","00da3db558647cac54edb95b63bbd8ff"],["/2024/10/09/建站那些事/index.html","dd9467f6830bb45c58053826402335cf"],["/2024/10/09/计量经济学课程笔记/index.html","b16ff8ad50dc7910323a76844e0ea4e5"],["/2024/10/09/雅思口语（一）  流程介绍/index.html","39ae80b32fa010d1b88fe2ed0d7afa9d"],["/2024/10/10/打开艺术之门：油画/index.html","c010cfccf953ff20f2cd3dd6ffcdb03d"],["/2024/10/10/证券投资学/index.html","230cc70440c877d1c3e9c5c361841e0b"],["/2024/10/12/个性心理学/index.html","bfceda021b500b69b1525d53aafe49f6"],["/2024/10/12/信号与认知系统/index.html","63854b3b135ea537d820113dabb6cd50"],["/2024/10/12/决策心理学/index.html","33f0a0fef5393be5dfcb8638d42fb029"],["/2024/10/12/社会心理学/index.html","188bfc1a2eb93db1ba2d5ee53f74ae54"],["/2024/10/12/结构方程模型/index.html","494acb0f161059b13c360979a8707d92"],["/2024/10/13/Records/index.html","27ef6ef701267b3359900be54ab34abd"],["/2024/10/13/毕设/index.html","7f77b6e330a6056927dbc7f59399e3f8"],["/2024/10/13/雅思听力part4/index.html","408cf4df0683b59562ebbeaadf02d109"],["/2024/10/15/大学生网络游戏成瘾人群对习惯系统的过度依赖及其干预研究/index.html","f98c86e9f8e23486fb6450d3688e5ff7"],["/2024/10/15/社交学习如何放大在线社交网络中的道德愤怒表达/index.html","d07f315ee1b237dd0289e282202ee3a8"],["/2024/10/15/谁伤害了谁重要吗-关于内群体与外群体伤害的道德判断的跨文化研究/index.html","087e114f6b6e8238907ad57bf8d81622"],["/2024/10/18/Graph/index.html","1486fff742eaa5d0eda93452193685e1"],["/2024/10/19/雅思口语表达积累（一）/index.html","c74340abf2bb3e9239b50ef996b2b5cf"],["/2024/10/20/雅思作文小作文介绍/index.html","2ec7eaadceed4d732444b571ab37bc4d"],["/404.html","548a8bee5f182d19e4181ec97abac361"],["/About/index.html","50b3c0a1f7288ea04275f4a7af8806f2"],["/Coursework/index.html","9d8726b79cbe2434105c0ba535595a71"],["/Finance/index.html","fec75ce81086010ad810a57d8897dc80"],["/ITP/index.html","a02e5e3946e3f565bec70880502d32b7"],["/Others/index.html","7c94a521270b03113c53a0aaafab6c74"],["/Projects/index.html","7541fd1a89d2efad6219a602e331a520"],["/Psychology/index.html","7fe28d2af5fb0125af0378b5f72f7d1e"],["/Statistics/index.html","db17b2a2fd220092453ad769ba8937fb"],["/archives/2024/06/index.html","25365c65dac50b29fad25dcfeaa51166"],["/archives/2024/10/index.html","3a09276c7b02247ef4d7c5a81fd11d54"],["/archives/2024/10/page/2/index.html","eed4382106f995406e91fcd56469e634"],["/archives/2024/10/page/3/index.html","84636e0937479cd1601e95c8aa2de946"],["/archives/2024/index.html","f199657d141fc83ee80665ccc762b29d"],["/archives/2024/page/2/index.html","1df9486b8f0b64e6c4cbb04698c32417"],["/archives/2024/page/3/index.html","ee8c06e3191e50f1fefcf71a6ae2a1df"],["/archives/index.html","9d8297ac179cd8ae97c8f42b80ab65cb"],["/archives/page/2/index.html","dfb2332b3017cdea652a12da14e91f31"],["/archives/page/3/index.html","ae6d8bacd4561e4693e5f9ca2a7fdc2b"],["/assets/build/styles.css","cc93fa1bf18a09d8ca8b9bbfba7d45d2"],["/assets/hbe.style.css","a964d46d46c8c0b52ab9543c51604688"],["/assets/odometer-theme-minimal.css","5e63b0172ec25f3f08e2ac8ba082e6b3"],["/categories/Academic-Papers/index.html","4752fc2276f8f13fd2126d5f5a8e8176"],["/categories/Computer-science/index.html","0e1156680b19c2f2a999c642a6fb6763"],["/categories/English/index.html","8f9b744487199d277033c56d4671b70a"],["/categories/Finance/index.html","31a76e787923641e280891b494a35331"],["/categories/Interests/index.html","2b83361d8f747793abc6b39b1b40484d"],["/categories/Others/index.html","8854e4d53d72a388b90a8b64804bf9e1"],["/categories/Psychology/index.html","bc289e838c787e6314664cc81b29b647"],["/categories/Statistics/index.html","2d9022e3f56dbe8705bc08706fb87e9b"],["/categories/index.html","85e031c4237c157186ee7e3e77ba3ad2"],["/css/common/animated.css","a1773c7601b699959d47eb0b896ea06a"],["/css/common/basic.css","98b77438b86bc631beef922a9998fff1"],["/css/common/codeblock/code-block.css","1953f9537db869600998203e80c4f175"],["/css/common/codeblock/code-theme.css","bd86f455f8625cd16bc884900d979cff"],["/css/common/codeblock/highlight.css","32c2e78face30100c2529440abc8b1a1"],["/css/common/codeblock/hljs-themes/dark/a11y-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/agate.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/atom-one-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/github-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/monokai-sublime.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/night-owl.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/nord.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/tokyo-night-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/vs2015.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/atom-one-light.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/github.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/markdown.css","ef20e3a5e97cfad500ac8b8cba11ce4d"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","d990350765aeaf595c4ddbfa8bb0286f"],["/css/hbe.style.css","d30e5ff0d4c137e9de87b7cf23838627"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","78ab3e2b14230de87c7887e69ba01d04"],["/css/layout/category-content.css","927c2516ef00b884170b03af455dd620"],["/css/layout/category-list.css","5388cddcf689a820e460a1797aae7176"],["/css/layout/home-content.css","0497204b7f344794647571cdfe0280cd"],["/css/layout/home-sidebar.css","02ff9a2ef340adbe62e2a93b4f80883d"],["/css/layout/page.css","cbd4f9cfc19755e52454ef4a6f7be6f2"],["/css/layout/tag-content.css","316bbf19bccfa5fe5b97d4c89e919964"],["/css/style.css","666d3c4b610274f0bf5ae7162f16a2ae"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","2f888ca613c09d22b977514e12aaa7b4"],["/fonts/Geist/GeistVF.ttf","8e8ae89cf243d3d79b7404594c4bc9fb"],["/fonts/Geist/GeistVF.woff","78e6fc13ea317b55ab0bd6dc4849c110"],["/fonts/Geist/GeistVF.woff2","0e46e732cced180e3a2c7285100f27d4"],["/fonts/Geist/geist.css","e03d09da9805c2f0e4c5d9ea9d448a9e"],["/fonts/GeistMono/GeistMonoVF.ttf","56335c91c8b94afe39dbdedea3edc556"],["/fonts/GeistMono/GeistMonoVF.woff","cbeb6d2d96eaa268b4b5beb0b46d9632"],["/fonts/GeistMono/GeistMonoVF.woff2","addf0d443087aa4b985f763c80182017"],["/fonts/GeistMono/geist-mono.css","99fefc4d4cff301e9fa6ab503c38ce7a"],["/images/DSCF0141.jpg","014de945b5693a0d18ec8354791358c1"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/images/starry.png","82be3fa14c560a9b6c3e98ccf9b52cf4"],["/index.html","453ce8e1791f2180bbaf2b15f774348a"],["/js/layouts/categoryList.js","de99183023e521f0986db119ce2ae4f8"],["/js/layouts/lazyload.js","21e8482d1e0af3b4786c1f363d020960"],["/js/layouts/navbarShrink.js","088ceee54fb07f2aff3d32759e46df40"],["/js/layouts/toc.js","29becdd88e44777e3b6f12213f536603"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","2eac15aaff54adbd5a2abb713238792a"],["/js/plugins/aplayer.js","82a4ce66eea50286def001db1a12612e"],["/js/plugins/hbe.js","5e89552f037fc6eba616f416fc49e9bc"],["/js/plugins/masonry.js","27decce5b33d41ede7b43d4a16db109b"],["/js/plugins/mermaid.js","3f960d2d18e650a557e1457a711103f9"],["/js/plugins/tabs.js","d99a7af3a95b48ec6b30d8e52a74d584"],["/js/plugins/typed.js","c12af1aa3fc9e4ea4da938bc659ae3a4"],["/js/tools/codeBlock.js","c0571e103f7bf1b94e032170a6455d45"],["/js/tools/imageViewer.js","34a502ee9b3362b4f034dc7333e56185"],["/js/tools/lightDarkSwitch.js","2c197adaf6a23eae8cd8c61ecc715708"],["/js/tools/localSearch.js","ee88bd1197c1f1984b6422adaf67693a"],["/js/tools/runtime.js","f77448b20ddc9cbeb5f2e8ff5468874e"],["/js/tools/scrollTopBottom.js","e70eadbc9171989390a5f9b04f043f3d"],["/js/tools/tocToggle.js","9a81c904ee1dd8b36dd2658fb7d2f105"],["/js/utils.js","8c8852b1f1469a66c0042a1ed08b15ab"],["/masonry/index.html","882fc1255e8f0bb3a8f9a8918f70f6ae"],["/page/2/index.html","25c2ad0566c08986848a3c9c3f88a49c"],["/page/3/index.html","8be084fafa6fe58b7ec1a9ceb3706a54"],["/sw-register.js","08afab7c414e9d4037301326d461adf4"],["/tags/Econometrics/index.html","8e02bf8019f2f9bffbaf632367d51dcc"],["/tags/Finance/index.html","d59260782e3dae4171dba1d796a1a361"],["/tags/IELS/index.html","b74f221b36f5df90d2c6f37f43094b56"],["/tags/Invest/index.html","8e40f2b5c2c7c62cd41731f88446f363"],["/tags/NLP/index.html","2db6f23faec5ce2fa2b0238324173d38"],["/tags/cognitive/index.html","97287c249dc13b5622e99b29c2137b1d"],["/tags/data-analysis/index.html","7b261beca5a9279781104e08c9adad1e"],["/tags/decision/index.html","dc892863598f248e4ceb841e74f0b74d"],["/tags/gallery/index.html","7385c7d8e3f336860cc79aa75430fd6b"],["/tags/index.html","0d930816982953af99447a61a5a1a386"],["/tags/listening/index.html","114d08bb21c23d61321cfaea12d24f3c"],["/tags/marketing/index.html","8bbc7f4cd18617fc30728dd07c0dbfad"],["/tags/oil-painting/index.html","bf70dcf085652dec443dec92a5e6a6f2"],["/tags/personality/index.html","6fe9bee944e628299add0f6aedf35197"],["/tags/propylene/index.html","5dcbba8c87414b36e111205e0f69aac0"],["/tags/psychology/index.html","2ca35ed10213551ec40d8daa0961e221"],["/tags/psycology/index.html","996b9140ab13876496eedc9031d1e835"],["/tags/regression/index.html","f691e3919491a9c83d4c149536115b9b"],["/tags/signal/index.html","6097a67d68b9d6536b28ca8f94661ce6"],["/tags/sociology/index.html","918b393290a51a55e883b4dbb24bab7f"],["/tags/speaking/index.html","110dfeeb7814a80a04a384bc891e0876"],["/tags/sql/index.html","513a34b6ab0572bc7fd6d2dbe3b3c76d"],["/tags/stockbroking/index.html","55cc549ecd08060f5a2d58ffe5b3a28d"],["/tags/structure-model/index.html","7ab5fd714f4c6edf42ee0c7b9303c539"],["/tags/website/index.html","ed084140e96d8cb2b7b2c9f503331050"],["/tags/writing/index.html","f1d4a28241e6b1aa37f8cd0d1e5b96c6"],["/tags/思政/index.html","e3e8b02ac08ab2481a113a39a5f35661"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
