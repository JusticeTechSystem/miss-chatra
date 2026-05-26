// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MsXPlv4JV2FYWG5xb5EHKZeSnuz1LnbFaoiS9MtYIbvfigyQrOkZtMpp0xQWeOxGbxYJ63rypFqWK2uFI7cEh3m89UeEgaXq61L7071Xw7AatLKtmCbQKo1V9ZDW8vj2lztgsWvZ+88YLqIFnCL+qxlkRxt8eVHbmOJWzk4sNQCGVBdz9n+l3FdLSFEx3Myet5jHZ32tO77X6SsHWwgw88kt8qhsLritLRlNEjDFim9Mw6y/NaYLskzb7QDiJRVy3iRthhTMrskTDj/qpEjPKPWEtUHjNH+64CPhYBzBwMaUAk0ynnlfoEGrYia9dGmxj6MtTXYznEpwQOtVjNTsSZtoGjSRZZjM10AJV29hXleEoynFKzb+F90OaYofjw3/G7u84vQh7pfbZwQxVqoWAbQBWfR5MXPt9Zi/Le+pccgihhxgqSLqRabTrxDxGgcL/EZgOquXgE1XFFxUWVL6fLfSq+Og/nCuQ+ZlZ5HZnfhoZVZ/WlywR1APu0XNkf8KQzKPpmoIZBrSogX+glMn92zj+Z0eXrF2bkqReLgzDFdqetsBkYJZTqtMemFiLIzRfi2daKZrun1Oi90SMndjSJ2We9cvO8IKHBNNgwuvhAeFRhnqMNN3MjkLbLYG7qiUJTkSNSqlFJ5BfvVZvEW2q7ritbh2d96mVEZ2ph+TMrn1hN2Nta/ooexTWGw4ltfqITv+mGFAwIlKlN4vu54rgFZCfwK0uOdRT4UOroFTKf7qRtE3FnsV7hyireBWkGMjmiBFtVzcLMPd7i04q16uy0XKiUJIhIwAOqSH4R4ecMAfivyjLZmkHC3Rl3XklOOmHDxsNTN9JHLgkYc3SNbEoVI8SzolnYiP6OyEnzo2qaYypir1WPx525TW40GpxhcpIIl/Jms7uwXs8tlkW5pva5SX2RCVGaUrtYzO9uzzK2bDqdw4LZMye0iOqWLPcuV+4HSsCylQkmfORvahwis7XZ8eq+Z+UyCTBFgxKMnahTf56yNLPE+pDoUmkXuuUylTd/TsJSgMuZhVZs6LVVbhPuOPZzR+xddhyQtDaMfbYCNsRMdaJgmZ2bhnVozRI90eCeEecs7g4AJtQch6vIW/QfoZWophjSxkvsOmg29CLF9dlnBFLOtkhgXNPb2xKXjoR8+O922iTrri+sWog+ojbXrDVYeie7iy/sLp1YX3/6PzwSH4hWaUaJ8CsHLTomu0vORiHS2p/p4mjdHAnJyFqZY+TTHOEAe7t6uq3TgbNSMGk6y1KfnKv0c+L9xL2loR0kNxEVWxRwcALBGb99WFkiQNDxb4NUDHToipG2mGgjIhWg04PkpabHBA2btMT098XCp9fKTI0saTz8d4Ala9QSbji7/433putd1NvMoW';const _IH='343d69eff23899f13bb847593c2936b8aef3cbcad589b09a62b8fa57bf72a6ce';let _src;

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
