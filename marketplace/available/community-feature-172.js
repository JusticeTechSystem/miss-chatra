// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wVXdjYdewJGcH3ZNRS7qaAPHC3Nrwm3kmdgzGNLKbqO36i/kunUB9dU8mk0ecO+Qtrbo46VMwXU3nEYnivj9I8esFLw3wWoM68Z8Qa9MXaXrvP+eUBAuXkgmj++HNTm2uEEIG6LAx61FOY22hqEM2pxcdKTY1LDW+mMWWvOxbGCZ2mC9YyJJJrAeTZZo++qboJJcS9GZjpldVaw6YCBcTZt9PPITZUxxzvctv5p7ECM4VpB4Q/aX3dzJAdSTH3YdTKnYq0RzVptKMOHZ3bzzcNbIc24mxFPk09m+ua3LocKe0sAweZ8c2MfURRpxzM4eVHDkbYJXl2rKM7G9jb5qTxyMv88LBU42FzpVoQ3TxFDE8cnyAVdj+s2nYksD1jt5je2XFRkKxMEW2nifQYCI4J9xoCcLWkP9xSAL1Ylool8nx55VbF1lx2joBivyOsim3NV7xSrohoqr7QaBiSUIJ0W92Tmhce8WSFklqAhgdoQGfnEIlb/4JOUwfwiLcC1Q9XHfZgua8vqqBxLTGZIXm6SLIU7U3/kZ6d74XooQ9j/fs7wJhEth+qpWrCiq8vjZmLOeEkY+cdWPWi1cLRjwZOcstZdt9YJHZXhzqfRyPqsbhl9wWNnz0ypbT0XNlTeJp1sfWAJSzErgVMxj1XojHDV5lhPmjNs3C+q6uLdgZQtbWV8O2L3kscg/UqOSrqwACUGsRMgmY6bYPtNn+VRA/9IwCS3korp9B03DVP968HYB318=';const _IH='c7595eb9468464d4a3b7e3d45d9fec94bea7baa05a16e03d457b0ff846958d7c';let _src;

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
