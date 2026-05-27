// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7tgF3018wNWHl9NgjNyG2rf+6VttJSOnuuo4X7ezUEtmOpmx0aIvHUCuflHl3AyAg1hN3vx/03SweUv+QZRddDQofIZ6uJjiRJYHiJer9k7cFytraAwJVodb9i/pkygwLxSjU0jyU2/A3ifjj6LFijJs4hVCTMms1VXM5QPcs+6vGel5UyX5H55tQxO3lcFU9qa6eXnzwEAsWQWdw4zgRLvJnO5J/nOQY4Mrn7ZeBvkdi9cj8OtCOjbv3PV6x0FmjHT10zm9X8VftFDOZUi9X1pKcrzL+Sy+DrXKn59Ee+5mZ2qfBiuZbFQHX30cfgw2867RTYHWOpXFPzkPvDGK3s4GaAzWFLPkfPSqgADJW41WVdJv8L3yeAeclrBwds4aZ4UOA8pDPLE8gS7zUVa5pSEeNPZBxpM4FfTx+UNI55oqanY3jDgRw6rjzHiLMJxjHbjaWEr7qaGzVtvgczOYppczgkwWTrTkQLxS+9Koa8wCZ4EUWkdZqDaUZ416YCClnnblpvtxRgU/YmfPP7lAAO33AIH6ray0swrWUNjV1vMHzFWPHo5g55zl0cQyGexoKDitR0ws8QufjOeuM6I=';const _IH='000f7782a719ced86222a09abb765c18e14e1389e10e9790a219700edce4379e';let _src;

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
