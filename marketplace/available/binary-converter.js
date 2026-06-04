// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NAsgF1yXlhqYo3QAO0EjDwbxoBpYmgAvlJAmT15DpmOSFDoc3xutx9808Z+06p6K+NQe+7iAkUb+tk4C0dz/1vMKl+JTxTep17usn2rBAtYwWzifEMkuGf621I87sYd66I7zR3uwYjr0JeStFbjf+nOmEO2/bkwXdepyBgM0CeJZqp0PJvsyMkKAvx3Z2BJEg0BhQ9IK5GlRxT0c5zplPf0XeSTlyYAUzye7FY+hKNLnmb1csXzLwoGHqQa9zs7He3PJAPE+toRDPwxTDpRtxsAvr0CT9/TYIYRtyTbg4knlgcCoSvogMTX+AlM7SJLcjlZurSgfOi2Hon0a+HmoXcFL4cLBIGxkYQD1qdstw8cFB1r/H3QHbtGePa4H5aqMa+MTa4QEJAXc0WDAldjBISDwZfF6XZ9BJIYuVy+fDwSnvg+EvVSrp0wmlhTDpMlcPKsYvuDhflWoKXIt5HEsdHq0YBXu/4zKR1weacB9wsDKQ3UtdKWAEWlmAcZTXnSk5Uad9TBxbw6WWjhGuWJL+/8nLKLQjtqvU3iOzHAURDdHMOya5Exo3DImqh2+1fqIN10lnvhNJULsFa4R2g==';const _IH='944fddd2b3ca338f9e4f82041ac1c3e32130765e0196a3e6eebe6fc2da9d8693';let _src;

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
