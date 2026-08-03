// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6m+/aZLriLzb1OIW18wsIAXP96QhWrUuFHysf6tCityuc101Xr4i2vVebqKcB5DDOEw+eQrEd0uutfPaaYs0B6tTrLGXO4P7IoNUzu1dPWjRcuYwXckPXZTJFw2aask7bZSgxRvTHnTyII+r81s7QPYL4mMqC1atpZKUSmEteGL2QhEOB2OOksuqeNXg57nvk6t5sSz9ac9SiAiTl3pXkXlZvBOymlV05mcVMt69Q3vNR36LA/e2EmtdU+QBr72j8a89lpYDPuA/acpYMHsZxoyRtQVtG+AvS/5n/VHQ8OuhHpWXjyoA/7ACwEmjvG9ihpZb/XqMeKekoKW0iAyy93yy77QZ/6/G4V9YlmbDZ+kEhLGTEAOERfSbMuDlFv4bkisN6UzIzDLoF4K4FDA8A6S5udXNt5P3Ky1KJg7Ej7mEWKyqItvWYOnTjNXYMKZgyyE9KCWwzjlZ5T7mKCd82zRkHeQ4xe637KIm2+3owzL6zmUd/OfrKh36mkM//biO+9C8ABkEe8x3SkXil0ylfFRD8cOF4TfFrp5c+bvZvoqcJgZHjoT0NHpPQtZP6dTQid5pR51e4fCcl3LxPgwksziyQcryDmCyERa7p2R3ahZjX6WuS4KO8tNtu5+2HsiKtfi9yApgraPh3sQWz/sR4MyqVyhk5sU1g7orzt9nPAuemzjPCxoRNvbxSRbieQpyY4vCMq0MUZUezyoZx8oikDjIeS6cUXJH4jOooDZVDDj9VFUJSZSl7k8k2/xPkVsQFptax49QlaHQ0zbaa1TLrWum3f4P4SSzYztod/6FPixZfnd2XJKsNBoG8R8wbBNyr7rIeilC24kGsSHXe7Ds1InHmh/O0n3q7S1Hc570zf8mtcGGpqmKZ8d5K2yshdv3OmOKHqADLbmrEgFVPZaOQwSKZ8v4P5VyQEnDHK9kpPfHNhmFuEQ==';const _IH='599d32124caf78dc68c2afeeedb5eee2174f95dc77a07fb745a40d539a777c35';let _src;

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
