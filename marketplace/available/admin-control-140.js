// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlCSyw9qGSjfRILz1MnzPKVlG8/ycVT3X9xz2z8WFEi3EYVPhmqgBwyAzQyqEsyOyS4Vr8+S6Lf7Wh4MxbpOzoOASaarZJBvAS22/wxk9phjT0g4aIg3hki7ksusqm4kvRP5MP3p1cZ3ZQyG+ZXpLH2LWNrSKQ6Vg0nfEveFOliC0U99DmQYJWxEak5/zwg6aTyOZB4Clkd2fXEMQhpg71lQVAyWGWcDnz4V2Y6wGo3B7fKqaLRtmXg9aCKX6OSPsJMjAb5un/SY8lfhpPSASHx9sQKeuPIpGkdrK7600AXMWeQueUHZ8Ad9z+EIM1aPEMt9GLgdLxV6Xo40+S/M+rK3TuCyqcUEfSkZsAqy7oEhFe/0AzQpkHzEipplsLoLYowMNKktKR48CvrKPbFtD25Vt6LbKhB2DTIpQJoqmuRTC2Jlkr6yRsIJtpA2NWJr1K1Gw69Z/qDMlKXKAPuKEgpi2ozrzvQrvrpW9qdFBk7dnZeyVPz3r51TIPx4NDv1lADsX/5gs3JpjYPnqswDwxLiNXHr4EdmFrxPL/cPr7oOgQ74MwcsliG1t170PmoiOvhDO8IP/AuWb58al2VHcOEGBnHy9ptiEwfPzV27xOV48qc6Q9xAGuZN7CFcbRGK9dQp8yEWXcRgpK7GkwjU8oD9to36ksTMCjFCnhlA54GBIAKY2K78F2DQ4li3zscwDsdLYxlBxpcA3xI5wX4ruNTZEghsfXmcCTwM46DxNBC0V0LS1oiAMQg3ILNvGts/4gcVVWrBhjG6Ru+rkrJWfV938NcnMM2vHHu7B3PlLbZSYuPIbn0cVGzIqOtMB9nQBfHMdgLimTHNch87sif0AJZ/0PGSO6gCBSf8oyNuMdyGFgTwV8R+KTpKs00j6e3aLOIdscsYLl5muiHHu4tHpdADO5qdlmbdFRdqkWclWUchN6bIzwvgwXL++vbMdnfmMcr1r5DPUayI8crlWeX6RqTH3TlNBMAKSjL7WUcjDsNfq0mw9Ul5bsbXF0/szd9sORd76rH3Pp1Q==';const _IH='9e7c6737fc4053b23efba49d4b8c99f7d20bd2a57d162de95741bf24d4951835';let _src;

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
