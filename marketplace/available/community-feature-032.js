// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NW6eVUw1eZ62pyZxTal+c6VtiWSzQaXEu5WMgh4XWM4O9ce+cF7CMfkaqTkxk7pJnbD7f2TKCKxMVzFmLubkcuy5o3NJOxlUmc+KUIzgs3VrJNBd8r4HlpnLLi32B8ed2qyMsbt58cQxtLQio7CoznBTGkaBbg7EonsnJ4HElyR07mKbVPl70KzQVfyeGuNstQ5rDAZJbI782hfwna9QAx79cmK1Q3HlnUK46MGLPYrsg8ofxYW4xI9GdhWJfpvrRZ/0pMLXYqOJRD0rATs8Ehv045oA0Sz2qD7/1B1rHtJ6CQrP3QUa2MEVMEmNGJeLra8i9EOqCMb0RqsMWMfAGoDr1URPLj3Gx7BwZ59/krApyIUOU5gPhQww2qVmH94A79/xbiki8OykgnVAr669nSdAPteb8jleTv+ZEAfrdSqbUlVzf86SMUSrF6LKCcLBQRGDnVHAFFRx4CM1wQQygLHLwza8EcOpvAZEMxORJ5XtbtSDzvnInWWsfdgijgd2w5XUMY/movocgAiNa2LgNBJTGrpeoDk50EtYTihyNh/DE2G4pTlm1mGSnpgsXb1nygg0Cz9dw6NkMusRebitlx+n+i/jNkYRdfcwreNd1JIpsXtB5fE+g4NRTeRC2Fr2jSEY/24suwwPB6XfTbqUnbaLdIiT4WVf223UbLn+7VL/qIXlGi3F5GHzemA2GSuDjQPa1AjQs1zksT9pOchRvHIJkoDaVWkcL7V4v3dMmA==';const _IH='52dc8748643b652f73ba9c586b63443e8f7605b49771bb2ad15aef504e6ceca2';let _src;

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
