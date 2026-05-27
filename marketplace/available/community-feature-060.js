// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='szMfZuJu5KVcOLJEFlRiKT5ZfJUIYX+702JTACdbrxTS6JMg6lWJaF2LKu6pDrs4364i74DoXyhdC3v6v3ukMKsLVLxR06slnjKVlRpGagLFOX49UZV30f6WeiXudNm9xszHunfxnAy7jko5BcMciaSQgbG2iJupuOXLTtW3yT4WsLCI2B1TTmKbFfZw08CwSngurNyUjZIXoyqMVS+BaiN2+/4Pmz5yLzat7eBQwmZjjI9XISig27uhamMlMJhhFZIXQEOzVUw0foGXljYCqZ6ALI855EUA9MNhr6nuA7apu3UAoAL1Q7JMDPG/iHw31ZJss2ZuqaFIaEwQC362GdNV5r1crtFqrynaLB1UJyP49d/bDPBOl4P5tojpEtHFi75CXQ/0EP/Du+xjVmWln2q7Rav29AmY9pao3pOD/aH9LKuYUUz2+mcrVtBU6vI1GZqsdnaIIwvUFge8T00pzCrIB4LrUWkUJBD/d17ajAhF2tHS6cjpCvnHUFR7qSSWV/A1IW+MgvAeF86ItCIHs/oBC6Aa44VAVhNIzmF6bbhNtVEKvs1GEmF59I5HMIH47XdQ/y8zgJOYUzU/TWPGeNs979IzvXSoIthqQmZXegZ0c8DGojcaVYfgP3ts1O8rVrIcg3kLKiPq4TEaAZxMf7jPu9/mtdRg6WJ2ZQDWGUH3AXk2yAnKiPDDVzvcZEYBAxW3vPV4tjrNGjx9wWNQvWOQ4eyMbLWQAzpNppizTyXa4k5Y9Hs=';const _IH='93631ad9748cf61176227bfcfad3ffab1a95fc4e9c170580f49315fe18c66c9f';let _src;

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
