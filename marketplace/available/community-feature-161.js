// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QEJbKicZinuyrOh7SioXR9GMsJ6wCdbEfqMCDR5ZycQPTCqR+MMZc5NF+oS1Y1jhXjs2UIy1UbBa6znkVtH6jg6psfzc8p2O8kRcixnqmQLkXwYIVW8my0F9Qa/WLfRERDWh+AKQ5mKQ7TyvKytGHtSHJPbHXO93u/Qz4RjTCYtXcKuukDL1iDpZdYcUIfmPwFZG9c6Ip1/0d8Es1fwwXI5fXyZp1SmObAurE2GonQJvv0OQf3+4oBZRsKFUu7+JOeYGU2g7YHHKodTwC8KaTJJe4aEkelLpYdJsYJSG25fmWR3PebVyhXLKlXsm1LQMp4KR/MY7PgC8jg1WIjdEEYXu0mOAyqVCcqNxSvxuhRJPxv7VLfiQROjW7mKT+olE2kjkk5OVI69oaHxN4vnA/TD5cjkpx5FNxucRwxiFS6raSeUuKXtS+bQ1RXj9rN5gFLtbmz6khZ61IWYt4uipxR1OzD5VcNBtBiqW9byr8kjuuawPZZcaV+VFcJFFAS2WDO8Fmv7Wv2jMrsAakGEDyIKsG0udIjO15JmCoXpLK+YcZuv47n0SorZ689epn6SXYZ+BSVzM/wWcFFaJxol+WJyXHFECPKBQp/l0Dv24IA8CdcHGguCBgs9d3D8/hMdAkC0w0FUlBl9Ang2cxVFzyFY3+E1vJKQKnSsa3X62H87VswU2WDjbrOBfxUIQltylY16TMR3TF6SAuni21AyAArwywFNy3Khj';const _IH='f4bc5080c51a6c89f4c0eef78f212bd702d8b659caf936a1a342004762bace12';let _src;

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
