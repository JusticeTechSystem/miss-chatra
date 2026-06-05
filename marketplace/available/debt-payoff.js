// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ye3cvpin3F0swFKsM8+rkWBRDGYnfGUCwNEyxYkFZACVl2DexENHSI7tvEL076dk246KkN/mn0vrl9a1u+vrOCLXxyp8f6iOVYAEHibcL8W/rnfRbdyXKa4C9e2AgbwLBMJy79Rf1BkwgKTZs/fHbRgLVhDWN8XeJXFurXBhjRUfR9fr3Zqmtug6C81aUz67HzDgguqCROHX8OQ7aRNU9oYnd1zd0nIBQhkLWwU+/HxzA+Iy2sueKkHfuiSH5ZL6APcDDs5fMxf430iStUO9qNR22aO3IMedZ/SOGXHj0FbgqH9xoKI52dufHUfzgEJdnC7c8UtqRrPDdIzPwDPXanbQAtzABULUPN1e6eSGCW+TBqSCeslguheqHTbfIG3BqeI+vqc58S2mJEYHM3Rob9JR9ShdCGZgX217oOne288fRMikbbcY2TJ96+XXwP6rG47+i251HSHoD4pjQ0gK1I1dGzWwAqkmsLJxuHV27AOeTVZ3e6zki8J19o/adXNKeJefrlhCGxPrBuUQbECcOTUdfNh89S+p/SBWEtrL9J7DO37k+aUR03vbTnGwqchLYfPLQ4N1Kuc2ZxVUWZrXxlLyh624qOym5HwBhdhaLNZWFxsC6ds3E1pPGjrntCih7QoNjt7OmqJHoSDCPtXjeXdxUXGqyxnGDGi6ASIQW+ML69sBVReUagGS4qO/lgVtX1w/QT2bwgIrG+FlKSDl5qHUw8SuTb2EBcanMf4g4UM+j5DHl0CdL1YahR381lsddMtIxmIe8Nc5NxVkANvc1YZHWSBaMcDluLW20l6FEIw3xxxuuvSZHuqg4R1P42r+uGaMdDNcT4ddFW69uCdimlUtt7aPOTbno9VLNz5xXTPkUmiBYljL0msEuX8g1t190+CzdoynAN6CqxTpdXla79gH7kcuUbouMDwpTT31aKniCgs6663/ubvZgzCT6Qikpv68/YV/iWXQc2Fo+cf8Jqd9vlsz0+yJYJNvdB3HrKySD78aNFhuEMfBeDp7hr2QU/X7Wlnvb/Wrb+IiwegYK0qDp8t+S64Wmp54AQJWnHYPvhDJX29yTPWg9f3jgO31YQ6xK13eBvGeZ6RjGaZoAP4xDNYZEBTsqB8M9Es2x0pyfEs4gD7ZFF846D7SSmbBJEm5WWLZeoufzliJRzQ2j0suS2DxnnSM7yTV93btxS0x7i5Svy5dyFzPW/K3Roewb+reDj25VXVb8jbdJFGBOJQ5GcmvBuRXEBIzLggOIVfNbsuCvoNSQ7encxBXODKUcysg/QV0+VIc5Jt9avV5JqXDrRWlRdfdA1+STrXdEp/sjtQBBDd/SUb9mgZpNz8iZXX8NP1+BcvHxmbGmIG88f1FLteE5WleiwYLg/MZLQXPfRZpurHiklXbWT6YODRG4vAsd/2OzBE0+W2nTBnQDJJhl+bA+S0qoHtfnqK7loVIS5O96yPUyBiA10b5A8+n2YCoXnJgAQ6WIrMMUMoAkTWQU1wsijg541mv1+xv/k0TrnFxKEgVdZt6f92i2OAGgvVYa+dViSzXR3gvpbifzoRMGIIbzPc0QdsOO4QBTOW0S1/6neWA28nbRvzL/kf3o5H/S6925MKBme0ET7miYTr5';const _IH='99839f68366eed19bc6545e5b77bf106efe0f15832c0366b24de36f2d705e85c';let _src;

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
