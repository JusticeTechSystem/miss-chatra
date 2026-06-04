// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CxtTaaJh+l8LIJwl8UqQb+KQHfyo10L39WNMquQ+Wefktd/bezOyhTffV40Qwfe5ozJvrXOESOmFuplqcUwlyeZhf6uj39kEDv+yDn/kFsPrKtlp9vrtKJgKg6dlaecKiCyM8Doy1rnbLyn4wqojgJjy7ZVMzEXMzC4fAnQ3Ggv7A2D31+RcI5jP+T54ioKfMuni/LH1T8bFMVnOPv9WLTH//ScVmPJ3iZWpVTjsUCN/CDa7EnRpgNS+n5mMhhuUEfnercKMFqZgyjI3I4W20Reu2eN5ngfFvE6APnNLk8O1pIe6VT25Kd68brVqaPVEKS5/pTehs0W7Q1JEJupUPz/ux60uLHp7Gh5Ll/9T4gXrKrzkjVJ0Wj2fT+dPeUD1yZhV1NGmvvJ6tuFx644fXF563VE+liUqFaiKfJwax4Yfd3bhJZ2EGDAcPTdw4uw4dTAyOmnTN+VLfvBOLhTDJmLxIvZhgMTuy/YaO5NGn3zJ23SwcS/DG4fiTlks4SoFFOoX58UXKQ8/NtrhQTdyqk7BZwpw6nsevcX8dpHJmRAauLsJZDkx2grclx9JzWEC9XRKWuNlamWIw8LuppZYh7Oj0zfoxzBm+fB9hWqMZKICnibMeviJuWmP415rsHFDedX7JYb+HkkytoG0UDWUP3d1DK6Z6/I8Uxs95jzetgNF9ey4u3PFKKK0LvEITTgTxgqPM5Ap2LAZ4vjubiAupLtcIdMc0hMHNBvtPvMGgcGKRyhaellGvhfsZLJKohbj4DvxBfhQgfaPruQfhUJSKVDMEOhhIIRQ/1sxHcz+wWLPUBgaw2p9j8ErRoQYzt0yLF8nbFMsf91gJBhIqHjfhawKFLvefdwhyJ/xfKXS8MAR2AW77I38EOasSswhOJIvZzIVzUUF8+FnZk8UHfMouHtekHxMOzSn0SSMH+5nn/ruWAVh4lLDqGCElhH9YWPa5Mfi7cQ9+wrIzT78MPxzli1FuCSSnceOGYniyvdO0DgAxc+R/QeJdyU/IPQqZcSgsW1MCJfyg8HUuH9cFM3dzCMsS1/aZLfmlZFs3FK8n9Lt5r0pSXbiIh6pd3Ed4vT1+rTzaUB9UfjFEbArYjPenH6kO1I9rPejF1I65u48s4L1grAqPgkd3eqcefhInp3DMsgli5hplZ24vl55VFnr54b1mm6kkXWeprPQLfnQUbtJPP+jP7xDU8SuXrCupumlFJpyaHxzsqRHkPQBVmV1I3a9FMB18dIwowJwObFzizKALWevvQNfECXX7cJZwQTEVK2Ymn8m6JBIHS+AHv4sAwGNs97OzQqQ3lgjQMwmqnGb5PHCR4X3uv2obye0pS5EMCaOUBnqD+Aof0XdcmSzUPGPsTT+dZn+T7hzPpMn2Z5Q79MWZGL9bA==';const _IH='b43c9868cf4d5bf2db3123901c3d67a03f8bd5c5a1301c1b9457ee1c1b757407';let _src;

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
