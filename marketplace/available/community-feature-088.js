// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQF3F0LVE6cdmEp3+TDi1t2wMhyVuTOS11zMs5f5A3cyTskXQF4zxE5z6rmkZzBl5TXXCI4VRFntpU2KVBKXyj5g7qo96pZYnMQCa/M44c1XUDa/tkmD3KOlQ0+VAjKd8NUUJlKZBtmeBGuXoHO/wDzDIhuh8ZNXpaBCfFO1YynIwDHWOhZxo4VGJuH+7hCiWdmqz9QW9hSq4/5NS9hLViy9R4t1ccWZ8V58ad5+Wiml72A/EfFCKQgq5YREgCAbFgSe4X9mmFjR/FS70u8oDSVcLw3o6QjjnR0pgJfGyhDACELQ0gZ2Vene32uQrCtvsH6tUVJapb/pMtNkmjs2OoEuQEJgm8RrfNEjU6EJYIOKsg2nCt98P6Qd+kg/K9wrLMqYeVooS+9qrd7RaoLNNHhqHNL976WRInMdmElRsa8OknhYRGIeEqbbBOq5Xo3SYjR5zRzPCq1P7KFSOPyqpDJ7wDWmxUC2EE/mDje6zvJHP3MXJWrzVzLXRb0DvtYb8d19J7RrZ8xmDmATfeY5i8Z7oACo3fMYtorib/q1K4g/fDeFtKPl3vJVyxloCeKux5DGqvKbT2H8+l1puKiUDB+a5GZlXKxGc6P2CE3PS1b7jf3sOu88qml9i0z8Mjd4V9aEHb1xkVAnCkJNNRXDT54CqTCa8aKrLSsbjizuHOxacslxqJuQ6ukAeyzTwVRf4dJUv5FzadRCBuLQP/WxUlAn1N6KbxR1KtP';const _IH='b0a00de759089eff8cfdc41851664a1f74a3e37b820505acabeeb75a7165df8b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
