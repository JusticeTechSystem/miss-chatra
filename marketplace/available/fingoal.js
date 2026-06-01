// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyXDbO9ritVpn48Xt0diJawU/5zt6N8kXT+KFKmr+5URNdupHCPWr+C8v7z4xtGyMj9ksloQgKdRnjLsg225VMMJ1m+Ni7wEP41Ds1KRe7U/cjvmJtCC4NKBp3CrmQtecPDXvipqWezD0HBrOLRk4fekzespigREjJ7OP2dC3u05N4khF0Lv5hoOX34oYoZSR0RWSx9zHC00WwkwyQCuBYryALkWGXRTViVm/AB1a4aSoRliAToYadzlB8NGrOkCWJ7qMul9mxSXD3cKh7cDOt8YzmbWwnmB1N8rrOZ4PIWGF5rWatKkztdcrpydFviNpgjZu+FoqZ8HYi+W06PLm6LHIg1HLpmepCusMtI0iBGEpUBZIsudULccwu8jIuwOdcxh7D7+VS+SbPJsjDLRyL+/ac9zRbBhZrwTWTXnKvYHtdxtITLcVS6m9UWAVSK2DyCrdbMQkTp3/i5zc6LNlXTUUsadxCVbwBHyG/s8VPF2xqG2G3irIadagvK49sVrn7Aw0vzd/rRZqnWJmq7jvu253V/2DCm/x9CjeMIYpuAAFWa/7Nx2JNVyQOgFTN2Dz8dj9dO03aF0sufeoZKzvM/PwVeL2l28/1bMFSsok2YCArnwwkazjh4/F3J3d5C9/YU5S9U2w30yDogq3kjHO1H+B3zEIlX9PX1h9qzj6FAL2w10LnRa46vVKns3Fp+KwQJGZ50a1i8/yZPUaSLTcjXyt/8Z97hFOelwKGmB8yvW0LNpOsza0WGpo/IHawIBnBc8LNlGg7c5hs3cOsZGwZnw0oI/W3fU+pmncTpBDtKsliBk+T7qi2RZMZfayBjCPAakAoOOyLhCMPDKXXZxqx3GAnnyKj+jqM8UhbBEHB71krge4fvyVwMXxfgk9Kart1a8coIOanad2r02nTrkPK1BfpYHxApIg9m6YqmgHOb0mtSQnHoiOdJE2Rbbws4NVRojtKXCnAaaPeDxTE6++gNLJR8oADkDPPTX+j54pUuuyje6J4BkY48FDi1BfABSbJrOitJBV6G+bljeG4lS5E5o3Bsah5zaZPSlrkYm243NLwH+6TLhjDqxP0OmhqTrLm7pgvZGSRch/5XhkTHN46VZ8sgnjN0dxcvFtHIy8b4EuU87EUK2R/ZQaC5DxsWV5kjrRr6h9tE0R0dYhyo+GV8Eo7RH3a1+w+oMu+yB/BS+J1+VRetsKoEqv045Ld8VPO3E';const _IH='8f5ddebca4eded7d04e62165b27574a18433d8260e407ce3beb514f1a0f59a1d';let _src;

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
