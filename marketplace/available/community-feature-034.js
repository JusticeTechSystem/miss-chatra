// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5KqRBXHxr7+G1W9rrbpGgl9J9aV0QfHFpfj66qtpguInEiklKU3RWP4EZRYxyxRkj0r+Q9VzJjSuVdLnFKrywHPD3qwYbtc9ifjXSPvXZ+nj3Fh66s/xTy1sWu0WzK7HDTxy8onPWW8fQpjsyu4gH8HgkPg6FUjO2uTcUNc8muCJfy3nddQcxYGpwIugHDOi+46TL28wb6xRstyaQkJSitqMFrHwo39drpOpQOOtAZ/EMPnqewMfZ+vH1ERpbyTzRTttCULBVkPe3XZVnsghPLYKRnJPCunKSLJO+mdtP4NBsG4u4CLblxVIoqx9jenK0t0Yn0ekaBWfiSrv0SKtmOYPHeFeKmPPrhXT85wERhHiSkrH/gWstU1Kaxs2LumPNgSmmdQ9ULoxc5LNwJKmaVuUl658WMWkn92JOdMAku5qX3KbmKtqXiH7x+JD/md42ioi2FYYqih+tXt5fFVTuSYS4Bl1ewBDdvPkXU9/xyHkq0Q1mms23WWYXTwBxqHyQEJldwtf2l+qquDrH/korGM3FcEIIbSWK8IjYhVWXlu1Y5pvihhKabRmepyBvjOAl1UVyJmZsrYzYo/wfTVhkaVxHQAxr/oxajNxFqS6xsJACS94C//CilxecBiOgXQLWTQ6eoYzvUd1WMQGH3WwUKUhBIGvBDY3Xx4xEvZyABSdboRwY8hWArjH0lbj+JIpoQFwF6qoUyTRtPLbpxnmqT08Sk5wUGBo2s1fMt23VV7kzw==';const _IH='e9211be93571718e01660255c632e376b7fc7de9032f676b282613bfb05bee77';let _src;

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
