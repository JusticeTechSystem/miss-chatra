// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzH0MmRY/1ODJEIZ9am963GEFWZeFCnJzaUVsfjp63PK0NCbEAIFM7qcROQF/O4LyS0RJaGImvjEDtultMiuZxP3NvSkP9OVvXbIXrPYO/FInI7qR9/1MqwRvFuc+Qegt4LPHNlqQPlxvOu1/+kT2h28138aPEK+N5nn/gFkbWF/LSazv6oc3yDHH7rnKRgUiHYNv6OqCSOv9Hfnut3B3BbCkOSEaP3NRqOw1yH4JpguY+ugRuCXi5SdPPanSKvqZN62X23HLJfTTmvOuO3rwSmBKDwzIGtXLiBCGcv3/I8Ws0aYmJA7ZbEGCT6bU82n6kJGQw7XmwUeSaqWh9lHdu1oF8UKZzUHpkt+SaQaq/nLtmcYx3qjhJjfuNtiC7//W/2iSbi2901saWZ4U9oU/LWD/k7d8qzT3e+jYwnrvztq0oEAfks+pJDyaINv5Jq7Ukf3mr5psWSOUyX67OX4y3M0UYImtANIbNGNKg4FRo5qReT5c6kPqJgMZWh1K/CTrzlT+VvdDW2TOTwR0i6UJZ9nOcMgrujV5RKV2ahMNJD78dKvO2EJtoQZPzGuBzQDke6EcBQ9cDNx6cbvL0R/xk5oadtcZYxmEX192Cusv0BVo8Px5/PMlvbNB0QJwNkqBx/nlO9tyq/e5KmeR7xxXTsFI6+GJ6Juq0/kzDMqrqJaUGUvnpx5Njwtadt9rai7/Af0Ku/5ILhvQDservkoVJ0/O1l+Kwe+8GV2MfgT6I1mMMp5Vhgqb8BEICDl3lhsxL9VoM7Uga1EBvHSKRE920cBkbm14OagXbFmbS7uauiYDKs8Rr1Owt0jDZ+3Adjh4ty86n52EvZfUGsLpkU94Rk3CDKw5kIHcXcmhIYoIiQ6I6rsKE3ET+j9ZGBGZF4H5QqD0wlkRZQSo/pIHZ3YHBSEwe4BFhIUKDDEKWm5IZ0d2Cq/BOh+HzIaFXXggmnXGskJL7W7nQ4+TEDFGQsvbupCpbeDa5GVECMZlw33WsUr0=';const _IH='20b75f549cb77a61e0485c63097f5c0beda24d212a6dc4831a6e6bac3e85504a';let _src;

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
