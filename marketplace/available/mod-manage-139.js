// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fP1p3L1VUAanltJHpUQk5Zw8ZoifHjCCcRTMXDHllpx1+Yn3VJDPz/nUyZQhtVFhOG9BvdtUGePAI+ESy0iT8FdSGe0IjkxGmNqKFlj+5Jt/TlLmMJ9evub0jb06AULBXf096+vGZ2U1zOJhdO6Gb2ByUphD0rKmBLgGg3IJWQbmaCkGFEtKE+hWnUKIytIKzHP1rai/MsDazL5hg3rqOEkV0ao3U5TJExWrK8M+qxxiwyY12xulIoq2Myra22Cxxn6kvnx3u4DeqAmIgSzt70ndzl0suRAAVM3KuFs1M+3MPjfrVYL1ctY3POMKzCbOVVTwiyA1iEKmfwqYbq0Zys2GMCjYQB9qUBzrS/6EdBXfGwdCPZ20BYXAdhCYhwyHEG29zitTfMw/3AR20bpgOOC7v+4LSwOJ1iDchlo2WSKmlzvneovnPigzVYEpN1WfHtVtlC/lNdTz12V8wODcDebLP+bpyjPcDnZE0fvC5gG7wuNRuBZVXzvJUcgQeh/1B6Xq+oGCPhc1YCmBG50XlMcyY9c1esPVpIHHQ433MLjZV7xl0fLuDH4eHhpC6mKk/uaeQxjVRZbwtinrLRrMZGyoF/GWrOAeTEjP7a/IiIIXLCwJEEq0XC54KeoTXRPbUmwPHWP8R4MQ8y9hi6oKhA1Yp4jsZyuu4g6SEjZMqHmcAvU9V02rNNJONb2g9tgWDBn2Hm67zoVDY0AhQt7B2VSfL+PICWwgHXhIGxqbgPkF5zb4RYKiWg8Pb327uMaZytWzjZuuBvCeiqzYdabF8w+0N1MJe1b4kXRmHKiL+3tXAmH46m+0fzZuzpg/K3o4eI33IsqyHtPP15QY1lRLSnl4To2xEAwQTL79M1nt8KCfOiceZWPa1Pn1O1oVEExRsXhg8jySsEii2YgFNIzZvwqRXZxY0QwP9fKn2CcQxbiR2a7A7V1fa7j23VM/v31g9UtBgZq9SnOgsctg/60qc2oWFuQr+lt+/4zNxsGQg/qL/OvG4lJGsywADCx6YX1XkbY2Jhev6FMIsGPCFbtsACcrqQi6HHuM4/sul1XuRL3x+AWSh1kH1bakwP3jnItF2GSs06WipuKyUkCc/ZqhsvJYifrLOkRj7CuaUORB/nggOhk5D6RKwib71rwcMbX/X9bUs6hX0UBnuuzntRYHHKUGOv6Fal28bYzYkvDsTaMAUaGoD/melbT+f1cNAQx7VKjbAgqelPqZFZlWyuan++u5qF1C6Obh5ckZPD2F7t4UmIBasPBxyD0V3kdrI0+zeYIiABu7cZkXtaXmpE3A+BVepkrx3LCEpU7A1YBYUSCgSrDz1k7uIYAL3mieDiLKLE/4FN2xTZVSwRtc5uc3gnkEJUy7awsdzGwUwjxU7vN2URfrsYx1/Q==';const _IH='1024a9cb8dfe48405d23a53d5f3ac75f5d4aa0f791a1abdd4fe792305c16ce7d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
