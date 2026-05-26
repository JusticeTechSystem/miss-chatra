// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Imc34FzoznfpP4CXa8IXGioXywyR0Tj4kYJjn4idsEMkag3ddLW7x8UMZvakBse9L2oVmDYUjBEWf/zY1uXf8uCM8yiIxsRb78dDgajLGHMO3R4BARooic06nn8fdFQbGULU77HfxgJP+UWt1z4JHZEvrEJRR0jMhJdmoOmbndssnnURM4yMRgJ5L1S4xIoTAle3wF/0074vY/VrpypiiPZqLLdV8u65pIlTmDWOUKNBLdL9ALFQEhkfjbrVFsU7gBCT8rcWNh8rAIDblFZNyclP4ZZUMh8PpBCmJSKNOv/WzInCEepL0B3eXniEEe/bPQE7YH+OSJNzObSJ8MQjkRuE1MnC7BXJmlkZ5nsLtiaJ/Ob8NaJBcCJCjuBtHq0MaUajz3AgcQSsdcuHoNYdS24xM8wuxCQczpUA3EbBXd3HwiyDQ6FmcQQty0vUVXTJYJv0iLHoR/zZ+FMLPX74FjpJQhG8ZVJF0tfKvLQ04su61s2mctGoo8CeNFlxgsrZW7Ur+F1qYm8zsuMyFI12eDSgpwWEG/AS4xJApCHvPCLYc008D9Emfq9ltGpgoyfHkdrWwwMzsM0e/jXEE66aM3fYD7idjE4uSgNY0eV+1JCi/aIE15jdTZyBUetbUX+ccwKqUHPLes2UY8IeeslU9xmKW5+eisrQBwq5xBiH7kOLrHY9ZPnzYGbVRKuT9l87utK9xPhsEw3A8b3KDY+7rCT/T7YmNostYQ2V6apgWS+wiOo=';const _IH='cd573ccdb119e8ee9e650d1d68f983d470132339d7623f2ce2a7fb8e3b14e65c';let _src;

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
