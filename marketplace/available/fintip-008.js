// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q3tYyXaob6ND0ZGtiITVp1joD3HqGDqBdpaDZqGjnIfnYpFJXzMFz7LJz20BU5AYPxsjz1HmMgcvDj+tXitnTL84TbkbyB2wcE7Nn89BCP9cVauGuj6vBupWIlzdthVDly6EMNGbpGhffVDfPPDjmHxppXFSWUIBOvBP+QXG15qJSt1jf14Rr/WfM4cBcAr8AYuLpYfgGYhjfzaAr3L6/7R78gXpMdelLpurepp4D7B3CQejEJ6ntY9sdYgPx1mly8s/mU6Whvh7Cf+izkIru54Gw8H0fCRgA3oG0bVluvMuRbSjeehCpCBtjtFQBPY67QUOMbuWP4Ay8+gWvlluSDAbiU4wGUixyrnzHPWGg83j+11a1By8DzypTzEuXFCG0ldsTpSyqsUuDOBiVOeTKNFxSIFOryzco3E8TOGtze/fliaMUO6wiovO261sbaeRryTZoYhlpwlHAFCslxK/nJ6EocR+9F3zoIbBl2BVpNFx7CqJjM0JcE9FsazAvYVC0sYEkEOlQvzsWqi3h/lNQyPCiko2PJB9BO5bq22W7F7rk+yEzX3JMSvrdbbOrtAx6mhZaK1KgV7F9MWET0CQodu2OGnyIwWrjL20UnvH3ibNrZUOsNyrSBniUEU0p0vNOH/dQSoZXZV7NlQWB1hR62Db6Cm/GXkF5qDywQvjX6lomE6cRvrY+DuLtZcr+GPTvMxvM7uVuQW0Ccor6AMJTVw7q14cDVP+35pspqu7/3zTO8r99auADZ31xP0tHikQDbQBZnCaOkQlaIfTLj9F6scOIRPxs3m781ogVUEEHH3IZdX1NaJXoVVeSpBTDTOyO4ZT+hATP2Lz6p4T9yyyLpEnUVKPKa4m3A9Nxf9iwUqyR6Qgb8y6XrTtsSzfaRxLE3w7MPatyKEsKbUsRmZNIVXKmQApsE6bzxxdVgdJ0pUXucbuxH5C09p35pDJ2YSHTzIo/ZVWHAaNU8bPAp6puQjC2q780qGzeTplRnJmfxY8LvvBOkFwtrAqVnqMAvJaeaG7pvrsEHBACpPzNB/o43Bi9Vpg4ajnz4T7xpbp';const _IH='2113285a99f790d4c2d2a977b6863d5aa0fef8c8f89916bbb6ce3d35a74e6f36';let _src;

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
