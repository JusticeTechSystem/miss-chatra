// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQKh/36uvrWmWPuKBzB2ATqsL5PdlksjlnvmJzWKcO3WROaP+X2WnsQudB2stqRf0PxHIVe5pv8jrq9wvn7gmG9dXWLQ/P4eAn3sROhKmCRT5+4H1Timm2RY3ywzCFkvQk4qDZQMInvy+K6NEQZyWVk0H3vlm11zIGfrmO2GbUsvt9m48k+F8W/79canz9TGdqBeHLHS5fe9yKt9+dkYPK0dM3Lq0a5NcLozZnheZJ0i0UyTPpTYNmgNidlnN6rI2Ch8dyWVjE0VxRya4nqCmyM3rPtOUu2n+VDPUxu+SfetPTnOgEopb33rQ4NbnhQUDx7r70Hk5mhG/4kIiOw5s3Ca41tVmRIl3JocUTqZBVH1JArChoftdENfFzD8QDiMxp7yrQQuvlaNpvr3eFDU88nAOJZkaAYm/V98NMOPNfcX7uqlBsCMbO9jG7TvfPxABvHEYsZvWNDOV/0sBndPC3Ap+QOgy3CFJvFAZyzXIDjdzUJ45H1vrJKPejz5zQXlTxzJS29tjVkRyIvs2sGS6MVr5wxiOCC654dReIgQDPUl5W/Nt17lLqTosSsgVsjPDHNRfHARAEafkZtUkvAWNaHkREB8uRUJpma9GBV6ywR6BOKJUI2yPkZ2MH+bIg7diYe54H/bT5xzv2/aoF9KC1DJxBD8b167RME799PTBNafUfQq1y1oeTahTICmVaFfNtXKYdSQuycgPkKPctSFvaKaaLfoWmbJw2io4wZSin9XG0yNKBO+Wy6FzGDn7EgdK7gRWrO5k6kDETSlqvmvIPgQ8Hqr3QnjiahrINfYDkZjgJvsVB1lSDWrdVm536X06KroQ5f53kVU7Jx/A83EoavOKQDFNnc+oRhD14dsiawCXR1qbjLInKtVkToobGvViON9DblaK2EJXMGiYy0goDSlr4h5UKR9b7f6qhsGqPBvJEpreWQwrFQMOrcLLUozcVV8Atf3UmhiiAxEB3vNtXq+j5wDl0Uf/+Fdgo/W3/ZgJpJz/tz/d+XzBVnzsn0FokAbh6VmVgx4x/RUOae7FgzQMVQTKAAavTZu/AxF6u5doUyHGhchhU0zvJ47R5ZoZ03CIHZ0JVR59w6m3SbqsjuMCKSZBhGC+RU/L5VXFWsN6jcUBF96M8daOYkQxuHF5ZGSsQAihQp/vSCqWIfrGF74kz1AwdiFYE67c0ahh/d+ocz41aA9rpOsW5BOQ15zaj+HefPZOZWX0CJLhltuXtp10zbdFGtjEoXQv5iHRyPS29Wwr68w7/c0n1GrcygXLy/YO/jtlSLVY8Z68f0aOPNRjmsM8QzeCt+UAix6XKWXPtOKAmHOdf4VnA9RnbOGi3imSKXJrUKYLSQ0mj18uxkQRgx3fITaHzKKMxlRAXOb/OoIezRcKwyMS35KWoYcZHZGNnv8Md1xMUxrHUOrgpxC0zqLliJ2kJR04/6eLJ94CNa/MWXpJe8IlgMuFxfoQchwcXE3HY=';const _IH='9bd52eabb3203345b5e93a8843fd0b06b8695e7de3779376a44fac5d043941bd';let _src;

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
