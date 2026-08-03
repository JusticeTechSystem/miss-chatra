// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCsPHu2Vv3u22YTXKrP77cqQ4uufGA+nB2GzVCj/i2t0P2T4oNCjhueXYB5JYMRBRFR3S5oIAoUxEchdT5f6XDdM2vA+IB9JQm59hsi0yGZoeIHuu5zG6QNkWApmKJ1VGX7peD6QrLBQ8G/1VzpksTszZ9Vt9NO9T/XCiNpC+nu82QdgY2rAKdfDY/+pEabmaoNzecszJg0uC1wUlglnqk+1dLpeV+FXK5sGGUMbxqiFXinjR1LuzdTk5f90b0bIab/00fcG+StZAWGCv3gHoolpj7w4lwK2FhQ83c0raDz1MA/iLVYbG0va1nW1X9up72wiN9iMV/ZryNCus1qMRmPDkiWJSD/L6FIWFNAoZvJ+eNSvvfbK2V/KkfCMcGt7JrtRrSWoUqGW6Ov1dZ9+95e3u2DOrKp+tLPvhTWMiq3ukKGLQngynv6f4u1e6U+NrJXF6zQO49gdj2Ok3gVqeuNeYdUyi2d6swjjtJfUDDC0I8U3RVBsuqWt476tja42eaPGmii7WNdY+IlBVjRyYGj0uuPBo/ybDRbzQSXPSs0bRdNA19VfaEFVI0xdsCQEwuYZFqtqremsGKHcLuADmc77svTaXMHRAF0FXuKTy1qShRZBjnlxUuDd1pmZS451TLxQXTs+H2zfSaF+0UBICYkhCaimrYfenswQnNMdPNDqHwZ6uVMBosw9A039iUlPcz93Sj2L1ddUq0yeuTH5DKUq7B+zHP/4Jp+2mD2UJFutPESTeWC9GRAUhBXc4wGDUTWpT6kjx85MoQ7O2y6Vqaro/z4uPJJ+bS0cKR+BWJhPjhXjG2FB01Jl0K2vA6XZH6s5WBm/x4LZbXdQ+i5Cp+1CZBXhPnHvYRQfMXdZQZB9Y1w+np//j0Ql4iFite4OvGBu3pv+Gu/tPrMK9Rz2mXwM5y7pfwoyD4lqemF95HQ/aJYNDdZQ==';const _IH='01cc9f744335722ab4ece5b4f03634b229bbd2a6324ca4c42721dd374ebc5238';let _src;

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
