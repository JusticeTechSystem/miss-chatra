// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8nRv3OhiEQndBxZCx98LyKBNbKIvMTG16iL+JhwmZIumnU3pL1ngO94g/9vpqrD+hqd5AzFjAWO7LNfjQbSahIFWhBKr/e4eLNZhB9tB1n9e8POyumC3ij0KXT70U/RzaZcrStaCbx2gplAwd+A1pVijHWQFHGIuYVj2+QsNRMLEoPKzsiqQakUpgkKvcM6VgBN/OTlMtRhin6nJVIwer9aoJTdi2m/AvjwATENNjScHl80MIpzlBHUK+8h7lmwgKqzKI4eHOVwvBktBppXAzaWRFgMdEIhvsRWfz8TzrNJWVYlumIqOEoMvLBxVavstFQV1w7pcdkwDXWlc957rTFSjOUq448NIE9ybjIo0lxijZxRGtV3kc7Bbusf8mdah8oNRYjQbQuqibL54m1RzyFLCquH66v4L2ZN5/Hh5UTjmA1WRp7SG+QBugzp6SH++X4D4B9JRNGdl8rQxfC65doHbEmvyx0Xs37GstlrmM4KXaGoCjqIY/braqG1lQYjCiQyTOE61eoM9/BdDT5XIaKo84w/DL674pOnVSD3+mkAL0saL3NbgOmaHd2YiPuW4GhlczeiffEVqnWpTgn9r8YY3db3+Pwyh+bQxyPFNhZvg8OzbuyoL8sGcJ3TPAoDUOj0m6cszFIZGNxuoNWumS7qDC+GZzvZ+KL4biSeCsyGaRkdvVvLMNSTwIby3Ah3hcWMYYBKuT0vvouioutNz6N605fa6dkZ0g/YAvXho20Epfsiqjg24kw5eLT15UN2dHqeQURTr+RcNnjviJLOpidgSSI2wIe/gBOg9aOtY1fJ6Hw0pz2Jrxe9bUWC2SoiIRGa2KdvbW+zXvA4ZgWvMi1KUKuTREApDgDFR5gLm8toz0+2pVCYV5T0msmKT5GR80EDlQBRKFOluzXx6zXxXJjCTd7MHCOXSGJ056yYOw/P4IfaRrXlneLgm2+WBUVzVAA+GV4swN/hAt3OMkP8rMMeNrWL4hZsD35EsJ0ILAGQjy5NGqSQe4df5jXolufrzPEb717HyfW9j5CV/c8kFIjoZ7/2d7qbxwi63UQ4h6QJ4D9M1KgQ+9UI2uGYfGqss+sUmXZlB1b3Usr4hRKJpcG4VN7cFgyJ26qw+75t/AzowhH2ACdNakY9IskC6PM/97Yz9FKqR49X6vlqqY26k3TJTpU87nWQ6VdoxBNwui6+asqh+mL+8PBoggu9AtDRkw0oNYH7BrHvq6VVdhKTXQw2fyV1YAMifxwy59qF3WFMFcKXW0jbaTfJRZZTKRSGDKfhV/Ff6Ze/OWTfgK6VlDHA3G9Xpe1J4DTAE8BVDy0B5ewY6L3OP15Ue1/SYSRS5u3Ychy5/xA6BAWI2ENL/JreXz+Qkvy+WmkdRubiZPlubmiEWq0CLJA==';const _IH='d771f16f8a7af56877564c7a0a7a6bb7194a518ffa8e619f97bac84c456a8877';let _src;

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
