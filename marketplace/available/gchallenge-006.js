// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m6X8PJPnqfOdOypR66gMI+nk+4j3FGwMWv74F99IIqIddt0h7wTxWbeRgxDxMy2otCLzOQgZIVL0xpEFaaRtJ2RsPPHkCkI4HbHSBBu9FCmGH9gRukw+1frrNiuCKl30Y0sAzwjSO/KzdrXIcz5t3TEJ8WLLdhWAgiUF8FADh3bGI2MqjzOpk+uc6JUuvFgH/FVhXSeBck8tHb0k+DMw78H61JeJinlV0R9vVA+L3srBavZCnkUh3wJjnVDskAeP+xP2kOFQ3Pvgpuj/9JKv+1zoFtH/TivjZG6rjod27TgR2whvz8Vk3+4us0URioanxwp+Fz2WAUnToQnDXRP5hUr3dwTJaUPOVCMG2S196YOaclQbC+UNbXWrvrzUAXY1wxS4+UjZE/9ahwp2VYFlh3gepLqqK1V70dznbOdln2aLjVBf9sWmFJYTSGDCQzzi34pa1FBJ5r2NmggnrwdkZWWzu/uxInsjnDLUuKVIrx1RqvjP6X4jTyVC+etSkjjMuVzYNOdFhHKQy+OL3TT4JowB6xzU8VTaqgq4gEW7jL9n4U+ahWkOaqCTou+LYWlP3rRm9GvJ9AShbmmcwWelRysqjEBz8X/LveG8RRg54trkRPBM6w9R';const _IH='dcca4e3db9a853025214474c7593b5d0474b3b20c04ede4e3a7576c68f7ebad4';let _src;

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
