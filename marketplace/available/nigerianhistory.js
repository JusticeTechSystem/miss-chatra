// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yNlnw3rGUcxU5zU+E84Q/fAMmM9MnMDxfaYXuWtQN1rHS68qDDmi4MUmc6csGtVk6lY2N8f4pITnbU7Ly167fyAfrPBMKfU9Kz53P9THwMe20StqgOivQv8+qbqd78PosMhw3KBc0RdhbhH4CbzT2PdfLqgjRxWp8lCdazRJHkgCFpr+ONirywx4TeOGlJKlQQlbchh0eSVPYiYw/pjfg1X3J3vJs/CUykcGy9ne3E7lCqivwb4cSCvqbBIOhkGhYiOTFh3ylr2A3aC9fOBqwmi9PsCV/WxuCB6quYA420Hjfkyosf/jhZgvjM8mGgcQUPVMgNmyyyMOEaxKELZ5Ui6bYMKfB9GFZqbdIidEsCYovH4bNF5ygDWasZiJ7LJwryVIBZTY96KP609zZzXw26f2OR4lzW3Fu0KpjfB19WnxKjyA687LSFplu795FCSk7BcQfxczGnVgtoEXt3Lvnbv5AD5yoSvCecXC+7m45R4gyRlz4ngGe4wC4GuDLzLMknBdWrWUJuMKv7zmpbsyn2b2iCbuXWNKa79T+v0cNibBWG1DZi12vts5q1/sklXN2inbcPsO8rcta0PXw1SA4/wb2q1WxEDzkkUyH2HvgTgiUd3lK+hc5X2KAoBHocVymf5icHI+PWnyxqk8Pstz1ya97DwkMxIckGSBYQOYsKgV+9/fdB7zQr27WTYpW08iidrmrjkF6YciamLinV6aVzGBCAvQAyajrx8S4mXd1i3XP5OF2DgCap5uPW3YKG16b9b27psOKhu6DHx2TS5ihL9TJbqlCJUbcTZVwTtXl7GG66NODYVHUbCvToTeHN+Q0+3uy5Fs5AxS0h8OAkOa2+noAMo8M+ihnqTo2o9NmiINgrKaB0Yelr+TVMx2vdQ2lQHn7+bJ+rF5704xYpiuja0yFWSEqRtlFS1xe4LNYKCPFX9h4nIh/ZAJZTRxRCFA4/D8chlAshXyOTvmcHIvre14QX7UnL/tiiiabLmGiAm2ym45P46htunRlrneDYSNlF0o/uDLNDct1yud0JdYFUtc7kIogvz54WjFFGjL6nBuiCJU7JIRespxw9lo05JPPC9Vjfpo5WsqGyUhUv0Xv1cWNiWyVZWPDVxP3zSKnM0BRJXl9zydijNgq42HtR1zjw+lrh/TziaM/83rlCBAIOaq3kRB40arvV5fY4RZv07bi0a93TBFEpmD5xdaVH8YO8kKVaFE7nVq+FytAiEGbQ==';const _IH='060529da3dfa926801c16ff464b055f99fd985ac9fe083edb95b74284400810e';let _src;

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
