// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1tmuZmueLHSwjScUQQ08ARPRqgv289cLulCqm8o4+EZznZn9imkH8NNMkopQ0tZEXI5GlIaCJve+T1vrXZTcvNiLD/GLGI3SxCaSi5hAZYyHbrsWKgvUlrAfmLkIbVgWLMtRZDM/jc2q3b6HjdbNoYToeA2VGuNgq8AFg1CO/XLL6hYusLNUSuC8OtKugiWcwm/04gSWmXDunRDzAVA3JbkuXw3N5dzjrutkkOXMo5M0QAN+PmMGU6Z0IpzVZPpqVWEoNKUKOQuUh7gtS+RrfuDxxjEfyHNsxxSMkFTiOqq1s1Rvn9R2dkcZoUdZj476Lb+S5G7721K9jDND5XFhlAn05SJAslwEYtC1DQaXemEWvumjCzsNB1h2fZj9ci46Au0mJRATZxvIdvSlZxSyoU2k9t1T2mwkuTfLcFpPTzBEtJ+2wT+KpNkuZusslMqOMma4I01NG/XFCTEkgA67meYFUbWT9LY+fiPuNR+aUwvPNLJCn+8J/uHFZ+qAd+eUgF+Zr76H5O0ttqVN6ZoFpbALHGHPxuX+Rj6Eu72UmV37q/BeDjr8bWDRcOz01SrRj+Srrfn4Aw5rJvP6ZBepl7mcplyWwHgboU3GnjHRvYxZP9sDoN7hz9ZWQDTo4hJGx5ppqwVaciZZw3fDcH9cNHFY0guFkW0oq6u62k0DDWSK6FkburPOyuScacM4CcKFBjRNw8yllRt+hEUSSZMlJOQ78p6JKNslSXlr01+KgfJwjYuOYCSjLe2V6SAacAEd0x69wvKTzBGsYYbYBBKHrmlsNubJ2reecju5xSFKBxAq0u/3CTVA6r6tl6yXg3tjiprKD+tTVHEnAU4ImK0dtdmW/heEadmJsd0I/XoJSk5NG9OnnYtgZjSZ2h6H9L/1YsehYY3IGn2W2kQR0IunQ/cVR9UNfEYe0cx0FTBlkz9hnyUg8FRARz8iMDrWH6mLAJEOQz2u8Sn0UuGc6201XL1oko5Gp7IuOPJKk71gNV7VklgSmfiLDErmLW7jFspSc6Lw/IB34DuEw2hip3kHytddcPiKIU0grzGrS0aTP0MpiBK/b9cGuhKBp/IxgEp/fgYBUgt9886min+cddS3rb0Ao2P6BH/bTtppDdP6sRPEtK6Qt3CDdrraabOSlxO+L3Wdsl2KG+1/Hd/gkgPhK+eslTjAZLp7mn3RiZehgRYo6oHgj03YzSM0ZIo1mGgj0AKouUm65LHh9cJgUJI0I74DFUSgPvMW0MIKKJYnywIt8NhKcGmreUxc+Lyq/VWq/lqPTVAis6r7qdkon/mdZIAV6ua5T/ITzlp23X8j620jHE6+aaGFZGRMS9bLhxI+hOwGlYISogIZurfH5oDxI2pp0nNYxX2Lk/D1Odcm';const _IH='c1468682c070574974785f211d14bddd7d72b0f8257e3b3de4fafc12b1e96c30';let _src;

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
