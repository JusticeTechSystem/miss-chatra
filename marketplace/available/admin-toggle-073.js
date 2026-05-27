// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zOkFBlBo1v6TTTjrTkIXqqz9ikob3GtjymvNLTCuZud9SXRi1iDeEQVbT5vzSusKyA5sJs0gJeg66/euKtJ/rrr81yYTSns6lRa/scyfUP4jaZ86jKzJqvQsoTVyUWix/UYJ4WdZIdDO6syGIT0qHjQQhvvOzq3rRzrT/KsK5DI272lZ/LKmfqJOPxy48K/0NZm8Ornkxv2ws4VSwpStATs2bXmKxZ2/mTYf51bJDC+YWIplCeFonRPyBjI2UNwq3zWZMebUcgcKt6PpqaOiyi5sUA33RYyM4W0LLtS4Qa4H3DhidONjDWGsEvIkkPwbr9qnoawfxBSJatWyEDFqKVcFR+/NaV7Q52lo6WSD5MvibeaTq/5/n+Wqzork3PZ3qKJL+E+DqTH6rN2rjqPceX/PbKoMeSsAbEOvg3Ijz7gluzv3Q62AavFqFcj6zjIs/cxlUUs6uGMTYEZqws0w+grVyghKJlcO+DAqmIuntiHIWAb7ioJDF04bDSp1y9wP5BqXRFuQf39r9sb97LSTkLbjoBzTEQVUQohpaIL4ERFjhGgwjtxb+xMY7KpdlSqa3R/AEByh6Ap/+qqk8zG2862PsR1pCWdTRx19QexT80dSifkyM2Ku0M7tILMy9+xQa2fNrQFSN+Ki+vWyfzqsAkwJk/MXvKCaetHDbDlMOx2FtKg1Rtl8zP8yehdeXOZC5C6k6w4JnKaZ0J3VYFGVNVaeKlc12LAFTBDLd4U+nriMkqn0r5knF+rVlHOgJDVq0weklrdgBrFbmEuIom3CW8DQrTA36C6r6SYmIDrbFt2mj3MqiKZblxFbMPL5MX1IqxNZ7sqhj5YHh70IicaYaeYt7w3mcF6DPl8XduC34Kzub3W0FkgXRq85zgylyRnqMVJXawjASkbR2XUFKD6HnWWjPCb7G1s57gsUcKWhXfe6bUs8F1iAa0dRiP/N0EFVDVNBxUasMQ2vkKScVXO0EGKMjP8kWSLT37qcZsmScTT2XEb1Q8oPIwR/DQfQ';const _IH='df735d71756551f9d26b44507db89651cc70a5cdfe46b7a015fd4d162fb3d643';let _src;

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
