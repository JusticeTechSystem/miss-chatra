// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTeGDIO3JzhM9uGc3EOoTtF14FV17BWNlUE8UANETI5yLNTeHgrM2p/rewN8PcRtBCWU7sjaMqkI/FU8SKgZJbjL9eXrRS0EVtzn5TP5H1pJMWotYfhzo6N1gw05WDXaMBHR04Gc/YuaixszqWWJFCvDPwSFMzf68VVlhgmmFkCkYaNF1kQ2ZM9nbujlcSQu0eRlmnbIS+oiQfdXGD6iySg5V/7tp1+dQ31WyaPabRadoXXFgynXrInLrQ+gVmMBkw5rde1vS+aTbYI740I0rG+Tu0IaHQRT/HAl3BOc9U8yWOdNbmnT3sK8ZCpyUNsrEH0l5h/MiBEkHqemWkyfTAUfxnc877DdedYg9DahCuouRNWpb7Yr4wLtLPUXqZOV7Ni/Y3aSGSMAPJKSBSKtXmCz47Lg5edYDqXyd9DkFGX6E15BZVFHRLbR9sKOfdPmXhwaldG7mkwNvW+wIBmosFTq/2hq3M7Sy/UFnzYmUaf1gYwB6Y7c/IAD4yjqzjaaCq9eip87zzivIjuO7rSY9iufAoAJv2uZVe7x33K24f/dTRFevOrFrr5/jbmHq3/AG3d/Bx7ilqFyYOvUJKhyB0p5qkJVlSyvqWz+IkESbHZCUUxZEJXkq2VaKfputFnnYiSsKNDcYtEUcjTz+lmir12Myiv1xSz9yqvsA/eMuXniMx5JCV3TZ+tg5ElUbAnypXOvMVd4yrbf/s+WaYbgWNM+UcwPAKUSK79u6fstYnUmQuf5ORdY18oVSkbNXPgreBkgVA2T0F17RCdtL40eoh7McFWfLj5dvcOlQwfG2bf59O4mEkbNH3T0qP9+ms+yX3EmysDW5a3IhAuMnI6au2CeQ7bGEe0iCOcgLl+pIlWX4q3EslL5IK4jFj8yfWI/SrpXJTXpcv9nadBd/NpRo5kBzureZMA7GZ+Mifvhfi2MxWN72IyDQMZlpoMD/GCAS1J1dW5kJUzcwaYUhKDrLWsAeYEZTs3BDppTbuXYHsTWPqrUaOSoA==';const _IH='979e53151c3459d582e8c47b140a279613d2aacfda451a4138911e568d4cf328';let _src;

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
