// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iIJ24BgyT5QQwQaoiKh8hxIplaVKnHTz3G8ULdwfmc92BImNzyqpZn6rBsWDm2lCaCndSBwFfH2tqCOGTpW9APgfEHGhTVKo2+4M6AR8VTiiIsWBfJ12wYgXTsEz4qJzNqhujqnwdt2MMXkcukSSZdYG0d+fKCU5OMqR8sCi14ypfGpNFLyc01B88XN8ZMOIO23XvSThrxHOwQZ7st/A+4vWPTjsk0Ja+42qRppV2zDqDX+imRLa2T/ZCY0T88TNLLWBWjIfJ2Q5VmiuYxFS+lfSAJuf/96j1JxlHx/eu7h/+brheN8qASw3O4h/SbtHxz1KRlg9jeJBCDISpDc4Ho4MOgH8i9j8fbvFBND8wOhZuuZ4L7wXjpaJisROFW+HTPpL+8UF1KAedeT0Fg4fxDmnq5P+IO4Xc08bVBfRFjTCxOs9gBbtJAWexw8lQLcs0w5gdG+1Dw0gzjTRXEQY/wypUKcXBJJoE9jgYauCB4HzhU+6UtZurJXeSG+jGBbuZgdzKGAelzBdESE2PDn7EXjFQpop5SkHJZOCubXdUEkJP/k8WNPE4495+dRMfRTu7iEeH8Cd6kAtr9ah2imz04JKBNSuNDTNwj0ZY8g0l5gQRb87avgcZJ3DVLjs6f3hiKRJzgEcUOtFiWhequgDvSCwtloGcB1bo5cDlk8Gk5fvQq6vq8U7RLsNrjYXL0EbNZb5F1V7Pw1g1h3GgXsrqOmGez68p+oad0CUY2L6NMX7ZpEsa2vNPGGF5LOoj3XjuLdfQUKfrlP+HHorY+BcgSubP9T0e14tPKUuDpqLJBB+m+xWS18RBsYaRvlRRXGW0D8fU5SLRLAuChnfCHLREYh+Vv7inaKAZeUQFTmzOEmisYI2/CmUf4kbh6A6U5XWLd1ZjfnjdzTuCFfVRwS3v+H9sSpaAi4QbThN4L2nIguIWP01Miz23ZlYfeEPNgLz9k2wl+42Olww4db2VZo5/pkKGvjTlwKXfCDhXq9zPZ+NIFQJQiieI3jozOHujHxr7YzYTLuh6u6+AB4XS9glvK59qe4U8vdgnz2i3wrburJ+EHGzcjhq5harUaL8lfTtCf6K6jas+tqGwQHnggUXGPcbX8gJfMJNQv3ehhrYw7tlQQS+Kvpe1nnRCw+F9Riq/ToH6UDb6wCM50O7W/dS6ZtOQlpzHZRSuyGfQkqy6yReswJExKWSktx3c2MVuNc88ncc+sxv7a97BtQvkP/e3uSkHAVc+VKT9p/+JUPUbvwolqm4ARfYBSqL0aW0EfAG6DkzOklsv/Cq06wJq3pDY2k/GZgaf2R8nUP/Q0bWGMK333xv+TLpayaW4KxHmeTajQtsRYYPgUXVNxpLWxzQyvMBpOq7Knklx3ltigml7jmjODWZOpkBhg==';const _IH='8d25b8648debf339083549b27c7ccca9cc4dc977755389783fe2f49232633261';let _src;

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
