// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTh8jM0zGW/NpFtyYXa/6P9Y5Tk4cvopR2GYgfai8eKdSpCTMTpAoj8k4oa8JXzGklG6CfwcX/znTmkfVE/O3g7Vzz651AtGZsrbpbUKiCraQSSPuvXBU6ZDbhiGaCrNAn1Sun/LTxYIs0YVLBN7RuHaof979DExOMXQb+KFMVJENTBg15HrDhB5m45kgEcSq82/KDb29kJpPWJACepp4gPrRyIxw66Z9KakwfYYKAFSb/V2yIuzaiamfrWy8OzcOkFzNsXbgWAoaMQOPdi2zc+dS/KeQC1il9kr+4g04P+aYT7FKtHwJwWh56hTDiY+KDXiDG9fyKXN7fSzD00Z/i+U6WFegCSCBZjRsc8Ewqe4lqRMbrHwJanAU+vOMWh360nshGX+XddHYvdKt+T4Wb4od3pZmukr7mobsvqXZHTcOQthmku8ambg2y6AG6EQfUD4KXPRTyadfO5Uq++hyOJMqDL68VF15rDwLQtECq4OetoIqKbIlXtiW4jxXqN5Nv7cKAE29wGsis+DLsAnvxAXGoPmM4WOpHVdg1jO9/tWJ37u52c8uXGUq9P8hLVPEDKYYzwpS4Qnuv17P3CsvYmNNd4pgxj7l1e1lJ0f/yPEyvxSbT1mA7dWjnolpIfB8jIyFXcGfAlbTJ1KyqKlCMAfFSHMZTg/AXVUUPoy+TnqTzg3owMaUAJXG9ESfV4ZZdtBrYKEUeV6kIGwMYvuz2IwG6wZLdujhgaiRsbno6YhD3VYaF7Lhk+5RM6quqUc6T/i1B/BQZ5PKyEgrogZHyy0cOBRxHgtaPG9oRqS4AC4LCiu3zyBsRdrpWXduWpBVCsZMLhUN1NptyjxJ4Imk/PtlG6pXnpMVBLQV6BhIaJGcaOXBtirDH1IDprORzjM/tIYok5gQ66chsA8WYGOk1KQHKlwsuIb4mcy/dOmI6xxB0b2lVjQxQolIPd1vft51GBiqJfbYINJOSrbK5TMJvV4SUeVryWN/NUoHE8LrLdtSNJ9NPIZ+kYTMnXwbUnJBUd91xcZdxgzVhjsaWNgSg4PPx9NtGunofDA8VjJwA=';const _IH='0698d2bb7c9fe516a1363efa682a49f83111f7428a77692438d5a112ce160521';let _src;

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
