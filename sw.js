/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/06/09/毛概复习综述/index.html","52deabd10879bcdff1a5e59e2d39a552"],["/2024/10/07/14个常见回归模型/index.html","d7c7d6c2ac93ed49311aabc50da29b01"],["/2024/10/07/SQL快速入门/index.html","0d2bfa46b2d88f95fb0454b54472e21a"],["/2024/10/09/建站那些事/index.html","617df3556a133cd0ef7aa352d87ab46b"],["/2024/10/09/计量经济学课程笔记/index.html","0a49e0d16151cf687d534ebad3950418"],["/2024/10/09/雅思口语（一）  流程介绍/index.html","067deb5ac34e6587721b8950d78596df"],["/2024/10/10/打开艺术之门：油画/index.html","b882777c84e43780d7998af49a006535"],["/2024/10/10/证券投资学/index.html","1a56e06dac79c28a7a06e337e9481db6"],["/2024/10/12/个性心理学/index.html","c90028d122e60df2358e369f5d2b6a54"],["/2024/10/12/信号与认知系统/index.html","52939f1bd0fca6b0f9908681959b822b"],["/2024/10/12/决策心理学/index.html","606c6d648435c1cb5f4f3ca4aac9d73d"],["/2024/10/12/社会心理学/index.html","a50c9674d119297835621f262a5b3e17"],["/2024/10/12/结构方程模型/index.html","f08e8c59378270fce895f03cdd431d72"],["/2024/10/13/Records/index.html","e194528e3ae00dbb33d36b116ad6770f"],["/2024/10/13/毕设/index.html","231ce51661a19649c446bcc0bfa167dc"],["/2024/10/13/雅思听力part4/index.html","7e022fead15737a3e018cd6a00186239"],["/2024/10/15/大学生网络游戏成瘾人群对习惯系统的过度依赖及其干预研究/index.html","ff03c8deb34a68c673c8265f3bdd65ae"],["/2024/10/15/社交学习如何放大在线社交网络中的道德愤怒表达/index.html","1cd459868bbd609d30a7f739241d4270"],["/2024/10/15/谁伤害了谁重要吗-关于内群体与外群体伤害的道德判断的跨文化研究/index.html","9045126a156f58c59c6217ce3aea776b"],["/404.html","0f165ee1c95be8f2348fcb777c47be94"],["/About/index.html","907620124fd9b88113e060c1f9a374ae"],["/Coursework/index.html","e2271b5d2bb48f07e152cf80da95ab7c"],["/Finance/index.html","f8acc44aa2fce7fc831d33bc8fe09f71"],["/ITP/index.html","328ab0fdc730181881e00b5894f3159d"],["/Others/index.html","bf0f440d21bce9be2bed00e026f182bc"],["/Projects/index.html","b528adcc282f52bc69e713353f3b0da1"],["/Psychology/index.html","6ef2d45ff3d4295a6f3ff9c7e09882e3"],["/Statistics/index.html","822102e7816209c4da198227371f389f"],["/archives/2024/06/index.html","c135ad6badcc25e2443c2b4adc8ed15d"],["/archives/2024/10/index.html","f40b73fe51c42b49aec308460e5c3200"],["/archives/2024/10/page/2/index.html","192a0ef4e893cf752c0f16a383124c36"],["/archives/2024/index.html","8163b11497a3effd3522329780eb900c"],["/archives/2024/page/2/index.html","6b1292b2d17687baff590fca784eaf63"],["/archives/index.html","bc78fea8318bfd722c638967eaf4f72e"],["/archives/page/2/index.html","3ca50a4d308e98904cc981546a67c52d"],["/assets/build/styles.css","cc93fa1bf18a09d8ca8b9bbfba7d45d2"],["/assets/hbe.style.css","a964d46d46c8c0b52ab9543c51604688"],["/assets/odometer-theme-minimal.css","5e63b0172ec25f3f08e2ac8ba082e6b3"],["/categories/Academic-Papers/index.html","fea0868983d639ab55e65d2366b9399a"],["/categories/Computer-science/index.html","67a22f295971487e3e11e7c520379282"],["/categories/English/index.html","8dbc3f2c2a73a7165dd2878117a31c6d"],["/categories/Finance/index.html","05f5a1002b80ec235b83f482ecf9e000"],["/categories/Interests/index.html","a87f0108a2126ed00e99951560663b69"],["/categories/Others/index.html","9e7c1612d2fdb564e3118f000a53d8bd"],["/categories/Psychology/index.html","6b833a518d4064f9f56480a91c26f5fb"],["/categories/Statistics/index.html","33abebf0236ac888659ad3a63ea180bb"],["/categories/index.html","8a218207ef2d996fd7e0e0f5236d78ca"],["/css/common/animated.css","a1773c7601b699959d47eb0b896ea06a"],["/css/common/basic.css","98b77438b86bc631beef922a9998fff1"],["/css/common/codeblock/code-block.css","1953f9537db869600998203e80c4f175"],["/css/common/codeblock/code-theme.css","bd86f455f8625cd16bc884900d979cff"],["/css/common/codeblock/highlight.css","32c2e78face30100c2529440abc8b1a1"],["/css/common/codeblock/hljs-themes/dark/a11y-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/agate.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/atom-one-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/github-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/monokai-sublime.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/night-owl.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/nord.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/tokyo-night-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/dark/vs2015.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/atom-one-light.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/default.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/codeblock/hljs-themes/light/github.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/markdown.css","ef20e3a5e97cfad500ac8b8cba11ce4d"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","d990350765aeaf595c4ddbfa8bb0286f"],["/css/hbe.style.css","d30e5ff0d4c137e9de87b7cf23838627"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","78ab3e2b14230de87c7887e69ba01d04"],["/css/layout/category-content.css","927c2516ef00b884170b03af455dd620"],["/css/layout/category-list.css","5388cddcf689a820e460a1797aae7176"],["/css/layout/home-content.css","0497204b7f344794647571cdfe0280cd"],["/css/layout/home-sidebar.css","02ff9a2ef340adbe62e2a93b4f80883d"],["/css/layout/page.css","cbd4f9cfc19755e52454ef4a6f7be6f2"],["/css/layout/tag-content.css","316bbf19bccfa5fe5b97d4c89e919964"],["/css/style.css","666d3c4b610274f0bf5ae7162f16a2ae"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","2f888ca613c09d22b977514e12aaa7b4"],["/fonts/Geist/GeistVF.ttf","8e8ae89cf243d3d79b7404594c4bc9fb"],["/fonts/Geist/GeistVF.woff","78e6fc13ea317b55ab0bd6dc4849c110"],["/fonts/Geist/GeistVF.woff2","0e46e732cced180e3a2c7285100f27d4"],["/fonts/Geist/geist.css","e03d09da9805c2f0e4c5d9ea9d448a9e"],["/fonts/GeistMono/GeistMonoVF.ttf","56335c91c8b94afe39dbdedea3edc556"],["/fonts/GeistMono/GeistMonoVF.woff","cbeb6d2d96eaa268b4b5beb0b46d9632"],["/fonts/GeistMono/GeistMonoVF.woff2","addf0d443087aa4b985f763c80182017"],["/fonts/GeistMono/geist-mono.css","99fefc4d4cff301e9fa6ab503c38ce7a"],["/images/DSCF0141.jpg","014de945b5693a0d18ec8354791358c1"],["/images/loading.svg","8badc85e91f9796e6d937af1f051a394"],["/images/redefine-avatar.svg","31b2257b3adc30869d1e24b21cb14e0d"],["/images/redefine-favicon.svg","ed4d45a98f62db3d4eba27dc884cbeb0"],["/images/redefine-logo.svg","55b05193d4a5b41c7ad6c4c07beb4e2d"],["/images/starry.png","82be3fa14c560a9b6c3e98ccf9b52cf4"],["/index.html","6a58827df796b4b97a5fef7240eb5656"],["/js/layouts/categoryList.js","de99183023e521f0986db119ce2ae4f8"],["/js/layouts/lazyload.js","21e8482d1e0af3b4786c1f363d020960"],["/js/layouts/navbarShrink.js","088ceee54fb07f2aff3d32759e46df40"],["/js/layouts/toc.js","29becdd88e44777e3b6f12213f536603"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","2eac15aaff54adbd5a2abb713238792a"],["/js/plugins/aplayer.js","82a4ce66eea50286def001db1a12612e"],["/js/plugins/hbe.js","5e89552f037fc6eba616f416fc49e9bc"],["/js/plugins/masonry.js","27decce5b33d41ede7b43d4a16db109b"],["/js/plugins/mermaid.js","3f960d2d18e650a557e1457a711103f9"],["/js/plugins/tabs.js","d99a7af3a95b48ec6b30d8e52a74d584"],["/js/plugins/typed.js","c12af1aa3fc9e4ea4da938bc659ae3a4"],["/js/tools/codeBlock.js","c0571e103f7bf1b94e032170a6455d45"],["/js/tools/imageViewer.js","34a502ee9b3362b4f034dc7333e56185"],["/js/tools/lightDarkSwitch.js","2c197adaf6a23eae8cd8c61ecc715708"],["/js/tools/localSearch.js","ee88bd1197c1f1984b6422adaf67693a"],["/js/tools/runtime.js","f77448b20ddc9cbeb5f2e8ff5468874e"],["/js/tools/scrollTopBottom.js","e70eadbc9171989390a5f9b04f043f3d"],["/js/tools/tocToggle.js","9a81c904ee1dd8b36dd2658fb7d2f105"],["/js/utils.js","8c8852b1f1469a66c0042a1ed08b15ab"],["/masonry/index.html","26d4994bbbac34fe3db9639511c69af1"],["/page/2/index.html","c4a86cb009c5bd633d421c395dad7925"],["/sw-register.js","c00fd2653f04262ee54bb2cdf0497d16"],["/tags/Econometrics/index.html","76d429fa7a0286472a96d68e21f6935d"],["/tags/Finance/index.html","3cf9e6a54ef5ec97e4b388463b4e1b3f"],["/tags/IELS/index.html","a830509b1d26cba894730dda3f901894"],["/tags/Invest/index.html","7f827f2a3b7b95f8a5ac11ead218b4ba"],["/tags/NLP/index.html","5dd33aa7b37b18370b078b46f541fe68"],["/tags/cognitive/index.html","bf6c21ad87d6263485b5d0c407ed8241"],["/tags/data-analysis/index.html","7ff905133e75d6688bffa00781dd8802"],["/tags/decision/index.html","b588de1a0fff1fbf27c1fc9221a905d8"],["/tags/gallery/index.html","b1a2c41898eb082e3fb52446ae5c1d55"],["/tags/index.html","d4df221919e9c036e4b67ea68d178fc1"],["/tags/listening/index.html","6bad8b77c871711c1269c870e6063168"],["/tags/marketing/index.html","f46acb50da6c11a54aa6d69516bb1ded"],["/tags/oil-painting/index.html","168f24de02ee713c7eb1f116f64b7323"],["/tags/personality/index.html","180f65a806ffdc17f01cfef395b7089a"],["/tags/propylene/index.html","ed1653dfbb85e648adea58d1ddfd4d55"],["/tags/psychology/index.html","7c8439d8dfab866d5f0eb682d29e26cb"],["/tags/psycology/index.html","e839e08353f203f7192ca35e93781445"],["/tags/regression/index.html","dbd3deb3f99e3050bb3df3c5a521947e"],["/tags/signal/index.html","dd59cb0a07366258ccc0a0da6f652930"],["/tags/sociology/index.html","c0b6cc87a5dbe8eb628d04a95ad19d43"],["/tags/speaking/index.html","8625e2dbba38c5341007abe210cfa135"],["/tags/sql/index.html","76c6e3384d787e774a1894ba950d7c21"],["/tags/stockbroking/index.html","7d3ae501d1a0c25d0f1378c04e274a9e"],["/tags/structure-model/index.html","12afd361cf06b4f87155b316e27a8d09"],["/tags/website/index.html","4c2fc46adc85ab8aabb475dfb0bed4fc"],["/tags/思政/index.html","2aedb43ba3d111da29f64d537077f1f8"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
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
