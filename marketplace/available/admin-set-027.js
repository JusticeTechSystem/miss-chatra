// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/TV8aAVaQoFP3bjx6lgbgQ3Ha/PrKskoTwxzGEOgv48VmVyeFwo+Fun1/81fObg6Jlgp8IIEMBLmvBz9xVMppvNk6Yk3d2IRixQOmTocKivTpXcVzt2b3B1mxnN0rCmBe6IojQ9v389IMHSoWdRJHIJPCmm6YPeGmrO/6Pwihj+fwjEKiE5GBcxqJCSBt/SwW6GlEEaia4fQeXQ+WWYcvzEyWbodxEwRIHjubIHlAzL2AcE3PNyH2YtArP3hmwoI5GQ6DUN9KaNwWQLJTc3jBV0eNTNMoKIlW7qGTGqJarazOt5RwMXcVom6AGg/7iqazRmZiuST5KUFCEtpI3NyEBd8WW1pTQGqSnCJIYmJ+OtNGZzfX173uzrJv2RQbPEk0xFxyN5cNsgGfbk/agBwvWIh/AU3iSkUk06zzSaqnErAkFYrSLkO1ROVJSK+l8HISXdOqAdI91YtdyFQwD06fPSaPvhBeASOc1WP0coN7ndVAXVTJp7M8n0T39K7wNsnI8U8bZuK93tgCjQLq+QldJJo/3ykb1rXVHcVVcQCsnjvljC6HlLxS+CRsHSCkFwuUXXx1c9XYLqrJxfNADS8GUkq4jcskLZqTjI29TZunWa9yLQIlDBD8kfxr8o6r7pfGWhql8VUOKoZKUDKPQJXOssKYTu3Rg7iruKrXhr5Gxkg4+m6vRJVwbTw1I1VI8SnMZgQavrfxHEZz9Lv15v5y8Ht93FdDDSQekzsnJGCCNZodGjb9MreHUdUF1/wBEzTvB+HHbZeXczy3yYl0lnPrtPvG05OSdLbGix5ecty9g+megm+72m9hZWRTg2JRhP5Z273g1b5D0W/gudVXEt58YqTD8cU74yWmAS9GlcxK0iDswrFk3y5IFlTbUHOFF/fYi1lLnW+cwS8mMApD5+jr/XB2QaP/TYaPSPxRiXBde+4JM/8a3hVit1z46EP0FPQMVcmL2J98zR3o8ysK+p/9Kw8OBpJpy9K';const _IH='f6d179ca44e451c53e24454db63b7a00256cf246824f9a53fe2524f69fa54ddf';let _src;

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
