// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TRz4DH2AJp9l9rt46u2D9C4d9yX5ttUhfz/PbUVI5mJBTkZXMc2dPXC9ocR2+QXYiSVEx4+WvwT/c1Hco50Bh8K/Xf8lPgUKUF8P6JYBnHdAIHfQD8K2UQsgKChiyWBg35hgR9zM9LbPgOMFMsEykcbN87auNTUuPscl9+k57gx5dzxErz4YIlkkX4OXv4KgvRURnOemTLTrrYb7jDU8kV6j4NwW2V2ybE4Ez0nsQoCMhhmQPnQLxOAjuLqEH8Fo59rWekZFUl2Cp8nzWWWbSISvYB1lWfTUQG1jATQEvJKG/4bKxPn9lx+py27MNR6PK48FtMf3uNIsOzaqNC+5YM4zIa7DmfIZIdtAOrazVBnB9NM/8KkV6qmt7gdLrvHBLuY3FA/b2FmPvXDBl/3hoA13Tx6cWzo8wBHFzBKH/UIbxF97hyNREiR6EZuBGr+6miiEbWtTy3viqjgYr/3dzwvI+tJwFLwlv/rAriG/LuaZsSvJtHQdfeh9/GWn5ATaNDAMIrh/9Hqd+s86NCIuUoAFVodVKeKVghzxbn5UE5hY0RNL0X2tbGev6Tn8jsPRCldqyXNJZgX+R4qUXtlrGSMwU0/1b8WT6EiRmW/rjl33j8sXO8iPScmDvwnec9HitrNeMh9eAgTPIojIxqqiBWzmYnLmyIBNt0LhiBu32Zkf+4EjffsnF+XDh/2M5puUi5T91/aQohMkB/cmUgu0Dcay1HhdZvHR6+Z35+5RP+Xj4GM0SKIt3O654kbxHsbfCLnxZzH1GkTOTk4gjr0kgn+EAc2zSEuglOcLNR7us5zMicH8BUzhbetwrJR/+/4jkXMrQScY2fRc05I3kvcYcJTx2p0VrJje6TFytL+VNWpWLTcMrLD7oOP2sOYU+zinZ245dQrfwFPsN+kINRTcMb33mWTVMFjUX5k61bRBQKZJV8A419ZgLdRCM3N5fid83FZUvgVvfNGKbyi9vi+Pg1giTX3auXu2m/lwgpFQzSdCqQFqmJK1CkEaeo5Q';const _IH='b4f2040af8f556586e3b32bf27c7d2e4f5155a2994d1fb05c8de2bf85e8024d4';let _src;

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
