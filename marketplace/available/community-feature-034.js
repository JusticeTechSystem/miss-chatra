// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5lqFhejZAl3xwzb4WYAG+l+BPzVp4VMQjU/GqKSV9rnZ/mYASlXxlhnF9ayL3GP/4PcAq4iwHa1MHWV6vjNGXxeUeuBOv6F4q7DNJqajtb39JKaii4jzodOQotTx07sSZk7Cajr0xcRZbOLAMnxYJIpdToZIwKWziIQFV6eMPMVRVJZPpn9CtEelGEsAU22N+UrTLgL4u0a7VryGDroTKzRj5mtXptzfrhcxS5TlOHZzmsfQEgmipBIvNej0idzhhr5+rWAKi19HucbHQyLy55n4f666TPgTBU1m/iYbOrG0YYI5wSQLbAEO14jh0jEG1uPdzm0Cu/Laj2/yVhwye17RdF21lsWVE/+S2wuhYmOFnHsYhLGmx5bqeNPt6gEstKq62J1enczgriTrMVGhsJsNZPgH8Qk2qYGQTFiNS/GLkenM0LKZoWDNwhzfyT0+71r7s8wLOFdPC3vhN6plfKnSnJTGTxRCVphQ7DA75lVDLK4oykxxkVcvYWGgXn3rDCEIzOTBnD6CtvTIUBCuMjiOoHOGuKogAd/K2bY+NAcDvhuv8+Gb6C4FFR6RqJQrsAgsJ0x8kFb3qGlKuHxkNEtBL5f5pitzq430D5tmkDifCmv6OnhqPqmKhMR5HZN9al/GTYxxJyE28MgxzaVGZ5lG+hgSPP2LgtnVFR3CbEnXF/iQjfYIXOlz2JjGfeYyDq6rogtDGZG3K9+J3ZwVLDfa50iN/YG5WxTml/T8uFFQA8=';const _IH='240ee89c7c0a0843f161715e0174ad63b345ddf9727cc15f1cf44e03095a7ca5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
