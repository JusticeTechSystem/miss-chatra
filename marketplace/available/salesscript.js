// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4F6J5/4qx4Gs43jOgToq2jMtyEsdU2RcTYEm/VOLdXeGAUVlEseYnEbhU9sxJj+5/5Z8nhc/SEk7zS/MHBywSSvSEBwLu5X2jqk6O27wIlxmyIUja2ct0UhI4rfvD67vre/KPA36gTBPDgSn2xzCuk9ZnnrXGsVLXMW1z+cOyl6TOCGftp+7y/5vK0EGPzVdc8BMUp8TXsbSyYMeueskOMrYC6oPPCCkxYI9m3OsWKOMogEtGTK85WvRKG55Aipk8EkrQBwsLX06wge9k/Y0Vw0IMWY5XF36s3zeWGTUJ3YJQOGChJRgYhp7jNcIKhWHhF9SCKJfFcvsiqpVTswUqI24kXGNlGmVHmQzr1mTh/sQeLT+8uztlaNulkd11uAN6G4fIYClD2kVQ6ir3DcR6KzDNFbZowGVLFScVrJ2tR9l9r2IcIfendODpW45lEOw0tQ3cOCpzgAWapN8ENFB3yrlJwSdPh88JxINpYAw+WR0iwssHDETpJ1085yYGel/z1F1LwAxiEbp7dhL6P5gRmazHJSmlisyr8B0/s2apw9w6QTWcuLgjlJWZiP1fEofb2r1kb6mMWMiXCWDrC2oFsJuZ64+iqUSCBH980/kShGYBJT2RstaDHVj8Tp3GtPkp/qokThb7IV0+7Xy9M5D0h9ccr9Sh3/wbvsSqP6VZHC77vH3RqMB8R+A0Fz1XppUEmhPsk5MrAu6O7JG9pFa/ZSZI+vS8YSnC41QtRbZy/q04fLpvoq5q6iIBPGqBpTWys5ZHOBWAgCd9RrKwaM9GoslAemBcmsBUgnURr1Z51b4fVa484zUVE0cBQ8qIG/0Jsyo91h3Fl5C/ZQ7Z31u2oOStLeyX6eOhAisgF80+Vp/4DXkjrpaKmGTCNW8k8I9im0uRmpM115MEMiQUq+42xA++qn5UyJaQxGlEC8CnUpbPDLoLE7lABDsNGT/Y1bgHeXL8ASZUUVmujw3s+a5Ob9+/O3/INNzB4GA1+2brbup/xE5owky7O2uC13dUW/CHqOsYzRt9WV+ngV8yjsQq0oy0QDSJ/yPkGXWyF8BCKAH2ExKZwzrPbJAe3b54F5pnGchNLxB+nZYZkzyfU7+IBM98JcsLXoaVVdow5XZT5NORdShbeHejn+1hOYAZ+7WFP5epPJdPddtiR05r6QF2uqQ5fz9UBHkQsPgbImXFSbyEWv78eyWXsB4JsERnmT+ACEQ=';const _IH='63728e715ee08ef7359b4a504aa4b0e107d799bd5a54254bd1349f8a37104c99';let _src;

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
