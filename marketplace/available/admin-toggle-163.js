// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FqCrOGMoDlVgmmuPPQEEonr7BOmm2B3PfGNpt+wXYG4dVat92I7F6tPprU2glU3FGm42gdiOBZFcmHggNhxmHfEnWWnJFR7YTYfWGAImEtxQ+oG1bFsyyhulhVPHnd+vw0RZd0IBYciS5h3orSsse80rUlcZknFZYYGhCBPpnnitbMVHJc6QyjjACe2G/shjIlFPHQocapr8I8vjZwhjQIAjtfvLxVMoT2YM6lnbbzG4yLSVSv++YRSIhbKiDx+PKwfsqfuNMoFJSdI67ZlXSguvhpZCW5ZosIjVK2BI9Pz/hbAQj2JPQlnCnN7DK7IJhzxBSoFb3uMD0QMdLsSLflve0Ywh7Oqo7Fzdl+Vide08/5EQOTF9s9v5Q22Dd8HFJxV04FQYzSnCw18QNFBBsFVuCTfzFuXSQpNA1mxStSyh04LHFLj0DEShAfCJAyNyE6TvFJ0N54Vy8KD9aI9f+cWCk5BjOUEVm8Nkv7oA7sNVrdhdUgCVANzNIhAXHVB+uOFYREUvDQOcFuVc8KQp0VVCSy7hpOR5xLwKVA51oDNMd6558eM+PmcG3ZYMUyYt7uD8JyH7Z0oHprTUahQG+zEljWKLC9csKu+pLyxDRS1ZRnGIHIAPWlGIy1/NQ7pOYQXWB6Ti+irdeXvZO1boVBdMfc4k1/lD5kmUQlSFso1fiYBDeLu38Gic+Muy7EMjSu9U2jj4SwwE1LEyqXxcdNPBV3yg7Pud6pk6abQjDH7ADikyGV9k0Ookn3x3ZZnlVsF5Xe8s2S0QBXlyFkQkhh4ytRIS6ateZ++3xxkrqbmgaGrYmNLhFmU9CjTjPyfh+KPfMO0sSvQY1NuMf62KVxUG8PQ5XfUrhmxrXToqHQzu9T9FOmGgLuxK4o+zUO5JPTw+bKaiajFQAiB9P2eZ8096bsu/9MsJji7ICY3MX3HFPH76onEaQ+e7O06ztcC5RcRhBrZfh/JIlARRFrckLfBUCAaSjyHesTML4zJ98OuK6BPI+I9x2CR6na8lPBkQAg==';const _IH='81a243fa0192ae5b3f63bd76a3b9db02c5ebb439940d1f8494855e36b4c9cbb3';let _src;

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
