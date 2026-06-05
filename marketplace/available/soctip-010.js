// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w6oX7HhnCcHPJu7UGHl+I8UXFAVs9TKGOTVd3yMGJwp1egkyPZFccf+4JScUTvpC2vReo/LqO+ZVWAG3O5mFCfkBknpfGI3gEBNl1QAFrUKXn1OcJJhapXIpaoYCjsc3Xst9p5hUsRRDWYHgIz2e1bMhpBv/EIn+B9XmkLut+726r14gZWk0qvWyYotteZAreO7ORt6LVPilwjG64VrpoYSh/ayJbgpPcnKW2WOXzI1hRpT7tIz6mamTN3lVlZNVYquVBF+XQa6CVcFl6HbvizqZoCa0ILdwtyuH211QseEUsIba7dJvpMTFtQ7S98CNHYkSotho7gSCeHSb4OhZZhraI51+iFmwDawtFdKaUOt1AtwkXHo7VVNP4FMtkF8fko9vrEpEyfC0BQJm2pPXN0zvwruAS31Gi2WbXTipiMdO0cPWFspPZ9NWqUXLEau5ziFE+Qxvqeux89J5PrYR/c8Iqy9aLcHI2Ll/mLRBX4XFN8yDlbhpoPBgbfNzEu7h2VjyVxw7vy64d191M6KEBTdw2KBgzKr14ULOok6o45y1R8vdfKFLldzwgJC3cdUTe+PVXU8/n1AiXoWhZDyLoOcnMfS4jqNaCfyUeQROgJsKrtAjKKIO93oMqc5ikyxEysbSF+d2KKrJYh1YbKPCdKhxCJWR5iq8Ql1Fx74NhIbH4Z953vIhg+FUzf9XWGaPPJKJ4xDn463crG7pl1iZHXB82HHcXy8wE42Xn3ZoP0GNRSbXm5ltLkep82XWbBNW6/mOWn3vWeorcLGDG//TKFqXyyrnEOjTJ8whDKlO1X7B5FL6mvYL2LdAJERE19Y42XSg64DichKQY6js8dO4W8YHjHyljkqPdilNfqHqrWFcWh6x5/qD3kIEybGTGxI0cShmEI24+Or3ofpaeApCln1VO0NpqC4iofegc1IT2EXlU0K5qlmbuH+PDFtLDbJebfp5aW4dITg+qmXYzt/RJksMziL0T/LqQC9HwJ0HfG2Jdl6OOWgNjOuO3zR6tv/5PPunmsxjvBKYsw7C05bcVPxQUcJhdr/Zwaedpcvkc5lWhZL5lssVm7DVFIbKFDlrZjgB2cuRP4mcn9pxqnk=';const _IH='b4bec6f3d17c6b8c92fd55279f01c970025645994c0e43cda7c9fed70ed202b5';let _src;

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
