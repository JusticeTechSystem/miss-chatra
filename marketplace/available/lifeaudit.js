// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IWWoFfB241Y9G/MsRxhV4E6+d+ED6oF5V0pygXpmQ7Sd30tUkixKLKFMRZaDKVN44vkUcQMkaK9K4m5vuVOhq2iNsbXblDdrrAWrHGceA8Ubd0lwWhsgCH84Q0I9E5rybeD7PXX0CQpXK4wOt5ScLiw+Qia5GQWcPVAF11reNDjdxaw/FHvsmDxrOlpG6BflHe96pOnyT51iy8Nxur5K2V9Gpw9TP4MeJKcNX247UKQNadFARs2pGylxuceDx4mpmdmF46UWJs4NdEVtSW1otKnB6+6ASFP1L8dNgyMiDuZGVD3wQSq4FMmvz1gJOERL0ZCQi4rv0QJjJjZoFeLv3fH8x1RYZMsyYIRpAO84VSbizmUeY5c/4vCZZhS91Nc/4S8mkHA92ei0qeTyJsdXPy4CDZPPYZInjrmCnDo8c/LiWQ5SsPj8RQODGD/xTKh0xgNDd0owup2XTnw4NxohZVl+c1hK/eo1x8loTagHPcvbguv+cbXrIaMbMb79FFTAwZuPiKbH+KTWQ1sAUiVSXR4rTjw0QJ6gx3SskRn9dlH5xdn+BuW0igTQ1SCVR9qLIlMJJSRJiaH8w9M5oQmaboGYHQ8/ZdbJwReM9kJfka3PNRq5+TamGmzt+hKISINAXacR1nYEa4IHHAsenVzD3GNPEMujBbWJDKRztXDwR2hPS3T7sgkPxe5Ee5r+xsc694y/6kzr9B/qtuejNFRdAjLrO45TXaoIUFFuXbT4IpMiWQPwaGABYSqZtfiJvhcoK/QBkuMdU5lGC3DgLLfBu3EHNRF4wgqjnR5s25GGA+rvCrFUAgPNwo6zqFkqFgtNNvmEGhYF2gvHN007xlrC2/f/r+F+0X1Ee58zHUm7Y23fe2Kem6dHrxnpP9VsAlTg9hp4P8KaH8Rf2ISkF4SbeYJWXfSLQbyn00NOW5Pgcm92+fCVCKCadGuQgt8xF4X/L+YCOcDYIJ/QJC3nzSEmyhvFKrMgsxn3sYIhalzgKspzDAHf5WQN/0dSKg7OTTdU0yTIxzCzANeO4OnRDNO37g5g6s8huzsxD0Nv/I/9k36HVoQUdGN0pG85rzkESJQ+OvqslyIM5oGjzj/9abbut9w1zof6QHbkz8NRDKMzTqwrFdPumbkk6HWRUafGhQ3pNingwfJK1l4n5BWoYH9OssLmMMKthbq8UxDLyIkx2Y3MwFvfQmRaT5Vr9smMZcYTko4g';const _IH='a722bebd0128966efb4661252484d5e8b32a6f2ee7235ca53b610d2798c98f3e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
