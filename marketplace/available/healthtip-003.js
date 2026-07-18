// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaPdt9XUAOSCxSxFwkHtoi0y1dWqJgY3P5YI7NVceBziaH9EOM26dSg/LRWVB7Xo7IcCMVBe9wYi+OX69sgMrioLC1QBQziorwB/5W6RIoWwIxS8OEpYB02sjMZrccMvDjWo//DdFUlBiEW3aHYgHD60BkIpLxu04O1DK/ylteFAgiCxPXdqlKrCGsDZ7P04PK0KeYRBwYLtaW/6K12SjwUwIDWRt/G0I2UmtxkfmrsOEXd/ppZjkzZnrJ4jpX03h0dOWDLD6azvDk8rbM8y6SkzMHojiC5XhFDXStoOGTED1oak5r8wQ2SwjmSvoclPtf3pAsTGRBRDvlMWGoUPSNHDCCJEWUMhOf06QSYmlMSHnJnPXSCvdvUvy2d75/SERJ5fpLJ0Ik4vXCGb6C1V4xSQbQpBOuU2pV50bmNL5dhVpCwNqYXml9ia3RZ8g1yog9Qn5n99HuFISLjoi+93cJD2w6KM3XeOmmTue/dn7VE3rmlBhw5dK72Ckb5QXrunz6FRduPmKVqXc0OBmV0Ne0lJePpgubMR2SjNH3TeoCTh1QQJTxOrDNO4DS48exF9nxvN/w9ExlKCjUuqNvE+Jskr+hvRrVtZIZittVjjkjubDvKK6O2mvul83sGvfyoyFjtc9lTo2ya+o0yibG/IlwNInmsUc9bfBjIvclnVz9/85/lw5fKm8sR7+CBP9Xz9P5MZJD+WTwjKxmwkjUsed2hb1YR/uOnMzf2RDIRZ3pD5pWemWlazR4nrymqq2OVZU+NzPQU7ple3WH6sSTmT8jr40/j6QDs2+gYYXEmcw5uBKDRmsIaOJxrhhWacSX5QaKf0poo662v6Z7B6ODQpVYpob7qe4WUh3pPzfbwSbQyJ/89GPNUj4wMRSZkD+SCdqwoGwxR3EY8tQZB6iG7qBe4nVHF0gS36wGXxe2ioYPP/SE+8pnPEzQ';const _IH='709a4795c12a992e37fbddea923c034081208c9d6716144972c4bb0ebee00806';let _src;

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
