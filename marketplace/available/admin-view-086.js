// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR60njucXzscN7f27iw/B1c9Xtfbm4V+U4CZPAAQIVk7QbLyFpoGz4Jv5s4ZPg2z7M+fWu4Z/dayHeCz3lV6gOQrEj8wrRL8E4ImGphlx/McSaNpWL+8cKIok5uDvG4CVgt+HwT5yc20M8ZDtZ0vI9YEvSIFveLGIu+J7vqI8p3TcH0AdvYTvkiBvMbz3vVDpezk67izZQDnAIe9kuk+Qe7asBKfeLBltjiBi5eMH3ZWuzRac7R9Wpvnm1MPYQmABD2hcWMd5QnfhwNHOF0VEA9gw5bpKLfq6wK7AvMNn5kgYkv6o+clKFMl+n2MM3JqksJKG3VTnu99Waa0tE9rE37/AkBz5ICoToepw9v2ydWC4Zj/Edu6Lne4Atg85S+nh7PTHDbZoH+mZ03EZZMyAT344yEqe0TsDuowFNYmIaFQp2m0Mahcy1L9ISgDutGy7d5z8L/61cHcqAMCZk+RXDxMRcRVcRUrV1whXCIUxKCnvNj0/RxoaON1S4XW/HjjTnXrnOR5TX04yGaluPQixU+FT28CPdedIUQS+OCr99DKEW/75MiFS4raVWfshbEfhrD/jJfj8MZ3xY034rbpWP/ESi6ashRZsfhdxMtELw2yKyMQVSrRxT1pU2HtbuyW2ABPwrOxQ39XRvZ6G7ZGOG8uR+K6GBI+FQ2XjODOriRQHWdLFIhL0TVRrJ7zZNa4LHGWms2J/77t85yCI4OYYEN1IHUOwpJqddmIcvhMNSA4Lx5zu8QU2YX2a295bcAqwcTRDqe1h2/xH3H3eUjNfcHknnpHE+EOuwU2KnwLAHCo8tLXX1xCZDPNVwxY0MwzWSccYEUNrq217IUuY1922POlDuuSeT/+vVS7MKux8HxvB8obS9wY4VlgrVmzMgAsrrIa1TXGeYHousrke/1CUOpHZq9JlZvj8NXhlaogd2SGXiMHE4PmRl3Z2PouYUDZ7GZTdR+u7RdZKC5TjDr4fBi3xPAF6yjno71DEGKlw==';const _IH='3cf025e76ec85e90a540926888751e60541e9ecb01d7ca664e4386983473e94e';let _src;

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
