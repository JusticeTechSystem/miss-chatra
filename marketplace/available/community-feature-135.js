// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5MBQZo5CEf7PCRYl8m/FFIzZo8jLYD1tBFQfc+79Ybj7t+05GHIHWtLkv+0lp+T1cURngoqd8GNXrNDBvPFc+PX3tG8fZLLHM5nUIK25jrB8kKs5rrpoHnopptcKSaXGDq1PyJIZe0F7Un3/CvZsUcJ2npwWEiUwIRBmCiST3jD8nsAAWyLINwpn1EFOcoDrgj6CgvhVr/lBCnSM4qJhFd6Tgn0S3R3TI+EoFOsfgmNfxuhUQh0lXKj+I3LO2zZnWiPrwpryusJzQZQdwStKJ+ANf/9vjsPnGHpGIqW8kRffiiV05+aqGTUg5V9VtGl5GScP/EG/MmiqDg3qC/RP7t0esU0xgHWZiubXCAt8Bg6nwQogsZ7vA48Y5XQRhr3LlktGYzQYFLrtd6LJF3QDrMd7G0Rayd8rgYa4TcdoLUpxQbh5wFUQ+9YoAnSOVpu4fareAJrBE0VHBvlYN6nF4x2nP+QA9xE9Zo2TYQ/pm/cqnVUle5qWBjtRFADFQy8b12mwy0yuqtMKQgXC5U6WMHjnpDmXFe4RYnqWDCLOelritgx5QkC17qTSMeJ5bXOJhZ37mfpVb3t2D3GXU0rgrayk68qolnYduLIWdMGq6gZdyarkG0HRc4NDmyxefqdcsmwQmAO+EGfqe6J4J8IvknjHwqvJ0lFgp1DZZa+LCwM6gTLiAN1AnNQOMJgKyK8groHJbcJr/pFFaIYyjkzZPrcKMY+QFaxqFKhtCZeHntArQtwqFptJSyGsQ==';const _IH='beefc73ac9912dfcee831cbbd10f912ca8ec1546c5fa33ace05f58387fc488cd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
