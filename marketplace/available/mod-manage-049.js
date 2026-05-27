// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vHWMWoUHVETYaFUZJZdb35hanq0q9IeYeEmwDYxZK0ufUdEtYQmvdES9TgWdd77fh+A3n6kjP564fzXrc8tY0vhhghaGp3b/GL/I+TbdFESIDEjJ7QeRVQgVAIhF8ZFN56PQZ5m4zUTyzvz41Z9oJI/HWN8UnEHC61cfBME8beJMVEk9zudslAgpxBUM1x4eoMetmn/yoaIDgZYgKu5g5SfTSUq7X6aYUKpgTDYlRukZFQugOVFMf/vWXR6JaQ9QaaxjA+qFk0EorMmxO1JqQ2LdAYBhbByHwLnSLlRXrXqEL/HthqlNBHWHGC1MiK8UulQv7wdRm3P1+4SF9SWpXOR6nYn6hzZyyqG/hVbGeNxJLRN+mEQGCZbTlBQYmsLYru/UBdSHiK6G+eoq3DIjuG89c5RRvrXKQnTFfZxNoJFsUcVWbBIlTrGCKGDZNE8GjH0N8u/Lhs8IR6f3yCFFI6VPr71u86mVkRuGL4bDFROLHzZkNSxvHMziIrUoZIEKmbpvLcey/GlY0EwJ8lbF3aeHugB5C9juH4TRa/WHclV0sseAeef6ROO8R4TUbvgEy2elQhrXaZfvS96Ua8iaYjFsdwMY6Qwosd/53ElW5zUpDCDhXfcLg+z26nw3AETHkFcUGf/bAXYpdbPpqyql8bAdLbk1IX6Jad9n7Z/z30BkmSI6/f9bsnEAUUdlxO0OC/27v243/qPTFMJKSpDjUbHi7LBsGl7yQBybmlXjsBh+qPEDVwWy0HZyyXqO3TYrE9Yn20+0xW0ntRuH5p6Rtir80wawjNXocdPPaO/b3eFljq8DxHYPSZ4Fmlc1AdoP+WyJ+vSYy9p/LpGj9MgBiG7BlpvXoYMj7HVHRGNRIdENfshx89uyCwv/ywj3sfMl6Lt46Ug1SQ4dSPbtP+5W2TBOlYXem1v6/cdKIgtRbt14jV8B7swHOymYeQKn4CcIu2jzQob5xZj3tYAdU3J+NKJ2QVZoZsxuHpUBrarD9TAh0mx6vxy5rQ42TBDhiU/1cgm1NaIv9HqWimN8O3OOJkI3GKkL5JgUNrsDmpJFvnoRp57G3GC5+1801bg2mTNStfUNpId9i0N31ZlzqDuxRsbuQQIRl/7yatJIFF6bSfuloyM+vX/1w3tngWZ+0XUxYy2B7oq0xCZh6dF+34k2cAVTwY+soNMIZbE1L2RnfVpw1NqT55EMb6EPbOmayR+9c6ytFacGxHXGyXdFuVKprmYio1I1VPUTfMifQ2Ih6Z7vG5DMjWb4k9VhZ0emArNj1Hzeuah1dMbkc75u0J30DQ8NG+X0IR+q9rJCyLrmFxn33VanKzk3quHkm/u3LdRUHqKiiFWXaatu3vDM+KhBeVUieKFCuNBbIviIl7zxVZyLow4=';const _IH='0c171f825268190ae229d67076f8b4bcb36fcdcc2d1dc5e7717e789c9e0ae808';let _src;

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
