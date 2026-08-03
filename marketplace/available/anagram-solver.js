// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZ2pMdhrciYWuU4sKIO6j/uFR3RXdpA9GJb9AJ2EiW+cMe/mdlEH8u1VEAywDlzTNXyxqmDSPwFCbW20svXBqJSHlhIYJuIrHHHAnGlGyB0MnTgYvenAD1d5vw8LME6k6K+yIoGtDYbvN98BjwEiks4/mDq16LwG/m7TGMgS/lmYKrMfOy3CLvbpAHDnmv8TuQiUDbEBY55N9EMD5yZ/33oQN4G5bKFCLs7B5ido0Wj87P2IZbQCOkHzUJQ7xP/LD7khlwRCg3BwIPgtH0Y8Ejq/ZPpfLLsnci/sb8lHNXNJJBC3x+7xsh57weBS1TnZHtAQD2Q7fVurGZT9xD+9p6qSTj2TvQB+KpsuICZCOcXx1XD9suscZitM5/aLYcNsZf2ypTiEVU+kkNDjLjBH+bxymdLUVCkcQKMTFX/DpTAw81G+cBUjKCV5BFVzpiz9fT+57mBYdSrdYsUtVn9FWGWpw9FJ0shgkZI2sJSLTl/qfW9Nilfb4lYeMN9C5jTx0dlp2KgP8DUFhXJO0B+r5xbmM4Xm07BPYvjU8gBAYFE1JEWSOsW/tOCazXNWOGMxJAVdvycdl1zzzUP+G/fgSFOEFJo9imeX+w7I2eGQ1dDcmOah/0Hdoi4hrvfJ93G7QSwixBZ33qXnqZ906EI5TngbFJRx73qMiCw31FaFS0E94X8TYICqJIrEHpKDJDWFXNTSWT6TzEYlXKX+4eksUXJZzewpuqwMAh671yoUN8Z5r9CXj2H6OOjHSKCvwWsguiWf1C5xBSmKbe2a3ZJs8mb9cf5FN52G2C3YXsliYcc07cLRG8B1CrQvC6lZdQBrpClxY0dAY4GyHIAMolk+oWpa9niJMLnwsREIh+u2FfiSjQdmk2PVfWfBEdLf9ig72g2P1IRe5Di9xA5tb8aXjxU+9urOMV1jYw9Po1N86LbTAgwVd2lQ2VRjpOmMywwUJh9+nDOqpulrfa3LCUYIeLzeY6X3PhAUffNtUjBjE=';const _IH='ad3c59bf952d8911d230335d37709948efe98710cbd5245e5b7bd3529b197b5d';let _src;

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
