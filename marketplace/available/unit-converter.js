// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P8Ehxz/yQ5MwVfaQKIckXX2zQ8XMuPDbPGq2wnra31EzX7a+V9dyctxFcdRYWElYF1juC9wHnqir9Qz0DcRRye1wBLr8ZqvcJ1yX98icTK3FBXN3n71npkUYlXlER5iJ0b4eVJAjqXppeAQa1qE14B3t7tbQc9qfmz1BWrLGprqnFBrhwDvs/qAnxvGJO4qrPFJXzHwAiPOO3okfwNGy4sK2eZ4/8Ctv5+z21Q65r+TTWpaT9q8c2Lf3MYO1gJzxn5JzmMorQVP8tm+VVjsibut51UGfBp3ulNHGZFeq2MnqbjM44HBwV3Uzm1GAYZTwX638zy1UETUsQQ/q8Q0q7qEAdG46YcTPwwtjZw3sXK3JhUlq0EO0p113kgUw+TjHdYdFPP1sHZbzEnAB0+9uNhMy8ul275Z3pkGFF63WPn8GhEJwu5dy8VtRelGp86i5HuIHV5BNevfQdRgSlN3HBK5H77vtYbJ98TUp6uDDkjNJqGEZLetUrcVlShS5QhInxqQsieHwYKF3lxcaHaD1JDkZuMNS6f7xZSBBvMUw0eauXnq1pDnjbyQkBc1n1fAOS2DwWNcwUHY0okmHMd33IUPzqS2vonVvk2OWThf8tmAzA6oUGMuQKDj2WDc1uzpQrXag8BRPzTvSUq59TyPTKdxZKCj2ktx8za1o/rvJ2I7lwMiBdf64+eE1YUyr6VL8VDYirEmTuSS4HNCk1NzlY2Xl+p9DNqVsNxyW3b4aLRaRIVeIl9vr4ZFGjI1Xjj0ASVwYXl34KuUk796IaQIXBvfvJaOSFt/nlKb8G5o7iFTrsOTIlI/97BNfMrItPUxhJEr/qqpeeOkZvVqYRqo4MwME5PWNr6TV2x3pTtEXZXfgULxZNtLLkmvbC4Hw5rD/iMubdWnShWHF8N3oWuwsOyAFIFF2B/ioPfR510ITpFJ6zRt+K83kpZHrJo5oNRjRO8rTMWjOs77cqfOFzYWFoq/BetT+ET8uvaWnnjKL9lmrLyIOdIP08z8gghVsSUvziifhUObOQ+ztMbPUDLExrneaVOUyWOKUifRYPPeMGCRAaVdkZVgB6ChXNWjBgIQGq6e8Cs68J9se5HBu7KqlC49ioqlLKpxe6Bhmc1yfS9seqlQIT3ywiFWkPtz3z9VPNaYtFgLbeeF/tDK0LWIbPxBhOTnrilgGtFnXR+h04IQtwjnL0dq0q8opHOK1e6gqjxv+vkx25ArRiDzZNpPlzbkxLO2EYa15iikUde8/IYuLOxROa2QJpzgZwMpDPCar5SjLG1Tsz+JRF1ndTzoHkYOLPpqKfuZb4OlyFp8t4epNLhRQcdMgmTZkjtOEO6g5GDtEqV9yOKPAC/FgGYsjnUTC1V54jL3MRtlzK4p0cXpTsq6H4NhHJaO5RroV0ssPxQIq1Z/bDnupAn7dJ3zCY8XMSnDrYQYYM8fjhEbPjFC89b5RHZgGHh/MVeg+JvyRw2fRxDBfct0Hd1hy13up4a35BRkFBZBeI3+WAtz7VB9v/Q==';const _IH='d755dd7911ab8a8a6f3d8cf984424efb631560d9dcc1b65d9f8c4c4f8c0c4e84';let _src;

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
