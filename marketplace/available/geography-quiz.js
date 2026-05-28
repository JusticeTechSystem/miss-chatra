// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IFTAWTc+Gu3N7pXsTiZTVZykcoUPZ9lhfE5N/GcIF6h6ctLexF7W7ROyx1A30ok3T6lTn976RVEP6DWvaK2rZsXALjulqKg9llxTxJ+iSmD4U04QkRQNTaDCsFxslKAt8XvO9/U4X0UK7IOc9Ovrqu3AfvKr3M9p/0GNPLSgAmW3jTVo8ftC2GVA5P3C120e5U49hOT98nesG9Rb4u+dWbGFycnkBzjoDCI1QJUItJ/JdtqsXgGL69rUdp7RcVjEN1A8cZ5aV53bnGOyodLb82oC6K4LyXNrVvU7db2mtRK7i4FpaET5bEa1eFTMygBKSdeYd6SDGw83LjfBMS0n/yygTiJaYjZeTxrdmtNhDVfcWAMaTNDX8tnCXZly7o6SvygkI43cMpvYNAzZbVrMQ1rT46i6oj4yPd1LAmnVnmGGOsXTksHPguj/Gty26PCtTdevg/0hWDL9UBAK8Ur854EZusuzOxIqa/0PA92xaHw3h8lFwhOik5MjR3c+dzaM31dQTEb5D58Z0kYe7aRio+qvsydBEmujt0pFOmooDtNRtlWreQJtyFTCSxK2EADXB3NB01WyNjj4f+cSCCK4JqDrU5lEwU21GRQfTRVss2Gz15JcAka3/R4QwOHp+cjxyzKZ9huofWxER6uYh54ma5sLXyqd304+bri0vQOBbcNQ9AcIJii6wd91ZqI42TzT/gAzyPS+96RopedQRgjGVWtQSxLxwpiAHQ1BTz3ZQMAyLSjd1qJ7GW5Vtdix+mMjLSscKSjtJlZgnvOQBH5vYmUgdDo3TB1NT7D50hDq3KfIqtbSp1sCylQQ8BCwuPPU7oN0kp3UYvV2Fwl3/XpLeDd0QwaUgiDdgkYm+5tk7qokKUHIP9I/+WjXt7pAisezAQk/P5YN4YSEmpP28Mc09v8nKCBSmxZq411TSbM7Dsv53tu0ArxVFMIpzRsKy7PMDieyNjYi8LXf2yNuc/nAacvqJA9gS+EuWjn4dWVFe5VsIQnuZ/UIVjn4xtgdLbUIdKy6feOTvHUqBEUvfdfzQZi9HLmQ1hDKzLE7yZtyiFxmSaoXKtD53ZmCxHdy9O/ZEUW0RdKJoV+dYI55/fBobUX33KoG1FvJgfjte7OVBrHmUvGbHrfVtT2ULgLvmWwjG5Kgj6bUyecMmCR+fwqDGcKxK3+6glpCemkeqXX+bygSjG6alwg0DlEosJlf1xXguQ9VR6Yxb7fZuBX/H7rRkhOmlNVS73pWA8ZY1LMgHzExgdDOIkfeAXNfnw5C2KIBxUqRS1alwGHLbYJ5PRc6grWwsrAcAkSbD8rZ4HxHbXJegnRPTbUouGgKYjmTOmof4MNy6gZ9QSqyxO6DxoAUSxQ2dzkOHr5leM6ngNRNIND66ZEPVZRA7udPbW/j5ip8ZINzeR+pJlcgqEVvec2QGUy74EDgVIuF+7Sfek2ZEbgVS/Ro1Vv8Upr/9VwQlU+X2C5/em/vrRhpuklDOo74NCDJaebnwSAZ7GJR7zy9d4LI4MUwCX8a6wkD8MD8CEH7j9zZbUhdllKksKVkZkbMppPXnwy8/WNxS+/5SoHPDNrz2rdZKaN4sqmFnFH1t0nSAkYrJjY=';const _IH='cd80420c997eceb5d7f58d7b7578d02fd2642dba2839fec0268e546e6ca312a7';let _src;

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
