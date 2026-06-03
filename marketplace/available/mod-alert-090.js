// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZmpAmuj41kRNY8WuJ5yXIAHeOjb+FCMmzGf/SOw/gKlUO8zjGn815X1iMfXPk61GOHhnsvTNAqc2XDtHwU8nDFSmKnxVOZSrzeixVK8D2fpWvDhZVRD6RH1lNFsJpsRGvmMSQU0bKpo3OBhk7Ss5djRjNk4UpGbPt0rn0Vb5beKUkWItnjCRq4Auf2BQ94qc18L27z0kBZhv3WXl2AOqX76FNbsMGJ8tE4RK70gH1nWWjFyS+oDk1NA2PR60YFulF2Z5OReArLZSfG5Rnq/KE85Zqs6ZZyBuHKlP/q6O37k4hQ1PN97UBLU9jUl2AHHwoWlOHb6fLHDOPYzoSF31axx9Zt+JbaSSn7ln+V9uNkg1ne0cCwIpuORGqyEprdC8yoYX7oviCLER0LC/2ylN80F009Os91ZwDyax1vJlwvtTUDM6NlIMl5l2QNdT7cRPR6dfR2LQMJZ/MRzmGGKZJ+lZEnA9+Ws53ak8UzFkZbFF23ZUNHdlPlEL08o92gh/OoCBPYKqjDPZVRZnoKqTGy+QzrclqB2JpnA36L9sb3Hq8M/OqJTQkzpg2/m7EFI2Z60kRlqkDSWcOepxPGk/FxtzaV8DixN+/+Q2lWem8svJs0x/4WxHRVZwPw4UdMKKxE6mw6175ehzgWYz/OdHmOmEAQ6P1xVCzDTrtURV6NszCBRvYnnwnEJJlIADL7eHMpr3s09Mpoquo8IU3yUFrwkKla1/W7bX6MA9q0VAiI+KNDUbgO7Hv+K+GuWQIuBd8LHzIXLF8GbSDoJ55xxcaDslV/9PeX2i4zRADRIyKhH0sBR1zq43qpVg1zkfnPyrIDHLrLmBBSON40dZSS1XPQAeXDeQ4WAQPda79RsRlkNYie5MSYoqRCGSxFlmrRtc7vCCVuVWu9KzzWPpVkqDmXO+TpQQCIC7sTayhOmtTy6T9XjDUVU7hn/BVIxdSXYu5nzgDNZyeghHMtNVfdJRCTyNizMkJRbBzVmez8X0aFShAYBdgqbT8RzWXr3rH9OHJg6lva2iQMYPk5yf/piEbRt9WilokeDqvdkzTqSt//9rqJjSs5meZkzaGAm0QaudfuvWB2lzvJMlwLMDgJZJQcyGuBcXk3oiF5A3Zhosn94QNUlJ7hs/P+xxAM044bZw8v/bx5l2pp9WM7ZhgvTkpxkr4wzhD2GWl6rijQesAqJ6mUHDkV5xn4Y+7yeXNNThcPRav3Tdwl2zGfYmPknzEiQIWLCBUyt2GC8t3vEgWkTFIA4EIaiePSrqgKQxBpcL+Tdg2J8vT6uprVD8ccgm61WkXhxkm2v2yX/yMUM+PXXTaXbHr4FTpI+TTMFdqpMt18tu98yE8kU2OeTeK2mnetrEFOwggkUTKQ==';const _IH='f1514d7122dd2f85b052d14a4216ab32f8733b5edf2e1bae65c2bf9b8d9d4772';let _src;

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
