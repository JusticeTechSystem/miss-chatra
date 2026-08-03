// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqFnqEibUa9Y3WavS1ukfk/N6ZC79D1n7Tbs1twu9R1kKTiklBfMxfVsYQbWV4vMKIxgPFZjyOsLNFxxfFQM/dkaQAU8Ne+fCB3zu8z0YQI6UT2VryIfR2X9BBveSH8Fc+lqtJhCGk1yu/ufujb2xUclV6Tm9X+QDoXYqHa70x2LvkWEtRTj7Z2XQsNBf21RDIblsWBiAwhVLlcY69x3CDaeAL4RfjpR88KQZjjN7Cw4JTwuq3qkCoDI3KOSvi+JB5rq/Gl3d2otcGAv9OxK+zCrsECQ+TgktI3RARW4oSLUf1G4zr/gN0UKVvj0ntAVusZXBUlwZEEAvGYeMSAtZqKnhPuwm3EeCFpuy7TOtgBuPhyC/4Y4XO9R+KVvDrhiVjJ3lUQ8ZOvGAOweyBJo0sFSv5fhruSMdflhmgXfeRTyK9z1v3x74xlKqDdii2Detnf6bTWa932U0zmSrVxEBBaN/guWfxGZvLUPjqQ3tuP5hYnnkHKxw9gTtemo8y/u5ay+3Snhhl/xIYJhZOLQnHE6qXKO9nWIREPLDJWRbqhANMpbLR0WeJipkBn6KjrwpHzoepMze2RXQ+KRowITnpVxXnbWEGfLINqZp5ShEoXGu/Oeit7N7+Mosx5iUOC97xHMzmozuibp2E1pVv2RW8u9YZS7OjFPPkHBClraBN5CszwuGt9OnoeQaFAZpeZNxwfMEuWj99sJ56+uljagTnfMO0cgENdVE1d8w7AZkOPSPg28dUKFp0IsBXHD4ArFQFDDMFOSPPm8Dq1V5fXq3WhLboKRKbEsRw7caOQxsyRHpK3149bGx+8EGa9w61PXEbipWHBn1jt3c3W3Yoi4e4mL0AoCBEo13ctIFY53jeYVhKxCLyf9XBbt/KCEFU3V+/HDch/eNC0JdTjBr6/ud9zH/K1p/ggpGRdfEcvFcHjeplxwy8cQTZI/66DiBrkoudgQKHEWY5m1rIv6k2Py43esT+g473N9ZzylVlsc1MJp9A7NPInl3Z7Wg/sX3xPoAu8o4DwzGSs92dxA3JgY4426f++H39oMYyIBzGriIPYekU7hSWFuE/rdNJdwsRnM4Ls2Zmglcd30besBcSjxIg131c2unnYtt1NIS2Nq2y3Tr+KvhhwaQAqXVDeXuhyIzF6ksFHaD+dwyP9L888vasYBydkffpPhRh1eyxeJqT6QCKO3vtmQi5tyOP8x/GlDMtZ41sM0TsfFolL/92qk1scuntJzRebEKtUGotv8n4AC7M2I6eyLEXhls+NV7KzwUdIlaVK9Ap4y9qbqjKvMN8smyCpM5xoLnUROuuMiMm/bF/In6J+E4oB86x6jK0+h1ILn2ptF6V5ee1qSkquwwEvjx8B7DoBOrHemc=';const _IH='63b260a3ac21d4dd9852a9627bd58902c8f31da7bfa17c3a0d1cd3026934a865';let _src;

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
