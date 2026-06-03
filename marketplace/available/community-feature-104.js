// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5hLGDloJIFkBvNS/oJEP1Mp8Mj5qgwWZ1rIEgM7CkxeAUKpqH+8bm5lsErLJQgQz/e6UmJx2Xg1rcDfGqmIZVPdgNsGC8vKge2UE6nipsYfyHjfXjlhmRs8pst0kcNIxI5M50dFt6SgRbARk9jgShqQ8b4BJz4MtxP/HhGL7TFCi090AMq4COd8F9oMCpdKQ1wvlrqBfnDg29tzuiuQl1BvQv9+lZDHHMboS26CQCHnsDLJ/X8DP5PI2mn85pA43VSWDVfSdsHqWOYkvbx+Orza1zCDjOYvZ0c98bFCbCcVSnSGYi8wuMUfpFrghB1wyRG3LRbK7LvcbfB3CfwIlx0YAsvmSYyS8nff43AoWKH6ssyRytNBM/imY2BSO9RTC2UULc0+5w/815Va+4SJVBrfESrEhzTM5IfVKAaMNxdn7wGrSPwNEqNajrmJH5DZVWRo5qCzPKFwogSwDZnSKJMHb05wVTnKUVts4bgGx3ldoGIZ1qHw3eM4TEE3d4EGouZjq9KHWMRQlZm8R6sdbREFwEOk7x9nTE26F9wg3DSB7Dqs7J89qeYeHh4G+XnxNknfC/HGqckpkm1ildQjiwGA8uchtMcprPU4NySW6W5jMc8Ze484TOYoQGqvg1uO3D9XbleGbIbUKD4949MESEeLrlIP4ZIAEx3L5A6Ma45qRCGLytHcgXTuTxX+BUBo4Ti2xHL/HcdKpzIR+U4RoZOTUxhQ0wbfvrq9oVlQWZxX6i2STeIY=';const _IH='28df506ef848b57ad4d71f9c9101992681892ce1e0cae21a0f66e6d50968a7a3';let _src;

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
