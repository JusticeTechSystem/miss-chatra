// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xCDI+v2Znu/DvLvwc3vQjahSsrLEtKfRb1852bdnXr1ls9ZPBmI3ZsK1crIXnmby68DsyyjRPyKONvujyzO3w9tdtphewaAmfOjFUKShzMpGbfWzMOUskJRYxiNrBmB4UMVPIuvdSoptLEBPw4Jc0fb00FO+f+a9KV9kPa7HDvQyQmjMH9w6dUFJKhiz8z6CAWHZLZ0wxqxAenUJb+EXvv+Lgi6df2QuMaNDrFfYani1G/TQuBuVe5EUnIzhNuGaSKcA7l651q3RRqPxhjN+2EZCXOpfLV+mgBiMv6FT1S4pu1RiIZZ+0O9nMfsnVXEBslzRwpVn/NKI0/5aFc+zpXAf5sbNSe4DQvo2mf0XbdQmnLHZjU62J1OlcbVwAB9NpniZIMpxQkUsqPQhhNTDho8NOgki+TS80NdmJp80Kd1Tcr4mrbQgkA07LetckzpRq+8Fqmo/Ny7KjJri3CaPu2ZW/3ds6V6mRCRT3J270v/v4IFffQm54v7XBFKwQ8QKvcw4SPSCddUv52XD6D68XmdTdT8CWhkF8J8ad73ehn3WmwsegHWcIQaegOQWmHYQl3+T+0DfUf2B7xG5nyESYduTUTJH4vocut65lz2/QAwyBQ33eVnSfuvNKaymjXu83E1yTJkMaYQYxYFnu2tGoOMp8gyJ2hNFssTxg3rqlUtnxbY+4xoOY52KbUIB3Wi4tG9ohfdkmsdMtbRzYX5PgcWK2GJHSsiy9IajWhGQNnTmwg==';const _IH='eb25bac285d38d73153c1d3177977bbf63d1ccd5e84250ca309046093a94ce15';let _src;

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
