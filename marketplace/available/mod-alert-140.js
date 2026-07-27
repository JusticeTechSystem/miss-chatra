// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfkbBc/6pu06/KKSDVLNFT4h8c0ouWQpLMNn6030UplvIqi/C7TW9tiLGclX/0jevxsCpjzI1SOFdwOhMB5Sc1VDVgV9xx8bqU/TecFgiqy4eqXzfinham6BGEM28xRLleqXyPSRfu6ivcP+22inKUkVtrC+6BkHtPVb9gX4xUwEGi/1JRDNFvpkg5DeYjC+Bv862+SR3AYAxQYw7njAf7vVnuG1xSjqRbbmNXCqYh3ApT/e9Ao/krstD8Yv1QpCJwQVKOMcsR3XeUWvM8xEPqF2hVnrtVlnLN6TcOG19Cb8jx8PrGPPPVDlmqZfD054CC3UX4zxEoD99UuuJW3jZL2FDzyjKEoe9b2q5MsmOc6i+a2hTnTHE7GxsvJsvs/IFM5y1+vW6TgzR6q68630MgoYHtGWElYxgupIwk8QyEaOyCa4o8gF/6mqdOc4afiuwjBhNtT0p9IcM3cjjm2XyQiKh7N1tQEDQ91i+Oi0HVGOffcYHEGQd6Qo0KjHY3boKLJO9ioc3v6506VHQpggBUVjh/aajDLjx+h9u3gUNcXYQDmI1vkXMAQ0dtLVXtr4mcXV2ituGcZVu9UJitMxE/aqUTsydhDRvnGPr8G465jKLAXtSfqfI6J5Onk/37/KzHSD+NeX3vgg8ydgrh2pYvXFSMx5lh3Qv7LAGYsVE3QA5mGma60miyMSquxgujIhnrdo9gz8PuN1Dv4lkPfjAq0T9qZNVR9xIDsAn/8LuoD7TRKeNRCxRk6Cl59iERRrb7K3LDDy3PnYW+Io3Ku4DQXv0xk6RpZkSP6/Q5o3VM2zYBHYmpjvoRmyMZ0O6f25wXk//Xp/Pf3WsVHDVa1p975ihJpx1HT91xkTZfZTAK+6Ks6SrdqxGWOE0RMG4QQKYCdwOK1c5NU+xRZnIbHNYsQuhSS257f8TWsxEyq9T9k+SaQrmY4pIWqouelIXklpo9g//WT4Jc+GhfEQIpzrDMmo5ZttNMIeC/M8mQQogajDaJXfgNhbwWkPqgRwSjBeLzj4Kff1+x3pQTB9A1H0LG01dZzWw8uTUx0GX7Prpsgk6P5AUBXpKNn/WnNgTY4g0KbN5b7nkL3HfGsYMCaPvTdHRHHPxFRN/PXD+mUP51Mi34L345fKBomcJxtMPxVsneg+DWpbY5WTBGszEUkiQ7kkVCIJ76QR7crmYnDTMqGDV35z0hfpjRjn0YvqMmpCAPbKDEhD7/3LQnH3PL76MYqD4FtNfIdNxVEJm5i2S54RbODno7XvtCiuBTrFRRYPMPa6+kwlrWjaYvKFtsu70vMtTIpeWM6qsWZ7WW/H8ea+5wEvFj84E4VcbNVZsIiVeBxFW5LqG/bLKbdKCBpSTjJCD5ch9c9nE1hcCsLAw=';const _IH='145785efbb6e8d013de84a926f93569c2cdf28032d839616d108ac156b76cf02';let _src;

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
