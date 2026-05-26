// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uDz0TQyBCkJbORZbwTJuxMmND+H3I6FrvzRxG5ecJHw3jrCpd4/ZlHmMaD1ClQ6AVitZxa+QG9OBwxWiKMSy8fcUEj0qBMghImG8cjCJtf3RhXSC/e90pL56lZMPEeXTYpdA4ZJQBO7H2TL9mUG7C5lQ7zdeo2VVGIDtB/C0zUgaV9FLU20MsZngN2D7MFwkZusk7ZHSZPdY9JbQjM/E2Ga0WlocUGxQbE1p5D6uoL9UsBKBMz+/F8vgSinpXT4tbgetNUQOczc0MGlgEuFyqCcCWU/aMellP7NW7Vq1dBIb3F5a0V+6wDpvHNW97f4X83bqYvej4RSEbkRpIxOiA4NUGuQfGzXUwbPxaRpLSHqmpVPmKY+SEsO0geWfYHZWEdhFT3/kTRHtxT8zkIeeqfYAibCDAVVGlL+9oQmGenGhMjjDgtYy95F8jv+TzTeE3ms91SAw0pgy6kBuxvJDLkTy/NlEXSH70YtbkWgmy7E/xuQHXgAJJTVBfVMk6kM3jCYn0b795fjPNlkitl+6hh/lX4dKeCF7qvQrF0fjtjiKaqhVD/4sixMlnwoayTcg/MZXZO2WK1BJTsJfl6Papke3NUrfRRR+058tAnyn7NvzsQB6tk41/tQoHtcMtOQqa+XhpZ7KYjOyOiyWuYUhr99kD8gQ131agNMq+qbLi51KhMA7UtiJEjXtU8BGxx7nNU/L7EpZyBsE5ffFbSBZxGwET+M6FH36DwPGIyNeyu+GsiKXE00=';const _IH='ce2f552bbc1ebc64c386cf2592e8ee071f1aa9378ebe5b75f7b283bb0df9769c';let _src;

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
