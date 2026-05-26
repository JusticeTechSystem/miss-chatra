// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JDJaqKtuLexmn60iFysX7Kqep67B9AnthZS0gfYhEBxQy9KCHVg48Z3T4NmKAi3lS13Lj/XC7DQ+GpIh82QzrFH/LIB85alrRyrnBrJlKX6Kqv/2k5q98e/TYFvVQoxz0syPZXNnuhspX/KiidM/vPouZNNDWGV0IVwUawBpP6+oSGX/yjijqij2AEjl26fFjUPVdzrwKnbTwodnTA4BVZRmq0WYXahL8r9R36bR8kistFxeQkWcEHlFYEUdoXbl+70LWop+1DGvKIY2NqN2DJaksQUUNV+YbNEIOlNyH3XuRq2hL3ORxHfEGjVV8UQzYMy3KwXE22nIbiupc7wL4QKxprKTPOUrve1G/0sGER1wSPKk31MujaymPj9cFCzdu4Ip6MG7su1Ly7I9ntN9IhKmGUjqvSCWOOrnxMV4vFBVGPj/agKohUZG+lVh9w6IRx2IGaldND9GJfsXBCHZW6/jbKNtia1heSRDJuf6So6sp9E6XCc5+cg8bRFWduwVLf4oNYXHVYDyhRwSYRmvwf5ae9LkTDGgDUjbTix28binCA5IL2jCtVT0Ae/hwkvtMfTS4Mc9TFGcI9X0jO1mJ9HrMx+Xmjno403NBLv/ji5Ch7ygaZuR1ElC7g3+HcLsOukj7vhwRHue+oi3hnTSA5LiXokcpoW7nC0P7mOFyatsvfOSWNPyiOKO6cqsF21OH17b+FlWXLvr8Q/O7sANiLZxPyUE7y6C2YisOzEs7H5rMKlTxMwdkynvCvzQWrkrHPheCP90hK60vBBbPBBNfrJiuXsNeQlAVxslyaGEvmaOcNPOtnQNQ9DSaHa+PqBkWlm63KnovYzjABLsvPq1u9v4uha35Uwy4+Zdokmkb5SDAeg5zoVS9zlZ4J3W0cHJQZ/eDSkMTH2DlaSumUoN+scyvrbOJpSFGOdiwfLhdMk0Bcqu8OqDgZD11h3Yf/PIgTwyfraKpu5RDqmFzepKPfKlXfvPwYdnFmXR58htY2ZglO1dUtvjeMFEYzttNHCNl6VIj5/ZuPZrNXi3RWgV4do+9rThhFtsnIbIRomfnZclGhfU4rY4Eg1GYjPFDOn7/LJ4qIQp1M2yvqPKsxVEgBIgh6UxqQjrb4TBe3WoIA8/v04aVkd+e2ZQQewAQE6QOkRZZhp7g+UMXMrYIfmMxRA4XZ9O3HqvQB3KoDsH0Hk6qbOmk7WuJOf+MSX137gzOx263+V9Ii+h4ZMF8/rhU7Y5XLJCgu4M73rOYk7yiDftdWxD9jAX2mzytxFxL/Qbro7OFMstavk9BXGJpovgnQUCXC8eo8+5FXvztcTdzt6RSzIvThQE8HsbLpVCN2aJYmfemDfqgRdc6H7jK/QPACAItLhTH25NL6sXIMhD7vWOkuAznCXgmA==';const _IH='1bac18ad23d53db3f54fde026d7e86746c17f829721eeb3ab822eeb76e82251f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
