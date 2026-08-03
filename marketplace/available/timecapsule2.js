// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSM0EjbPIatPigMaclvTDaO3JSHkmWPbn5mwfCtICt0PnWsck7DNnzzTUM3sJLvnwQRp7i93wwwK0Jd37xU2vBiiCT+pwFYrRD+stWcDsdOapOGRSaHbqA8xHEx8aI6w9luTcJ33YOp060PqFV2g+BjrVTOjYuW4za5fp5lzWrU9SfqMelwuipvGbYytO5p1vFkKe8HK8SmyiPuRTAhZo39+hCtg67xpnAXff2veKN238kBHTXNzDd6F5wAyAYZeIZwEhAodlt5jUoTOlwVoSbWQNThV2gkkFOEffMJx61LY4kuhWvDpLEDadhUiRKfQZPKpgR3ez0E5r9+miP/84MDM5mgjaXTTds5WmFH3FLaZxjMgU5TFRP5imD85xPCZ/Lyq1nrm3mRlORTJtVaLpalBd9CDbnJTF5HNd0kYBsgJJsNynwm+Ay/w9VX+yKM6U5I8UU+Uk56GzN/dRLdny0DYKp8gY4D8gopcYo9RfjH+V5u5qpDqHKKvp34BqKPMy/KzxAhO7lkBJkO5ppGSZ4xiByH4VADM712iiAFpYFRJXTKzN8sSgyS0ZbKxSrxGxIRwzWkNQTYaMIBqwv2KI4BS5ZWZzvw9QDCae2Js9u82ee4+8bFzUxVxPC/juR+qcfDBg1jxh+P3J6rHwaY0oXSspOb6rgXK3AUg866gPES9XM3sw/qgXOC4I/2q/tgfY9p54/oHG3YLRo6r2mHbhjRWF/ZeJNseV1VDLGeAwU0qeCXHn1pRC1eN624Zg6wbLzFyi4VeMNm4utbInWkJDpwEDsuu3wFCPjePEG3p1c1HMJ8oeii0WW1pMK/5t45MWRYkc5c8zXKqSdMXUZ0ykpHZSauU+1smxCAbxltbxIKrNhb40+bh0LYQZMV1qDAulz/0UDyrHHoq9ei1KrXNYsR3bKTL4Uc872FCKgIu0zMG0kIzUtfbsZf7Et/+Ts12KQ3Ud8TPS+Omr9VQQIf/vDKAy7WSurd/QMWMW+epBmC3WuZPHA1f58e6VYsmc2+VMzuE52p2L8guDiIfGdSlSsMdaEmIEc1PxAbxkjBMXJaFjioERiCnQOWKxM5aMgu1a2kwEIQ9wVnAXhyKS78KX9ud50NyW2OWxjCtYivOg/PZs4KvH04hwYRMMh86+Q5HPgQFu0cDH5Ug0Vnuxp147jUXoUpW24c5h4UuPgzwBmQBr2Msn2aM2W909kpA/d3Mwat9i7zbpn03fs=';const _IH='8fca07e6084c0912d3d705b5a9de74093c7a239b329bd3087992f26f183e0c50';let _src;

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
