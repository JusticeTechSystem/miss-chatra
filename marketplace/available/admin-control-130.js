// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBUs9XuYCt3UvOm/2YQqm09cVwKoQGk3/YXVzrnaGi26XLdTNE9vO/zuaXph0sVaqCvHxOGp4dEq5o0akgafbn0QDe3Prvd6KiuZBkdKQmRMGA0FRkt/f9iXxJx/Ariarj/92xFFiUfFxgw/uU6p3eBdU+GnymRsQBldQnzpoMgvwsmSU20DWqGQz7NnThWX6eFeNxFxqyA2fuSHeeSo/vSHmGHhyPOfrvLPVJFkA7heXeKTSNCYMoKi6u1Z67j1pMBL59oFEqF9ELJzJNgynLuhoD50Ng5i0phq4ZPSNeDUdrU6cOzsRzu27BvCvJbarnDOITIbmMxRNhgRLed0L1E7Cy8Pkf2PsxwoF5Tbb+55/TY0AWIoloatE5FeA53ACiZyxmw98v70WpbutH88WpoHcu2va2cRQWMFPvHZMqSkki4dWj7v8gWsiQp0xm/JYhN0LrZ7Z6dP1XzI9wCqVYIsmPIo9gzfS98yalm4bIpoKYhQbmaunIl18SgBubu6X6HiJwMx01+g6jKhEydE1ZFw2qWkzuqLC5g5XewipZsY3hoiaOl45jbNJE61IHXG0L7bIM2qpLoUh160hN28uJbPJ1OZ3ZIfJEJ7DAXHUlVK810eKVT3CZVz2CNxeq62qMGMZGEuHwr2If9vT+3AisIIsdGMu2i0bds05GE/mLRbKhXT4OnigQ8lb0Twxgc1mT0J3W7kFY/eC4NLXkDfNZFsMTaeYqDYuC5E3nVdUUxNw9mE/u4GV0VV7gcrAP7x9BLRdFIAeID3aGaCaCCHvBH3C5GUfobUGaA6Ar1QNhs98g8Qi7RaB3xrtV89u+EpoztOToJPFf+PQREbVdCqxBqw/6G78JETLaxyVD7V6jZE7m8Qs826lYHjygktQXdUJDwq8j5B3s7A//lk+1TM8nkaArnxM8c/NaP7dJk8pHBJ5WRZydVUabt+5Xiwlh+issZi25Ax9JDGcwF755zMVptVGm0OoIO9K9bDEu6N0wxtsRDOcJp+K4jqFkdr6tWA4gkaAefiqlRQ==';const _IH='3c93361bfe48f8e277e38ed886f565e0e79462b41333044eefdd64a57262d36f';let _src;

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
