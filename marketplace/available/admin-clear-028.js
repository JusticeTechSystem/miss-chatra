// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yUYvfTaH5DyOjrSckDlIZZaMUCsrZYWr++Ly4POooYgms8F0VFto8VzIP2oXeDQLVtcM2+YKuZb6Q8Em/xqFI3xOcNFY2+sZ/Kjkdx3wy/jblyx20gibGiE9IA4mMfAGMxoEGH8/vvr53jjFA/lHtAuOTNtQQ1StDYjFLl8YPd0dR7jdrkZc7ZeBABkssepMmXRh2g/kFUSL65Umbc3G724VUy4kIv0rvzfOrUG8ZMntJuRN07qS476G9maDs3vPTuAJ7X9/Cgk80e2a05lQTMbTSHd2+a58+bXiWRNE5J6BLL6kXralhBYZQdmOT6n5aFGfbiWaOsZeXN7zbFE66RPr2y1664Tl3Y1gMWu13WCPEVDkw/Lphp/1MA4GvJywf6ThmggVWMzyvWmU72LCUPaFk2RjdDv40SIzjMp+4+OmjilUDUpBqBZRmHPNmtN7rtovbRhEZExeBc6PvLTHasnn1KLCZ8fOwsc7Mse9LGTgqvL4T0Z60pR9DjdzXmnPLueeGfICZ5+2mJuQ08WYwiTj+SE5HyAufX1vKvbjpmy+mKBlELwbcuW6yo6XGKbvNu/X5jbOZb1P25Amf2gTqw2fReAh20QSPCgKOYXOPle/jw0W0a2zXwonui1zENuZCEs2Pr6wUctWGpDfvQoa7SHz6O9T51RaHmN/TeVrJsiIZKbDuuwni1Qa6A7ZbauCsHhgNJ0cTH19voTKyM+M7h1t/Xm2UlknEDrvjHcqfhTV5yizlFfdjLAspPhoWqmjmp93Idl/yBXWnigDJDGGX0zyfXbfpquhO2rsLGbtRZk8awUF6N5ofRYax/n3feAG19mdG+M2I3sAfGEfP8Im9t9E/RnXsiRV8JMNMbNbgixAqIPh2g083Hc6GEFi+XrR5Bc6J3abiTmuSgc7vtRFwmgqClko8ReyfWLMBIe/KAL5IaDqNoO9u9alk2g8EPlnhuBBOYmq7Z0F7zwHGkOH8vPvQlIyS2mHXPYeolL/PgjzATwguZ4=';const _IH='0521a1951743790a77a494ef76e8452b3c8a1c431f6ded9a4353a60594ecaac7';let _src;

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
