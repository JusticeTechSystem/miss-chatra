// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RxnGxgwGAWOP+g2I02Su+mYkhxvD0fSEhLwKdTDHW/ulNoiSmNz+rYoq/ndqA5fnmB2XKP2E5iDB/nhFvRaZX4AC5EV/pSL6AFWnGEIQ1g8QymwLlgSLe2kPsLJDiJ5/NSFDOTibmgM3zQ5pPJpES7y2m+rvp0IDssdZmJOxjJ7uGkuNMLtR9L34bdzUDu+OYUuDpfPYVhcbTJdg09he6HztreqfgFq/ZkqZUByszKSmWYvcn74lt3zFD2nigrGdeI2meimTgvUq4HujRdrftX+BWGavKPVhcWnhYUxzSkMi0HvLOOl6gMs+Blr79jpMTHW4YxLq6HKVyOdp42h4niQesMMpP176epNxvXUklBmrPh2x5bnsQNsExn9bPc1Oud/yp5lReVAHIB62avtoUWXVdmgcKPOsk4bCVE5f3sz86QQKGgE7vyaULYMVeqY0QiqkBuYjfr6DFblghGBe6tzdPWmGzMVwR4E6qRgstREbROSeuqMjC3lNfhBZBY60MbktVL5WpQpMlViay+MvJ7lzCEW6xE0yb0jYHoU1/pD6wSmmX7z/qV5op2sYBnlCvz5a5GwBdynkugDe1o6ibrZv1eYeZX85Dr9iIOtk0oHcFZhGdxr6bDt3cAnegjoLb2I7v/q/3LwLCnwJK0eB3VdjEiSllksxMOvbhtyh98GwS5DrgUdhLhL1TcX2crEkdGNFHYrxDt/CARCcEFmVns+/ih0HI3L9WixYLyd8duV/BGxipl1pOvBFnFUMP8GnjADaVK0wf16xL6gtJMHKUeO6KGf2BVEmkHTV5YtxdqyJ6j3uDgqH2jfbnLWEW0sR2WseUmpSVO/Z8eryoQy2YlvI1KstjJrSldYuX9rwpyQObE1AAP1aLxYypX7q8kaW0vPioq+gEGDKC+D04Tq+GvKKJLYY/Jbg+ymulDpwbvrOkc9lStF0JPvHlVX0HrJFtc/dDM8mT7ySbW97ALDzv51G/+Abbp3abRIlDK9JsOHn9jUrh9zbJ61N/0qIhzCA0rtHkdCf35sJiLoGx/PIToiCmt5w58DUwEalaTRo9PAJ2A==';const _IH='cfa8090cb9c20801476865b6fcb365ad73a61e1087b6409e17e6ae0678a7c37d';let _src;

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
