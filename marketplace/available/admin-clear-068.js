// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtFk5tDINacwMBjG/Kajx/OphtePlDS0bKXOzs81o8I5pxOAHx5+Y7pz77vmt+Y4U50/8z8j2DOFn3X22qhukBg806dHaaw8AJTazu19dMPYG2x0W7EncBcoIE5rZYz4vTD2cr466yfwCB7qUUo6wCIytrq1MWWdfuLnmIrBsLGrxUChcSNIUnKrprEdPavFQxAFHrjaLzC4pjuDGlbxdBiuVAMZpu9W8+/TzFPUmmprIlCNAEqcawC3PHLThcNxlCsfphfl5CT3SJ5pq/+zn1pWHyQmFIfIC5TDvC/tWx655qFB2VMbUUNnItHU4tloj1zR9GBwluTBEyc2uP9isljAXbYj/MZNcKTJdT/LaCoU5cJ/xWLFu6Qch+qtMXPtLMaRykEnNJhgngWWUL2Lfxwqueiwvudu3n8awWjkE4gx9awt+3u06Kjv0C8xs13GQ9m2X9OKzM0r4cG3M4f6n2a2UeFZvilN3bUfJvl9TqUvaj0aoWCt1awRYuSR/Mmy1rFCkZUR3ItxRhD+v3vTo7rT2Z2zxlW67S9U577jNknKker5clDJ0QEnRjZbaovBqsgf4TKmar8c6kbuMTun4AcQ7ZHOLwApeDz3nav6ODe/6H52shjq2nwz4BLsfU8hYn/espimS0pmn03oOuBmkZgJsXwjNf8ZPRjxCC3//tHy8KlPrbTG+cpKwSvFZCjH1Dikr3gdkJu/CFg/FVxo3jl3xxjfJiNThhvBhEJTMvMF9bAntLAobipjbgGZAw5/O5Td4dKcoLhcWUz5CCJ4joyiw7X4eXGet9lsBBBMmDFEMIcf7e5GuxiVKrPaxVdJDI8maS9ZQMt/BrPlJvHfrVeAx2mhgYL/AEkPNV3J183gxzVxECAJ6wkMQn7j61NLqSykQh59prQxt2DdfqybhNXwRRdHIISCubKor8nc25iYjvALqMcrB9GUOKqalC1l+/rdHMAaM4sjqy84PN1KjfWJaPVQo9j2ujwJOsn6ZLVw2gzgW77A==';const _IH='6b0a580ded339c9416a996b0b79f590b45d7312003eb78071c0182d9e2f41af7';let _src;

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
