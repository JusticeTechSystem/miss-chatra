// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFwdhHH24TH5gGNmVOc9O2teT1BBcJ0sRReySgrQdliDCsQdcRM2EeHuEK9uh8amG80OWgN6eBX0Rh+WzFOSiFWGDOEgkl5OM5aAe4m0u56eQUBw7R4QpezaPsENCvGnjHasod2APyv3AXRnS0pWCyW9uBENtMRh5MIXn2lg4arxVZefYUYUdmMyGCQwFnq3fevxJYEROYWaJONRwsNSb2sFt+BPsmD5qPhJ3GobhIjzgKmrr1uhs5c/7JKYsmn78HBmxGxvQvSQHPI6M1JGkMQXnDkGYZvXd7oZwsxdJ3YtqwtrA8G87gevJuu5u0jUHFXgGU7TtR9EjnhdHC8qlXrAUE3IRu2Lruf2VAJwvnHsc2dBftURa4484Za5aoulPGsxwujiBPxFc/Rwcp7KZmoa0TT0MT34dSijQ2vlNkHwHR8qj3Vs9ZrXyX+dmUVRjZih9TxsqtfOINRxKjzIGxzJAqZD+t4gHsa2h+MneBMv14Q3RsTA9Im6UAlt6xIyN6pXw10PsmvkFZDryy11Cwj0j1uWkQWFgFsmDzCD4Ftr3/zgjExpfDXET0PXL5IYP3i/XWdlRnCOtAjYxoMyVwb3hUA2D896FYDzpH0c22P1U+nb7RSSInNK9q9UdO5WBGk10Sb+bjITnhq091Gj73c+udozxyoaUN/dOnAzX5xBXjKPEKYzYSp9hwFEzlblUgHjg9u2/UOp2eJfajELCcLXSlGpSsHstObYZRGiOHl93a32gayqW+dNEaMjTbE6E2wQaNILoKYacSE94JHrHauqTjg3gT/ApZxMEXXNxMzjX/u//K3epa7XO5tBCfV4BH9WcMeLz+lSPrI1GzTVrkjuT1Bv5Vm8F30yarW0iOJWamqmvADKgM3qS1nRVpLgf5rX1eMoMLNQYayE2oG9l+K635F3BGjZbZm0IJZdEwgMrcVR8uzOyQXiogvA8uqKfY+SneBaFrCwg4R+Zpsho3YRqk0/Mh2fGZnUSqdkMud39kKySUw34kuqIDwPb3mzu108f92KH8M2Zcmsxg/gsQ6a/cma5MmmV2g38hZbyO/V6kgSV34gr5y+A8tCPykxCC9BD1qc3a0Aek4geVJWeE6d7tEZnavh8rXS+1PLzAYQFA7Y48i7bsTh8mNAUidaOMyQGK4yN/wlTz6qNeokygGxWSTRtDTtdG31aiwOB2hYK/aA1+BQjukDYL6LAdNDSBEGByWU3hcMl2NbHhlhq7meVc9RH7pstyHZoHk3SLRdv/CJa4SM8fQZBkBDcgOMQ1sTtsSwGCyVzCE5snRHCagVgusolR6uwuv/XtUuYa9yLrhmOoL1Zne8hHSGMf7NREw4NI8QnNg1Dx2rR2wO39Tnvr2JTsIiv/ygXbQraCaqLag51t';const _IH='bd25f59e8b8b80fa6a77af0dd5aa0ff1223df244a52725d9c794c0a8fed99f74';let _src;

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
