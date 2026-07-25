// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSm8Ie+MoIDms7W0HdCxSfJKoKQXMS3aJsEdnxUtVThha6J9VpJ1RwfaZQWc2nI1tO3ZJuNmnKRSkarjVUGNOfhrsMZy5MS3s9tP6YikDWIfKVpnfu/6mYf56Hpj/BNN+T1J7wBQmDktrFMIi3fwqRr3v66T4/gYEObszztWyMGYsHLTLMaqVdUg0aNHJlJeJSdDADvnRAeA0+pJSjYyMBdU0Hp772YbwKP3+eY+mPAbsw5jFMfj5MjPgBd8hOyurojsNm+Y9GRDmQfGTS+RxqY78pSC+ufSNY1YNSV7cdHvEdPwN4W4f+tyigkX0wTIqEjEeIq0nHfiYg+BNuI5B/AdJW78J+ZHe0gKQsxoHNdbCcFiAPCdKH8AK+SCp0gO6nOMSgMYwZx6307hnxcLUi73941uQxDEF1g6gSvjWCaZiGBdX6ZSCKqoSEu7JZK7zNXqdX+aFOCTNgnv1ujRnAwYWVHyiMatDQMr6iMt7KqOfjl3vs4T8GzPkyh2U43TSt9rBqGjA4STlA1iPeMIYfPp81USDXLKM3RU9lO5N0N1NrMpo5fm+9S2r80X3ymHFg6fLdDf5eokYPEyhcAe9yZpaaya2ZUR1JouLt1KwjpK9xKBV64rnqU54sAi+YfdswDpRCkynq+YHWIsHb1rp7aQMZpKzcANSj7lkLkAe9KORrnVR5mHBfqlR+NvRyuc/B8c4uEPY+eJwjXlzha+zEoVmxKO4uK/dXYSue1OXiFNB9UGzvMTgtb2qKmF4gXmfL554Baba7GmXUtmU0+KakFHYx1euMcBufb7rDXYk+z6Gkf5ZDEmIqOvsmiJZ5K3kMle/EvJZ2JdzDC7wX8BFUHr5Hz5RnySkSgmX4JhZJqvNS4X4eJK9Dx9xm0/TI8EmqjauH6iEJpQS+Y9NfPOKnH1tZ2Ob3Tc1iCe2OVPsueS5ZPO1I1UUhVDPAu5E7wFgQswz4NpczheuUhTfJZMKZp8LhJEwwBdOXboEc6GVi2mN6ZdmS8QbYlkH5u/dpMBRveFDBk1GRj0A==';const _IH='6be02f42c63323136e468ae455ac602414668ad49a00846bcb9faf6492e56ae1';let _src;

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
