// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BUrX/zla8npinZqf2nGYyFGn2RWvXwRN748/hP3Q8jnc1iyh0rrs+lwAVrR5ltBxqgPEr0uZn0dY8CXG9jMCeQEwg3FO/UU6RsrCalU/Ojf3NzQvHrNZbbRjFXArI8tOHnWy1Z8+YG+ezDM9G9p/pHd/QTyUI5+Kf+8co5N4F+oCfWN4mLETN+rPONbF5IM09cZ2POXAVwvFiGXU6ko03fP7pRQ1LzbKpocpIakYipD9q1rxCGzzLz99EEQvkkcZ3ylodZCbgDojVBLDTgd9ZQrkTBxcftTlHW/CpWAUMdoWBGZ4QI+03bkAOvZjrHhPPeBOL4jqVQWKis3T/rnQiNYBsh+ZTMmgmw1W7XQvEhUeGEvyLAskPIpQAwTw/UzllmrOyahwDnM7kx4JontED/3yLqqmCFWdHSs8psnC18X6WI0LKf7T3sKa+MqNfBAeidRJB94eVUu+1ogr8/UHbL+S/7UawebZoxbUPvphHhHDkYs25QnpZpdENeSX11GDwFEjjSySFonIx4SZI8FFao6DejBJsacyvYmZyglC255cphmdFN3gwNQf0cYUJvLAC9bkN1X0kkK9Ek9LpvXjfY0YlM0IWbn0aeO452wxaVEFftpX5pVPhvzQjNAWOpaO/c7W8qLctY+cfB0wxjPnDIttdT6O6l0KHCXDdwezH3dJCv7gqfv7RQsQiMnqQpxNuumIHkss7NmQWemgr3PFybMG0Tq7FID5DkCJhz34+osYuDm92Xo0ArTg';const _IH='2896bbd493c5f19b3948c9a8834b5f807307389ec84e8cb68527c6cac9395505';let _src;

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
