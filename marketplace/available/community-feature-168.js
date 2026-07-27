// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcZeOHpaBDtGElA2/rEd3p0ngwzNGeSOVH1iaG+mSnHI+MIx1Oca8ER5rRZeOGMITAJyGFrsAjPJR8ZCIobBzqiqdfF2ApkvBy7ulxmqVUVQ4BG0LQkPoe4g1z02vr1m1WBnm7PkhiEdtYHYBFt5z948ZjDApusvLMiI1XqYbekqTDspG/3tS7y6CoSQ8jfRcUjjW/rI/ujD3npvHHukFvX1M6y9g+QWUFOjvhhSwaOaRpG6Bz83TpfJh4LPzLMt9cTt8DujUH80h9+0ziSvIttUA9kLSWKkqJZLjyAs9/I50T36KYNkx0qRbEiRMRhTp+JCJhHva8kDKE+WcFU9azLpjJknH6JNkcM58KeYukMXXRNufyNYo6g8SyK2tHMWauq6y6iFzTHuhxC1NMxZbXkNSZxrNEnjCAc053O9ZQ01q46gZvJm91VAe90b/u4XWwGrb9rrCJWH4k6cjauLmfRPHtzVuZxI1oe68p3vUACX8s3m0UIB9IpOFZ/AKedxAkpXaF4Wy12c0kaFYEXONRHaI1LWyaYXdYwuuzFMLcFE5Z7oTDW6SakNfDzTiYV6VYcFNLTOjrE/EeZ+KkGoNRSzi+tw+KOOnYV4rtanNJBNPg+oi1l1+jEjM+WAdaI3mrg9vvVCpHr8rOs2JdfPTaCRi2grJOKlgQCMI9/ZSW24+eUw/fUp2XQIM9Dd3P4sU6VfEb4axjAka04vlI3YyZ1Y9VVf7gRJIohUky/g==';const _IH='e4bf34d59b888cd608ae15acb34ceecbd127f6d16b58208d2233219bc42d4745';let _src;

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
