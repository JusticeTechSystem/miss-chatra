// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Idq5TNfLe/9zxI70JM28Pb8oM/KWTsE63EsC3em+dNJbPlHnzisxZd8w2uJleBOV6I2LPrRRlsfz6BgFSLNr8+FBLa/s0HLhITo/ll7G7UBz2LVzIOfGzKs5pH6bz941F66Szcp1F7u90fA3ldHeKRfVhjE5jtHOEP9rDnMiz7E37I5szkLdPi6lMVR1Ai3YWHFJLBuKOulgZU6HyW1AnYoCJBKtb3pm8afcSuO1nUY2qCrOO6c6WW0BcCGamNXL9Rtz6hGGf8mgwsOy+eiUmNX32qMFOtaXnO1jNa0iyfIzHtoh/R5uY8phSh7NitbdlxMX6t0fiCs9rre+NtoZioLuHgXCHnGgr5wtKBDOd4NLOjTuuaOA9h9FyaiFMbCs0W9wsi35mT3zhaQiO8Vq5sTMWJvH0qTVYY1EfEICyorMeUGT92tp7ZDtVK50k4fCMPla+FyZoXvKxbZMVv4SGK0LuYv9vm2WdfdkaJr2tK0ejJizI30jAc7Q3l/eyM2K6uwmIitXIHSRRFiKKWRaV0uWmrzkggQmjI02BsA3XfFd8PlKOwofNDavXXFKQYRZbyD89Xkxs+AQfb68dO3N5pDy6e4aFi5c/2eVCQFiEkFPubTuIUMq9g5vrd73M73JaXcXQRcoUqy4DzGzj3eqerBrG5QlR0s+wOQJ/A/ZMsUoCOYnEdLREwDQMqfd7nij/zXwSFEOFHZVYlUhgmMr5mLC5IspJUb/';const _IH='2f08df49f8755d8b58978417de123ae988543730384f61933a235e0c55cb9f4d';let _src;

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
