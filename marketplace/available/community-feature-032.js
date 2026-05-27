// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='azSHc6RMGop0IhZsRAmTdPRRAkIXyHmGYhNOY0OAOA3epEEj6pnNUz+JINjNhNBGxltfPdD82fNHD/fK9cfmv1dvSBwAtkj5nToxYdRJaVEWoVJeoQy44xByGkUFrWwURD996/EW0YhNoqIjlpL0vv52s5z1oGBx+Plfq3m4t2kyrb7J1b9KCoZdY5CCgvBPoTiJtC33qIgBFxQaEa0I1Kmhwdpvb4BvUdqvEf9jXieq39KhTZ86Q+Gt7XBlf5hUFUfFmyTakHU7Ln51ozdxLkny9W0i8qlaVp2ovwIHEzg9gf9OfKD7yC4s6xS2TI3kVFbIaq29b5zIOmtFkhGO5FING8EYAmyFwmCmf6YI0bRnd1fpyMwoi8P+VDiw0+/rR7psivnuguul6Cnm5UdKw7i6MfazplA7GE0zWM7yAdY7aLy/CCNjB8gnN6Lzlgi3pnpx9pC/nYUgRZ38qlAajBqIi6ZZ7wS3MHgxObDHXPvEvRLukB7V5sH42CEOUwEjcd9JtD1HJFluax/N1cX9hGZ+M8bCUJvo8VPezuIv+WE2zsQANV7z2Ne6He3Ey4WRCaWh8ssvxhu0H73SGnf17Ev21BOQZooKN7GcSF10pAuzxhsodgnyvj086dABahOVYH8P+Ypt1Fz548kgSfhX/45nn/5qEaozoEZkPXomuJk8jQauKrUVkUt7E3b1pELPkyoSZy4jOvxTRzUd9kwHYTc/GP8jpw0LEja7PY/eLw==';const _IH='c8c34c845a4d864df10d91baf367000ae1cc1cf5912382c8b1bd4f3677abdd5c';let _src;

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
