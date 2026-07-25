// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2vq8lIyBh0URdc2bSnWGz1bADcBeiE5YCdjrjPTrVBusv3g83MM+q+gS4uyTPhIWXHWuKaH4fjOQOJ2D2+59A84y5I50LlFijCxanBf3Pj70mvuwaB+4OEqnuCqPW2vrc+K8gjjLu+paBq4bpSRJfMi9BVn5rz/LPZyBVK1O4a8JYI9xCzfOEcCrX2/C4ah0oBbAhjLowvpiO533jwgYZIa7ImDLW2wjkAnssWNVsJyEImMPn24uGwHyR2gkyxnPZYwtN7lrb6ZlZJG2dNJewmtJ7S5vknPlVaHLolPvWfcAdJtEQxy7k3Ffr8baogxlYfOb2/Y6WRPOW2tKdmMvct+RhJ7W9X/N1YqrChsJ0or0YcYBvP2PXpSo+PhSIxcVDu8sco9x5MQ9hDisSIrZSbBC4Hyurevo7cTYSi2Uv8GCn5+peCbUQPKk2EjCyiUgacTPi4evYZjEE8eJJth/cTrd/Y3SwjccSoYXgeVUI80GqoBCRlBax85N4Vr5b5STYBshOsrMHXawskgyPF9jE+Y5KYMHdYAV9kqmWZ+CX4BtByj7wVUVFMjNOlA137euTgsNbdYk2XeA1RamwRhDZP3Cn4nNdiL7VkUJ4yJaA9wRJwSM3NMWUWU8Vvs9aQBFtR23DvlmbnH2j77avjd0HD4a+vKyS64n+/EsyHNrFGqi5C1p/ASJV5sJU7/c9c3PT293/BzgfhCRIYnVcl/pc4kvC+Q/GGUg6i/Vgos8FQjYwOgbIjTvFJTnsWjLT6u4HaaqS6nk0yG2TrTOflfwgqVB1xnsHCtHwFdSPVWRLYM9F9RIyf+s+DDqCqdGK1RD9uxwjN+MrbCTmGBot5wrFK+AfaXbFreU3I+dzb9ezqQQhpjsaRWLpfajglhR+CpjDlt4X8rHa9JZfZN5v4498xpAQqzhY8P7MR5N/I30/Fmkn1VKgqbGt/4cUOlhBJ7mV47ze4VXCZI8SwxsOcmAMFhAIJljD7kC34UMyVn0yMyMDpSjPB9oz5fZnGh7kQnXdNtqyLT/EjM3WGWDst7/GLnuo07M6EPSrxHOJaJzIil5Vnzdl/BxvP2686C6aH/yZGlSNk3x39EqnhO4RK6OrP3zYNPTfw8KQRQddLMNZBv7ssXVTC6KR1AVXega6ciiyuvQp7HCz8W6yzRVI+eX4iTQTdL81wIWxBs73Z3maRnFl9ZFBCGJpqHMbYD9unfAgPY9YC1A3vcoU4O/sf9eR6+Sbt28N0rx6C7TNINpa3SLmFPcYZ3qM1DUxukm9YnIdVYqv7AFGCFJ3PSwuzknfe0epSTfG48FpKeQd6UbAJNQ/fg2UobSVf/RSsVnDAW3sktrh9rX8AEUc8g89C4oE/piSUmP4gRPl0XBVMAw=';const _IH='a886d8cd2bd26e8984a188d8163f9c11cf5ea85402cfc238c30523d198388420';let _src;

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
