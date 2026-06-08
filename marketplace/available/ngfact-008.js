// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jplu6Q9K4uLRlcnQ5WTrALIZyReoRk8M9YFQ89gjLLcJvB23XPn+84bNPUXXqtxtqhhn2Aq6bHIfp6V0YJs7G/mbhsFSR31KD4bha2/xqrPAqXVOoZn7O6Nd2yZoM0u2F+LIBtVfeoXIWZfkxbopgR701bFXsAoJ6eMo/v6Iuhc+b81HnGxSoKmvIZVeOvn8c2dP37htRYNvGHnjVV8VzFj0iqWm8t32yMbzmvsSmYpnorCa4H1b+wd6waeRI0HWYYw/IYIbqUux1i4RLEcMrE35roCBUjulpw0eaIGjgCjRP8yO+AAv6nYMB4xHZEC/qG1WUfXmpvTaIVX6jM+ceIm/nMt6aOME3F6YFptKnHhbMSWKj2BssryquENNXMn3NnWST6x+IfeWp0wvE1zUYVy15U93iV90hm3LfPdEoNGmOqf8UCO09o7aOhvBPRfia0b6qwCYf4Vgs5ZhSuYpWIrLIY4Vx50lOLm3D7uTLGNPLGGaiXgOLtNAlbTYsrdiD5OnYtgeAhHv8G4p6WULmk1RHFGtMhzmFWlg4Qo/MBDJ0iPe9zocCDSdPp72x27CB0NQRLtnyZ+9rRuhXF6wfEx16W5mqDrSX/JX9IK6EZy82p6YBVMliwYhZxvHUAtDDFYIc/Dx61X6VcG2Fn/Y0uPDseQH2K6fz4TUshasB0SOifNHdSP9ykcTAiQiRoTGG7r7smpzupeJDmA=';const _IH='1cf92e6d46be1c7204387be69624644447979c9dd77402257eb44c300665e7e1';let _src;

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
