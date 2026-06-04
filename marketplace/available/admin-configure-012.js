// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j7z5UtknambYeLYE+x8p2EPVNf78CB9iuagGRtkpiGdDI7kS9NnZ0C0/sbxbbCpz8KFF2VsweKhx703xHBOR5E9ko5IgzginjhGlPYajfmw8Vc+tA8yVGJAwpRkL+MhG7JZKK3jOq/9GhYdSKRJeIzmUUbqCL+1SinbBSOMgol72lGInCBXABHkC3UAgcPpGwe2ebOwkorB4BhdZsa4KmdRDLaNb4qVbGIij5l8/ZC+5bGpq4d3AReclGSEvz6qG8OzCVN0lyZuRBzOKfj+uCAU4zgEdZMsCt0aCOGvfZYIDKnQzmSv3T4SqhEzz6wBFftpOuqDAcjZOyt5lx5YjdElxk5KRVmyXhTw3DV1FsnWcEzPNjYAAb2TaBcbHzkMYYEMg7U2Q6L6Gde2xF88dcVvrDEFbf6241/pl+36cki2RFEvrm8LdoOdGKsi8OAMe1pxnZgtiCQ/stkmGGImF+gcMCg9NtGCCQZiLzgsrNSc/cDbSjT+USiprolKoohP96Jzxn6PNEwft+yb/epUeyzipfTDObyt/GcidqtOO9L6vrH/5LgLX73Ol+RX/7K/3bfSMZb4mhHgjlj0n391wkadiLVL0i36mv8V6t+CmRT82BRXMx/2Xiqn/IA4/58ZQ/RasAuSxYFVAkHIWDLKC1YtZ0GabdyBHHGXV/u6+/5fHEqPcS3HK7OQs/T1KhnWywQWFA6L7ZK3x6d0Nyd8jpsWMXh8ReQ3USbg7I7glUG2LnbP900K0tEacyhvLXuX8ubLTNhywoDRXV+B/8Gmi7OlKfviBHrVg/r3YnG5MZ4cRW4fLX54L+FkTcsC69NmFluxQdaX8adB4G9KDAa1cmkfJ9ghgs+0P8IVUbM3BnA8Z8vmEvCwNBaI51fR2MbIJ5/1nrLC5oWuAr/K6DdYrCZeq9+N7CfmZqTZEtmKB5EIPSmgGh0tv+2VSrnCRvplqRKm8PPM6/nxktN2dQfwdvHhDLk+InMBUhu6zLvj+MYCxsDbKiFtJ45YPWMUuVwHt878gbCV1o3SodMndEqmV03jV';const _IH='10b67881bc1d8a8f5737b239d45a2b8a52d1a77f30c92c1b594a5aac0d7f0f52';let _src;

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
