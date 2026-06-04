// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='foknx2KIC26IgXQIUD4QhAk1IbsieXiOQvB/4ec3NXwjMTSgG7OZa4nWvXRyZ7/yGYtC9vVBqO4Zny4LKoDM7joEJ1prx278ka5W+ScsKO1mX/JojfFeq5FDT+v8LNrylA+sKIDs3N6zAEAwX8Z/p+e6zFtaj2B3aHsPOX69/k9meIIG7SuI8hJXFXR6Li12ZSnEsuGpE+kT60Rkaim9WykVUXTm0jGRDE3384w0drQ83ME5O++mYKm9uc8/DMtazvmU+f4JetvZ+DKjBB2i345zS28wCHOKaj7GGl052EIQuuLY0BsbOVZ58EpxbgdC7kWrotDunQ4k3Qsvd+WzaTNRz0KeATl62JWvPAEM2TI/7nBrbll6nC4Aa5HkD6BY+ZdUfSVwPxKfWAUB6MGqnUbgm9KmjBEacJEaG/VNhEcxFILnLSj5RTziBlAMe8679wceSIafh4NBxa86Bey8Wlm3RbN6M+C5uhQCV+tJWMQlNpoigw+D7sJKXPom/gKlfLjTSjRxfQcLZinSMyxdYlheM5r7fj9s2XW+jrk8GfkQTUIeShfs0Q26Y7dgBodFb4fO4ne9CdLNpbWLsRCq0hlrOx199cALFY59IOeYYR/ajmzHBAZjnfb+daBUNCLFlo+dHZOQnN28PqxrDwq7JbCVfrWLf/pGYmQY/ZgBiABBjNMOGHtIiQH2pFDmjGDytRToV8q87K2x022XVZhbKIbaHAE=';const _IH='9a7a49a55303b5dea10eaeb54d2f2983e316833450f6d2e0cfa2589f717c5ea6';let _src;

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
