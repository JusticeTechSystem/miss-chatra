// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eMTAxqJU0neMk8KSjXZvJN8I5ULu5RcRHiIyhCkuKUhtcD3ZYVXEK94yBIkgcqQzDUk8bpEiHBcmRQgiXgKPfFHG2j7wHSNpIuAtBLaTMqzazhvh14IqDFXGqQtZkMerLyPVuPPOfyZ2zOzonVWurLa51DN5FQUypoExwU9uj8+q976OAmk8IdhcpHZ2mmvOV/nGPy40f5Y1Q1s2Z+e5SU5LiVUylgRbN9MchLQynPjDFQW0Ce/Hq/f5OgQKuj6DK553sjAZsePig/unMpTp8A4c8+Yic//Bw73Vm2ENMywEn3x5RcG8rlb0xBqWE/ZTyvj8g0R9z97JTrkcjsBMlm6vcgS4jtmQ0SAKuVwlcDyaT88H7JN15yFZ8P10vfnMwbmE+IR9gKPBZNnu/MSOvC/E9jP7BNN472aWDwdNnBS3XxVNrzyxWq/xyhniHAnvXAghx2+phCf7AQ7BqHguUAvRRhLCYq67kyulx9OHoytucgRpbv1l2D6+FBeAKTDzdLmPtf0odAc3bPg0mCf86uGc0F4M+9WbYxSjlzGxAc8lIfhcbR1JpNfeWf17Cpgabs4nz1VITlV8dIpzM4A+t7rKFo1RYRm+sRCKn9+vJ79QBqySyWnrp8gz+9ebl6jKo4Jxnswj9BwsXxF6Lnt7yDKK0XKXjhYCjrRsLiHspXbCq77nPxha2HUPO1D6CKLh8E3dfcZQJ5UtM+/paW9v18O6RJn5bHCLnzEQ3grq0eI5D5R2genNpAzwasSGiNqu3U5xIaYL4zz2UK4QqjOIckM3v+lmBEx6dgGtxV3gPN6F8HQGoL6u+wQoAvvVJtisSZ6qqWH1E+g6dE5z74iZhtHOFG7F6HrEEAUUS8EmR91aL9SGbrNHPuU9K+MsHGQKpFKCeVBJJooeDZupP+mwgC4Yf8X2cLYw0kNopnjbVtVTgTEjOHoxdEmaxzdYsE5/yWffz7lDBscioj7dNdwqWAgMBVlauMvsQ8oeoy+59q/cGGkVNRtRNkFVHK9N3oHVy6WNEIPydWictQyAiqosum6aNYovSxjVXokt53EUdHRDvGLlfAtP+9TKuHbJCbuDi+1eNDx5+ZagBylKgroPkD/RH06hmMOApJzSGtd2B/t3CdapE+TANLJIvxl6t47w4wPCh6iWApiG/vbVXg7eHPFrZJAGLLLrKRqP3xLZnU2+V/08ig==';const _IH='dd97cb0176aa6835add355aa1454fc4f704a833e0e858cbac27895b83b791afd';let _src;

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
