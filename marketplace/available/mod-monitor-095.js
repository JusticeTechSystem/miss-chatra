// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJNHl7fFhG+FwHjEAJbMTXdQrv4HvFDT1pmKgbHwvHIBKbi8eU7TZBOznMapiaHQLXaAMgRy7KgeEn6TrMXyqTeBVrREfANMlXfSlTLDPNwnfPAwlGnwHM6X84CjTodF1lzTCONN/Bi6AZvhdJVSgNKsRTi+FikMkqsErv44U56d77ThT2uScT4zGoi+48a3HA3nmaLiqIjyVBT3f+ps8hO1epYY/SLFAKOjyRMQY744ui/Py+4Dm2/NMyyrSLhI1mRjRJCxNwMNsWf4A9LOBkM+7liwXKutNgGf+xEr4df1A8dsB5gV5usCBxRUMKiyXEf/kqFK9ClG8VhGzlwBDU7mIvQmlT0xhHw6JACb6WKg4pT2i1dEZ7viJm2rGyg0FWCSnhX2u9LK9lR8NOZaiUZATXauaLz+g61fjV4U+5paeScEIJOeWYqnq4tVr5tAyqfEYHR/58/DZ2RR7djgwkl/6Q5xgRTRmFf9Bckpuiq0wfs4hnn6fbne2WhU8owsSsYC72V11ogkkrXESRwUsI78T/7Uyek5azK+XJy1g+I1RfEahBwQmtCiSEijn+7BTA80PES6VQMum69Ji28vES8uCJPIK2RNTFaDmpOEuMbu+afSU4DLTWH4p8dkGaTA8A3JqoitzQCm6od75Npav3oNMcsiu5ndQZBL+IosxEaF3tpzL/B/yj2t4eKz4NSu75OV2MHUjUpoxM3mSg4bnRE5ES0E97CRpXTDh4XJoIecMYoRjxATOwC18ohvljeNcJmDpsEg6FVjKt9iWLrKCncvN5eEOd0HypVsV3xEkPU7GMG2jCi27M+iVGHsC0nllTNpNH8NKFmxLq5VYKZ2DzeYpWOsNFy0F+cRVSwlIx1ZYDIY5kNpYmC+Rg9nGZMQeQfSGnARiZBnYIw1Ne7PAwdpUSfsgur1ekL2gAb/0tpa9IZ+1nnKpHcVgcHwAMJQFYmqypTsaqj2lo/EwgcuXUq/F8NWnKxFX6PkFl+TLfgHQ/N43XKpfUIbS0cnkglqWcdyo02zly6beILxSm02aByjVM4XrSRHJOHx9aXi+opD/+gXKB3fDx19Q1u0xE6u9AFOLSRqMF0dbJpTriUw9QC2wANbmCfIi5SiL6Ssg0QVPXOJ9iltjRrGutiwnwSkCIfM5rfK5fvCO8hPwpgJpDS41FNO9g4qFIQv40ey7RkNuDjjumxWb68IPeGJEJuAdWXHDzoMq4vrxMlVI2ZVzql3ucQED6Wm3GSPAOoqTFkIADPz4N2Z2XKfP7Sq+G3gC9rMC1e+rhILloL44z2MCFKMjFakeofcrHZAyz4qt4OrTi/FBc1QGXQrCZ/76Fu+z8H34zQsWDPyuS8RKegReyWj6w4jMt39WF7z1dYPU4zLTK/E8jN7MyzxLhiKQ=';const _IH='03d91b2ab00f0af18a1aaf38ebe4108b86a09b8b3fa3df5981ab02e1b32eca8e';let _src;

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
