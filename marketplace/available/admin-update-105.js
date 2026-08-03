// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIbVabYQ03PdXeWBVoKIMp7+mtq+qgxgucYzg6d8lreoMdCZrovojxJhz3fc2HWXFJOHUk7S2hBmVRrEZASMc/xL4OfKOJAcAWiUTFvUewoa93alUDOxpdCH96hVIUFFxvy4J/2wePcKkAGW7iUcx2VTNr9S5bNuZ7Lt6L6T3FrsoioBkhDynw1KDJFWGbzZeuYh3ueRJ/9b/ZPOKEVZfAvlKVvb6XRnfogIP0oPWGpDjyeA/kAJ6LbPBP0VSco43K2TIhD7BMOpx5W/H2U1G8lY3wTyABwBulqpTzISl9OTvnc8AWJi5wdA/Qk2mrp9Pqc72z7JSkLTH6wEQeZdFw43U6J/pE7vKsAlUPMc9/fBzmGiO+22XeFRG+w+sg9HeoFb5ks0ywkP3s1FUHgXFJBfEQbWr2W/RlcVo+/B5M6yUdT+9mVhKbq/LkDqg7cNT89xlxoAGOzXgClnb07uVBbs7+cbdgNlmCcmfCaG7cUECQLCdJxXZxaITnmnphy3Jisplc7D1O/xCybY6kZlIkPlNKEfdIiZ6XnW3DR0LjA5LY7wSoUYHbyvvFIV7RGh9paqAw3A4+mlYHEKDGihsnJhoH9OyreGQ2Rjui99912GK2Ij24Q2igxN52O5oxPNlq2JowAvOp8S6n4nNWuRr0WkEU/4hLJruw2bO3e1bRfu3sk4AXF+v1rmLesPfreTJ+V2TPhUejYbSPPXB7Hycbc3DYTB9ejPBSm0v0DEkf00MRwod+5b31+QDGsyG6ACR03kr3IV+DHb1HTWYReq46V7p3Ar458E6xnlPc5tds1M95Bv+ND3SzvsPhcj5pkVfzB0W2Hy0kblMjXN+VaQ1QqPtO8aHqgBuZhIbfubE3P5e2Ji3rKUrKL/a5QTtS5aLHNwnT0lUcno8dqqhXMB4LFNEsLDe77GR8cVPD2M+4NAUicnalrWDjkLaFJWjS4KMxKHAXC+VhRfLlrweFdnYzWR7pUfOd48NKm1/mSpaBe29ehRGjyZo7+kRR7oUq+A==';const _IH='a20cb40817b871454678840221c06c9731a6cec53a2980db749e43105361215f';let _src;

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
