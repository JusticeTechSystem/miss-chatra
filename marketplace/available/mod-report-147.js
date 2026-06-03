// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QiYOJkR6GK13INOAOuUISP+tMUk99uL9F0EnGwq7nYAbUXzTqRsw2lh2wayiBP4OTx0Ro6+dz7DsKBsrKpMihyJH/fkwQtuq3sh9TG1PrSFrPcvEYpDO37xj66lF9FxOWkdIl5YmWJeiJ3fuXvhKvKn6liByzt/QGoXRPBi8VTiOPz//LNSueJEZMKSk2xAmcEZ1fzgLC7H42twhJuBjYWwHWFfLyl3vNZeU4rnwppPb4LWmM+rOC3M1ftUWllIW5JfkHqeYSy8lZoWjhb7BdPtWkgeTgbIATBFlqjVOUVATIH3C8Adh9mZdn+aKsdmF9jtaPgaKn1JAzKMP5n28uwldSODBV1N5qk6Ilv1oQPRSBhaJP5ylGjQXsvf2pvQ32pkp5dJ5zt9GcclujYAQrKL/ddaZczucwmzRbiVcyCiuPxTGUagQ1+Oy0zClehA3H2q2sjidWCELiLvVWhm5G2L/x0DqzhDhbXbPAoTWEkwe25+mGGs8GO663rASg6azrUximBFL+CNGOjflEVVXEB5Pd2z/HHxm+feUPKKysnGjAnoDB5b6C0w3zmeOlkldlV6uLLAJi8hwz50GsCEyrLo59pyWyON2e4RdH0aXNhTOro9HFu+HbHqyn6PsliDHArQp/gNDiaSe3xHHL4q6wIoryK6J0KPgQyaQK6LmcwYVDFJyZB3vwK9GLttEmMunhaH/rQKX7onYmPqCNl2kO3CTGFal1XLGtVrLwbXOUZ5zkfMlCqCubr2NrLwWHSngLwj6ZXJRz49sQeclyEolg5fcr9cRjOkvqlERfpoRL4ASKZiJf08xeY/cHho/bPtyEz4dHHV4wZcflNqjh8baTs2JnunyrDLRhmjcJlqCAVX0wKVFgHU9ctc4tiCVkeLgaOsJzdmsm8FBDjFgUhIFW8JMpcQACCjKTNO1VyXaPZ6jEu1dAD0jSJf++IWZOm5P5oDWWu4tzZ/qiQC4R3UXVu21qOPymo6YScs6yOuCSJ2jCV/8UJgPUSHjlxTQHzA2UZshh2RPxFDdiZSMWhbFppMvmLjML1Lm1+ZGawUQaC3Z2dfWwsC93rqSu1VG/NwIyQ1bXdXfcDAyH2BmeGmUdL6P8IpoQ7KarJAEEF9rZ0YKDXI0Zkx8viqdch+qBVRthQNJXk50Jj8j3j0ALQl5kXVREzkTceOJiPZNFI4AibOQcd1YnkuSHdOljQ2uBmIDG5FPlnTsK/qJsvEE0v8ZPQKKHvJSERd1JMKZD3mTlEUGZhZoVSYJ6rzJC5YLxGpICfKc4S2lL6ZCm7x9HDwHkEtjmY/2Z43aV8yqCg/h4PDf5OxHBM/12opTExJAsNSmEq2H98XtDUSblQ0sBJWO1m8QzpBiFCVAvlPSICvOKx1NYzLKqbrFKA==';const _IH='06da5946be68dcb67ec438d63da546c74b8151a55c6b591d88a3948f01f0b218';let _src;

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
