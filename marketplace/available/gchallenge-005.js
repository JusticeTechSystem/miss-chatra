// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yby1pb0mGPuhSZobYuqniWis4nnaTB+2l4/6P2mqPCzccV+0W0hUhskrmA95rGiQeS2jMkre8xax+8AMxIR+dejoizV50b1sVj7krobkGDQ2KnGruJH/wMAT8A+n4Hd3C7QS3z/oFzc5/mSvn9B0fSVMNd9vGf+GQ2eVRf8zLxsspRJO17ZS6OKbKeALSbyjq7FgyCn0uKuxI8geEoCO8Z9o2aBe/WccClO35bEXO35M5srHxxktcjJgW1aTyOeAzNB05GZmdjnq+/YK2YmNWHHzcYwXZekYJNytxPqVpqPSihPSc5ZtdZt3tuGGITH+bKwqrZb6Qjhz+Z4MBBzrlu7DmPw3Qu0m212uJRHAxH3U9gXx81RbLOSE1eP4FRlTawJAypiOW0lIBciyOcSOgVNLngnrBkZ3yyQ4ZAizJaN6BlhSXTDTFkHBjaHLYXfTC5X1luyVQzM6NIMQ8XMezqsmaSxJo/4EPPTO6ttxLl1DXM1/Fy7+xb3fnaJmsWyRdYA0K5sWrO9vzlur7EuAG6NjoKfyLCZhOrQW8L+27rATQiSf3czKzVrILiGPUYa8K38KyoP4eCenk7YT4qGCp1fKrFrNxKLWtFfr/PhZ0oj0OlULh7oKNgzNkD6yXGpXESiXlHBKoEJZNoXpK9SWex6UH9dVYK1+T4rDi6ad8EB7';const _IH='18bf8029d11e0266900fea37e4f791c690f33b19beaf22990b48b9b6db138df0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
