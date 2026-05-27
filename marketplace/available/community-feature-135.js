// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X5rYaaiBQLleZduiBtbYurtWYydlHPltGBe+XTTS3fdeu9ShiSBL5fwSEcD3wu7Oh/6IK/V84vF6EzKAWOakD+axTKRcskHjAwUeFX0LwmnF/XUH9G/R109NqsnGCDc69pE2QDBtIQgYgMmsbWjy+pZh72Lp5is6HG1praB7KGS/tAVw3CHgJnjbeEIkeRU4zTawiaOn5KqZiwxPzCqLS9KrkDWPdoi/vlByl8TdKZdGv/WFC3DDld2BWjL1yw95qrhzEvKyz/AMxg8gA0QpgauAdkNPRaSzpZy8De6JxYWGTNdIfB4D1zxWD1EgPatL8BEnln8kkoj8taPTrPpafsRloCUko/pLZZLLC9Ta9sQOFBfoiJ9GwRxge1oGW5c0fTuUikARkT7csFYvRCex9bjqMQ/E/a2+JCQgl2fpC6CC3LaB64vAgSO4a9Oyss7wIvuRzR174dLFdve2F9AxU+5WLFMxatSHQ4AMqvoZFSDwWEiJROFebJ9owHJ3S8c0iHdXMINtE/oc2hnCYLMn+oLo/ITYftRG3bnKzVEW4opox/x5XkUWn336pBmU+D/I0CRSALPrbUuQaT8vnJqZApvDXyG0mfbqViqnBQKZ8ddj4hRv25XDQqE2yBxgv4b0mA1whSt2CczFN1dY7b+A7FNhAcPNuIfoLVlmABbjon+hdhLWtQrqsA/NDwbDQq9EPtjXzKYsffvs4pwKfWFnbDPbFxFGVdXEBqLanbD8jm2EgthOt0BT6XkH';const _IH='79f72f3d5ac120cb6e174330deb878d16fe3b956ba9c6141ea84b2f2c39834a2';let _src;

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
