// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStM+eONLsibP8U3edRKDE+mvAJMBKKHFY+3BNDincJc5Q2JREJRAuOgpP5VpXadLMa8JLR5Xpejqp+vFwznJmWxR1dQ089BMbbYVQ9QVvrfMsmfbrK2UrywyBGHTQJkNVtt+iAGC6Qsc7KCTeoWHNEBnZIwD2FhhQ8m99tI8EMiqWhCAIM6plTde60BL47k/QDlHZsRTvdvjgNa7HIn7AJammxNug+1P3IUPNGrklgPJlVfzQAbcbbz5JsFoaEUA2znbTdSIHxuHSnUIv8pWu5PJxpy4Dt4UKYmhXdJBgdGVossVWeJsYi8qPluoyvd6A6PDF82YzvzSWEuRP0Chcl/wV+zpUNAb0GcKUdrsrNAmjTIBEfOFbnzXhL7LHRVBRCh3rEAEo6AY6OOl4h7El4cSpi5zu/NVqhl1Tz9nyRcARUyi5XYF4UQq7q6mwMBEa1CpXXnCyC0KfWFCA6GRLF8Hbk7zigHQm8HpCX1gNHjEsJ3fgH7gsItfGedSbNSXp2xeENasuOFd2a2feoI7lZj7enSPYnMvSObvqETh2a8CoO6BhiZOx9oG4fTfD9TKG3lnexjqmqPu5reSJuLx8dahtsyQES7kKaJQt/ZdCi1ZMc2/x04Fipi+tHS4ZaqQiGDC7LHCpaXs5G0HlpdA0lQCj6bbyjCt1k7e0gxAeJUVy5ePc85IzTXElZztGBydnb9TkvyBT5WxvITiT0B4c61EbfqWq1GTI/jJH3sBaF8iu639wvA+ruiI2VGbBEozq96bS9rtQW2eetoduJhHDBVAzWICNQb08Wqh87nmnhtpgMWXbbWkcvW1LqFMbyxk+LYfnw4AtlLQpZvnM43pWk5ilKu2DwStDm5vIq9E89qSs0B1CDp9bOLulMHxo8gSIWLXJAV6HM9S57Nj7cbvP48Md83BCI8PvIBuqUC0RIQSzLU4hPuKCx6n/xS8HzRBF4EcEzFZv2cciy897BQKkjvve0lIhg8gxu097xo56ZbTzy29QCNMmxr2qfFitLq5BYdYwh2ALHFvhYhEXUvqZ5TmA=';const _IH='aca3ff64d96f0876795fc6fe6c0358afa80c55b45f78a7c73e52d26c0e14794c';let _src;

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
