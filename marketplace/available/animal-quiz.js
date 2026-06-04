// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='twi10ZMJ+jcU1puO82D0BY0SWX7+Anpc3j2e7aRrnBK3yA7xhVkOz35wv0lw9HgwHnXyyBcezEMdHDXi2/dJRh+6UZ3f9u2EsrxzAZPX6eggPnhI5Hzv+8i8HLAx6AWpngbHxPA5PO+Uh6f77ZVxEjBOP2xlTZpGE5U0qrBBsDWaZCBFmFyClMRwu7H7MsPwF618mIFJkIEaDVLujP4XQzYDUz4uiAakO/oz9zqEUIa5JoDiYi0oOceOXxTaQJ8OHoldv9ASFMuB1npUCLmpe6TJva1OdclXcJb5VSdkAmfKBcs0rCHpqU415nLDqgYFZKgdobcqFNxUOHISQvv+rUPjw6vFa79Faz6P4GLOWf8a2n1BQELF+k6oRTHrHK0V+TRgU0btRVK9dic+gbSgLpBHYdGyujQlhhrykoHWVAGdsFCoriL+Eo+1+NpaP7Gxng76iHUhMSLCPMXeE33NF8RovBCSsWxrqGk+XcZQcKBtxwszdl6IWGoxPURLWaZvA2H6e1QVxjrf5gRyO84QRrVCd0iNcdDvYOYVqEdhNhEHXYytNZ9sxGvC9lu+kjINquGgx5vaAEokxMxr7K+cTmMNGaHrpHgB0BFgjwFbwjAszmQqGhR+4jHbOFbyrAQqJhs8dWHpZXnZolsiCB5WokT6WB8W2nJ5zwoD0ekTIqnSFAwLwdqOPGGOTuQKSUmPxzEM4XvK9sIpfKeG11Ok/IOnt0XFJujNB1GLMHXllyZL2FfQglhQHK0IfGeBnzi664oRasSEC+wN7x6UKhHZpFCR7YerDdqNi5CNLOuD7Bck9rmhgWsrGkZSEuUOOFvibq3Sw4wae/zJxSocQd92jKZyMTZ10YAPP6hlFCiisUUe9bWBJfOXNKkCSrkV4p3CI+Tf8k5rMQUMPvo0wvYEKSE0geRHWUZGLHyBJQzN8Xgy8DnGvD+Vh68JlIFodHh7U/WLCQZrYybAJl+dhNaQzc9ppb0/OrcElku3DJxN1CbFP1NR7kmXsKJA3iDWUmhYOn57DofT0kX+uSQp0eTx/RpFnFTcP/EzN7m4XX9M/DdE3ipBI7YVPyIrHhM2bXvasqkypRJsCknqJ7DEeUsD0C/2RpLGHuZM5Jt2ZeMrDqsyDc5FoRpAJjumECYSXSTgJpddlB5SVFWgO5gM8XmgnZkGPVnIjnX99LyZZRbDDfZSqHdzVyxg8KNXTQhnE3eEJreWusJxO7TtAr9yBU6HMJOEN8gfSe7IiY3p2rAgsNWuAZx5qRnzD1mX+mlyPDAqyDpLgUbzjrc/gD+dV63Z4/w2FxBqt3l0vgt9Ggfvp++maddRttZiXP+EimBm/rAfvkBGC9hB4rT64K/NscvOEW5SrryOK90cElNEWqUdrl45x1Hwr661VcCuPWu+eDBVoyn2/pGIrJvqqG8auCbhK2oF7JDwZODBcFMXoEOdbaqNG3oixY+GYch590WbEn788UVswOlGVrRV7kfrHDNpyIi3lOJMH7G25b7jyf0Zdg==';const _IH='4e28aad19076f4dd9ae926ed5ef7d7bd550913ad5a100509e5428f15c862d47a';let _src;

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
