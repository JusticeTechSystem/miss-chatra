// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGSNTBXT1P/Pfj8sRBGBHYm032v2yFAF36BeXY/FloiLv4n0m16DNyDJ7MHKkLI6/cjkWjnkbOBs0M88UB/NSnW8hUfyzQb0QcUaNtGIsyT1LH5edVJKpZU3NUzgjznw2+Dg3+D5wSW2BypiAYMlGWr3DgqAu8MX6GWnoHwp5yDxBZ1fXofeEBJBbwU27/36RLO4mA8VBIAvkP1XTOWeWr2kUntm1bG/43xwQTlRo/xk32fyfJWS65SE5Hyl/Br2omzHh+xP9PMWTnL2bL6fcXrup3VroHvJgismqzYXu3qN3VYDq9J6cXSEWUWj5cw7QW3CkTdV5Tk/CXvEx0IVmOAJfmcEDcSB17q9bRKF1bDCdFW858KqvwvnUPzrUVrRdLfk79+Bnu3uEis+KjXekKV5kMGqSGVhU3EfHkbq3oswFrB6Tt/YLlb3Rs7WEN8ANND4dw6vfGKVkuTyqCzl6H0kFpU4qsNIpjNWUY3M0wBLeKKs15nDjg6QlIy+HsbYqDx6CZXxjAvH7jW/N5Kl/jsQP/Wyzv7rjpT6WSzt4HQA8Kw4fGAWgKFkWXQ6kHDwZpyhHgKBIj4fDbynGRCB+YNesxRFm0iAmALihQHNv9Y94zPyWF0fIWNqavdKmmGjpW/qpIxXMV/CBZpoC0A9EAEV/jWY6938HUbmNgmk3IwspT9p0h4dM0eSalmYuHMHt4hc2JGu0SAWbvH6FJH1+PXeGKOXH+8yS/dIiHlq9i07WRcN/wzS8Ij3rhhKi+xiuWxtwqyucRCTh6YxpBBIb/00PA3Q8fJhJRp6C0NpYcKBFP1PKZNyjexnj19h03Xfx+UFsdIOFIKjWFPELe9n0Lxg3+yGoqcrfCRiGZZ3Jb45scz+U8HBqUfnYxvrU32VuYwWurt1kEMWwR1HVcZkGMl7IZ6gL5/4vjxL1Ca44eMiWhjyM9v9dJq6A5+zqQCgzGOGkPfHWpvAFkd4VCLJQKn7z3QlVth7B1Ha5NjProDocambdSgh0+Uue1C0lwL9u9X3mJyqzJTfSWyR5UKNwUGeZYHctrL6P44vT7MJVTKCPoguY9r74vcblKPNyhzZYiydkVXEaWk7mIGzUp/nXViaQZmT6dYSKfU9CC5myfMBW2fF8isDAXZUSbVBRe8Alr+Blozllyr0metvnosbe3eRjs9cftCVVlAm7PwClTwC4FEEPL4zrq7EXF6387u4SUupEdvG3XjTSrfHBqW1ZrmKRSZD6jVdcyLP5Hn+Q1bMbwfebiHH8qoVLsFtvohCpvvlLir0hJwDDuxVuL4kIAJWwZTL7i38hwRdo5DCp3AbZk9nw0t7lIP+NQmYuM45V4BlEcsGZ6syYeKluU2TQ5N3RrkPHUA/2BWz7vOzLJUWXeRA==';const _IH='6f4b1902aedfbaf4a47424eca209d909033c8a5763469161453d742d243ce16f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
