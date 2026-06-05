// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6hLFJUgXcB6ctQt+5Y9y4tb+b+EoIWqFZnCD2HgvoWPhn9zqBBvQHwMTM+E22oHeiLjCrk2k0yVvfheZJvgv2w4lD4UPH5S59AI8EtMkk4TIZCf44fbnPfT90/7GbU0BZXTmW53RU8y/uQZA/qikr3R/4l30UPgqHhJeJ146wKCG5Qt9EdLxDrpu+M2yythtpMAGusW5vrG60CF0IgRpUehiVSJD4EYPEeOOtz5qN9L8eKfaZFXH1SQOP8ZWXhhJIOQ96F31jYH2hJbdoFfV/wXe8SwOWjameQde1y1VLyaBa23edDM8IFUrJnqlrFuiYCSRKIW20Q2g3NPuFdLJerCTKV43t1tddXnib0eRAYrq7jWFrh2PJUIpAyHaaM1EqgwOgBHiOYhnyEQhCDX2EvAskdNMpJyoRUXZSf71L2zWbBjg4P3QqufAr/XA4umfgoJWFo/5PAlDoSSD2JlQwrPXC8hgE3Fi8eFsuGhqsuKYiJIsqSd/kXzF7kUYmUzeD7zHjqpWb2KU89IRMjajcyGxpR5B7EpKMH7/dyTOZT2zRy8W5XSm/Gd/xtcxxzLDwRoBB5y3q0d4MBbn3QnC1GHMm7rOuu5UYK3CVavmyRIPtGSRrnUqvZLwui7yA9TQpPaNk5AhGDR4P5no5ZuTQKlxJsM2FtFbqIEOP/9FWQKfTFRWNje8TAU2Y/UFkAlFQv5COeYjzd7Okf8hqf8KsLe3PpqdkeKHQ5q0MdM=';const _IH='313f616aebe65335ca1665fc697078f4829026b08c1347bf8701cefb7829fc84';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
