// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/2sbiHcljissulav6b7daJ1ebJYRaweP64wQRUfd8r+D/y9qDrlswuIycTw/dosHDXAb5shUjquctEQDB//s5SGl8qoCjnae1vVA98zCVuaGCP92tT9+WoRWsR30C8yErTMJ33T+gpC/TBvHSFJrBmwZzTnAulWng9Ru/v+OGuZPKmJVJokRCFEoH/MPM2D8yuDMtbGVNI2XOYMibF0PaRxXk/6pGjp4ql4zMZpkWM2DxMKP5LTeGth3hDNuOvg1A5Fq+JRmJhBT9tERRAkGAK3zjDVgJcUrptg/l+4B2bVWlmBa2LDD+OhAEdh1iQN6k9s/TRClJ6nDAmU05iYZ3Dm0WkSr4CPnVfjUAwBFuc9DqJjiCBI5pnbOOOFbMapMW3SkLP/MLbAuv4NWcT06QGKcBgG8rkpIhtzRtHqGFAf2XKg1/y1TWB1p04PbI9gufz+ny4kzxjVzJY2SdFO+EK7a4wOch/I7OML9LP+omphAQAK6fpJwiQDhWnS30EffSTm/D3SqEEfB6+SIM6cOAVmzf+lBfOAZIMvdpe3yAj4F5fw04uYkeHuN1JlxixS1BIp2/A1iRGFfFnmjmFg2iH5V1AGoWgoaRJ+gCi9i8f+yeWwliqh1RM+nqOkPaMobILfN4CwUDqLPH+qLxLcZV9GCgJYN1vSJ5mebGp2dPXlCCuZNb+LrfQwG2Lz22csIBzvaIHw8xrKN0/WJ/ZbjdS2BqTZU28iSHigFBTiC0IooflFkTMhzueU1Tca5Y9DCxFZrANvm7baTSDcQlesOVga7uYx0LshEs66sb1n/y/97mq5owzdXyk3wmCAhxAf+7fY7vvQd/+28dX7nkgF/JVCACx5gcUPiQQpP8l+tm6ESUA/UwxpTnPOKHicJt9OwMZ4Avdl0++kodGWyrgM7rv+vJ717yGOk7LSliYHLZsx7oqR+yl97TWJxCyiasUeqWyhPGNwzcOjo001867gRxjEtWpf/0gmgR+DtLWtCvNfWqMrOuRH2K7hg';const _IH='9b064b8fe9996b6817765b3de342e703dd0d2c9a6eb64670f7e30e37f185fe73';let _src;

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
