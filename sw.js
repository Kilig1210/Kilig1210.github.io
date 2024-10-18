/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/06/09/毛概复习综述/index.html","1c509c19c271740550c729106f955e5b"],["/2024/10/07/14个常见回归模型/index.html","f85ad52e1c68923c62817d6e91270d1c"],["/2024/10/07/SQL快速入门/index.html","2e5edfd29f07d3e8904da665e4e0c3bc"],["/2024/10/09/建站那些事/index.html","b84a8441b28e5acbd292394c0c98cb6d"],["/2024/10/09/计量经济学课程笔记/index.html","65a405b22052b482911cb53e6cf9fb89"],["/2024/10/09/雅思口语（一）  流程介绍/index.html","cdd90016efae1890a22886c2e5f49495"],["/2024/10/10/打开艺术之门：油画/index.html","db25093ee1c9a1eb6d7d40233a37105b"],["/2024/10/10/证券投资学/index.html","8eec8aeca3ce1eee3db57c4a069ba975"],["/2024/10/12/个性心理学/index.html","11aee2029f10b0c63834b71109496127"],["/2024/10/12/信号与认知系统/index.html","414f43642fd682fe70e0b95a4a7c180c"],["/2024/10/12/决策心理学/index.html","15b0e3d2596463a450c8e7fc7b5bcb3d"],["/2024/10/12/社会心理学/index.html","08154715bf8aae2a65457930ac05f308"],["/2024/10/12/结构方程模型/index.html","6cecf6332762b5c954bfa4f621386220"],["/2024/10/13/Records/index.html","d5139bfcb45976a8c0e9fe28f5f3f3d4"],["/2024/10/13/毕设/index.html","e6ee1927a9f691867f16f69d2e9e2eb1"],["/2024/10/13/雅思听力part4/index.html","0f1dc3809df4d5ec9c7d196973c8df5b"],["/2024/10/15/大学生网络游戏成瘾人群对习惯系统的过度依赖及其干预研究/index.html","6986b3e23ddd545b238e1f6f53905d74"],["/2024/10/15/社交学习如何放大在线社交网络中的道德愤怒表达/index.html","a9b04c8b5cd6ed8d14e72a4607462343"],["/2024/10/15/谁伤害了谁重要吗-关于内群体与外群体伤害的道德判断的跨文化研究/index.html","6a285a08e9dce533a7ccf0b72d9387db"],["/2024/10/18/Graph/index.html","3663810516980f0fdf277a4bb556fbf2"],["/404.html","544a9dbef262fdb9263d954b9c502a05"],["/About/index.html","971f4dc50f5443c8f6d4a2d84597d2a9"],["/Coursework/index.html","7716816d9500d7ca9e8505839f299ffb"],["/Finance/index.html","5ee0707cf75b21abea84419c31602d75"],["/ITP/index.html","3e5ceeee2e1a0fec45f446c1360ddbcd"],["/Others/index.html","5ef4c45be2f11b14a201fb40567f8fec"],["/Projects/index.html","8633c76f03a9c73609b071842668babe"],["/Psychology/index.html","4889a6ace93cbf479a10aca31b9f202e"],["/Statistics/index.html","2250297db5cab71dafec8597a83d606e"],["/archives/2024/06/index.html","756b7af97aec712a4eda8d0a4c5ddf38"],["/archives/2024/10/index.html","0307ca4e1883bc59ea904b1b8b418e8d"],["/archives/2024/10/page/2/index.html","f49b0aefacb22ec4a360c2f7dcefd47a"],["/archives/2024/index.html","edd9949eb661d545fa6c81e12f4614d0"],["/archives/2024/page/2/index.html","778bbbed95107b1c52494a4dfdfd082b"],["/archives/index.html","9b2b9bb9d3e4cdf3dd69287aab74abd9"],["/archives/page/2/index.html","9affb761da4ce886f5ef448cf35ee2a1"],["/assets/build/styles.css","cc93fa1bf18a09d8ca8b9bbfba7d45d2"],["/assets/hbe.style.css","a964d46d46c8c0b52ab9543c51604688"],["/assets/odometer-theme-minimal.css","5e63b0172ec25f3f08e2ac8ba082e6b3"],["/categories/Academic-Papers/index.html","39b135937b0dda4b3d7dd5c24f39c35c"],["/categories/Computer-science/index.html","0b53d1a68230861cf1f93afe4e54cf2a"],["/categories/English/index.html","c7b15196a4e2a430f31348c354a1f0a1"],["/categories/Finance/index.html","d667e20221643cbbf17414efae09d1a2"],["/categories/Interests/index.html","21a4ce20e35c68961bbd656cc73b16c5"],["/categories/Others/index.html","8b0d3164a438a2a1050317091732a3ef"],["/categories/Psychology/index.html","c7bb310e516072e400ec7ef9b5dc3594"],["/categories/Statistics/index.html","141df273ec031d094835d7512b81b157"],["/categories/index.html","9e68cf318e463e6cd7bb3e1e9fe5b063"],["/css/common/animated.css","a1773c7601b699959d47eb0b896ea06a"],["/css/common/basic.css","98b77438b86bc631beef922a9998fff1"],["/css/common/codeblock/code-block.css","1953f9537db869600998203e80c4f175"],["/css/common/codeblock/code-theme.css","bd86f455f8625cd16bc884900d979cff"],["/css/common/codeblock/highlight.css","32c2e78face30100c2529440abc8b1a1"],["/css/common/codeblock/hljs-themes/dark/a11y-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/agate.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/atom-one-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/github-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/monokai-sublime.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/night-owl.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/nord.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/tokyo-night-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/vs2015.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/atom-one-light.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/github.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/markdown.css","ef20e3a5e97cfad500ac8b8cba11ce4d"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","d990350765aeaf595c4ddbfa8bb0286f"],["/css/hbe.style.css","d30e5ff0d4c137e9de87b7cf23838627"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","78ab3e2b14230de87c7887e69ba01d04"],["/css/layout/category-content.css","927c2516ef00b884170b03af455dd620"],["/css/layout/category-list.css","5388cddcf689a820e460a1797aae7176"],["/css/layout/home-content.css","0497204b7f344794647571cdfe0280cd"],["/css/layout/home-sidebar.css","02ff9a2ef340adbe62e2a93b4f80883d"],["/css/layout/page.css","cbd4f9cfc19755e52454ef4a6f7be6f2"],["/css/layout/tag-content.css","316bbf19bccfa5fe5b97d4c89e919964"],["/css/style.css","666d3c4b610274f0bf5ae7162f16a2ae"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","2f888ca613c09d22b977514e12aaa7b4"],["/fonts/Geist/GeistVF.ttf","8e8ae89cf243d3d79b7404594c4bc9fb"],["/fonts/Geist/GeistVF.woff","78e6fc13ea317b55ab0bd6dc4849c110"],["/fonts/Geist/GeistVF.woff2","0e46e732cced180e3a2c7285100f27d4"],["/fonts/Geist/geist.css","e03d09da9805c2f0e4c5d9ea9d448a9e"],["/fonts/GeistMono/GeistMonoVF.ttf","56335c91c8b94afe39dbdedea3edc556"],["/fonts/GeistMono/GeistMonoVF.woff","cbeb6d2d96eaa268b4b5beb0b46d9632"],["/fonts/GeistMono/GeistMonoVF.woff2","addf0d443087aa4b985f763c80182017"],["/fonts/GeistMono/geist-mono.css","99fefc4d4cff301e9fa6ab503c38ce7a"],["/images/DSCF0141.jpg","014de945b5693a0d18ec8354791358c1"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/images/starry.png","82be3fa14c560a9b6c3e98ccf9b52cf4"],["/index.html","1f7658ea04c952cb55ccd857a82c6882"],["/js/layouts/categoryList.js","de99183023e521f0986db119ce2ae4f8"],["/js/layouts/lazyload.js","21e8482d1e0af3b4786c1f363d020960"],["/js/layouts/navbarShrink.js","088ceee54fb07f2aff3d32759e46df40"],["/js/layouts/toc.js","29becdd88e44777e3b6f12213f536603"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","2eac15aaff54adbd5a2abb713238792a"],["/js/plugins/aplayer.js","82a4ce66eea50286def001db1a12612e"],["/js/plugins/hbe.js","5e89552f037fc6eba616f416fc49e9bc"],["/js/plugins/masonry.js","27decce5b33d41ede7b43d4a16db109b"],["/js/plugins/mermaid.js","3f960d2d18e650a557e1457a711103f9"],["/js/plugins/tabs.js","d99a7af3a95b48ec6b30d8e52a74d584"],["/js/plugins/typed.js","c12af1aa3fc9e4ea4da938bc659ae3a4"],["/js/tools/codeBlock.js","c0571e103f7bf1b94e032170a6455d45"],["/js/tools/imageViewer.js","34a502ee9b3362b4f034dc7333e56185"],["/js/tools/lightDarkSwitch.js","2c197adaf6a23eae8cd8c61ecc715708"],["/js/tools/localSearch.js","ee88bd1197c1f1984b6422adaf67693a"],["/js/tools/runtime.js","f77448b20ddc9cbeb5f2e8ff5468874e"],["/js/tools/scrollTopBottom.js","e70eadbc9171989390a5f9b04f043f3d"],["/js/tools/tocToggle.js","9a81c904ee1dd8b36dd2658fb7d2f105"],["/js/utils.js","8c8852b1f1469a66c0042a1ed08b15ab"],["/masonry/index.html","8f85ad8754bd64c49f323adbc12a4dfa"],["/page/2/index.html","6ed6820cde60b19ec559140ab7a7068c"],["/sw-register.js","740b06b90457fd249a57c7dbdd01f043"],["/tags/Econometrics/index.html","8f7e29abd6ae97617e4b38a839615951"],["/tags/Finance/index.html","843502f0aaecab2ff2b57b415df97437"],["/tags/IELS/index.html","a96cfa27e62c56deb6bc2855e01d5caa"],["/tags/Invest/index.html","02592b5646fb8ffa04410fcfdcb2ad45"],["/tags/NLP/index.html","983fc6f604783db3e5d37b64849f0afb"],["/tags/cognitive/index.html","b8d8e4fd051bfb34acc199546884df54"],["/tags/data-analysis/index.html","b1110d38b8bf7bbae88d61177392d485"],["/tags/decision/index.html","a6b6ee9fa5ab9710ada7f72084e273a8"],["/tags/gallery/index.html","1a68399cdef35353b9d007647742278b"],["/tags/index.html","de26accd872c283bd2ce8f723c90ad09"],["/tags/listening/index.html","e8cf0e3c5d8b56ed0976fd2a4260c481"],["/tags/marketing/index.html","51c6c8ec247128cadd543dd308df4626"],["/tags/oil-painting/index.html","6bb1f6144cdc0cf8f8c0ac8e4850b889"],["/tags/personality/index.html","f66b35ee6fe951315bd65c8882851dc4"],["/tags/propylene/index.html","fcb2ac23f0b86cc9f545b39989bc495c"],["/tags/psychology/index.html","e5c9aa5df006ee7d87309e83db033e11"],["/tags/psycology/index.html","2a9bb40ead6bdb264a276c6078d90c00"],["/tags/regression/index.html","979b765b190f24ee4c1f74cb644ee8c8"],["/tags/signal/index.html","5d5876c52c68cd34ece7ec32dbeb2e4e"],["/tags/sociology/index.html","ae9bfde3f852b3daa2565a83b96a13de"],["/tags/speaking/index.html","010affe8db2e3c881243c4bf8fcedd7f"],["/tags/sql/index.html","6016b83ef4e0e6412a1b269bc73d5ea2"],["/tags/stockbroking/index.html","226ce1fac145b2a904d44def75466803"],["/tags/structure-model/index.html","b96040749bd0098ba8367bfa8b165e33"],["/tags/website/index.html","2ef9c285f347f914aa395dc53aae03fd"],["/tags/writing/index.html","df783d305134e923a1a126bc57b9f7c8"],["/tags/思政/index.html","d9010bb3903058262c40023994f92298"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
