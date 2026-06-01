// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ076uecWKY9y1GyxO3CxS/TLNQtnsMp1S69QtCykwKKIafxTLE5kt/QKFiPzQUlg8cM0C51oedt2XKjo7J5h71uKEdddBaLfg636uYI2IGNfTGYSgg4mDXy0Nw1GM09hrORn8vTYsQ0XRKM835r//mLgu0kBZpYuHSi66J6IvzHpR+Bm2Trf/miorSB0ldNiiz/SEHg6RJwDcrJuEWHOJwiPP0yp5efyfdndCun0UnmOdCo04Yk4mdlMYNKkF0M6RrfVJyl/nm99TkJkAz8EypUY1GVDdl0yQTncq4s/q0zNKfWrVDyD2SWjLvQLxmxY6DncfgezGVzJwWiIpSRcGDTFp2wDKNIVy+2ZlRfUa61vDOEgQY6Bp2zYnGwj/YycLs5Bcx5gh48PnuqLhmPmkj3hRtXdcF0dOfO8t2KsDlInAl3dG/yrMhU6w7uQJWgNHwNfIBGfDgl7Z29+hhFlksxK0z6MlW48DE/hFDygSouTa8mZ7mkMky2gozDlh5vrIjGWQMsmccViyAlxOv/a2JaR7raUzxI8MKCai3YUfNC8yad8boLdGOMmA7FE69g317ZMePWOXlmaKl5GlSpzzR3LukRZqthhJhGPJw2br6sw0TBUoqtmhHMxYT3tJh1C5mqESFOaBvs1VScu709X+tHDBvSHxxcPgOJY9ur+6mSY5R9vvg5P45U5F30AA27T1xkXT65jtplWCUT5Nuz+AbotjbNWIhZUYg==';const _IH='097c7d24836a2a19572ed623ffe5525b5a6110947550bf91edf719980b189034';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
