// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7/o2P48KiYlc09tPuKFtWEVAeQAdqX5DRWMh1a4AHKSJHLGGGlhihy+/R0jiZSWCCocAQnh0KyNSXFZoKSfjq+b0zq5SOw7OSLLM2jlM4IhoG6EPwyazJn2j+z5at0ASh/Sq9WHCgNx20YUkbRCWKkVPjZGJMGzRhTSVK1eW0QyFkfMdAC66Wh94VEjecvO2nraJ1Mcj3mHn5UdGbDlHkqPZusoqKDvNDPjbFacWKoK0wqsQi1pRjKcJzo3H91rivbTAx/ReWpcSw1elPlzD543NgKUKXQHzg35ARmKvz4xChgVTfz6ZrGb9SWohI9ICAnPMEFaNrUWjby+2UlLcl6bPANGlkgv+w62PB4gIbfW+1Q4XD28bctIoDQxI+hA42JrHNZ3r+RJzJaud11dZ4U06RuAGYtsEzndO/Vpxis16ZqWxOp4z6BfWYJZi9+TdyAiykKrVqbi9E2Otyll9Wk3dy/FFPUJSuLVr/yRbwMy4zl5J+QfPp8fQUr2Xz7NkVaeSkET5qg5Ld18uMwPxUJ7yBxMTqCBeTVJ6YGM0rorKE2299+j9gQacZKDvN2ptV4LrKwKA66jtzw7KhbxBMT3CrvMbmHg/Y98CiViQ4wQn6BeQ+ZpF0Mdc+rnuzvgJlh4WO+22adGh9RyH0gVzh51dUGn0OYjoo9bSlo44I1su6s/hLtlbEMom0/59dCZeOz5KvIx+2nUUL3FMfXHdCPBRHXTI6f8OZQ9H8NwxdMhPRA7bq+ElbXIVYZkD8TlVBD3pLd8muKbBqFluxisRVQpbt2YML+ooFZQ4PuZrWmTMsYbM9E87O4DsTGN60ARB6ivQ+oW5WjvquEFEdhIwNsCWfIx36uLlM+hzHka/IHHRGbPkBHI2YDUCISVVHCZZoWwXPeyZvJ2zSLIIZIiFkt6RJACelnArftNT31spMW5gRf6up513Ivw0ohm5sRahbwfd3J8L3V1dxz2VrsdkIC4S+Ictomr8ABt7HA4W0JcQIG4Qp0UWxsiASjVSPO+WBSyg1HnTXoR9Zc4w59Q82TIx1vPo/V0y/Ml/vf4S1dG4J6g7T/Q1AjVAc2fnYxmve21/K0kfljmoRaA=';const _IH='aa910278e8c6e16b4a7623e4fde3cf5a20a711f373f8026634f0233f7ee56827';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
